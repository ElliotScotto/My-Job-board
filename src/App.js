import "./App.css";
import Title from "./Components/Title";
import BoxJob from "./Components/BoxJob";

const App = () => {
  return (
    <>
      <header>The Job Board</header>
      <div className="Jobs">
        <BoxJob borderColor={"red"}>
          <Title jobTitle={"test"} />
        </BoxJob>
        <BoxJob borderColor={"green"}></BoxJob>
        <BoxJob borderColor={"yellow"}></BoxJob>
        <BoxJob borderColor={"blue"}></BoxJob>
        <BoxJob borderColor={"pink"}></BoxJob>
        <BoxJob borderColor={"red"}></BoxJob>
        <BoxJob borderColor={"green"}></BoxJob>
        <BoxJob borderColor={"yellow"}></BoxJob>
        <BoxJob borderColor={"blue"}></BoxJob>
      </div>
      <footer>
        Made with <span className="author">React</span> at{" "}
        <span className="author">Le Reacteur</span> By{" "}
        <span className="author">Elliot</span>
      </footer>
    </>
  );
};

export default App;
