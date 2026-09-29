// app/projects/[slug]/loading.tsx
export default function ProjectDetailLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-4 w-24 rounded bg-gray-200" />
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          <div className="aspect-[9/16] w-full max-w-[280px] rounded-2xl bg-gray-200" />
          <div className="space-y-4">
            <div className="h-8 w-2/3 rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
            <div className="h-4 w-3/4 rounded bg-gray-200" />
          </div>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-40 w-full rounded-2xl bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  )
}