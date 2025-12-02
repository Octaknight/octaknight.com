import Featured from "@/components/(landing)/Featured";
import Hero from "@/components/(landing)/Hero";
import Solutions from "@/components/(landing)/Solutions";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Landing(){
    return(
        <>
            <Navbar page="Landing"/>
            <Hero />
            <Solutions />
            <Featured />
        </>
    )
}