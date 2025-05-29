


// 
// Beta. (Need to change API connect, change %, data, colors)
// 





import Image from "next/image"



export default function Statistics({type}){
    return(
        <section className="flex rounded-2xl px-6 py-4 dark:bg-foreground_dark bg-foreground w-full">
            <div className={`${type == "Income" ? "bg-income" : "bg-outcome"} p-4 w-11 h-11 rounded-xl flex items-center justify-center`}>
                <Image 
                    src={type == "Income" ? "/image/downArrow.svg" : "/image/upArrow.svg"}
                    width={14}
                    height={14}
                    alt="arrow"
                />
            </div>
            <div className="flex flex-col ml-4 flex-1">
                <span className="text-text_gray text-sm">Total {type}</span>
                <div className="flex justify-between w-full">
                    <p className="text-text dark:text-text_dark text-lg">$632.000</p>
                    <span className={type == "Income" ? "text-[#02B15A] bg-[#02B15A15] rounded-lg py-1 px-3 text-sm" : "text-[#E41414] bg-[#E4141415] rounded-lg py-1 px-3 text-sm"}>{type == "Income" ? "+" : "-"}1.29%</span>
                </div>
            </div>
        </section>
    )


}