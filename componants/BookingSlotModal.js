import dayjs from "dayjs";
import React from "react";
import { Card, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function BookingSlotModal({ show, handleClose, data }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking slot confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Body className="mb-3">
            <Card.Text className="mb-1">
              Date : {dayjs(data.bookingDate).format("DD-MM-YYYY")}{" "}
            </Card.Text>
            <Card.Text>Time : {data.timeSlot}</Card.Text>
          </Card.Body>
          Are you sure you want to book this slot.
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
