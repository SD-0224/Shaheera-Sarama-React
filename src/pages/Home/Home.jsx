import React, { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Courses from "./components/Courses/Courses";
import { fetchData } from "../../common/fetch";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import Select from "./components/Select/Select";
import SearchIcon from "./components/Search/SearchIcon/SearchIcon";
import styles from "./Home.module.css";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search Filters function to filter the searchResult
  const searchFilters = (sortSelected, filterSelected) => {
    let result = [...searchResult];
    if (sortSelected !== "") {
      switch (sortSelected) {
        case "Author Name":
          result = result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Topic Name":
          result = result.sort((a, b) => a.topic.localeCompare(b.topic));
          break;
        case "Most Rating":
          result = result.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    }
    if (filterSelected !== "") {
      result = result.filter((res) => res.category === filterSelected);
    }
    return result;
  };

  const applySearch = async () => {
    let result = await fetchData(`/list?phrase=${search}`);
    setSearchResult(result);
  };

  useEffect(() => {
    const getAllCourses = async () => {
      setLoading(true);
      let allCourses = await fetchData("/list");
      setCourses(allCourses);
      let cats = new Set(allCourses.map((course) => course.category));
      setCategories([...cats]);
      setLoading(false);
    };
    getAllCourses();
  }, []);

  useEffect(() => {
    let debounceSearch = setTimeout(() => {
      applySearch();
    }, 300);
    return () => clearTimeout(debounceSearch);
  }, [search]);

  useEffect(() => {
    const searchCourses = () => {
      let filteredCourses = searchFilters(sort, filter);
      setCourses(filteredCourses);
    };
    searchCourses();
  }, [searchResult, sort, filter]);

  return (
    <main>
      <LayoutContainer>
        {loading ? (
          <img
            src={require(`../../imgs/giphy.gif`)}
            alt="Loading"
            className="loadingImg"
          />
        ) : (
          <>
            <Search>
              <SearchIcon
                onKeyUp={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
              />
              <Select
                label="sort by"
                options={["Topic Name", "Author Name", "Most Rating"]}
                className="sort"
                onChange={(e) => setSort(e.target.value)}
              />
              <Select
                label="filter by"
                options={categories}
                className="filter"
                onChange={(e) => setFilter(e.target.value)}
              />
            </Search>
            {courses.length > 0 ? (
              <Courses courses={courses} />
            ) : (
              <p className={styles.noResults}>No Results Found</p>
            )}
          </>
        )}
      </LayoutContainer>
    </main>
  );
}
