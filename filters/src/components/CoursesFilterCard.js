import { ButtonToolbar } from 'react-bootstrap'
import CoursesFilterOption from './CoursesFilterOption'
import { useState } from 'react'

const CoursesFilterCard = ({courses}) => {
    
    return (
        <>
            <ButtonToolbar>
                {courses.map((course) => (
                    <CoursesFilterOption text={course}/>
                ))}
            </ButtonToolbar>
        </>
    )
}

export default CoursesFilterCard
