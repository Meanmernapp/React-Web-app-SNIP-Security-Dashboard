import React, {useDebugValue, useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
const ModalGen = ({value}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
 

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <h1>{value}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>      
    </div>
  )
}

export default ModalGen