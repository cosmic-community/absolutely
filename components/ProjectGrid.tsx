import type { VideoProject } from '@/types'
import ProjectCard from '@/components/ProjectCard'

interface ProjectGridProps {
  projects: VideoProject[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (!projects || projects.length === 0) {
    return <p className="text-gray-500">No projects found.</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map((project) => {
        if (!project || !project.id) return null
        return <ProjectCard key={project.id} project={project} />
      })}
    </div>
  )
}