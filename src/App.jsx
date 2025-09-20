import { useState } from "react";

import Start from "./components/Start.jsx";
import Header from "./components/Header";
import Quiz from "./components/Quiz.jsx";

function App() {
    const [started, setStarted] = useState(false);

    if (!started) {
      return <Start onStart={() => setStarted(true)} />
    } else {

  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}
}
export default App;
