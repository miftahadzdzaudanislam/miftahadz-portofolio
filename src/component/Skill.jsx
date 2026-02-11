export default function Skill({ title, icon: Icon, accent, desc }) {
  return (
    <div className="text-center group">
      <div className="relative mx-auto w-full max-w-xs p-6 transition-transform duration-200 group-hover:-translate-y-2">
        {/* blob background with shadow */}
        <svg 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute inset-0 w-full h-full ${accent} drop-shadow-[4px_4px_0_#000]`}
            >
          <path
            d="M30.4,20C16.4,42,-34.1,45.4,-45.2,25.1C-56.4,4.9,-28.2,-39,-3,-40.7C22.3,-42.4,44.5,-1.9,30.4,20Z"
            transform="translate(100 100) scale(2.4)"
          />
        </svg>

        <div className="relative pe-3 z-10 mx-auto flex h-36 w-36 items-center justify-center text-6xl transition-transform duration-200 group-hover:scale-110">
          <Icon />
        </div>
      </div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-80">{desc}</p>
    </div>
  );
}
