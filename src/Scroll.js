import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: "3px solid black", height: 450, scrollbarColor: "black" }}>
            {props.children}
        </div>
    )
};

export default Scroll;