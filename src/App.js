import Card from "./components/Card";
import { RatingScoreProvider } from "./context/RatingScoreContext";

function App() {
  return (
    <div className="min-h-screen bg-very-dark-blue grid place-items-center">
      <RatingScoreProvider>
        <Card />
      </RatingScoreProvider>
    </div>
  );
}

export default App;
