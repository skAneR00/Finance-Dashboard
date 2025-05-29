import Image from "next/image";

export default function Search({ width, height = 44, bgColor = "bg-foreground" }) {
    return (
        <label
            htmlFor="search"
            className={`${bgColor} flex rounded-[10px] justify-between px-3`}
            style={{ width: width + "px", height: height + "px" }}
        >
            <input
                type="text"
                id="search"
                placeholder="Search for anything...."
                className="placeholder-[#AEABD8] bg-transparent border-none outline-none text-text dark:text-text_dark"
            />
            <Image
                src="/image/search.svg"
                width={16}
                height={16}
                alt="search"
            />
        </label >
    );
}