


// 
// Beta. (Need to change - Searchbar, Name props, smaller font.)
// 



import Image from "next/image"



export default function DashboardHeader(){



    return(
        <section className="flex justify-between p-7">
            <section className="text-text dark:text-text_dark transition-none">
                <p className="text-2xl">Welcome Back, Yuriy 👋</p>
                <span className="text-text_gray">Here`s what`s happening with your store today.</span>
            </section>
            <section className="">
                <label htmlFor="search" className="w-96 h-11 flex rounded-[10px] dark:bg-foreground_dark bg-foreground justify-between px-3">
                    <input type="text" 
                        id="search" 
                        placeholder="Search for anything...." 
                        className="placeholder-[#AEABD8] bg-transparent border-none outline-none text-text dark:text-text_dark"/>
                    <Image 
                        src="/image/search.svg"
                        width={16}
                        height={16}
                        alt="search"
                    />
                </label>
            </section>
        </section>
    )
}