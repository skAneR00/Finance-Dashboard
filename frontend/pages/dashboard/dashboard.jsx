import DashboardMain from "@/frontend/components/dashboard/dashboardMain";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardArticle from "@/frontend/components/dashboard/dashboardArticle";



export default function Dashboard() {



    return (
        <section className="flex flex-col w-3/4 h-full bg-transparent">
            <DashboardHeader />
            <section className="flex px-6">
                <DashboardMain />
                <DashboardArticle />
            </section>
        </section>
    )
}