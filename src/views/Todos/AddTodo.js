import React from "react";
import './ListTodo.scss';
import { toast } from 'react-toastify';
class AddTodo extends React.Component {

    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`)
            return;
            //if(undefined/null/empty) => false
        }

        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button className="add"
                    onClick={() => this.handleAddTodo(this.state.title)}
                >Add Todo
                </button>
            </div>
        )

    }
}

export default AddTodo