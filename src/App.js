import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="Travel" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Madeline Hardy. See my{" "}
            <a href="https://github.com/Mad-016/dictionary-project">GitHub</a>.
          </small>
        </footer>
      </div>{" "}
    </div>
  );
}
