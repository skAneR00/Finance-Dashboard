"use client"

import { useState } from "react";

export default function Registration() {
    const [isRegister, setIsRegister] = useState(true);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        identifier: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isRegister ? "http://localhost:4000/api/auth/register" : "http://localhost:4000/api/auth/login";
        const payload = isRegister
            ? { username: form.username, email: form.email, password: form.password }
            : { identifier: form.identifier, password: form.password };

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (res.ok) {
                alert(`✅ ${isRegister ? "Регистрация" : "Авторизация"} успешна`);
                console.log(data);
            } else {
                alert(`❌ Ошибка: ${data.error || "что-то пошло не так"}`);
            }
        } catch (err) {
            alert("Ошибка соединения");
            console.error(err);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white space-y-6">
            <h2 className="text-2xl font-bold text-center">
                {isRegister ? "Регистрация" : "Авторизация"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {isRegister ? (
                    <>
                        <input
                            type="text"
                            name="username"
                            placeholder="Логин"
                            value={form.username}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Почта"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </>
                ) : (
                    <input
                        type="text"
                        name="identifier"
                        placeholder="Логин или почта"
                        value={form.identifier}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                )}
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                    {isRegister ? "Зарегистрироваться" : "Войти"}
                </button>
            </form>

            <p className="text-center text-sm text-gray-500">
                {isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
                <button
                    type="button"
                    onClick={() => setIsRegister(!isRegister)}
                    className="text-blue-600 underline"
                >
                    {isRegister ? "Войти" : "Регистрация"}
                </button>
            </p>
        </div>
    );
}
