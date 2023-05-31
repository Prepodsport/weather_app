import { DayInfo } from "./DayInfo.jsx";
import { WeekInfo } from "./WeekInfo.jsx";
import { Location } from "./Location.jsx";

export function InfoCard() {
  return (
    <div className="info-side">
      <DayInfo />
      <WeekInfo />
      <Location />
    </div>
  );
}
