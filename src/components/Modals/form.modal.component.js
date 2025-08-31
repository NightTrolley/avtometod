import React from 'react';
import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import SecondaryButton from "../Buttons/secondaryButton/secondaryButton";
import "./call-modal.styles.css"
import MainFormComponent from "../Forms/mainForm.component";

const FormModalComponent = ({show, onHide}) => {
    return (
        <>
            <Modal size={"xl"} className={"call-modal"} centered={true} show={show} onHide={onHide}>
                <ModalHeader closeButton>
                    Заказать обратный звонок
                </ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="text col-12 col-md-7">
                            1. Оставьте заявку на сайте, указав ФИО и телефон.<br></br>
                            2. Наш менеджер свяжется с Вами в ближайшее время.
                        </div>
                        <div className="form-wrapper col-12 col-md-5">
                            <MainFormComponent/>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default FormModalComponent;