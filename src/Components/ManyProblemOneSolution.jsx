import { Grid, GridItem, HStack } from '@chakra-ui/react'
import React from 'react'
import UpImagHead from './UpImagHead'
import cbi from "../images/logo2/cbi.svg"
import mpsin from "../images/logo2/mpsin.svg"
import mpsout from "../images/logo2/mpsout.svg"
const ManyProblemOneSolution = () => {
  return (
    <>
    <UpImagHead heading="Many Problem One Solution"/>
    <Grid 
     templateColumns={{ md:'repeat(3, 1fr)'}}
     templateAreas={{md:`"header nav main"` , base: ``}}>
    <GridItem area={'header'} display={{ base: "none", md: "grid" }}>
      <Grid justifyContent={"center"}  >
      <GridItem ><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}}/></GridItem>
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} /></GridItem>
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(71 233 118 / 90%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} /></GridItem>
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} /></GridItem>
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}} /></GridItem>
      </Grid>
      </GridItem>
      <GridItem area={'nav'}  m={{base:20,md:0}}>
      <div className='suns2' style={{"width":"100%"}}>
            <img src={mpsout} className='rot so2'  />
            <img src={mpsin} className='su2 '/>
        </div>
      </GridItem>
      <GridItem area={'main'} display={{ base: "none", md: "grid" }}>
      <Grid justifyContent={"center"} >
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} /></GridItem>
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} /></GridItem>
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} /></GridItem>
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} /></GridItem>
      <GridItem><img src={cbi} alt="" style={{"box-shadow": "rgba(24 233 239 / 93%) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} /></GridItem>
      </Grid>
      </GridItem>
      </Grid>

    

      <HStack spacing={4} overflow='auto' display={{base:"flex",md:"none"}} className='hsbar'>
      <img src={cbi} alt="" style={{"box-shadow": "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}} />
      <img src={cbi} alt="" style={{"box-shadow": "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}} />
      <img src={cbi} alt="" style={{"box-shadow": "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}} />
      <img src={cbi} alt="" style={{"box-shadow": "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}} />
      <img src={cbi} alt="" style={{"box-shadow": "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}} />
      </HStack>
    </>
  )
}

export default ManyProblemOneSolution