import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Grid,
  GridItem,
  Heading,
  Center,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import guruji from "../images/header/guruji_logo.png"
import hright from "../images/header/hright_logo_g.png"
import prvt from "../images/logo/prvt.svg"
import verify from "../images/logo/verify.svg"
import refund from "../images/logo/refund.svg"
import Customer from "../images/logo/Customer.svg"
import paysac from "../images/logo/paysac.svg"
const Links = ['Home', 'Call with Astrologer', 'Live (Coming Soon) '];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div div style={{"position":"relative","color":"white"}}>
    
      <img src="images/header/h_bg.png" alt="" style={{"position":"absolute", width:"100%","height":"100%","zIndex":"-100"}}/>
      <Box  px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><img src={guruji} alt={guruji} /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={hright}
                />
              </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Grid align='center' style={{"margin":"auto", "maxWidth":"500px"}} >
        <GridItem mt={"120px"}><Heading>“Astrology for Clarity”</Heading></GridItem>
        {/* <GridItem mt={30} align='center' ju maxWidth={400}><Text>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy </Text></GridItem> */}
        <GridItem mt={30} ><Center w="80%">Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy </Center></GridItem>
        <GridItem my={30} ><Button
                  width={150}
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  
                >Consult Now</Button></GridItem>
        
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)'
    gap={4} mt={5} pb={"50px"}>
                <GridItem>
                  <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']}>
                  <GridItem><img src={Customer} alt="" /></GridItem>
                  <GridItem><Text fontSize=".8rem" >24 X 7 Customer Support</Text></GridItem>
                  </Grid>
                </GridItem>
                <GridItem>
                  <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']}>
                  <GridItem><img src={refund} alt="" /></GridItem>
                  <GridItem><Text fontSize=".8rem">100% Refund if Unsatisfied</Text></GridItem>
                  </Grid>
                </GridItem>
                <GridItem>
                  <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']}>
                  <GridItem><img src={prvt}  alt="" /></GridItem>
                  <GridItem><Text fontSize=".8rem">Private & Confidential</Text></GridItem>
                  </Grid>
                </GridItem>
                <GridItem>
                  <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']}>
                  <GridItem><img src={verify} alt="" /></GridItem>
                  <GridItem><Text fontSize=".8rem">Verified Astrologer</Text></GridItem>
                  </Grid>
                </GridItem>
                <GridItem>
                  <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2,1fr)']} gap={6}>
                  <GridItem ><img src={paysac} alt="" /></GridItem>
                  <GridItem><Text fontSize=".8rem">Secure Payment</Text></GridItem>
                  </Grid>
                </GridItem>
              </Grid>
    </div>
  );
}