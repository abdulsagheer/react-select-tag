import "./App.css";
import Select from "./components/Select/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  return (
    <div className="App">
      <h1>React Select</h1>
      <Select
        onChange={function (
          value: { label: string; value: string } | undefined
        ): void {
          throw new Error("Function not implemented.");
        }}
        options={options}
      />
    </div>
  );
}

export default App;
