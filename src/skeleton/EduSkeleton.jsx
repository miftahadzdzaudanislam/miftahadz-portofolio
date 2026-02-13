export default function SkeletonEdu() {
  return (
    <div className="animate-pulse bg-white/90 backdrop-blur p-3 shadow-xl rounded-xl border-2 border-black/10 w-full max-w-sm mx-auto mb-4 md:max-w-none">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Image */}
        <div className="w-30 h-30 skeleton" />
        {/* Content */}
        <div className="flex-1 py-4 px-3 space-y-3 w-full">
          <div className="h-4 skeleton w-full" />
          <div className="h-4 skeleton w-5/6" />
          <div className="h-5 skeleton w-3/4" />
        </div>
      </div>
    </div>
  );
}
