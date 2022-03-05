import React,{ Component } from 'react';

class CollegeStudents extends Component {
    constructor(props){
        super(props);

        this.state = {
            students: [
            {
                name: 'Harsha',
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit explicabo omnis, ab dolor vel aperiam aliquam possimus illum voluptatem nesciunt.',
                course: 'Full stack',
                batch: 'Batch 11',
                tech: 'Java',
            }
            ],
        };
    }
    render(){
        const { students } = this.state.students
        const student1 = students[0]
        return(
            <>
            <div className='studentsData'>
                <h3>{student1.name}</h3>
                <p>{student1.bio}</p>
                <h3>Course: {student1.course}</h3>
                <h3>Tech Stack:{student1.tech}</h3>
                <h3>Batch: {student1.batch}</h3>
            </div>
            </>
        )
    }
}
export default CollegeStudents