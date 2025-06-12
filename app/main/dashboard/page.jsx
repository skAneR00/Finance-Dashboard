"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/frontend/pages/dashboard/dashboard";
import Nav from "@/frontend/components/nav/nav";

export default function DashboardPage() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            router.push("/registration");
        } else {
            setIsAuthorized(true); // Показываем Dashboard только если авторизован
        }
    }, []);

    if (!isAuthorized) return null; // можно показывать спиннер или просто пусто

    return (
        <section className="flex">
            <Dashboard />
        </section>
    )
}
