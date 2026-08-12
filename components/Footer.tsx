export default function Footer() {
  return (
    <footer
      className="
        px-4 md:px-12 py-6 md:py-8
        bg-white/10 border-t border-white/20
        backdrop-blur-md shadow-lg
        text-center text-slate-300 rounded-t-xl
      "
    >
      <p className="text-xs md:text-sm">
        © {new Date().getFullYear()} Zidan Fahmi Ilmi. All rights reserved.
      </p>
    </footer>
  );
}
