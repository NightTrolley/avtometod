import React from 'react';
import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import "./call-modal.styles.css"
import MainFormComponent from "../Forms/mainForm.component";

const FormModalComponent = ({show, onHide}) => {
    return (
        <>
            <Modal size={"lg"} className={"call-modal"} centered={true} show={show} onHide={onHide}>
                <ModalBody>
                    <div className="d-flex flex-column text-center">
                        <div className="text mx-auto col-12 col-md-7">
                            Оставить заявку<br></br>
                            <span>Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут!</span>
                        </div>
                        <div className="form-wrapper mx-auto col-12 col-md-7">
                            <MainFormComponent/>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default FormModalComponent;