import React from "react";

const DaySelector = (props) => {

    let year = 2019;
    let day = 1;
    let month = props.month - 1;

    let date = new Date(year, month, day);

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    let result = weekday[date.getDay()];
    
    return <div>Month {props.month}/{year} starts {result}</div>
}

export default DaySelector;
