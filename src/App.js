import React, { Component } from 'react'
import CourseList from './Components/CourseList';
import Form from './Components/Form';
class App extends Component {
  state = {
    courses: [
      { name: `HTML` },
      { name: `CSS` },
      { name: `JavaScript` },
      { name: `Sass` },
    ],
    current: ``
  }
  //handle change function 
  handleChange = (e) => {
    this.setState({
      current: e.target.value
    })
  }
  //add new item
  handleSubmit = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current })
    this.setState({
      courses,
      current: ` `
    })
  }
  deleteValue = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }
  editForm = (index, value) => {
    let { courses } = this.state;
    let course = courses[index];
    course[`name`] = value
    this.setState({
      courses
    })

  }
  render() {
    const courses = this.state.courses;
    const coursesList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} deleteValue={this.deleteValue} editForm={this.editForm} />
    })
    return (
      <div className="App">
        <h2>Add Courses</h2>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} current={this.state.current} />
        <ul>{coursesList}</ul>
      </div>
    );
  }
}
export default App;
