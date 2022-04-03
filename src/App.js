import Card from "./components/Card";
import { RatingScoreProvider } from "./context/RatingScoreContext";
import { SubmitProvider } from "./context/SubmitContext";

function App() {
  return (
    <div className="min-h-screen bg-very-dark-blue grid place-items-center">
      <RatingScoreProvider>
        <SubmitProvider>
          <Card />
        </SubmitProvider>
      </RatingScoreProvider>
    </div>
  );
}

export default App;
