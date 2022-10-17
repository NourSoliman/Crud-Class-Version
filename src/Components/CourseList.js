import React, { Component, Fragment } from 'react'

class CourseList extends Component {
    state = {
        toggle: false,
    }
    renderForm = () => {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => this.toggleForm()}>Edit</button>
                <button onClick={() => this.props.deleteValue(this.props.index)}>Delete</button>
            </li>
        )
    }
    toggleForm = () => {
        let toggle = this.state.toggle;
        this.setState({
            toggle: !toggle
        })
    }
    updateForm = (e) => {
        e.preventDefault();
        this.props.editForm(this.props.index, this.input.value)
        this.toggleForm();
    }
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateForm}>
                <input type="text" ref={(v) => { this.input = v }} defaultValue={this.props.details.name}></input>
                <button>Update Value</button>
            </form>
        )
    }
    render() {
        let toggle = this.state.toggle;
        return (
            <Fragment>
                {toggle ? this.renderUpdateForm() : this.renderForm()}
            </Fragment>
        )
    }
}
export default CourseList;