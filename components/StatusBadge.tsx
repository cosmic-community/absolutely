import { getMetafieldValue } from '@/lib/cosmic'

interface StatusBadgeProps {
  status?: string
}

const STATUS_STYLES: Record<string, string> = {
  Draft: 'bg-gray-100 text-gray-700',
  'In Production': 'bg-amber-100 text-amber-700',
  Published: 'bg-emerald-100 text-emerald-700',
  Archived: 'bg-slate-100 text-slate-500',
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const value = getMetafieldValue(status)
  if (!value) return null

  const style = STATUS_STYLES[value] || 'bg-indigo-100 text-indigo-700'

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${style}`}>
      {value}
    </span>
  )
}