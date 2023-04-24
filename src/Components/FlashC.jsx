import React from 'react'
import './s1.css'
import twitter from "../images/logo/twitter.svg"
  import youtube from "../images/logo/youtube.svg"
  const images = [{
    "image": {twitter}
  }]
const colors = ["#0088FE", "#00C49F", "#FFBB28",{twitter}];
const delay = 2500;

function FlashC() {
  
  // console.log(colors[twitter]);
  // console.log(images[0].image);
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((background, index) => (
          <div
            className="slide"
            key={index}
            style={{ background }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}


export default FlashC