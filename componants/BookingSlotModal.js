import dayjs from "dayjs";
import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function BookingSlotModal({ show, handleClose, data }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking slot confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to book this slot.{dayjs(data.bookingDate)}{" "}
          {data.timeSlot}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
