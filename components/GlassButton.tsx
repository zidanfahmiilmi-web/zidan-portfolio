export default function GlassButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="
        px-6 py-3 rounded-xl
        bg-white/10 border border-white/20
        backdrop-blur-md
        text-white font-semibold
        shadow-lg
        hover:bg-white/20 hover:border-white/30
        transition-all duration-300
      "
    >
      {children}
    </button>
  );
}
