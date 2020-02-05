import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #555;
  }

  .navbar-nav .nav-link {
      color: #bbb;
  }
  `;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/">User Registration</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/list">User List</Nav.Link></Nav.Item>
        {/*
        <Nav.Item><Nav.Link href="/view">View User</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/edit">Edit User</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/delete">Delete User</Nav.Link></Nav.Item>
        */}
      </Nav>
    </Navbar>
  </Styles>
)
