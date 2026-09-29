'use client'

interface ProjectFiltersProps {
  statusOptions: string[]
  aspectRatioOptions: string[]
  selectedStatus: string
  selectedAspectRatio: string
  onStatusChange: (value: string) => void
  onAspectRatioChange: (value: string) => void
}

export default function ProjectFilters({
  statusOptions,
  aspectRatioOptions,
  selectedStatus,
  selectedAspectRatio,
  onStatusChange,
  onAspectRatioChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div>
        <label htmlFor="status-filter" className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          Production Status
        </label>
        <select
          id="status-filter"
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="all">All statuses</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="aspect-filter" className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          Aspect Ratio
        </label>
        <select
          id="aspect-filter"
          value={selectedAspectRatio}
          onChange={(e) => onAspectRatioChange(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="all">All ratios</option>
          {aspectRatioOptions.map((ratio) => (
            <option key={ratio} value={ratio}>
              {ratio}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}