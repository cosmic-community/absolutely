import { getMetafieldValue } from '@/lib/cosmic'

interface AspectRatioBadgeProps {
  aspectRatio?: string
}

export default function AspectRatioBadge({ aspectRatio }: AspectRatioBadgeProps) {
  const value = getMetafieldValue(aspectRatio)
  if (!value) return null

  return (
    <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-700 border border-gray-200">
      {value}
    </span>
  )
}