import { FC } from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((ev, ind) => {
          return <div key={ind}>{ ev.description }</div>
        })}
      </div>
    );
  }

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
