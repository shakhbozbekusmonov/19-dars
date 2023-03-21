import React from "react";

const Field = ({ labelName, className, ...props }) => {
    return (
        <>
            <label>
                {labelName}:
                <input className={"form-control " + className} {...props} />
            </label>
        </>
    );
};

export default Field;
