'use client'
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center p-8">
            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Content */}
                <div className="flex flex-col gap-6">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                        Interactive <br />
                        <span className="text-zinc-500 italic">3D Robot</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-md">
                        Experience the future of web interfaces with immersive 3D interactions powered by Spline and React.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
                            Get Started
                        </button>
                        <button className="px-8 py-3 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-900 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Column: 3D Scene */}
                <div className="relative h-[500px] lg:h-[700px] w-full">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
            <Spotlight className="z-50" />
        </section>
    )
}
