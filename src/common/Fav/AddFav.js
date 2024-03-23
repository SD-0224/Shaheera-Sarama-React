import { useState } from "react";
import { fetchData } from "../fetch";
import CheckFav from "./CheckFav";
let favs;
if(localStorage.getItem('Favs')){
   favs = JSON.parse(localStorage.getItem("Favs")); 
}
else{
    favs = [];
}
export async function AddFav(id){
    let favCourse = await fetchData(`/details/${id}`);
    // console.log(favCourse);
    let duplicate = favs.find((fav)=> fav.id == favCourse.id);
    if(!duplicate){
        favs.push(favCourse);
        localStorage.setItem('Favs',JSON.stringify(favs));
    }
}