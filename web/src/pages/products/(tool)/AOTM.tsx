import Navbar from '@/components/Navbar';
import Hero from '@/components/(product)/(tool)/aotm/Hero';
import AOTMAdvantage from '@/components/(product)/(tool)/aotm/AOTMAdvantage';

export default function AOTM() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[var(--color-primary-400)] selection:text-black">
            <Navbar page="tools" />
            
            <Hero />

            <div className='h-[200vh] w-full items-center pt-[200px] pb-[200px] justify-center text-center'>
                Adding more content
            </div>
            
            {/* <ProductGallery />
            
            <Specifications />
            
            <AOTMEcosystem />
            
            <Intelligence />
            
            <SmarterByDesign />
            
            <IndustryProblems />
             */}
             
            <AOTMAdvantage />
        </div>
    );
}