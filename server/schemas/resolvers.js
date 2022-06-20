const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, {username}) => {
            return await User.findOne({username})
            .select('-__v -password')
            .populate('favorites')
        },
        getAllUsers: async () => {
            return await User.find({})
            .select('-__v -password')
            .populate('favorites')
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('favorites')

                return userData;
            }
            throw new AuthenticationError('Not logged In')
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
        addFavorite: async (parent, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { favorites: input }},
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
        }
    }
}

module.exports = resolvers;