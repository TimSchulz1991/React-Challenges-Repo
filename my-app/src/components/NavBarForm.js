import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

export class NavBarForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }

    handleClick = () => {
        this.setState(
            (prevState, prevProps) => {
                return {
                    isLoggedIn: this.state.isLoggedIn === true ? false : true,
                };
            }
        )
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ? (
                <button onClick={this.handleClick}>Log in</button>
                
                ) : (
                    <NavBarChild handleClick={this.handleClick}/>
                )}
            </div>
        );
    }
}

export default NavBarForm;
