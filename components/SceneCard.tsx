import type { Scene } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SceneCardProps {
  scene: Scene
}

export default function SceneCard({ scene }: SceneCardProps) {
  const sceneNumber = scene.metadata?.scene_number
  const startTime = getMetafieldValue(scene.metadata?.start_time)
  const endTime = getMetafieldValue(scene.metadata?.end_time)
  const referenceImage = scene.metadata?.reference_image
  const motion = getMetafieldValue(scene.metadata?.motion)
  const voiceoverLine = getMetafieldValue(scene.metadata?.voiceover_line)
  const flowPrompt = getMetafieldValue(scene.metadata?.flow_prompt)
  const capcutNotes = getMetafieldValue(scene.metadata?.capcut_notes)
  const soundDesign = getMetafieldValue(scene.metadata?.sound_design)

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <div className="relative aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl bg-gray-100">
          {referenceImage?.imgix_url ? (
            <img
              src={`${referenceImage.imgix_url}?w=440&h=780&fit=crop&auto=format,compress`}
              alt={`Scene ${sceneNumber ?? ''} reference`}
              width={220}
              height={390}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-3xl">🎞️</div>
          )}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
            {sceneNumber ?? '–'}
          </span>
          {(startTime || endTime) && (
            <span className="text-xs font-semibold text-gray-500">
              {startTime}
              {startTime && endTime ? ' – ' : ''}
              {endTime}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {voiceoverLine && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Voiceover</h4>
            <p className="text-sm text-gray-800 italic">&ldquo;{voiceoverLine}&rdquo;</p>
          </div>
        )}
        {flowPrompt && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Flow Prompt</h4>
            <p className="text-sm text-gray-600">{flowPrompt}</p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {motion && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Motion</h4>
              <p className="text-sm text-gray-600">{motion}</p>
            </div>
          )}
          {soundDesign && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Sound Design</h4>
              <p className="text-sm text-gray-600">{soundDesign}</p>
            </div>
          )}
        </div>
        {capcutNotes && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">CapCut Notes</h4>
            <p className="text-sm text-gray-600">{capcutNotes}</p>
          </div>
        )}
      </div>
    </div>
  )
}