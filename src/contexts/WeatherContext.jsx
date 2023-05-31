import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
  const [city, setCity] = useState({
    id: 7,
    name: "Дмитров",
    latitude: "56,3448",
    longitude: "37,5204",
    population: 61607,
    region: "Московская область",
  });

  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=hourly,minutely&units=metric&lang=ru&appid=${apiKey}`
    ).then(({ data }) => {
      setDaily(data.daily);
    });
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        current,
        setCurrent,
        daily,
        setDaily,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
