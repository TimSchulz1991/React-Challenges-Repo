import React from "react";
import css from './css/PostItem.module.css'

const PostItem = (props) => {
    return props.savedPosts.map((post) => {
        const { name, title, description, image } = post;
        // See destructuring above
        return (
            <div className={css.SearchItem} key={title}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image}></img>
                <p>{description}</p>
            </div>
        );
    });
};

export default PostItem;
