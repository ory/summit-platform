import React from "react";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>Event has started!</span>;
  } else {
    return (
      <span>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </span>
    );
  }
};

const CountdownComponent = () => {
  const eventDate = new Date("2023-11-09T12:00:00");

  return (
    <div className="text-center">
      <h2>Countdown to Ory Summit 2023</h2>
      <Countdown date={eventDate} renderer={renderer} />
    </div>
  );
};

export default CountdownComponent;
