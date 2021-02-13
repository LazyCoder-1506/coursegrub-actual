import React from 'react'
import Courses from '../data/data.json'
import CourseCard from './CourseCard'

export default function Content () {

  const courseList = Courses.map(course => 
    <CourseCard
      key={course.id}
      index={course.id}
      name={course.name}
      instructors={course.instructors}
      university={course.university}
      platform={course.platform}
      price={course.price}
      certificate={course.certificate}
      stars={course.stars}
      reviews={course.reviews} />)
  
  return (
    <div>
      {courseList}
    </div>
  );
}