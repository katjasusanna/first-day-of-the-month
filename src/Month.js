import React from 'react';
import DaySelector from './Day';
import { useState } from 'react';

const MonthSelector = () => {
    
    let months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" }
    ];

    const [month, setMonth] = useState(1);

    let monthOptions = [];
        for (const [index, value] of months.entries()) {
        monthOptions.push(<option key={value.id}>{value.id}</option>);
        
         }

    function monthChangeHandler(event) {
        
         setMonth(event.target.value);
     }

    return (
    <div>
        <br />
        <select onChange={(e) => monthChangeHandler(e)}>{monthOptions}</select>
        <DaySelector month={month}></DaySelector>
    </div>
    );
    };

    
export default MonthSelector;
