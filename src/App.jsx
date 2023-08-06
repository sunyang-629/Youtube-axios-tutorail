import "./App.css";
import Title from "./components/title/title";
import Setup from "./examples/4-global-instance";
import "./axios/global";

function App() {
  return (
    <>
      <div>
        <Title />
        <Setup />
      </div>
    </>
  );
}

export default App;
