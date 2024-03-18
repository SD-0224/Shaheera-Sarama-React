import Search from "../../components/Search/Search";
import Courses from "../../components/Courses/Courses";
import { useEffect, useState } from "react";
import { fetchData } from "../../common/fetch";
import Main from "../../components/Main/Main";
import Fav from "../../components/Fav/Fav";
export default function Home(){
    return(
        <>
        <Main/>
        <Fav/>
        </>
    )
}