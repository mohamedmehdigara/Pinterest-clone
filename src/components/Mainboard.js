import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard(props) {
  let { pins } = props;
  return (
    <Wrapper>
      <Container>
        {pins.map((pin, index) => {
          let { urls } = pin;

          return <Pin key={index} urls={urls} />;
        })}
      </Container>
    </Wrapper>
  );
}

export default Mainboard;

const Wrapper = styled.div`
  background-color: pink;
  display; flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  width: 80%;
`;
