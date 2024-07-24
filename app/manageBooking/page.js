"use client";

import BookingSlotModal from "@/componants/BookingSlotModal";
import { bookingSlots } from "@/contant/BookingSlots";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import "../../styles/booking/booking.css";
import classNames from "classnames";

export default function Booking() {
  const [show, setShow] = useState(false);
  const [timeSlotData, setTimeSlotData] = useState({});
  console.log("timeSlotData", timeSlotData);
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
            Manage Booking
          </Card.Title>
        </Col>

        <Col>
          <Tabs
            defaultActiveKey="manageBooking"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="manageBooking" title="Manage booking ">
              <Form name="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Table bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Sr.no</th>
                        <th>Date</th>
                        <th>Time Slot</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                          <Button variant="success" className="me-2">
                            Accept
                          </Button>
                          <Button variant="danger" className="me-2">
                            Decline
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </Form>
            </Tab>
            <Tab eventKey="bookingSummary" title="Booking Summary">
              <Form name="bookingSummaryForm" onSubmit={handleSubmit(onSubmit)}>
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
                              <Form.Label
                                htmlFor={timeSlot.id}
                                className="w-100"
                              >
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
                </Row>
              </Form>
            </Tab>
          </Tabs>
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
