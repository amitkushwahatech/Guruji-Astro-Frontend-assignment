// import { SimpleGrid, Card,CardHeader,Button,Text,Heading,CardBody,CardFooter } from '@chakra-ui/react'
import React from 'react'
import Card from "./Card.jsx"
import { Box, Flex, Grid, GridItem, HStack } from '@chakra-ui/react'
import UpImagHead from './UpImagHead.jsx'
const TopAstro = () => {
  return (
    <Box style={{background: "#FFEFE3",
      position: "sticky"}} display={{md:"none"}} mb={"50px"}>
    <UpImagHead heading="Top Astrologers"/>
    
    
    <HStack overflow='auto' display={{base:"flex",md:"none"}}>
    <GridItem ><Card /></GridItem>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
    <GridItem ><Card /></GridItem>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
    <GridItem ><Card /></GridItem>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
    <GridItem ><Card /></GridItem>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
    </HStack>
    </Box>

  )
}

export default TopAstro