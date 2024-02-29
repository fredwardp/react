import "./App.css";
import Counter from "./components/Counter/Counter";
import DayNight from "./components/Day-Night/Day-Night";
import FAQ from "./components/FAQ/FAQ";
import Input from "./components/Input/Input";

function App() {
  return (
    <section>
      <Counter />
      <Input />
      <DayNight />
      <FAQ />
    </section>
  );
}

export default App;
