



export default function Cards(){

    return(
        <section className="flex flex-col dark:bg-foreground_dark bg-foreground p-5 gap-3 rounded-2xl">
            <p className="text-white text-2xl">My Cards</p>
            <div className="flex flex-col">
                <span className="text-text_gray text-sm">Cards Balance</span>
                <p className="text-white text-2xl">$15,595.015</p>
            </div>
            {/* Card and Swiper */}
            <div className="bg-gradient-to-r from-[#9C2CF3] to-[#3A6FF9] h-[200px] max-w-[320px] rounded-2xl">
            </div>
            <div className="flex gap-4 ">
                <a href="" className="bg-[#6359E9] text-white flex w-36 h-11 items-center justify-center rounded-[10px]">Manage Cards</a>
                <a href="" className="bg-transparent text-white flex w-36 h-11 border border-white rounded-[10px] items-center justify-center">Transfer</a>
            </div>
        </section>
    )
}