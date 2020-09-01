import React from "react";
import styled from "styled-components";
import terms from "../data/ToS-docs";

const Wrapper = styled.div`
  width: 50em;
  margin: auto;
  padding-bottom: 5em;
`

const Title = styled.div`
  font-size: 5em;
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

const ToS = () => {
  return (
    <Wrapper>
      <Title>
        Terms of Service
      </Title>
      <Title className="date">
        Effective Date: {terms.date}
      </Title>
      <Info>
        Thanks for using FindMyRoute!
      </Info>
      <Title classname="subtitle">
        Acceptance of Terms
      </Title>
      <Info>
        {terms.terms}
      </Info>
      <Title className="subtitle">
        User Accounts
      </Title>
      <Info>
        {terms.accounts}
      </Info>
      <Title className="subtitle">
        Your Information
      </Title>
      <Info>
        {terms.location}
      </Info>
      <Title className="subtitle">
        Privacy Policy
      </Title>
      <Info>
        {"You can read our Privacy Policy "}
        <a href="privacy-policy" target="_blank">here</a>
      </Info>
      <Title className="subtitle">
        Changes Made to the Terms of Service
      </Title>
      <Info>
        {terms.changes}
      </Info>
      <Title className="subtitle">
        Contact Us
      </Title>
      <Info>
        {terms.contact}
      </Info>
    </Wrapper>
  )
}

export default ToS;
