export default function CardProject({ title, description }: { title: string; description: string }) {
  return (
    <div className="group relative bg-gray-900 rounded-lg p-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </div>
  );
}
