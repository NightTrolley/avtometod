import React from 'react';
import "./ghost.btn.css"

const GhostBtnComponent = (props) => {
    return (
        <div className="ghost-btn col-12">
            <a href="/agreement/Договор_оферта_ООО_Автометод+правки.pdf" target="_blank" className="col-12">
                {props.text}
            </a>
        </div>
    );
};

export default GhostBtnComponent;