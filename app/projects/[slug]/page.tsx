// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getVideoProject, getScenesByProject, getMetafieldValue } from '@/lib/cosmic'
import StatusBadge from '@/components/StatusBadge'
import AspectRatioBadge from '@/components/AspectRatioBadge'
import SceneList from '@/components/SceneList'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

function formatDuration(seconds?: number): string {
  if (!seconds || Number.isNaN(seconds)) return ''
  const mins = Math.floor(seconds / 60)
  const secs = Math.round(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getVideoProject(slug)

  if (!project) {
    return { title: 'Project Not Found · Absolutely' }
  }

  const title = project.title || getMetafieldValue(project.metadata?.project_title)

  return {
    title: `${title} · Absolutely`,
    other: {
      'cosmic-context': JSON.stringify({ object_id: project.id, object_type: project.type }),
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getVideoProject(slug)

  if (!project) {
    notFound()
  }

  const scenes = await getScenesByProject(project.id)
  const title = project.title || getMetafieldValue(project.metadata?.project_title)
  const coverImage = project.metadata?.cover_image
  const duration = formatDuration(project.metadata?.duration_seconds)
  const visualStyle = getMetafieldValue(project.metadata?.visual_style)
  const voiceoverScript = getMetafieldValue(project.metadata?.voiceover_script)
  const targetPace = getMetafieldValue(project.metadata?.target_pace)
  const srtSubtitles = getMetafieldValue(project.metadata?.srt_subtitles)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/projects" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
        ← All projects
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        <div className="relative aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
          {coverImage?.imgix_url ? (
            <img
              src={`${coverImage.imgix_url}?w=560&h=996&fit=crop&auto=format,compress`}
              alt={title}
              width={280}
              height={498}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl">🎬</div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <StatusBadge status={project.metadata?.production_status} />
            <AspectRatioBadge aspectRatio={project.metadata?.aspect_ratio} />
            {duration && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                {duration}
              </span>
            )}
            {targetPace && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                {targetPace}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          {visualStyle && (
            <div className="mb-6">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Visual Style</h2>
              <p className="text-gray-700">{visualStyle}</p>
            </div>
          )}
          {voiceoverScript && (
            <div className="mb-6">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Voiceover Script</h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">{voiceoverScript}</p>
            </div>
          )}
          {srtSubtitles && (
            <details className="mb-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-gray-500">
                SRT Subtitles
              </summary>
              <pre className="mt-3 whitespace-pre-wrap text-xs text-gray-600 font-mono">{srtSubtitles}</pre>
            </details>
          )}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Scene-by-Scene Breakdown</h2>
        <SceneList scenes={scenes} />
      </div>
    </div>
  )
}