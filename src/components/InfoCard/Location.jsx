import { useWeatherContext } from "../../contexts/WeatherContext.jsx";
import cities from "/src/RussianCities.json";
import { useTranslation } from 'react-i18next';
import {useState} from "react";
import "../../languages/i18n";

export function Location() {
  const { setCity } = useWeatherContext();
  // const { t } = useTranslation();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState("ru");
  const handleLanguage = (event) => {
    changeLanguage(event.target.value);
  };

  const changeLanguage = (value, location) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };
  function handleChange(event) {
    const selectedCity = cities.filter(
      (city) => city.id === Number(event.target.value)
    )[0];
    setCity(selectedCity);
  }

  return (
    <div className="location-container">
      <p align='center'><h2>{t("city_change")}</h2></p>
      <select
        defaultValue={"7"}
        onChange={handleChange}
        className="location-button"
      >
        {cities.map((city) => {
          return (
            <option value={city.id} key={city.id}>
              {city.name}
            </option>
          );
        })}
      </select>
      <p align='center'><h2>{t("languages_change")}</h2></p>
      <select
            className="selected-language"
            value={currentLanguage}
            onChange={(e) => handleLanguage(e)}
          >
            <option selected value="ru">
              {t("languages.ru")}
            </option>
            <option value="en">{t("languages.en")}</option>
            <option value="es">{t("languages.es")}</option>
            <option value="fr">{t("languages.fr")}</option>
      </select>
    </div>
  );
}
