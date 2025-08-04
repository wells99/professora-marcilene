"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Segunda',
        presença: 70,
        falta: 34,
    },
    {
        name: 'Terça',
        presença: 30,
        falta: 43,
    },
    {
        name: 'Quarta',
        presença: 90,
        falta: 39,
    },
    {
        name: 'Quinta',
        presença: 80,
        falta: 30,
    },
    {
        name: 'Sexta',
        presença: 90,
        falta: 42,
    }
];

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className='flex justify-between items-center text-lg font-semibold'>
                <h1>Attendance</h1>
                <Image src="/moreDark.png" alt="imagem" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar
                        dataKey="presença"
                        fill="#FAE27C"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                        legendType='circle' 
                        radius={[10,10,0,0]}/>

                    <Bar
                        dataKey="falta"
                        fill="#CFCEFF"
                        activeBar={<Rectangle fill="gold" stroke="purple" />}
                        legendType='circle' 
                        radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart