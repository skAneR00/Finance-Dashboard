import Analytics from "@/frontend/modules/analytics/analytics";
import Statistics from "@/frontend/modules/statistics/statistics";




export default function DashboardMain(){


    return(
        <section className="flex flex-col gap-6">
            <div className="flex gap-5">
                <Statistics type="Income"/>
                <Statistics type="Outcome"/>
            </div>
            <Analytics />
        </section>
    )
}