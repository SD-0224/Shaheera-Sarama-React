import React from 'react';
import { fetchData } from '../fetch';

export default function CheckFav(id) {
    return fetchData(`/details/${id}`)
        .then(FavCourse => {
            let Favs = JSON.parse(localStorage.getItem('Favs'));
            let duplicate = Favs.find((fav) => fav.id === FavCourse.id);
            return !!duplicate; 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return false; 
        });
}
