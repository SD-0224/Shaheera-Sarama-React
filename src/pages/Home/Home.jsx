import Search from "../../components/Search/Search";
import Courses from "../../components/Courses/Courses";
import { useEffect, useState } from "react";
import { fetchData } from "../../common/fetch";
export default function Home(){
    return(
        <>
        <Search/>
        <Courses/>
        </>
    )
}