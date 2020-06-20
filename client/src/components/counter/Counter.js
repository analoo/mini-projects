import React from "react";

function Counter(props) {
    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-secondary uk-light uk-text-center">
            <h4 className="bg-muted">{props.text}</h4>
            <p>{props.count}</p>
        </div>
    )
}

export default Counter;