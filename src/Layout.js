import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .bgColorSet {
    background-color: rgb(199,209,215); 
  }
`;


// import
export const Layout = (props) => (
  <Styles>
  <Container className="bgColorSet">
    {props.children}
  </Container>
  </Styles>
)