import ElementList from "./components/ElementList";
import Header from "./header/Header";
import { date } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header></Header>
      <main className="min-vh-100"></main>
      <footer></footer>
    </div>
  );
}
