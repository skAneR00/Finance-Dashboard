import Dashboard from "@/frontend/pages/dashboard/dashboard";
import Nav from "@/frontend/components/nav/nav";
import { AppPageRouteModule } from "next/dist/server/route-modules/app-page/module.compiled";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex">
      <Nav />
      <Dashboard />
    </section>
  );
}
