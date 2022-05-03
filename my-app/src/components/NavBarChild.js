import React from "react";

const NavBarChild = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"></input>
                <button type="submit" onClick={props.handleClick}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NavBarChild;
