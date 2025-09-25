// import React, {useState} from 'react';
// import {Swiper, SwiperSlide} from "swiper/react";
// import {Zoom} from "swiper/modules";
// import {Modal} from "react-bootstrap";
//
// const LicenseSliderComponent = () => {
//
//
//     const handleSlideClick = () => {
//         setShowModal(true)
//     }
//
//     const [showModal, setShowModal] = useState(false);
//     const handleCloseModal = () => setShowModal(false);
//     const swiper = new Swiper('.swiper', {
//         // ...
//         on: {
//             init: function () {
//                 console.log('swiper initialized');
//             },
//         },
//     });
//
//
//     return (
//         <section className="license">
//             <div className="swiper">
//
//             </div>
//                 <SwiperSlide>
//                     <div className="col-12 swiper-zoom-container">
//                         <img src="/license/license-1.png" alt="" className="img-fluid license-img"/>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="/license/license-2.png" alt="" className="license-img"/>
//                 </SwiperSlide>
//             <Modal
//                 show={showModal}
//                 onHide={handleCloseModal}
//                 size="lg"
//                 centered
//                 dialogClassName="modal-90w"
//             >
//
//             </Modal>
//         </section>
//     );
// };
//
// export default LicenseSliderComponent;