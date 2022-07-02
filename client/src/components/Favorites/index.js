import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FAVORITES } from '../../utils/queries';
import { useSelector, useDispatch } from 'react-redux';

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
    <div className='I-M-Here'>
      <h2>ID's!</h2>
      {favorites &&
        favorites[0].map((favorite) => (
          <p key={favorite.favoriteId}>
            favoriteID: {favorite.favoriteId}
            <br />
            favorite Title: {favorite.favoriteTitle}
            <br />
            favorite image: {favorite.favoritePhoto}
            <br />
            favorite price: {favorite.favoritePrice}
            <br />
            <br />
          </p>
        ))}
    </div>
  );
}

export default Favorites;
