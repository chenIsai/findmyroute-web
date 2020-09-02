import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const Divider = styled.div`
  flex: 1;
  padding: 10;

  &.links {
    flex: .2;
    height: 150px;
    margin-left: auto;
    margin-right: 50px;
    border: 0px;
    border-left: 1px;
    border-color: silver;
    border-style: solid;
    padding: 10px;
  }
`


const Title = styled.div`
  font-size: 30px;
  text-align: center;

  &.subtitle {
    font-size: 25px;
  }
`

const Text = styled.div`
  font-size: 20px;
  margin: 50px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
`

const Home = () => {
  return (
    <Wrapper>
      <Divider>
        <Title>
          Welcome to FindMyRoute!
        </Title>
        <Text>FindMyRoute is an open source mobile app developed by Isaiah Chen. </Text>
        <Text>You can keep track of your current run by running with the app open, or plan routes and track distance by placing markers on the map!</Text>
      </Divider>
      <Divider className="links">
        <p>
          {"Check out the app on "}
          <a href="https://www.google.com/" target="blank">Play Store!</a>
        </p>
        <p>
          {"See the code on "}
          <a href="https://github.com/chenIsai/FindMyRoute/" target="blank">Github!</a>
        </p>
      </Divider>

    </Wrapper>
  )
}

export default Home;
