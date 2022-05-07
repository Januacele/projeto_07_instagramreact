import ReactDOM from "react-dom";

import NavbarHeader from "./Top/NavbarHeader";
import Main from "./MainContent/Main";
import MobileBackground from "./MobileBackground";

function App() {
  return (
    <div>
      <NavbarHeader />
      <Main />
      <MobileBackground />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
