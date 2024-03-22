import Search from "../../components/Search/Search";
import Courses from "../../components/Courses/Courses";
import { useEffect, useState, createContext } from "react";
import { fetchData } from "../../common/fetch";
import Fav from "../../components/Fav/Fav";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
export const CoursesContext = createContext();

export default function Home() {
  let [courses, setCourses] = useState([]);
  useEffect(() => {
      let getAllCourses = async()=>{
      let allCourses = await fetchData(`/list`);
      setCourses(allCourses);
    };
    getAllCourses();
  }, []);

  if(!courses){
    return <>
    <img src={require(`../../imgs/giphy.gif`)} alt="" />
    </>
  }
  return (
    <>
      <main>
        <LayoutContainer>
          <CoursesContext.Provider value={courses}>
            <Search />
            <Courses />
          </CoursesContext.Provider>
        </LayoutContainer>
        {/* <Link to={'details/1'}>v</Link> */}
      </main>
      {/* <Fav /> */}
    </>
  );
}
