'use client'

import { useMemo, useState } from 'react'
import type { VideoProject } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import ProjectFilters from '@/components/ProjectFilters'
import ProjectGrid from '@/components/ProjectGrid'

interface ProjectsIndexClientProps {
  projects: VideoProject[]
}

export default function ProjectsIndexClient({ projects }: ProjectsIndexClientProps) {
  const [status, setStatus] = useState('all')
  const [aspectRatio, setAspectRatio] = useState('all')

  const statusOptions = useMemo(() => {
    const values = new Set<string>()
    projects.forEach((project) => {
      const value = getMetafieldValue(project.metadata?.production_status)
      if (value) values.add(value)
    })
    return Array.from(values).sort()
  }, [projects])

  const aspectRatioOptions = useMemo(() => {
    const values = new Set<string>()
    projects.forEach((project) => {
      const value = getMetafieldValue(project.metadata?.aspect_ratio)
      if (value) values.add(value)
    })
    return Array.from(values).sort()
  }, [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const projectStatus = getMetafieldValue(project.metadata?.production_status)
      const projectAspectRatio = getMetafieldValue(project.metadata?.aspect_ratio)
      const statusMatch = status === 'all' || projectStatus === status
      const aspectMatch = aspectRatio === 'all' || projectAspectRatio === aspectRatio
      return statusMatch && aspectMatch
    })
  }, [projects, status, aspectRatio])

  return (
    <div>
      <ProjectFilters
        statusOptions={statusOptions}
        aspectRatioOptions={aspectRatioOptions}
        selectedStatus={status}
        selectedAspectRatio={aspectRatio}
        onStatusChange={setStatus}
        onAspectRatioChange={setAspectRatio}
      />
      <p className="mb-6 text-sm text-gray-500">
        Showing {filteredProjects.length} of {projects.length} project{projects.length === 1 ? '' : 's'}
      </p>
      <ProjectGrid projects={filteredProjects} />
    </div>
  )
}