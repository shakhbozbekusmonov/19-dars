import React from "react";

const Item = React.forwardRef((_, ref) => {
    return <div ref={ref}>{ref.current}</div>;
});

export default Item;
