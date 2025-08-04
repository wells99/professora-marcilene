"use client";

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        Receita: 4000,
        Despesa: 2400,
    },
    {
        name: 'Fev',
        Receita: 3000,
        Despesa: 1398,
    },
    {
        name: 'Mar',
        Receita: 7540,
        Despesa: 4800,
    },
    {
        name: 'Abr',
        Receita: 2780,
        Despesa: 3908,
    },
    {
        name: 'Mai',
        Receita: 1890,
        Despesa: 4800,
    },
    {
        name: 'Jun',
        Receita: 2390,
        Despesa: 3800,
    },
    {
        name: 'Julho',
        Receita: 3490,
        Despesa: 4300,
    },
    {
        name: 'Ago',
        Receita: 3490,
        Despesa: 4300,
    },
    {
        name: 'Set',
        Receita: 3490,
        Despesa: 4300,
    },
    {
        name: 'Out',
        Receita: 3490,
        Despesa: 4300,
    },
    {
        name: 'Nov',
        Receita: 3490,
        Despesa: 4300,
    },
    {
        name: 'Dez',
        Receita: 3490,
        Despesa: 4300,
    }
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className='flex justify-between items-center text-lg font-semibold'>
                <h1 className="text-lg font-semibold">Financeiro</h1>
                <Image src="/moreDark.png" alt="imagem" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="name"
                        axisLine={false}
                        tick={{fill:"#d1d5db" }}
                        tickLine={false}
                        tickMargin={10} />

                    <YAxis
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                        tickMargin={20} 
                    />
                    
                    <Tooltip />
                    <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }} />

                    <Line
                        type="monotone"
                        dataKey="Receita"
                        stroke="#C3EBFA"
                        activeDot={{ r: 8 }} 
                        strokeWidth={5}/>

                    <Line
                        type="monotone"
                        dataKey="Despesa"
                        stroke="#CFCEFF"
                        activeDot={{ r: 8 }} 
                        strokeWidth={5}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default FinanceChart