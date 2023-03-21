import React from "react";
import Todo from "../Todo/Todo";
import TodoTwo from "../Todo-Two/Todo-Two";
import Item from "../Item/Item";

const Main = () => {
    // const userNameRef = React.useRef("John Doe");

    const userNameRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const genderRef = React.useRef(null);

    // const handleChangeRef = () => {
    //     console.log(userNameRef.current);
    //     userNameRef.current.classList.add("nimadir");
    //     userNameRef.current.textContent = "Ulug'bek aka Doe";
    //     userNameRef.current.style.backgroundColor = "red";
    // };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // Controlled way
        console.log(userNameRef.current.value);
        console.log(passwordRef.current.value);
        console.log(genderRef.current.value);

        // Unconrolled way
        // const [username, password, gender] = evt.target.elements;
        // console.log(username.value);
        // console.log(password.value);
        // console.log(gender.value);
    };

    // React.useEffect(() => {

    // }, []);
    return (
        <>
            <main className="site-main">
                {/* <button
                    className="btn btn-success"
                    type="button"
                    onClick={handleChangeRef}
                >
                    Click
                </button> */}
                {/* <Item ref={userNameRef} /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-6 my-5">
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <input
                                    className="form-control mb-3"
                                    type="text"
                                    name="username"
                                    ref={userNameRef}
                                    placeholder="Your username"
                                    autoComplete="current-username"
                                />
                                <input
                                    className="form-control mb-3"
                                    type="password"
                                    name="password"
                                    ref={passwordRef}
                                    placeholder="Your password"
                                    autoComplete="current-password"
                                />
                                <select
                                    className="form-select"
                                    name="gender"
                                    ref={genderRef}
                                    autoComplete="current-gender"
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>

                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
