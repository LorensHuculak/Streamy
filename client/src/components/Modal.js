import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className='ui dimmer modals visibile active'>
      <div className='ui standard modal visibile active'>dezfez</div>
    </div>
  );
};

export default Modal;
