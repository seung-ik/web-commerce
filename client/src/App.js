import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Header from "./components/headers/Header";
import Mainpage from "./components/mainpages/Mainpage";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Mainpage />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
