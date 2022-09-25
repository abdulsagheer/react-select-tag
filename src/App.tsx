import { useState } from "react";
import "./App.css";
import Select, { SelectOption } from "./components/Select/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption>(options[0]);
  return (
    <div className="App">
      <h1>React Select</h1>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(e: any) => setValue1(e)}
      />
      <Select
        options={options}
        value={value2}
        onChange={(e: any) => setValue2(e)}
      />
    </div>
  );
}

export default App;
