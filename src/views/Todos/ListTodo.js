import React from "react";
import './ListTodo.scss';
import './AddTodo';
import { toast } from 'react-toastify';
import AddTodo from "./AddTodo";
import Color from "../HOC/Color";

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'learning english' },
            { id: 'todo2', title: 'learning math' },
            { id: 'todo3', title: 'sleep' },
        ],
        editTodo: {}

    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo);

        this.setState({
            listTodos: [...this.state.listTodos, todo],
            // listTodos: currentListTodo
        })

        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentListTodo = this.state.listTodos;
        currentListTodo = currentListTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentListTodo,
        })
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;

        if (isEmpty === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: '',
            })
            toast.success("Update todo succeed!")
            return;
        }
        this.setState({
            editTodo: todo,
        })
    }
    handleOnChangeEditTodo = (event) => {

        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        console.log('>>> check empty ', isEmpty);
        return (
            <>
                <p>Simple TODO Apps</p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {/* <input value={item.title}></input> */}
                                        {isEmpty === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        ></input>
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmpty === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )

    }
}

export default Color(ListTodo);