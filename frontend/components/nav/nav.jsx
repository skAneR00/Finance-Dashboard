"use client"

// 
// Beta. ( Need to change - Accounts, Themes )
// 



import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
    const [active, setActive] = useState("Dashboard");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const navItems = [
        { label: "Dashboard", icon: "/image/dashboard.svg" },
        { label: "Analytics", icon: "/image/analytics.svg" },
        { label: "My Wallet", icon: "/image/wallet.svg" },
        { label: "Accounts", icon: "/image/profile.svg" },
    ];
    const downNavItems = [
        {label: "Security", icon: "/image/security.svg"},
        {label: "Help Centre", icon: "/image/help.svg"}
    ];

    const accounts = [
        {name:"Yuriy", avatar:"/image/avatar.png"}, 
        {name:"Test", avatar:"/image/avatar.png"}
    ];

    // Загружаем тему из localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "dark") {
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
            } else {
                setIsDarkMode(false);
                document.documentElement.classList.remove("dark");
            }
        }
    }, []);

    // Переключение темы
    const handleToggle = () => {
        const newTheme = !isDarkMode ? "dark" : "light";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    // Закрытие Dropdown с аккаунтами при клике вне
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section className="flex flex-col items-center justify-around w-1/5 h-screen dark:bg-foreground_dark bg-foreground rounded-e-2xl">
            
            {/* Logo */}
            
            <section className="flex w-full items-center justify-center">
                <Image src="/image/Logo.svg" width={200} height={50} alt="Logo" />
            </section>
            
            {/* Nav-bar */}

            <section className="flex flex-col">
                <section className="flex flex-col border-b-[1px] border-[#4B4B99] gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href="#"
                                className={`nav-button text-text dark:text-text_dark ${active === item.label ? "activ" : ""}`}
                                onClick={() => setActive(item.label)}
                            >
                                <Image
                                    src={item.icon}
                                    width={24}
                                    height={24}
                                    alt={item.label}
                                />
                                {item.label}
                            </a>
                        ))}
                </section>
                <section className="flex flex-col mt-3">
                    {downNavItems.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className="nav-button text-text dark:text-text_dark"
                        >
                            <Image
                                src={item.icon}
                                width={24}
                                height={24}
                                alt={item.label}
                            />
                            {item.label}
                        </a>
                    ))}
                    <div className="flex items-center space-x-2 nav-button">
                        <label className="flex items-center w-full justify-between">
                            <div className="flex gap-3">
                                <Image
                                    src={isDarkMode ? "/image/moon.svg" : "/image/sun.svg"}
                                    width={24}
                                    height={24}
                                    alt="theme"
                                />
                                <span className="text-text dark:text-text_dark">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={isDarkMode}
                                    onChange={handleToggle}
                                />
                                <div className="flex items-center px-1 w-14 h-8 dark:bg-activ bg-white rounded-full relative cursor-pointer">
                                    <div
                                        className={`absolute w-6 h-6 bg-activ dark:bg-white rounded-full transition-all duration-300 ${isDarkMode ? "translate-x-6 bg-black" : ""
                                            }`}
                                    />
                                </div>
                            </div>
                        </label>
                    </div>
                </section>
            
            </section>

            {/* Accounts */}


            {/* 
            
                Need to change - Ability to add accs in dropdown. 

            */}

            <div className="relative" ref={dropdownRef}>
                {/* 🔘 Кнопка */}
                <section className="flex items-center justify-between nav-button" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <Image
                            src="/image/avatar.png"
                            width={60}
                            height={60}
                            alt="Avatar"
                            className="rounded-full"
                        />
                        <div>
                            <p className="text-text dark:text-text_dark font-bold">Yuriy</p>
                            <span className="text-text dark:text-text_dark">Frontend Dev</span>
                        </div>
                    </div>
                    <Image
                        src="/image/arrow.svg"
                        width={12}
                        height={7}
                        alt="arrow"
                        className={`transition-all duration-300 cursor-pointer ${isOpen ? "rotate-180" : ""}`}
                    />
                </section>

                {/* ⬆️ Выпадающее меню */}
                {isOpen && (
                    <div className="absolute flex-col bottom-[100%] mb-2 w-full px-1 bg-white dark:bg-background_dark rounded-xl shadow-lg py-2 z-50">
                        {/* ➕ Добавить аккаунт */}
                        <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-foreground_dark cursor-pointer text-primary font-semibold">
                            ➕ Add Account
                        </div>

                        {/* Список аккаунтов */}
                        {accounts.map((account, index) => (
                            <div
                                key={index}
                                className="flex mt-2 gap-2 px-4 py-2 text-text dark:text-text_dark hover:bg-gray-100 dark:hover:bg-foreground_dark cursor-pointer"
                            >
                                <Image
                                    className="rounded-full"
                                    src={account.avatar}
                                    width={32}
                                    height={32}
                                    alt="avatar"
                                ></Image>
                                {account.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
    </section >
  );
}