export default function Loading() {
  return (
    <div className="flex flex-col">
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-12 bg-muted rounded-lg animate-pulse mx-auto max-w-md"></div>
              <div className="h-6 bg-muted rounded-lg animate-pulse mx-auto max-w-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
