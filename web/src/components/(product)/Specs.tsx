import { Recycle } from "lucide-react";

export default function Specs() {
  return (
    <div className="bg-black text-white">
      {/* Section 1: Specs */}
      <section id="specs" className="min-h-screen py-12 px-4 md:px-8 lg:px-12 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-2xl font-sansation font-light tracking-tight text-zinc-100 mb-2">
              Specifications
            </h2>
            <div className="w-16 h-px bg-[var(--color-primary-400)]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
          {/* Left Column: Asset */}
          <div className="relative flex justify-center items-center h-full min-h-[500px] lg:min-h-[900px]">
            <div className="relative w-full h-full flex items-center justify-center">
               {/* Using the requested asset */}
              <img
                src="/assets/product/robotic_lines.png"
                alt="Robotic Arm Schematic"
                className="object-contain w-full h-full max-h-[1200px] opacity-90 scale-110 origin-center"
              />
            </div>
          </div>

          {/* Right Column: Specs Data */}
          <div className="flex flex-col gap-12 lg:pr-12">
            
            {/* Materials Section */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-2xl font-light tracking-tight text-zinc-100">Materials</h2>
              
              <div className="space-y-3">
                <SpecRow label="Front" value="Painted aluminum 6K series" />
                <SpecRow label="Back" value="Anodized aluminum 6K series" />
                <SpecRow label="Clip" value="Premium silicone rubber" />
                <SpecRow label="Glass" value="Chemically-strengthened glass" />
              </div>

              <div className="pt-6 flex items-center justify-between text-zinc-500 text-sm border-t border-zinc-900/50 mt-6">
                <div className="flex gap-3 items-center">
                   {/* Text representation for CE/FC as per plan */}
                  <span className="font-semibold tracking-widest">CE</span>
                  <span className="font-semibold tracking-widest">FC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Recycle size={16} />
                  <span>95% Recyclable</span>
                </div>
              </div>
              
               <p className="text-xs text-zinc-600 leading-relaxed max-w-md">
                    The Octaknight Robotic Arm is engineered for precision and durability, setting new standards in automated manufacturing and industrial applications.
               </p>
            </div>

            {/* Size & Weight Section */}
            <div className="space-y-6">
               <h2 className="text-3xl md:text-2xl font-light tracking-tight text-zinc-100">Size & Weight</h2>
               
               <div className="space-y-3">
                <SpecRow label="Height" value="35mm" />
                <SpecRow label="Width" value="45mm" />
                <SpecRow label="Depth" value="20mm" />
                <SpecRow label="Device weight" value="35gr" />
                <SpecRow label="Cable & connector weight" value="10gr" />
                <SpecRow label="Maximum clip opening" value="35°" />
               </div>
            </div>

          </div>

          </div>
        </div>
      </section>

      {/* Section 2: Image & Sound */}
      <section className="min-h-screen py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full space-y-24">
          
          {/* Header */}
          <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-zinc-100 max-w-xl">
            Image &<br />sound.
          </h2>

          {/* Exploded View Asset */}
          <div className="relative w-full flex justify-center">
             <img 
               src="/assets/product/robotic_lines_2.png" 
               alt="Camera Exploded View" 
               className="w-full max-w-5xl object-cover opacity-90"
             />
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Lens Specs */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-light text-zinc-100">Lens</h3>
              <div className="space-y-4">
                <SpecRow label="DFOV" value="70°" />
                <SpecRow label="EFL" value="4.8 mm" />
                <SpecRow label="Aperture" value="f1.8" />
                <SpecRow label="Focal range" value="10 cm → ∞" />
                <SpecRow label="Auto focus type" value="Phase detection" />
                <SpecRow label="Lens structure" value="6 plastic elements" />
              </div>
            </div>

            {/* Sensor Specs */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-light text-zinc-100">Sensor</h3>
              <div className="space-y-4">
                <SpecRow label="Model" value="Sony IMX582 Exmor RS" />
                <SpecRow label="Type" value="CMOS Rolling Shutter" />
                <SpecRow label="Size" value="1/2.0&quot;" />
                <SpecRow label="Pixel size" value="0.8 μm" />
                <SpecRow label="Resolution" value="48MP binned to 1080P" />
                <SpecRow label="FPS" value="30" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline py-3 border-b border-zinc-900">
      <span className="text-zinc-500 font-medium text-sm md:text-sm">{label}</span>
      <span className="text-zinc-300 text-right text-sm md:text-sm">{value}</span>
    </div>
  );
}