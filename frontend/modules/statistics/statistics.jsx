


// 
// Beta. (Need to change API connect, change %, data, colors)
// 





import Image from "next/image"



export default function Statistics({type}){
    return(
        <section className="flex rounded-2xl px-6 py-10 dark:bg-foreground_dark bg-foreground">
            <div className={`${type == "Income" ? "bg-income" : "bg-outcome"} p-4 w-14 h-14 rounded-xl flex items-center justify-center`}>
                <Image 
                    src={type == "Income" ? "/image/downArrow.svg" : "/image/upArrow.svg"}
                    width={16}
                    height={16}
                    alt="arrow"
                />
            </div>
            <div className="flex flex-col ml-6">
                <span className="text-text_gray">Total {type}</span>
                <div className="flex justify-between gap-8">
                    <p className="text-text dark:text-text_dark text-2xl">$632.000</p>
                    <span className={type == "Income" ? "text-[#02B15A] bg-[#02B15A15] rounded-lg py-1 px-3" : "text-[#E41414] bg-[#E4141415] rounded-lg py-1 px-3"}>{type == "Income" ? "+" : "-"}1.29%</span>
                </div>
            </div>
        </section>
    )


}