import react from "react";

export default function Scoreboard (props) {

    return (
        <div className="scoreBoard">
            <h3>Current Score: {props.current} </h3>
            <h3>Best Score: {props.best} </h3>
        </div>
    )
}