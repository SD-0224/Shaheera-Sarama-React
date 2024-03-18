import React from 'react'
import Search from '../Search/Search'
import Courses from '../Courses/Courses'
import LayoutContainer from './../LayoutContainer/LayoutContainer';
export default function Main() {
  return (
    <main>
       <LayoutContainer>
       <Search/>
        <Courses/>
       </LayoutContainer>
    </main>
  )
}

