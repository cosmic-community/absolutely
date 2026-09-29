export interface CosmicFile {
  url: string
  imgix_url: string
}

export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
  published_at?: string
}

export type AspectRatio = '9:16' | '16:9' | '1:1' | '4:5'
export type ProductionStatus = 'Draft' | 'In Production' | 'Published' | 'Archived'

export interface VideoProject extends CosmicObject {
  type: 'video-projects'
  metadata: {
    project_title?: string
    aspect_ratio?: AspectRatio
    duration_seconds?: number
    visual_style?: string
    voiceover_script?: string
    target_pace?: string
    srt_subtitles?: string
    production_status?: ProductionStatus
    cover_image?: CosmicFile
  }
}

export interface Scene extends CosmicObject {
  type: 'scenes'
  metadata: {
    scene_number?: number
    start_time?: string
    end_time?: string
    flow_prompt?: string
    motion?: string
    voiceover_line?: string
    capcut_notes?: string
    sound_design?: string
    project?: VideoProject
    reference_image?: CosmicFile
  }
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}