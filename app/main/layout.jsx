import Nav from "@/frontend/components/nav/nav";

export default function MainLayout({ children }){
    return(
        <div className="flex">
            <Nav />
            <main className="flex-1 p-4">{children}</main>
        </div>
    )
}