import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Courses from "../../components/Courses/Courses";
import { fetchData } from "../../common/fetch";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import Select from "../../components/Select/Select";
import SearchIcon from "../../components/Search/SearchIcon/SearchIcon";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [search,setSearch] = useState('');
  const [sort,setSort] = useState('');
  const [filter,setFilter] = useState('');

  useEffect(() => {
    async function getAllCourses() {
      let allCourses = await fetchData("/list");
      setCourses(allCourses);
    }
    getAllCourses();
    
  }, []);

  const getCats = (courses) => {
    if(!courses){
      return ['Default'];
    }
    let cats = new Set();
    courses.map((course) => {
      cats.add(course.category);
    });
    return [...cats]
  }
  // const catsArray = Array.from(cats);
  async function searchTopic(topic,sortSelected,filterSelected) {
    try {
        let result = await fetchData(`/list?phrase=${topic}`);
        if (sortSelected !== '') {
            switch (sortSelected) {
                case 'authorname':
                    result = result.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'topicname':
                    result = result.sort((a, b) => a.topic.localeCompare(b.topic));
                    break;
            }
        }
        if (filterSelected !== '') {
            result = result.filter(res => res.category === filter);
        }
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
let applyFilters = async (e) => {
  let res  = await searchTopic(search,sort,filter);
  // console.log(res);
  setCourses(res)
}
useEffect(()=>{
  applyFilters();
},[search,sort,filter]);

  
    
  if (courses.length == 0) {
    return (
      <img
        src={require(`../../imgs/giphy.gif`)}
        className="loadingImg"
        alt="Loading"
      />
    );
  }

  return (
    <>
      <main>
        <LayoutContainer>
          <Search>
            <SearchIcon onKeyUp={(e)=>setSearch(e.target.value)}/>
            <Select
              label="sort by"
              options={["topicname","authorname"]}
              className="sort"
              onChange = {(e)=>setSort(e.target.value)}
            />
            <Select
              label="filter by"
              options={getCats(courses)}
              className="filter"
              onChange={(e) => setFilter(e.target.value)}
            />
          </Search>
          <Courses courses={courses} />
        </LayoutContainer>
      </main>
    </>
  );
}
