import Link from 'next/link'
import { getVideoProjects } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'

export const metadata = {
  title: 'Absolutely — Creative Video Portfolio',
  description: 'A behind-the-scenes showcase of short-form vertical video projects, scene by scene.',
}

export default async function HomePage() {
  const projects = await getVideoProjects()
  const featured = projects.slice(0, 8)

  return (
    <>
      <HeroSection projectCount={projects.length} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Projects</h2>
          <Link href="/projects" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            View all →
          </Link>
        </div>
        {featured.length > 0 ? (
          <ProjectGrid projects={featured} />
        ) : (
          <p className="text-gray-500">No projects published yet. Check back soon.</p>
        )}
      </section>
    </>
  )
}