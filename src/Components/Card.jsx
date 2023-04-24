import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Rozerpay from "../images/logo/Rozerpay.svg";
import pa from "../images/pasrto/pa1.svg";
const Card = () => {
  console.log(pa);
  console.log(Rozerpay);
  return (
    <>
      <div style={{ position: "relative", color: "white", width: "270px",height:"100%"}}>
        <img
          src={pa}
          alt=""
          style={{ "position": "absolute", "borderTopLeftRadius":"8px",
          "borderTopRightRadius":"8px", "z-index": "-1",width: "100%",height:"100%" }}
        />
        <Box px={"8px"} pt={"5px"} pb={"10px"}>
          <img src="online.svg" style={{
             "position": "absolute","top":"40px",
             "right":"4px",
              "font-weight": "500",
              color: "greenyellow",
            }}/>
            <Text style={{position: "absolute","top":"40px"}}>10+ years</Text>

          <Text mt="180px">4.5<span style={{position: "absolute"}}><img src="st.svg"/></span>
          </Text>
          
          <Heading fontSize={"1.3rem"}>Astrologer Ramraj</Heading>
          <Text fontSize={"12px"} color={"#ddd"}>Specialist</Text>
          <p style={{fontSize: "12px"}}>Love,Business,Life</p>
          <Text
            style={{
              float: "right",
              "font-weight": "500",
              color: "greenyellow",
            }}
          >
            Price <br />
            <span style={{ "font-size": "1.5rem" }}>$10/min</span>{" "}
          </Text>
          <Text color={"#ddd"} fontSize={"12px"}>Skills</Text>
          <p style={{fontSize: "12px"}}>Vedic Astrology,Kundall</p>
        </Box>

        {/* for button  */}
        <Grid 
        gap={"1px"}
        templateColumns="repeat(2, 1fr)" mt={"10px"}   style={{"width":"100%", "borderBottomLeftRadius":"8px",
        "borderBottomRightRadius":"8px"}}>
          <GridItem>
            <Button style={{"display":"flex","justifyContent":"space-between","width":"100%"} }  px={"30px"} bg={"#A95210"}> <img src="call.svg" />Chat </Button>
          </GridItem>
          <GridItem>
            <Button style={{"display":"flex","justifyContent":"space-between","width":"100%"}} px={"30px"} bg={"#A95210"}> <img src="message.svg" />Call </Button>
          </GridItem>
        </Grid>
        <Box style={{position: "absolute",
    left: "40%",
    bottom:" 2%",
    width: "60px",}}>
            <img src="live.svg" alt="" />
        </Box>
      </div>
    </>
  );
};

export default Card;
