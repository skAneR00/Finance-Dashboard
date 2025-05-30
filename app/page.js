import Dashboard from "@/frontend/pages/dashboard/dashboard";
import Nav from "@/frontend/components/nav/nav";
import { AppPageRouteModule } from "next/dist/server/route-modules/app-page/module.compiled";
import Image from "next/image";
import Regisatrion from "@/frontend/pages/registration/registration";

export default function Home() {
  return (
    <section className="flex">
      {/* <Nav /> */}
      {/* <Dashboard /> */}
      <Regisatrion />
    </section>
  );
}
