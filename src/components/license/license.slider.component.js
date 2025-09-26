import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Modal, ModalBody} from "react-bootstrap";
import "./license.style.css"

const LicenseSliderComponent = () => {

    const licenseImg = [
        "/license/license-1.png",
        "/license/license-2.png",
    ]

    const handleSlideClick = (data) => {
        console.log(data.clickedIndex)
        setSelectedIndex(data.clickedIndex)
        setShowModal(true)
    }

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);


    return (
        <section className="license">
            <div className="h3 text-center">Наша лицензия</div>
            <Swiper
                slidesPerView={2}
                onClick={handleSlideClick}
                centeredSlides={false}
            >
                {licenseImg.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="col-12">
                            <img src={img} alt="" className="img-fluid license-img"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                size="lg"
                centered
                dialogClassName="modal-90w"
            >
                <ModalBody>
                    <img src={licenseImg[selectedIndex]} alt="" className={"img-fluid"}/>
                </ModalBody>
            </Modal>
        </section>
    );
};

export default LicenseSliderComponent;