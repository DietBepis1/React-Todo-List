import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        }
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: '',
        })
    }

    onChange = (event) => this.setState({
        title: event.target.value
    });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                  type='text' 
                  name='title' 
                  placeholder='Add todo...'
                  style={{flex: 10, padding: 5}}
                  value={this.state.title}
                  onChange={this.onChange}
                />

                <input 
                  type='submit' 
                  value='submit' 
                  className='btn' 
                  style={{flex: 1}}
                />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes ={
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default AddTodo
