import Featured from "@/components/(landing)/Featured";
import Hero from "@/components/(landing)/Hero";
import Solutions from "@/components/(landing)/Solutions";
import Mission from "@/components/(landing)/Mission";
import Navbar from "@/components/Navbar";

export default function Landing(){
    return(
        <>
            <Navbar page="Landing"/>
            <Hero />
            <Solutions />
            <Featured />
            <Mission /> 
        </>
    )
}