import "./App.css";
import { InfoCard, WeatherSide } from "./components";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="wrapper">
        <div className="container">
          <WeatherSide />
          <InfoCard />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;