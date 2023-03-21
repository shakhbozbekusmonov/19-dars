import React from "react";
import Field from "../Field/Filed";
import { Modal, ModalBody } from "reactstrap";

const Todo = () => {
    const [data, setData] = React.useState([]);
    const [modal, setModal] = React.useState(false);
    const inputRef = React.useRef(null);
    const passInputRef = React.useRef(null);

    const addData = () => {
        const newValue = {
            id: data.length + 1,
            name: inputRef.current.value.trim(),
            password: passInputRef.current.value.trim(),
        };
        setData([...data, newValue]);
    };

    const handleChangeModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3 my-3">
                        <input
                            className="form-control mb-3"
                            ref={inputRef}
                            type="text"
                            name="todo"
                            placeholder="Type here"
                        />
                        <input
                            className="form-control mb-3"
                            ref={passInputRef}
                            type="password"
                            name="password"
                            placeholder="Type here"
                        />

                        <Field
                            labelName="Name"
                            className="nimadir-input"
                            aria-label="Enter search name"
                            type="search"
                            name="search"
                            placeholder="Search..."
                            required
                        />

                        <button
                            className="btn btn-primary my-3"
                            type="button"
                            onClick={handleChangeModal}
                        >
                            Open modal
                        </button>

                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={addData}
                        >
                            Add
                        </button>
                    </div>

                    <div className="col-9 my-3">
                        <ul>
                            {data.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <Modal isOpen={modal} toggle={handleChangeModal}>
                <ModalBody>
                    <h3>Modal</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus, quibusdam sapiente ea culpa deleniti quia,
                        placeat nostrum consequatur molestiae praesentium odio
                        recusandae asperiores veritatis, laboriosam illo quos.
                        Animi, numquam autem!
                    </p>
                </ModalBody>
            </Modal>
        </>
    );
};

export default Todo;
