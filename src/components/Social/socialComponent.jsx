import React from 'react';
import "./social.css"

const SocialComponent = (props) => {
    return (
        <a href={props.link} className={"social_link"}>
            <img className="social_link_icon" src={props.icon} alt={props.alt}/>
        </a>
    );
};

export default SocialComponent;