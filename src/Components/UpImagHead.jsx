import { Center, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import star from "../images/logo/star.svg";
import Test from "./Test";
const UpImagHead = ({ heading, image }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mb={3}
    >
      {image ? <img src={image}  /> : ""}
      {/* {image ? <Test/>: ""} */}

      {/* headiing  */}

      {heading ? (
        <Flex flexDirection="row" mt={5}>
          <img src={star} />

          <Heading mx={5}>{heading}</Heading>
          <img src={star} />
        </Flex>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default UpImagHead;
