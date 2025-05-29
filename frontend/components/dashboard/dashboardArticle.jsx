import Activity from "@/frontend/modules/activity/activity";
import Cards from "@/frontend/modules/cards/cards";




export default function DashboardArticle(){

    return(
        <section className="flex flex-col gap-6">
            <Cards />
            <Activity />
        </section>
    )
}