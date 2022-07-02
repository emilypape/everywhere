import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FAVORITES } from '../../utils/queries';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

function Favorites() {
  const dispatch = useDispatch();
  const { loading, data: favoritesData } = useQuery(QUERY_FAVORITES);
  const favoritesStore = useSelector((state) => state.favorites);
  const favorites = favoritesStore.favorites[0];

  useEffect(() => {
    if (favoritesData) {
      dispatch({
        type: 'ADD_TO_FAVORITES',
        favorites: [favoritesData.me.favorites],
      });
    }
  }, [favoritesData, loading, dispatch]);

  if (!favorites) {
    return <div>No favorites!</div>;
  } else {
    favorites[0].map((favorite, i) => {
      console.log('favorite: ', i, favorite.favoriteId);
    });
  }

  return (
    <div className='I-M-Here flex justify-evenly mt-10 flex-wrap mb-64'>
      {favorites &&
        favorites[0].map((favorite) => (
          <div>
            <Carousel showStatus={false} width={300} showThumbs={false} className='custom-slider rounded-lg carousel'>
              <img className='imageSizes' src={favorite.favoritePhoto} />
            </Carousel>
            <div className='font-semibold mt-2'>{favorite.favoriteTitle}</div>
            <div className='font-bold mb-5'>${favorite.favoritePrice} night</div>
          </div>
        ))}
    </div>
  );
}

export default Favorites;
{
  /* <p key={favorite.favoriteId}>
favoriteID: {favorite.favoriteId}
<br />
favorite Title: {favorite.favoriteTitle}
<br />
favorite image: {favorite.favoritePhoto}
<br />
favorite price: {favorite.favoritePrice}
<br />
<br />
</p> */
}
