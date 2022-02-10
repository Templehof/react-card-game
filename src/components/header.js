import react from "react";

export default function Header () {

    return (
        <div className="header">
            <div>
            <h2>WOT Memory cards.</h2>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <img className="logo" src={"logo.png"} />
        </div>
    )
}