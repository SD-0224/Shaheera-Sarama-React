import { useState } from "react";
import { fetchData } from "../fetch";
let favs;
if(localStorage.getItem('Favs')){
   favs = JSON.parse(localStorage.getItem("Favs")); 
}
else{
    favs = [];
}
export async function AddFav(id){
    let favCourse = await fetchData(`/details/${id}`);
    let duplicate = favs.filter((fav)=> fav.id == favCourse.id);
    if(!duplicate){
        favs.push(favCourse);
        localStorage.setItem('Favs',JSON.stringify(favs));
    }
    else{
        alert("no")
    }

}