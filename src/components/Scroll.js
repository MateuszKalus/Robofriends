import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', borderTop: "2px solid transparent", scrollbarColor: "black" }}>
            {props.children}
        </div>
    )
};

export default Scroll;