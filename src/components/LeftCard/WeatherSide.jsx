import { useWeatherContext } from "../../contexts/WeatherContext.jsx";
import { HiOutlineLocationMarker } from "react-icons/hi";
import 'dayjs/locale/ru'
import dayjs from "dayjs";
import {useTranslation} from "react-i18next";
import React from "react";

export function WeatherSide(template) {
  const { city, current } = useWeatherContext();
  const [ t, i18n ] = useTranslation();
  const WEEKDAYS =[
        <>{t('Sun')}</>,
        <>{t('Mon')}</>,
        <>{t('Tue')}</>,
        <>{t('Wed')}</>,
        <>{t('Thu')}</>,
        <>{t('Fri')}</>,
        <>{t('Sat')}</>
      ]
    // const MONTH =[
    //     <>{t('Jan')}</>,
    //     <>{t('Feb')}</>,
    //     <>{t('Mar')}</>,
    //     <>{t('Aip')}</>,
    //     <>{t('May')}</>,
    //     <>{t('Jun')}</>,
    //     <>{t('Jul')}</>,
    //     <>{t('Aug')}</>,
    //     <>{t('Sep')}</>,
    //     <>{t('Oct')}</>,
    //     <>{t('Nov')}</>,
    //     <>{t('Dec')}</>,
    //   ]
  if (!current) return <div>Загрузка...</div>;

  const WeekDayIndex = dayjs.unix(current.dt).day();
  // const WeekDay = dayjs.unix(current.dt)
  return (
    <div className="weather-side">
      <div className="date-container">
        <h2 className="date-dayname">{WEEKDAYS[WeekDayIndex]}</h2>
        <span className="date-day">
            {dayjs.unix(current.dt).locale('ru').format('DD MMMM YYYY г.')}
        </span>
        <span>
          <HiOutlineLocationMarker color="white" className="location-icon" />
        </span>
        <span className="location">{city.name}</span>
      </div>
      <div className="weather-container">
        <img
          className="weather-icon"
          src={`icons/${current.weather[0].icon}.png`}
        />
        <h1 className="weather-temp">↑ {Math.round(current.temp.max)} °C</h1>
        <h1 className="weather-temp">↓ {Math.round(current.temp.min)} °C</h1>
        <h3 className="weather-desc">{current.weather[0].description}</h3>
      </div>
    </div>
  );
}
