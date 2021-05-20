import { useState } from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
import {PinDrop} from "@material-ui/icons";

function App() {

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 2
  });

  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken ={process.env.REACT_APP_MAPBOX} 
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/ptlharshil/ckox30sx810jc17s66viwy6hx" >
        <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
           <PinDrop style={{color:'slateblue',fontSize:viewport.zoom*10}}/>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;
