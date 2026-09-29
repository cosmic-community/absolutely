import { getVideoProjects } from '@/lib/cosmic'
import ProjectsIndexClient from '@/components/ProjectsIndexClient'

export const metadata = {
  title: 'Projects · Absolutely',
  description: 'Browse every vertical video project — filter by production status and aspect ratio.',
}

export default async function ProjectsPage() {
  const projects = await getVideoProjects()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">All Projects</h1>
        <p className="text-gray-500">Every short-form video production, filterable by status and format.</p>
      </div>
      <ProjectsIndexClient projects={projects} />
    </div>
  )
}