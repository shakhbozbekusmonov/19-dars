import React from "react";

const News = () => {
    const [count, setCount] = React.useState(0);
    const [todos, setTodos] = React.useState([]);

    const handleCount = () => {
        setCount(count + 1);
        console.log(count);
    };

    // ComponentDidMount
    // React.useEffect(() => {
    //     console.log("Mounted");
    // }, []);

    // ComponentDidUpdate
    // React.useEffect(() => {
    //     console.log("Updated");
    // }, [count]);

    // ComponentWillUnmount
    // React.useEffect(() => {
    //     return () => console.log("Unmounted");
    // }, []);

    // fetch("https://jsonplaceholder.typicode.com/todos")
    // .then((response) => response.json())
    // .then((data) => console.log(data));

    // React.useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then((response) => response.json())
    //         .then((data) => setTodos(data))
    //         .catch((error) => console.log(error.message));
    //     }, []);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const data = await res.json();
                setTodos(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>Hello news</h1>

            <button
                className="btn btn-primary"
                type="button"
                onClick={handleCount}
            >
                Count
            </button>

            <ul>
                {todos.length > 0 &&
                    todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </>
    );
};

export default News;
