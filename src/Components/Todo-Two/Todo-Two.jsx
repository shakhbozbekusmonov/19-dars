import React from "react";
import "./Todo.scss";

const TodoTwo = () => {
    // window.localStorage.setItem("todos", JSON.parse([]))zQ   D1§Q11§QWE4
    const [todos, setTodos] = React.useState([]);
    // state takes three values: all, completed, uncompleted
    const [type, setType] = React.useState("all");

    const handleAddTodo = (evt) => {
        evt.preventDefault();
        const [todo] = evt.target.elements;
        const newTodo = {
            id: todos[todos.length - 1]?.id + 1 || 1,
            title: todo.value.trim(),
            isCompleted: false,
        };
        setTodos([...todos, newTodo]);
        evt.target.reset();
    };

    const handleDeleteTodo = (evt) => {
        const todoId = evt.target.dataset.todoId;
        const filteredTodos = todos.filter((todo) => todo.id != todoId);
        setTodos([...filteredTodos]);
    };

    const handleCheckTodo = (evt) => {
        const todoId = evt.target.dataset.todoId;
        // console.log(evt.target.dataset);
        const findIndexTodo = todos.findIndex((todo) => todo.id == todoId);
        // console.log(findTodo);
        todos[findIndexTodo].isCompleted = !todos[findIndexTodo].isCompleted;
        setTodos([...todos]);
    };

    const getTodosByType = (_type, _todos) => {
        if (_type === "all") {
            return _todos;
        }

        if (_type === "completed") {
            return _todos.filter((t) => t.isCompleted);
        }

        if (_type === "uncompleted") {
            return _todos.filter((t) => !t.isCompleted);
        } else {
            return [];
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 my-3 offset-2">
                        <form onSubmit={(evt) => handleAddTodo(evt)}>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="todo"
                                    placeholder="Type here.."
                                />
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Add
                                </button>
                            </div>
                        </form>

                        <div className="d-flex">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => setType("all")}
                            >
                                All
                            </button>
                            <button
                                className="btn btn-info"
                                type="button"
                                onClick={() => setType("completed")}
                            >
                                Completed
                            </button>
                            <button
                                className="btn btn-warning"
                                type="button"
                                onClick={() => setType("uncompleted")}
                            >
                                Uncomleted
                            </button>
                        </div>
                    </div>
                    <div className="col-8 offset-2">
                        <ul className="list-group">
                            {todos.length > 0 &&
                                getTodosByType(type, todos).map((todo) => (
                                    <li
                                        className={`list-group-item ${
                                            todo.isCompleted && "line"
                                        }`}
                                        key={todo.id}
                                    >
                                        <input
                                            type="checkbox"
                                            data-todo-id={todo.id}
                                            onClick={(evt) =>
                                                handleCheckTodo(evt)
                                            }
                                            defaultChecked={false}
                                        />
                                        {todo.id}: {todo.title}
                                        <button
                                            className="btn btn-danger"
                                            type="button"
                                            data-todo-id={todo.id}
                                            onClick={(evt) =>
                                                handleDeleteTodo(evt)
                                            }
                                        >
                                            &times;
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoTwo;
