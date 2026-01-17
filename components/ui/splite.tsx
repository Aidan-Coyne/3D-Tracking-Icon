'use client'
import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
    return (
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><span className="animate-pulse text-zinc-500">Loading 3D Scene...</span></div>}>
            <Spline scene={scene} className={className} />
        </Suspense>
    )
}
