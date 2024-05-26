import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Courses from "./Courses/Courses";
import { fetchData } from "../../common/fetch";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import Select from "../../components/Select/Select";
import SearchIcon from "../../components/Search/SearchIcon/SearchIcon";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [categoties, setCategories] = useState([]);

  useEffect(() => {
    async function getAllCourses() {
      let allCourses = await fetchData("/list");
      setCourses(allCourses);
      let cats = new Set();
      allCourses.map((course) => {
        cats.add(course.category);
        setCategories([...cats]);
      });
    }
    getAllCourses();
  }, []);

  async function searchTopic(sortSelected, filterSelected) {
    try {
      let result = [...searchResult];
      if (sortSelected !== "") {
        switch (sortSelected) {
          case "Author Name":
            result = result.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case "Topic Name":
            result = result.sort((a, b) => a.topic.localeCompare(b.topic));
            break;
        }
      }
      if (filterSelected !== "") {
        result = result.filter((res) => res.category === filterSelected);
      }
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  const applaySearch = async () => {
    let result = await fetchData(`/list?phrase=${search}`);
    setSearchResult(result);
  };

  useEffect(() => {
    applaySearch();
  }, [search]);

  useEffect(() => {
    async function searchCourses() {
      let filterCourses = await searchTopic(sort, filter);
      setCourses(filterCourses);
    }
    searchCourses();
  }, [searchResult, sort, filter]);
  if (courses.length === 0) {
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
            <SearchIcon
              onKeyUp={(e) => {
                setSearch(e.target.value);
                applaySearch();
              }}
              value={search}
            />
            <Select
              label="sort by"
              options={["Topic Name", "Author Name"]}
              className="sort"
              onChange={(e) => setSort(e.target.value)}
            />
            <Select
              label="filter by"
              options={categoties}
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
