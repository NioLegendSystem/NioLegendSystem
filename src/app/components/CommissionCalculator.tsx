import { motion } from 'framer-motion';
import { ChartBarIcon, UserGroupIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

type CommissionCalculatorProps = {
  rankIndex: number;
  teamSize: number;
  usage: number;
  onChangeRank: (i: number) => void;
  onChangeTeam: (n: number) => void;
  onChangeUsage: (n: number) => void;
};

export default function CommissionCalculator({
  rankIndex,
  teamSize,
  usage,
  onChangeRank,
  onChangeTeam,
  onChangeUsage,
}: CommissionCalculatorProps) {
  const rankData = [
    { name: 'Rank 1', percent: 30, color: 'from-purple-500 to-pink-500' },
    { name: 'Rank 2', percent: 20, color: 'from-pink-500 to-blue-500' },
    { name: 'Rank 3', percent: 15, color: 'from-blue-500 to-purple-500' },
    { name: 'Rank 4', percent: 10, color: 'from-purple-400 to-pink-400' },
    { name: 'Rank 5', percent: 8, color: 'from-pink-400 to-blue-400' },
    { name: 'Rank 6', percent: 8, color: 'from-blue-400 to-purple-400' },
    { name: 'Rank 7', percent: 9, color: 'from-purple-600 to-pink-600' },
  ];

  const calculateCommission = () => {
    const commissionPer100 = 3.1;
    const percent = rankData[rankIndex].percent;
    const commission = (usage / 100) * commissionPer100 * (percent / 100) * teamSize;
    return commission;
  };

  return (
    <div className="mt-6 bg-black/40 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center">
        <div>
          <label className="block text-sm text-white/80 mb-1">Your Rank</label>
          <select value={rankIndex} onChange={e => onChangeRank(Number(e.target.value))} className="rounded-lg px-3 py-2 bg-black/60 text-white">
            {rankData.map((r, i) => <option value={i} key={r.name}>{r.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Team Size</label>
          <input type="number" min={1} value={teamSize} onChange={e => onChangeTeam(Number(e.target.value))} className="rounded-lg px-3 py-2 bg-black/60 text-white w-24" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Total Monthly Service Usage (₹)</label>
          <input type="number" min={0} value={usage} onChange={e => onChangeUsage(Number(e.target.value))} className="rounded-lg px-3 py-2 bg-black/60 text-white w-32" />
        </div>
      </div>
      <div className="text-lg text-white mt-2">Estimated Income: <span className="font-bold text-green-400">₹{calculateCommission().toFixed(2)}</span> / month</div>
      <div className="text-xs text-white/60">Commission split: {rankData[rankIndex].percent}% of ₹3.10 per ₹100 usage per team member</div>
    </div>
  );
} 