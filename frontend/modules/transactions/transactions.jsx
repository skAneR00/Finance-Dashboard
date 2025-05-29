import Search from "../search/search"



export default function Transactions(){


    return(
        <section className="flex flex-col bg-foreground dark:bg-foreground_dark gap-4 rounded-2xl px-6 py-2">
            <section className="flex justify-between items-center">
                <p className="text-text dark:text-text_dark">Transaction</p>
                <div>
                    <Search 
                        width={230}
                        height={38}
                        bgColor="bg-[#27264E] dark:bg-[#27264E]"
                    />
                    {/* Calendar */}
                </div>
            </section>
            <section className="grid grid-cols-4 justify-between ml-2">
                <div>
                    <p className="text-foreground_text">Name</p>
                    {/* .map from api */}
                </div>
                <div>
                    <p className="text-foreground_text">Date</p>
                    {/* .map from api */}
                </div>
                <div>
                    <p className="text-foreground_text">Amount</p>
                    {/* .map from api */}
                </div>
                <div>
                    <p className="text-foreground_text">Status</p>
                    {/* .map from api */}
                </div>
            </section>
        </section>
    )
}