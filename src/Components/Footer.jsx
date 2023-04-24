import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Heading,
    GridItem,
    Grid,
    Button,
  } from '@chakra-ui/react';
  import { ReactNode, useEffect,useState } from 'react';
  
  import guruji from "../images/header/guruji_logo.png"
  import facebook from "../images/logo/facebook.svg"
  import instagram from "../images/logo/instagram.svg"
  import paytm from "../images/logo/paytm.svg"
  import twitter from "../images/logo/twitter.svg"
  import youtube from "../images/logo/youtube.svg"
  import Stripe from "../images/logo/Stripe.svg"
  import Rozerpay from "../images/logo/Rozerpay.svg"
  
  // skelton part
  import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
       const [isLoading , setLoading] = useState(true);
       useEffect(()=>{
        setTimeout(()=>{
          setLoading(false);
        },1500)
       },[])
    return (
      <Box
      bg={'#BD5300'}
        // bg={useColorModeValue('gray.50', 'gray.900')}
        color={'#fff'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                <img src={guruji}/>
              </Box>
              <Text fontSize={'sm'}>
              About Guruji s2 to 3 lines what guruji do and how it works About Guruji s2 to 3 lines what guruji do and how it works
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Facebook'} href={'#'}>
                  < img src={facebook}/>
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <img src={instagram}/>
                </SocialButton>
                <SocialButton label={'Twitter'} href={'#'}>
                   <img src={twitter}/>
                </SocialButton>
                <SocialButton label={'Youtube'} href={'#'}>
                   <img src={youtube}/>
                </SocialButton>
              </Stack>
              <Heading fontSize={'md'}>
              Trusted & Seals
              </Heading>
              <Grid templateColumns='repeat(2, 1fr)'
    gap={4}>
                <GridItem><img src={Rozerpay} alt="" /></GridItem>
                <GridItem><img src={paytm} alt="" /></GridItem>
                <GridItem><img src={Stripe} alt="" /></GridItem>
              </Grid>
                
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'} fontSize={'sm'}>Home</Link>
              <Link href={'#'} fontSize={'sm'}>Privacy Policy</Link>
              <Link href={'#'} fontSize={'sm'}>T & C</Link>
              <Link href={'#'} fontSize={'sm'}>Varied Payment</Link>
              <Stack align={'flex-start'} pt={50}>
              <ListHeader >Collaborate</ListHeader>
              <Link href={'#'} fontSize={'sm'}>Clever Tap</Link>
              <Link href={'#'} fontSize={'sm'}>Exotel</Link>
              <Link href={'#'} fontSize={'sm'}>Facebook</Link>
              <Link href={'#'} fontSize={'sm'}>Quora</Link>
              <Link href={'#'} fontSize={'sm'}>Google</Link>
              <Link href={'#'} fontSize={'sm'}>Youtube</Link>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'} fontSize={'sm'}>Home</Link>
              <Link href={'#'} fontSize={'sm'}>Privacy Policy</Link>
              <Link href={'#'} fontSize={'sm'}>T & C</Link>
              <Link href={'#'} fontSize={'sm'}>Varied Payment</Link>
              <Stack align={'flex-start'} pt={50}>
              <ListHeader>Important Link</ListHeader>
              <Link href={'#'} fontSize={'sm'}>Tarot Reader</Link>
              <Link href={'#'} fontSize={'sm'}>Vedic Astrology </Link>
              <Link href={'#'} fontSize={'sm'}>Palmistry </Link>
              <Link href={'#'} fontSize={'sm'}>Gemology</Link>
              <Link href={'#'} fontSize={'sm'}>Vastu</Link>
              <Link href={'#'} fontSize={'sm'}>Numerology</Link>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'column'}>
                <Input
                  placeholder={'Your Name'}
                  // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  bg={"white"}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <Input
                  placeholder={'Mail Id'}
                  
                  // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  bg={"white"}

                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <Input
                  placeholder={'Write query'}
                  // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  bg={"white"}

                  h={70}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <Button
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  
                >Submit</Button>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }