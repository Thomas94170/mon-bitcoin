import "./App.css";
import { Form } from "./components/Form";
import { Tableau } from "./components/Tableau";

function App() {
  return (
    <>
      <div className="text-center mt-6">Mon Bitcoin</div>

      <Form />

      <div className="text-center mt-6">
        Inscrivez vous afin de recevoir chaque jour à 12H00 la valeur du Bitcoin
        !
      </div>
      <Tableau />
    </>
  );
}

export default App;
