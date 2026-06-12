interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500">{title}</p>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>

      {subtitle && (
        <p className="text-sm text-gray-500 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}