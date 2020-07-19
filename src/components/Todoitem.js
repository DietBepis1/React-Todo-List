import React from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends React.Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: 10,
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' :
            'none'
        }
    }

    

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input 
                type='checkbox' 
                onChange={this.props.markComplete.bind(this, id)}
                />
                { ` ${title}` }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnstyle}>X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnstyle = {
    background: 'green',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default Todoitem
