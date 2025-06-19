import "./App.css";
import { Home, Archived } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bin } from "./Pages/Bin/bin"; // Add this import

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home active={"#"} />} />
            <Route
              exact
              path="/archived"
              element={<Archived active={"#archive"} />}
            ></Route>
            <Route
              exact
              path="/bin"
              element={<Bin active={"#bin"} />} // Use Bin page here
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
