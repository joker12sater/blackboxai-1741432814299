import React, { useState } from 'react';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample events data
  const events = [
    { id: 1, title: 'Community Meeting', date: '2024-01-20', time: '10:00 AM', location: 'Community Hall' },
    { id: 2, title: 'Cultural Festival', date: '2024-01-25', time: '2:00 PM', location: 'City Park' },
    { id: 3, title: 'Business Workshop', date: '2024-01-30', time: '3:30 PM', location: 'Conference Center' },
  ];

  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weeks = [];
  let week = Array(7).fill(null);

  // Fill in the days
  days.forEach((day, index) => {
    const dayIndex = (index + firstDayOfMonth) % 7;
    if (dayIndex === 0 && index !== 0) {
      weeks.push([...week]);
      week = Array(7).fill(null);
    }
    week[dayIndex] = day;
  });
  if (week.some(day => day !== null)) {
    weeks.push(week);
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Event Calendar</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            Previous
          </button>
          <button 
            onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-2">
              {week.map((day, dayIndex) => (
                <div 
                  key={dayIndex}
                  className={`
                    p-2 text-center border rounded
                    ${day ? 'hover:bg-gray-100 cursor-pointer' : ''}
                    ${day === selectedDate.getDate() ? 'bg-blue-500 text-white' : ''}
                  `}
                  onClick={() => day && setSelectedDate(new Date(selectedDate.setDate(day)))}
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-600">
                {event.date} at {event.time}
              </p>
              <p className="text-sm text-gray-600">
                Location: {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
