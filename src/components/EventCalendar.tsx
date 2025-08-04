"use client"

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id:1,
        title:"Titulo do evento",
        time:"12:00 PM - 2:00 PM",
        description:"Aqui está a descrição do evento."
    },{
        id:2,
        title:"Titulo do 2 evento",
        time:"12:00 PM - 2:00 PM",
        description:"Aqui está a descrição do evento."
    },{
        id:3,
        title:"Titulo do 3 evento",
        time:"12:00 PM - 2:00 PM",
        description:"Aqui está a descrição do evento."
    },
]

const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Eventos</h1>
                <Image src="/moreDark.png" alt="opçoes" width={20} height={20}/>
            </div>
            <div className='flex flex-col gap-4'>
                {events.map(evento=> (
                    <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={evento.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-600 font-semibold'>{evento.title}</h1>
                            <span className='text-gray-400 text-xs'>{evento.time}</span>  
                        </div>
                        <p className='mt-2 text-gray-400 text-xs'>{evento.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar