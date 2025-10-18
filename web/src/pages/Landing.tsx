import Featured from "@/components/(landing)/Featured";
import Hero from "@/components/(landing)/Hero";
import Mission from "@/components/(landing)/Mission";
import Solutions from "@/components/(landing)/Solutions";
import Team from "@/components/(landing)/Team";
import Navbar from "@/components/Navbar";

export default function Landing(){
    return(
        <>
            <Navbar />
            <Hero />
            <Solutions />
            <Featured />
            <Mission />
            <Team />
        </>
    )
}