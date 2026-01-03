import { useEffect } from "react";
import Hero from "@/components/tools/Hero";
import Navbar from "@/components/Navbar";
// import Featured from "@/components/tools/Featured";
import Info from "@/components/tools/Info";

export default function Tools(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <Navbar page={"Tools"}/>   
            <Hero/> 
            {/* <Featured/>  */}
            <Info/> 
        </div>
    )
}