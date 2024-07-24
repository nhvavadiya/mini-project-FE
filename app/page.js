"use client";

import { Routes } from "@/config/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { useState } from "react";
import { Card, Container, Navbar } from "react-bootstrap";

export default function Home() {
  const [isToken, SetISToken] = useState(false);
  return (
    <section>
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">Booking App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link href={Routes.booking} className="me-3">
              Booking
            </Link>
            {!isToken ? (
              <Link href={Routes.login} className="me-3">
                Login
              </Link>
            ) : (
              <Navbar.Text>Signed in as:Mark Otto</Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5 mb-5">
        <Card.Body>
          <h3 className="text-center">Hello there !</h3>
        </Card.Body>
      </Container>
    </section>
  );
}
