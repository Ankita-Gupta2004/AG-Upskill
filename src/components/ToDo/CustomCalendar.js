import React, { useState } from "react";
import "./CustomCalendar.css";

const CustomCalendar = ({ onDateSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
    if (onDateSelect) onDateSelect(date);
  };

  const calendarDays = [];

  // Empty cells for first week
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="cc-day cc-empty"></div>);
  }

  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();

    const isSelected =
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear();

    calendarDays.push(
      <div
        key={day}
        className={`cc-day ${isToday ? "cc-today" : ""} ${isSelected ? "cc-selected" : ""}`}
        onClick={() => handleDateClick(day)}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="cc-container">
      <div className="cc-header">
        <button onClick={prevMonth}>&lt;</button>
        <h3>{months[currentMonth]} {currentYear}</h3>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="cc-weekdays">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div key={d} className="cc-weekday">{d}</div>
        ))}
      </div>
      <div className="cc-days">{calendarDays}</div>
    </div>
  );
};

export default CustomCalendar;
