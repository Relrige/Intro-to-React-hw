import "./App.css";
import { Biography } from "./components/Biography";
import { Galerry } from "./components/Gallery";
import { GALLERY_ITEMS } from "./Gallery_items";
import { Rating } from "./components/Rating";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pablo Ruiz Picasso</h1>
      </header>
      <Biography />
      {GALLERY_ITEMS.map((i, k) => (
        <Galerry key={i.k} {...i} />
      ))}
      <Rating />
    </div>
  );
}

export default App;
