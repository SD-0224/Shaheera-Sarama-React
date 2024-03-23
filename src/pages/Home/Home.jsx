import Search from "../../components/Search/Search";
import Courses from "../../components/Courses/Courses";
import { useEffect, useState } from "react";
import { fetchData } from "../../common/fetch";
import Fav from "../../components/Fav/Fav";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";

export default function Home() {
  return (
    <>
      <main>
        <LayoutContainer>
          <Search />
          <Courses />
        </LayoutContainer>
      </main>
      {/* <Fav /> */}
    </>
  );
}
