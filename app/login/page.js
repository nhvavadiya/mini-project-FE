"use client";

import { ErrorMessage } from "@hookform/error-message";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="justify-content-center align-items-center vw-100">
        <Col xs={12}>
          <Card.Title as={"h2"} className=" text-center mb-5">
            login
          </Card.Title>
        </Col>
        <Col md={4}>
          <Form name="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Form.Group as={Col} className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  id="loginEmail"
                  type="email"
                  autoComplete="new-loginEmail"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter valid email address",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <Card.Text className="text-danger">{message}</Card.Text>
                  )}
                />
              </Form.Group>
              <Form.Group as={Col} md={12} className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  id="loginPassword"
                  type="password"
                  autoComplete="new-loginPassword"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => (
                    <Card.Text className="text-danger">{message}</Card.Text>
                  )}
                />
              </Form.Group>

              <Col md={12} className="mt-4">
                <Button type="submit" className="w-100">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
