import dayjs from "dayjs";
import {useTranslation} from "react-i18next";
import React from "react";


export function Day({ item, className, onClick }) {
  const WeekDayIndex = dayjs.unix(item.dt).day();
  const [ t, i18n ] = useTranslation();
  const WEEKDAYS_SHORT =[
        <>{t('7')}</>,
        <>{t('1')}</>,
        <>{t('2')}</>,
        <>{t('3')}</>,
        <>{t('4')}</>,
        <>{t('5')}</>,
        <>{t('6')}</>
      ]
  return (
    <li className={className} onClick={onClick}>
      <img
        className="day-icon"
        src={`icons/${item.weather[0].icon}.png`}
      />
      <span className="day-name">{WEEKDAYS_SHORT[WeekDayIndex]}</span>
      <span className="day-temp">{Math.round(item.temp.max)} °C</span>
      <span className="day-temp-min">{Math.round(item.temp.min)} °C</span>
    </li>
  );
}
