


// 
// Beta. (Need to change - Searchbar, Name props, smaller font.)
// 



import Search from "@/frontend/modules/search/search"



export default function DashboardHeader(){



    return(
        <section className="flex justify-between p-7">
            <section className="text-text dark:text-text_dark transition-none">
                <p className="text-xl">Welcome Back, Yuriy 👋</p>
                <span className="text-text_gray text-sm">Here`s what`s happening with your store today.</span>
            </section>
            <section className="">
                <Search 
                    width={400}
                    height={44}
                    bgColor="bg-foreground dark:bg-foreground_dark"
                />
            </section>
        </section>
    )
}