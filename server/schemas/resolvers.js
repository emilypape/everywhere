const { User, Order } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const resolvers = {
    Query: {
        getSingleUser: async (parent, {username}) => {
            const userData = await User.findOne({username})
            .select('-__v -password')
            .populate('favorites')
            .populate('orders')

            return userData;
        },
        getAllUsers: async () => {
            const userArray = await User.find({})
            .select('-__v -password')
            .populate('favorites')
            .populate('orders')
            return userArray;
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('favorites')
                .populate('orders')

                return userData;
            }
            throw new AuthenticationError('Not logged In')
        },
        checkout: async (parent, { price }, context) => {
            const line_items = [];
            const order = new Order({ totalCost: price})
            const product = await stripe.products.create({
                name: 'AirBNB Stay'
            })
            const prices = await stripe.prices.create({
                product: product.id,
                unit_amount: price,
                currency: 'usd'
            })
            line_items.push({
                price: prices.id,
                quantity: 1
            })
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: 'https://immense-hamlet-26327.herokuapp.com/',
                cancel_url: 'https://immense-hamlet-26327.herokuapp.com/'
            });

            return {session: session.id}
        }


    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect Credentials')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Credentials')
            }

            const token = signToken(user);
            return { token, user }
        },
        addFavorite: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { favorites: {favoriteId: args.favoriteId, favoriteTitle: args.favoriteTitle, favoritePhoto: args.favoritePhoto, favoritePrice: args.favoritePrice} }},
                    { new: true })
                    .select('-__v -password')
                    .populate('favorites');
    
                return updatedUser;
            }

            throw new AuthenticationError('You must be logged in')
        },
        deleteFavorite: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { favorites: { favoriteId: args.favoriteId } }},
                    { new: true })
                    .populate('savedBooks');
    
                return updatedUser;
            }

            throw new AuthenticationError('You must be logged in')
        },
        addOrder: async (parent, { price }, context) => {
            if (context.user) {
                const order = new Order({ totalCost: price });
                await User.findByIdAndUpdate(context.user._id, { $push: {orders: order}})
                return order;
            }
            throw new AuthenticationError('You must be logged in')
        }
    }
}

module.exports = resolvers;