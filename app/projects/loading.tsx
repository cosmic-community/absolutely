export default function ProjectsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-10 w-1/4 rounded bg-gray-200" />
        <div className="flex gap-4">
          <div className="h-16 w-40 rounded-lg bg-gray-200" />
          <div className="h-16 w-40 rounded-lg bg-gray-200" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[9/16] rounded-2xl bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  )
}