import React, { useState } from 'react';
// import MydModalWithGrid from './Components/Content/Modal_Ticket/MydModalWithGrid';
import { Button } from 'react-bootstrap';
import DetailsProduct from './DetailsProduct';

const Button_Modal = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
               
            <Button variant="primary" onClick={() => setModalShow(true)}>
      Launch vertically centered modal
    </Button>

    <DetailsProduct
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
        </div>
    );
};

export default Button_Modal;