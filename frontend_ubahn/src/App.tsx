/* eslint-disable jsx-a11y/no-redundant-roles */
import "./App.css";
import { LinesSection } from "./components";

function App() {
  return (
    <div className="App">
      <main id="main-content">
        <div className="container">
          <LinesSection />
        </div>
      </main>
      <footer className="primary-footer">
        <ul role="list" className="social-list">
          <li>
            <a href="https://bvg.de">BVG</a>
          </li>
          <li>
            <a href="https://lofine.com">LOFINO</a>{" "}
            {/* TS: it's https://www.lofino.de ;)  */}
          </li>
        </ul>
        <p>© Steffen Lohbrandt</p>
      </footer>
    </div>
  );
}

export default App;
