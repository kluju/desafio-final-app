/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';


/**
 * 
 * @param {*} props 
 * @param {string} props.buttonLabel
 * @param {string} props.className
 */
const ModalLoading = (props) => {

    const [modal, setModal] = useState(props.loading);
    

    const toggle = (history) =>  {
      setModal(!modal);
    };
    return (
      <div>
        <Modal isOpen={props.loading} size="sm" className={props.className}>
          <ModalBody>
              <Spinner style={{textAlign:"center","left":"50%","top":"50%","position":"relative"}} size="sm" type="grow" animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
          </ModalBody>
          
        </Modal>
      </div>
    );

}

export default ModalLoading;