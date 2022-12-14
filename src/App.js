import React, { useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import './App.css';
import MindARViewer from './mindar-viewer';
import MultiTarget from './multi-target';
import MultiTrack from './multi-track';
import 'mind-ar/dist/mindar-image-three.prod.js';

function App() {
  const [started, setStarted] = useState(false);
  const [targeted, setTargeted] = useState(false);
  const [tracked, setTracked] = useState(false);

/*const [click_type, setClickType]=useState("");*/
  return (
    <div className="App">
      <h1>Example React component with <a href="https://github.com/hiukim/mind-ar-js" target="blank">MindAR</a></h1>

      <div>
	   {!started && <button onClick={() => {setStarted(true)}}>Start Image Tracking</button>}
	   {started && <button onClick={() => {setStarted(false)}}>Stop Image Tracking</button>}
     {/* </div> */}

     {/* <div> */}
      {!targeted && <button onClick={() => {setTargeted(true)}}>Start Multi-Target</button>}
	    {targeted && <button onClick={() => {setTargeted(false)}}>Stop Multi-Target</button>}
     {/* </div> */}
  
     {/* <div>  */}
     {!tracked && <button onClick={() => {setTracked(true)}}>Start Multi-Track</button>}
     {tracked && <button onClick={() => {setTracked(false)}}>Stop Multi-Track</button>}
     </div>
         
    

      {started === true && (
	    <div className="container">
	         <MindARViewer/>
	         <video></video>
	    </div> 
      )}

      {targeted === true && (
	    <div className="container">
            <MultiTarget/>
	          <video></video>
	    </div>
      )}

      {tracked === true && (
	    <div className="container">
            <MultiTrack/>
	          <video></video>
	    </div>
      )}

</div>
  );
}

export default App;
