import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Thumbnail = ({ props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const showDetail = () => {
    setShow(true);

  }
  return (
    <>
      <figure className='col-12 col-sm-2' onClick={showDetail}>
        <img width="100" height={100} src={props.img_src} />
        <figcaption> {props.camera.name.length > 11 ? `${props.camera.name.split("").slice(0, 9).join("")}...` : props.camera.name}</figcaption>
      </figure>


      {/* Modal */}

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.camera.full_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <figure>

            <img width="650" src={props.img_src} alt="" />
            <figcaption>
              day {props.sol} / {new Date(props.earth_date).toDateString()}
            </figcaption>
          </figure>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
export default Thumbnail