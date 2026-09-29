import type { Scene } from '@/types'
import SceneCard from '@/components/SceneCard'

interface SceneListProps {
  scenes: Scene[]
}

export default function SceneList({ scenes }: SceneListProps) {
  if (!scenes || scenes.length === 0) {
    return <p className="text-gray-500">No scenes have been added to this project yet.</p>
  }

  return (
    <div className="space-y-6">
      {scenes.map((scene) => {
        if (!scene || !scene.id) return null
        return <SceneCard key={scene.id} scene={scene} />
      })}
    </div>
  )
}