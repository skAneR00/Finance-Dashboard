import Analytics from "@/frontend/modules/analytics/analytics";
import Statistics from "@/frontend/modules/statistics/statistics";
import Transactions from "@/frontend/modules/transactions/transactions";




export default function DashboardMain(){


    return(
        <section className="flex flex-col gap-6 flex-1">
            <div className="flex gap-5">
                <Statistics type="Income"/>
                <Statistics type="Outcome"/>
            </div>
            <Analytics />
            <Transactions />
        </section>
    )
}