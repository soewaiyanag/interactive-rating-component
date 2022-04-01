import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.img
          src={logo}
          className="App-logo"
          alt="logo"
          drag="x"
          animate={{ rotate: 180 }}
          transition={{
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: "reverse",
            duration: 2,
          }}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
