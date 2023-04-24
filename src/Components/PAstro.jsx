// import { SimpleGrid, Card,CardHeader,Button,Text,Heading,CardBody,CardFooter } from '@chakra-ui/react'
import React from 'react'
import Card from "./Card.jsx"
import { Box, Flex, Grid, GridItem, HStack } from '@chakra-ui/react'
import UpImagHead from './UpImagHead.jsx'
const PAstro = () => {
  return (
    <Box style={{background: "#FFEFE3",
      position: "sticky"}}>
    <UpImagHead heading="Premium Astrologers"/>
    <Flex justify={"center"}>

    <Grid
     templateColumns={{ md:"repeat(3, 1fr)"}} gap={"20px"} 
     display={{base:"none",md:"grid"}}>
      <Grid>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
      </Grid>

      <Grid mt={"80px"}>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
      </Grid>

      <Grid>
        <GridItem ><Card /></GridItem>
        <GridItem ><Card/></GridItem>
        <GridItem ><Card/></GridItem>
      </Grid>
    </Grid>
    </Flex>
    
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
//     <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
//   <Card>
//     <CardHeader>
//       <Heading size='md'> Customer dashboard</Heading>
//     </CardHeader>
//     <CardBody>
//       <Text>View a summary of all your customers over the last month.</Text>
//     </CardBody>
//     <CardFooter>
//       <Button>View here</Button>
//     </CardFooter>
//   </Card>
//   <Card>
//     <CardHeader>
//       <Heading size='md'> Customer dashboard</Heading>
//     </CardHeader>
//     <CardBody>
//       <Text>View a summary of all your customers over the last month.</Text>
//     </CardBody>
//     <CardFooter>
//       <Button>View here</Button>
//     </CardFooter>
//   </Card>
//   <Card>
//     <CardHeader>
//       <Heading size='md'> Customer dashboard</Heading>
//     </CardHeader>
//     <CardBody>
//       <Text>View a summary of all your customers over the last month.</Text>
//     </CardBody>
//     <CardFooter>
//       <Button>View here</Button>
//     </CardFooter>
//   </Card>
// </SimpleGrid>
  )
}

export default PAstro