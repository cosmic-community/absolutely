import { createBucketClient } from '@cosmicjs/sdk'
import type { VideoProject, Scene } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export function getDateValue(item: {
  published_at?: string | null
  modified_at?: string | null
  created_at?: string | null
}): number {
  const raw = item.published_at || item.modified_at || item.created_at
  const time = raw ? Date.parse(raw) : NaN
  return Number.isNaN(time) ? 0 : time
}

export async function getVideoProjects(): Promise<VideoProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'video-projects' })
      .props(['id', 'slug', 'title', 'metadata', 'created_at', 'modified_at', 'type'])
      .depth(1)

    const projects = response.objects as VideoProject[]
    return projects.sort((a, b) => getDateValue(b) - getDateValue(a))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch video projects')
  }
}

export async function getVideoProject(slug: string): Promise<VideoProject | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'video-projects', slug })
      .props(['id', 'slug', 'title', 'metadata', 'created_at', 'modified_at', 'type'])
      .depth(1)

    return response.object as VideoProject
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch video project')
  }
}

export async function getScenesByProject(projectId: string): Promise<Scene[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'scenes', 'metadata.project': projectId })
      .props(['id', 'slug', 'title', 'metadata', 'created_at', 'modified_at', 'type'])
      .depth(1)

    const scenes = response.objects as Scene[]

    return scenes.sort((a, b) => {
      const rawA = a.metadata?.scene_number
      const rawB = b.metadata?.scene_number
      const numA = typeof rawA === 'number' ? rawA : Number(getMetafieldValue(rawA)) || 0
      const numB = typeof rawB === 'number' ? rawB : Number(getMetafieldValue(rawB)) || 0
      return numA - numB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch scenes')
  }
}