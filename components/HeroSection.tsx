import Link from 'next/link'

interface HeroSectionProps {
  projectCount: number
}

export default function HeroSection({ projectCount }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-100 mb-4">
          Short-form video, scene by scene
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">Absolutely</h1>
        <p className="max-w-2xl mx-auto text-lg text-indigo-50 mb-10">
          A behind-the-scenes look at every vertical video project — voiceover scripts, flow prompts, and
          scene-by-scene breakdowns for {projectCount} production{projectCount === 1 ? '' : 's'}.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50 transition-colors"
          >
            Browse Projects
          </Link>
        </div>
      </div>
    </section>
  )
}