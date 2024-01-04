import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewPost from "./Components/Viewpost";
import CreatePost from "./Components/CreatePost";
import UpdatePost from "./Components/UpdatePost";
import CrudComponent from "./Components/CrudComponent";
import { Circles, TailSpin } from "react-loader-spinner";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";
// import Magnifier from 'react-magnifier';
import {
  GlassMagnifier,
  MOUSE_ACTIVATION,
  Magnifier,
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";

import ReactImageMagnify from "react-image-magnify";
import "./App.css";
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from "./Components/Sidebar";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Openbar: false,
      isOpen: false,
    };
  }
  OpenNavBar = () => {
    this.setState({ Openbar: true });
  };
  CloseNavBar = () => {
    this.setState({ Openbar: false });
  };

  render() {

    return (
      <div>
       <Sidebar/>

        <button
          onMouseMove={this.OpenNavBar}
          onMouseLeave={this.CloseNavBar}
          className="ml-[30rem] "
        >
          {!this.state.Openbar ? (
            <div>
              <span className="flex items-center transition-[height] ease-in-out delay-[8s]">
                More
                <IoIosArrowDown />
              </span>
            </div>
          ) : (
            <div>
              <span className="flex items-center transition-all ">
                More
                <IoIosArrowDown className="rotate-180" />
              </span>
              <section className="text-end">
                <h2>Notification</h2>
                <h2>Advertise</h2>
                <h2>Costumer Care</h2>
                <h3>Download the App</h3>
              </section>
            </div>
          )}
        </button>
       
        {/* <div className="w-[600px] ">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                width: 900,
                height: 880,

                src: "https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg",
              },
              largeImage: {
                src: "https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg",
                width: 950,
                height: 880,
                sizes: 20,
              },
              enlargedImageContainerStyle: Circles,
              enlargedImageContainerDimensions: {
                width: "100%",
                height: "100%",
              },
              enlargedImagePosition: "beside",
            }}
          />
        </div> */}

        {/* <Magnifier src="https://raw.githubusercontent.com/samuelmeuli/react-magnifier/HEAD/.github/demo.gif" width="100%" zoomFactor={2} zoomImgSrc='' mgWidth={300} mgHeight={300} mgBorderWidth={2} mgShape='circle' mgShowOverflow={false} className='overflow-hidden'/> */}
        {/* <GlassMagnifier
  imageSrc="https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg"
  imageAlt="Example"
  allowOverflow={false}
  magnifierBackgroundColor='rgba(255,255,255,.5)'
  // largeImageSrc="./large-image.jpg" // Optional
  square
/>
 
<Magnifier
  imageSrc="https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg"
  imageAlt="Example"
  mouseActivation='click'
  // largeImageSrc="./large-image.jpg" // Optional
  // mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
  // touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
/> */}
        {/* <MagnifierContainer className='flex '>
  <div className="example-class">
    <MagnifierPreview imageSrc="https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg" className='w-[50%]'   />
  </div>
    <MagnifierZoom style={{ height: "400px",width:"100%" }} imageSrc="https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg" />
</MagnifierContainer> */}

        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width="100%"
          controls
          muted={false}
          onClickPreview={true}
       className="ml-16"       />
        {/* <TailSpin
  visible={true}
  height="190"
  width="190"
  color="#980"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  
  /> */}
        <Router >
          <Routes>
            <Route path="/" element={<ViewPost />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:id" element={<UpdatePost />} />
          </Routes>
        </Router>

        {/* <Component/> */}
      </div>
    );
  }
}

export default App;
