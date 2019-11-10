import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

class Calendar extends Component {

  handleSelect(data) {
    console.log("select", data)
  }

  render() {
    return (
      <div className="calendar-wrapper">
        <FullCalendar
          defaultView="timeGridWeek"
          height={1400}
          plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
          selectable={true}
          select={this.handleSelect}
          events={[
              { title: 'Inia jest u mnie', date: '2019-11-12' },
              { title: 'Tu babcia,', date: '2019-11-15' },
              { title: 'Inia jest u mnie, jakby co to dzwoncie ', date: '2019-11-10' }
          ]}
        />
      </div>
    );
  }
}

export default Calendar;