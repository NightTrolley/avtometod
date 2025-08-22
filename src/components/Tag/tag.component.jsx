import React from 'react';
import "./tag.style.css"

const TagComponent = (props) => {
    return (
        <div className="tag col-7 col-md-2">
            {props.tagText}
        </div>
    );
};

export default TagComponent;