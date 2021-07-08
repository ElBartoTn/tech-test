import "./App.css";
import { Wrapper } from "./component/atoms/wrapper";
import Header from "./component/molecules/header";
import Parfums from "./component/routes/Parfums";

function App() {
  return (
    <div>
      {
        <Wrapper>
          <Header></Header>
          <Parfums></Parfums>
        </Wrapper>
      }
    </div>
  );
}

export default App;
