/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, {  } from 'react';

import {  Modal,  ModalBody,  Spinner } from 'reactstrap';


/**
 * 
 * @param {*} props 
 * @param {string} props.buttonLabel
 * @param {string} props.className
 */
const ModalLoading = (props) => {

   
    
    return (
      <div>
        <Modal isOpen={props.loading} size="sm" className={props.className}>
          <ModalBody>
              <Spinner style={{textAlign:"center","left":"50%","top":"50%","position":"relative"}} size="sm" type="grow" animation="border" role="status"></Spinner>
          </ModalBody>
          
        </Modal>
      </div>
    );

}

export default ModalLoading;