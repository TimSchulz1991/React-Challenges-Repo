import React, { Component } from "react";
import { savedPosts } from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            posts: {},
        };
    }

    getLoaded() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            });
        }, 2000);
    }

    componentDidMount() {
        this.getLoaded();
    }

    handleChange(event) {
        let name = event.target.value.toLowerCase();
        let filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        });
        this.setState({
            posts: filteredPosts,
        })
    }

    render() {
        return (
            <div>
                {/* <Loader /> */}
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search: </label>
                        <input
                            id="searchInput"
                            type="search"
                            placeholder="By author"
                            onChange={(event) => this.handleChange(event)}
                        ></input>
                        <h4>Posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? (
                        <PostItem savedPosts={this.state.posts} />
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        );
    }
}

export default Content;
