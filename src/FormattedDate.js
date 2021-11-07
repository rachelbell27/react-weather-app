import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let type = "am";
  if (hour >= 12) {
    hour = hour - 12;
    type = "pm";
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  let displayDate = `${day}, ${hour}:${minute}${type}`;

  return <span className="list-info"> {displayDate}</span>;
}
