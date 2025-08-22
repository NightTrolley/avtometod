import React from 'react';
import "./news.card.style.css"

const NewsCardComponent = (props) => {
    return (
        <div className="news-card col-12 col-md-4" key={props.id}>
            <img src="/icons/news-preview.svg" alt="" className="news-preview"/>
            <div className="news-card-content">
                <p className="news-title">
                    {props.title}
                </p>
                <p className="news-text">
                    {props.text}
                </p>
                <p className="news-date">
                    {props.date}
                </p>
            </div>
        </div>
    );
};

export default NewsCardComponent;