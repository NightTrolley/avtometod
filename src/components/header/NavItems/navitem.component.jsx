import React from 'react';
import {Col, NavItem, Row} from "react-bootstrap";
import "./navitem.css"

const NavitemComponent = (props) => {
    return (
        <NavItem className={props.class}>
            <Row className="g-0 nav-item-content-wrapper">
                <Col xs="auto" className="nav-item-img">
                    <img className="img-fluid" src={props.icon} alt=""/>
                </Col>
                <Col className={"nav-item-text_block"}>
                    <p className="first_text">{props.firstText}</p>
                    <p className="second_text">
                        {props.secondText}
                    </p>
                </Col>
            </Row>
        </NavItem>
    );
};

export default NavitemComponent;