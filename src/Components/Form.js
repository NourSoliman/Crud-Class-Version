import React from 'react'

function Form(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleChange} value={props.current}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Form;