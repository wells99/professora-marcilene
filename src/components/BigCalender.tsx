"use client"
import { Calendar, momentLocalizer, Views, View, ViewsProps } from "react-big-calendar"
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from "react"

const localizer = momentLocalizer(moment)

const BigCalender = () => {
    // Declaramos o estado 'view' e a função 'setView' aqui, dentro da função do componente.
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selecteView: View)=>{
        setView(selecteView);
    }
    return (
        
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "98%" }}
                // Você pode usar o estado 'view' para controlar a visualização do calendário.
                 views={["work_week","day"]}
                 view={view}
                 onView={handleOnChangeView}
                 min={new Date(2025,1,0,9,0,0)}
                 max={new Date(2025,1,0,21,0,0)}
            />
    );
};

export default BigCalender;