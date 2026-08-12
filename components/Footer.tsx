export default function Footer() {
  return (
    <footer
      className="
        px-6 py-6
        bg-white/10 border-t border-white/20
        backdrop-blur-md shadow-md
        text-center text-slate-200
      "
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Zidan Fahmi Ilmi. All rights reserved.
      </p>
    </footer>
  );
}
