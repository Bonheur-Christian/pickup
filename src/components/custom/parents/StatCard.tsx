// StatsCard Component
interface StatsCardProps {
  label: string;
  count: number;
  color: string;
  textColor: string;
  percentage?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  label,
  count,
  color,
  textColor,
  percentage,
}) => (
  <div className={` rounded-lg p-4 shadow-sm border`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <div>
          <p className={`text-2xl font-bold ${textColor}`}>{count}</p>
          <p className={`text-sm ${textColor} opacity-80`}>{label}</p>
        </div>
      </div>
      {percentage && (
        <div className="text-right">
          <p className={`text-sm font-medium ${textColor}`}>{percentage}</p>
        </div>
      )}
    </div>
  </div>
);
export default StatsCard;
