import "./app.css";
import HomePage from "./components/HomePage/HomePage";
import Map from "./components/Map"

function App() {
  
  return (
    <>
    <div style={{ height: "100vh", width: "100%"}}>
      <HomePage/>
    </div>
    <div style={{ height: "100vh", width: "100%" }}>
      <Map/>
    </div>
    </>
  );
}

export default App;