import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import VisibilitySensor from "react-visibility-sensor";
import { ParallaxProvider } from "react-scroll-parallax";

import { Parallax } from "react-scroll-parallax";

import "./App.css";

const App = () => {
  const [myClass, setMyClass] = useState("");
  // const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  // const props = useSpring({ number: 100, from: { number: 0 } });
  const props = useSpring({
    config: {
      duration: 5000
    },
    background: "teal",
    from: {
      background: "coral"
    }
  });

  function onChange(isVisible) {
    // console.log("Element is now %s", isVisible ? "visible" : "hidden");
    // // isVisible ? (myclass = "btn btn-success") : (myclass = "btn btn-success");
    // myclass = "btn btn-success";
    // console.log(myclass);
    // console.log(isVisible);
    isVisible ? setMyClass("btn btn-success") : setMyClass("btn btn-danger");
  }

  return (
    // <div style={{ height: "100vh" }} className='all-center'>
    //   <animated.div style={props}>
    //     <h1>React Spring</h1>
    //   </animated.div>
    // </div>

    // <div style={{ height: "100vh" }} className='all-center'>
    //   <animated.h1>{props.number}</animated.h1>
    // </div>
    <div>
      {/* <div style={{ height: "100vh" }}>
      <h1>My name is some thing</h1>
      </div>
      <div style={{ height: "100vh" }} className='all-center'>
      <animated.div style={props}>
          <div style={style}>
          <animated.h1
              style={useSpring({
                opacity: 1,
                color: "orange",
                from: { opacity: 0, color: "purple" }
              })}
              >
              React Spring
              </animated.h1>
              </div>
              </animated.div>
              
              <VisibilitySensor onChange={onChange}>
              <a href='' className={myClass}>
              Hello
              </a>
              </VisibilitySensor>
            </div> */}
      <div style={{ height: "100vh" }}></div>
      <div style={{ display: "flex" }}>
        <div style={style}></div>
        <ParallaxProvider>
          <Parallax className='custom-class' y={[200, 0]} tagOuter='figure'>
            <div style={style}></div>
          </Parallax>
        </ParallaxProvider>
      </div>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

const style = {
  width: "400px",
  height: "400px",
  background: "teal",
  margin: "2rem"
};

export default App;
