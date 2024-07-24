"use client";

import BookingSlotModal from "@/componants/BookingSlotModal";
import { bookingSlots } from "@/contant/BookingSlots";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import "../../styles/booking/booking.css";

export default function Booking() {
  const [show, setShow] = useState(false);
  const [timeSlotData, setTimeSlotData] = useState({});

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    setTimeSlotData(data);
    console.log(data);
  };
  return (
    <Container className="mb-5 mt-5">
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card.Title as={"h2"} className=" text-center mb-5">
            Book your slots
          </Card.Title>
        </Col>
        <Col xl={9} lg={12}>
          <Form name="bookingForm" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Form.Group className="mb-4 d-flex align-items-center">
                  <Form.Label as={"h5"} className="me-2 mb-0">
                    Available Slots :{" "}
                  </Form.Label>
                  <Controller
                    name={"bookingDate"}
                    control={control}
                    defaultValue={new Date()}
                    rules={{ required: "Please select date" }}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <DatePicker
                          id="bookingDate"
                          onChange={onChange}
                          selected={value}
                          minDate={new Date()}
                          isClearable={false}
                        />
                      );
                    }}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="bookingDate"
                    render={({ message }) => (
                      <Card.Text className="invalid-feedback d-block">
                        {message}
                      </Card.Text>
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Row>
                    {bookingSlots.map((timeSlot) => (
                      <Col lg={3} sm={6} key={timeSlot?.id}>
                        <Card.Body className="d-flex align-items-center w-100">
                          <Form.Check
                            type="radio"
                            autoComplete="off"
                            id={timeSlot.id}
                            className="time-check-box pe-2"
                            value={timeSlot.time}
                            disabled={timeSlot?.available}
                            {...register("timeSlot", {
                              required: "This field is required",
                            })}
                          />
                          <Form.Label htmlFor={timeSlot.id} className="w-100">
                            <Card
                              className={classNames(
                                timeSlot?.available
                                  ? "bg-success text-white"
                                  : "bg-white text-dark",
                                "p-2"
                              )}
                            >
                              <Card.Text className="booking-time">
                                {timeSlot?.time}
                              </Card.Text>
                            </Card>
                          </Form.Label>
                        </Card.Body>
                      </Col>
                    ))}
                  </Row>
                  <ErrorMessage
                    errors={errors}
                    name="timeSlot"
                    render={({ message }) => (
                      <Card.Text className="invalid-feedback d-block">
                        {message}
                      </Card.Text>
                    )}
                  />
                </Form.Group>
              </Col>

              <Col md={12} className="mt-4">
                <Button
                  type="submit"
                  className="w-100"
                  onClick={() => handleShow()}
                >
                  Confirm
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <BookingSlotModal
        show={show}
        handleClose={handleClose}
        data={timeSlotData}
      />
    </Container>
  );
}
