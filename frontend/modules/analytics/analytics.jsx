"use client";




// 
// Beta (Need to change - API, data, dropdown to select years and etc..)
// 




import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Analytics() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined" || !chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const data = [
            { year: 2010, income: 10, outcome: 5 },
            { year: 2011, income: 20, outcome: 15 },
            { year: 2012, income: 15, outcome: 10 },
            { year: 2013, income: 25, outcome: 20 },
            { year: 2014, income: 22, outcome: 18 },
            { year: 2015, income: 30, outcome: 25 },
            { year: 2016, income: 28, outcome: 22 },
            { year: 2017, income: 28, outcome: 22 },
            { year: 2018, income: 28, outcome: 22 },
            { year: 2019, income: 28, outcome: 22 },
        ];

        const ctx = chartRef.current.getContext("2d");
        if (ctx) {
            chartInstance.current = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: data.map((row) => row.year),
                    datasets: [
                        {
                            label: "Income",
                            data: data.map((row) => row.income),
                            backgroundColor: "#64CFF6",
                        },
                        {
                            label: "Outcome",
                            data: data.map((row) => row.outcome),
                            backgroundColor: "#6359E9"
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            stacked: false, // Отключаем "стек" (чтобы не накладывались друг на друга)
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <section className="p-5 rounded-2xl bg-foreground dark:bg-foreground_dark">
            <section className="flex justify-between items-center">
                <p className="text-text dark:text-text_dark">Analytics</p>
                <div className="flex items-center gap-10">
                    <p className="flex items-center text-text dark:text-text_dark">
                        <span className="w-3 h-3 bg-income rounded-full mr-3"></span>
                        Income
                    </p>
                    <p className="flex items-center text-text dark:text-text_dark">
                        <span className="w-3 h-3 bg-outcome rounded-full mr-3"></span>
                        Outcome
                    </p>
                </div>
            </section>
            <section className="w-full h-[300px]">
                <canvas ref={chartRef}></canvas>
            </section>
        </section>
    );
}