import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./App.css";
import events from "./events";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      events={events}
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
