import { useWeatherContext } from "../../contexts/WeatherContext.jsx";
import { useTranslation } from 'react-i18next';
export function DayInfo() {
  const { current } = useWeatherContext();
const { t } = useTranslation();
  const uviLevel = (uviIndex) => {
    if (uviIndex <= 2) return <>{t("low")}</>;
    if (uviIndex <= 5) return <>{t("average")}</>;
    if (uviIndex <= 7) return <>{t("high")}</>;
    if (uviIndex > 7) return <>{t("very_high")}</>;
  };

  if (!current) return null;
  return (
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation">
          <span className="title">{t('uvi')}</span>
          <span className="value">
              {Math.round(current.uvi)} ({uviLevel(Math.round(current.uvi))})
          </span>
        </div>
        <div className="humidity">
          <span className="title">{t('humidity')}</span>
          <span className="value">{current.humidity} %</span>
        </div>
        <div className="wind">
          <span className="title">{t('wind')}</span>
          <span className="value">{Math.round(current.wind_speed)} м/c</span>
        </div>
        <div className="pressure">
          <span className="title">{t('pressure')}</span>
          <span className="value">{(current.pressure * 0.75006375541921).toFixed(2)} мм рт. ст.</span>
        </div>
      </div>
    </div>
  );
}
