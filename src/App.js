import {useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header';

import Stest from './Components/Stest';
import Navguru from './Components/Navguru.tsx';
import slides from './data.json'
import FlashC from './Components/FlashC';
import flashIData from './flashImage.json'
import Footer from './Components/Footer';
import FlashSale from './Components/FlashSale';
// import UTestmonial from './Components/UpImagHead';
import imag from "./images/logo/sun.svg"
import PAstro from './Components/PAstro';
import Test from './Components/Test';
import Sdemo from './Components/Sdemo';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { productImages } from './assets'
import ManyProblemOneSolution from './Components/ManyProblemOneSolution';
import Card from './Components/Card';
import Testimonial from './Components/Testimonial';
import UserTestimonial from './Components/UserTestimonial';
import StarRating from './Components/StarRating';
import pinfo from "./premiumAstroInfo.json"
import vector from "./images/Vector.png"
import Hslide from './Components/Hslider';
import TopAstro from './Components/TopAstro';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function App() {
  const [isLoading , setLoading] = useState(true);
  useEffect(()=>{
   setTimeout(()=>{
     setLoading(false);
   },1500)
  },[])
  return (
  
<>
{/* <FlashC/> */}
{/* <Testimonial/> */}

{/* <Hslide/> */}
<Header /> 
<FlashSale/>
<Stest slides={slides}/>
<PAstro pinfo={pinfo}/>
<img src={vector} alt="" />
<ManyProblemOneSolution/> 
<UserTestimonial/>
<img src={vector} alt="" />
<TopAstro/>
<Footer/>

</>
    // <Card/>
    // <div style={{
    //   height: '100vh',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center'
// {/* <StarRating value={2} /> */}
    // }}>
    //   <div style={{
    //     width: '800px',
    //     height: '700px',
    //     backgroundColor: '#fff',
    //     padding: '20px'
    //   }}>
    //     sf
    //     <ProductImagesSlider images={productImages} />
    //   </div>
    // </div>
  //   <>

  //   {/* <UTestmonial heading="User Testimonial" image={imag} /> */}
  //   {/* <UTestmonial heading="UserTestimonial"/> */}
 
// {/* <Test/> rotete sun */}


  //   {/*   done  */}
  //   </>
  );
}

export default App;





