"use client"


// BETA ( Change Tailwind(Themes, colors), fix percent blocks (compare text and % together by 1 block), 
//      create date picker for month, fix main div size(height) )


import Image from "next/image";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Activity(){

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;

        chartInstance.current = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Daily payment", "Hobby", "Other"],
                datasets: [
                    {
                        data: [55, 20, 25], // значения
                        backgroundColor: ["#6c5ce7", "#74b9ff", "#2d2b49"],
                        borderRadius: 10,
                        borderWidth: 0,
                        spacing: -30,
                    },
                ],
            },
            options: {
                cutout: "70%", // толщина кольца
                responsive: true,
                maintainAspectRatio: false,
                rotation: -90, // начинается сверху
                circumference: 180, // полукруг
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);


    return (
        <div className="flex flex-col dark:bg-foreground_dark bg-foreground px-5 py-3 gap-3 rounded-2xl">
            <div>
                <p className="text-white text-xl">Activity</p>
                
                {/* Month picker */}

            </div>
            <div className="relative h-[100px]">
                <canvas ref={chartRef}></canvas>
                {/* Центр */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-2xl font-bold self-end">75%</p>
                </div>
            </div>

            {/* Легенда */}
            <div className="flex justify-between mt-4 px-4 text-white text-sm">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#6c5ce7" }}></span>
                    <span>Daily payment</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#74b9ff" }}></span>
                    <span>Hobby</span>
                </div>
            </div>

            {/* Проценты */}
            <div className="flex justify-between mt-1 px-4 text-white text-sm font-bold">
                <span>55%</span>
                <span>20%</span>
            </div>

            <div className="flex">
                <a href="#" className="flex w-full border mx-4 border-white py-3 justify-center items-center gap-10 rounded-[10px] text-white">
                    View all activity 
                    <Image
                        src={"/image/rightArrow.svg"}
                        width={24}
                        height={24}
                        alt={"arrow"}
                    />
                </a>
            </div>
        </div>
    );
}