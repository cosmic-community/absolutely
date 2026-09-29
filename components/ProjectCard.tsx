import Link from 'next/link'
import type { VideoProject } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StatusBadge from '@/components/StatusBadge'
import AspectRatioBadge from '@/components/AspectRatioBadge'

interface ProjectCardProps {
  project: VideoProject
}

function formatDuration(seconds?: number): string {
  if (!seconds || Number.isNaN(seconds)) return ''
  const mins = Math.floor(seconds / 60)
  const secs = Math.round(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const title = project.title || getMetafieldValue(project.metadata?.project_title)
  const coverImage = project.metadata?.cover_image
  const duration = formatDuration(project.metadata?.duration_seconds)
  const visualStyle = getMetafieldValue(project.metadata?.visual_style)

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-gray-100">
        {coverImage?.imgix_url ? (
          <img
            src={`${coverImage.imgix_url}?w=600&h=1066&fit=crop&auto=format,compress`}
            alt={title}
            width={300}
            height={533}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl">🎬</div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <AspectRatioBadge aspectRatio={project.metadata?.aspect_ratio} />
        </div>
        {duration && (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
            {duration}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="mb-2">
          <StatusBadge status={project.metadata?.production_status} />
        </div>
        <h3 className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {title}
        </h3>
        {visualStyle && <p className="mt-1 text-sm text-gray-500 line-clamp-2">{visualStyle}</p>}
      </div>
    </Link>
  )
}