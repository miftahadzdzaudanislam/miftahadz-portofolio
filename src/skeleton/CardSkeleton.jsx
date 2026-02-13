export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white/90 backdrop-blur p-3 shadow-xl rounded-xl border-2 border-black/10 w-full max-w-sm mx-auto md:max-w-none">
      {/* Image */}
      <div className="w-full h-48 skeleton" />
      {/* Content */}
      <div className="py-4 px-3 space-y-3">
        <div className="h-5 skeleton w-3/4" />
        <div className="h-4 skeleton w-full" />
        <div className="h-4 skeleton w-5/6" />
        <div className="flex gap-2 pt-2">
          <div className="w-8 h-8 skeleton rounded-full" />
          <div className="w-8 h-8 skeleton rounded-full" />
          <div className="w-8 h-8 skeleton rounded-full" />
        </div>
      </div>
    </div>
  );
}