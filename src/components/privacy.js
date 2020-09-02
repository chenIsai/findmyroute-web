import React from "react";
import styled from "styled-components";
import privacy from "../data/privacy-docs";

const Wrapper = styled.div`
  width: 50em;
  margin: auto;
  padding-bottom: 5em;
`

const Title = styled.div`
  font-size: 3.5em;
  text-align: center;
  color: #40C3A0;

  &.date {
    color: grey;
    font-size: 1.5em;
  }

  &.subtitle {
    margin-top: 1em;
    font-size: 2.5em;
    color: #67CFB3;
  }
`

const Info = styled.div`
  margin: 5px;
  font-size: 1.23em;
  font-weight: 200;
  text-align: center;
`


const Privacy = () => {
  return (
    <Wrapper>
      <Title>
        Privacy Policy
      </Title>
      <Title className="date">
        Effective Date: {privacy.date}
      </Title>
      <Info>
        {privacy.policy}
      </Info>
      <Title className="subtitle">
        What Information Do We Collect
      </Title>
      <Info>
        {privacy.information}
      </Info>
      <Title className="subtitle">
        Why and How Do We Use Your Information
      </Title>
      <Info>
        {privacy.geolocation}
      </Info>
      <Title className="subtitle">
        Changes Made to the Privacy Policy
      </Title>
      <Info>
        {privacy.changes}
      </Info>
      <Title className="subtitle">
        Contact Us
      </Title>
      <Info>
        {privacy.contact}
      </Info>
    </Wrapper>
  )
}

export default Privacy;
