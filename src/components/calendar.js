import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Calendar extends Component {

  render() {
    return (
      <div className="calendar-wrapper">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[ dayGridPlugin ]}
          weekends={false}
          events={[
              { title: 'event 1', date: '2019-11-01' },
              { title: 'event 2', date: '2019-11-03' }
          ]}
        />
      </div>
    );
  }
}

export default Calendar;