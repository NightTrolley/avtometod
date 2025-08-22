import React from 'react';
import {Accordion, AccordionItem} from "react-bootstrap";
import "./faq.item.style.css"

const FaqItem = (props) => {
    return (
            <AccordionItem eventKey={props.id}>
                <Accordion.Header className="question">
                    {props.question}
                </Accordion.Header>
                <Accordion.Body className="answer">
                    {props.answer}
                </Accordion.Body>
                <div className="separator-wrapper mx-auto">
                    <img src="/icons/faq-line.svg" alt="" className="img-fluid mx-auto"/>
                </div>

            </AccordionItem>
    );
};

export default FaqItem;