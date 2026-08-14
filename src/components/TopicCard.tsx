import React from 'react';
import { DsaTopic } from '../types';
import { 
  LayoutGrid, 
  Type, 
  Link as LinkIcon, 
  Layers, 
  ListOrdered, 
  Database, 
  GitBranch, 
  Network, 
  ArrowUpDown, 
  Search,
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

interface TopicCardProps {
  topic: DsaTopic;
  progressPercent: number;
  onSelectTopic: (topic: DsaTopic) => void;
}

const getTopicIcon = (iconName: string) => {
  switch (iconName) {
    case 'LayoutGrid': return LayoutGrid;
    case 'Type': return Type;
    case 'Link': return LinkIcon;
    case 'Layers': return Layers;
    case 'ListOrdered': return ListOrdered;
    case 'Database': return Database;
    case 'GitBranch': return GitBranch;
    case 'Network': return Network;
    case 'ArrowUpDown': return ArrowUpDown;
    case 'Search': return Search;
    default: return LayoutGrid;
  }
};

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  progressPercent,
  onSelectTopic
}) => {
  const IconComponent = getTopicIcon(topic.iconName);
  const isCompleted = progressPercent >= 100;

  return (
    <div
      onClick={() => onSelectTopic(topic)}
      className="group cursor-pointer bg-white  border border-[#EAEAEA]  hover:border-[#3478E5]  rounded-3xl p-6 shadow-[0_4px_16px_rgba(16,27,61,0.04)]  hover:shadow-[0_8px_24px_rgba(16,27,61,0.08)] _8px_24px_rgba(0,0,0,0.5)] transition-all flex flex-col justify-between hover:-translate-y-1.5"
    >
      <div>
        {/* Header Badges & Icon */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ backgroundColor: topic.bgTint }}
          >
            <IconComponent className="w-6 h-6" style={{ color: topic.accentColor }} />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-[#FFFDF9]  border border-[#EAEAEA]  text-[#101B3D] ">
              {topic.difficulty}
            </span>
            {isCompleted && (
              <span className="p-1 rounded-full bg-[#EFFCF6] text-[#55C990]" title="Completed!">
                <CheckCircle className="w-4 h-4 fill-[#55C990] text-white" />
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-extrabold text-[#101B3D]  mb-2 group-hover:text-[#3478E5]  transition-colors flex items-center gap-2">
          {topic.name}
        </h3>

        <p className="text-sm text-[#111111]/70  font-medium line-clamp-2 mb-4 leading-relaxed">
          {topic.shortDescription}
        </p>

        {/* Beginner Tip */}
        <div className="p-2.5 bg-[#FFFDF9]  border border-[#EAEAEA]  rounded-xl text-xs text-[#8C8C8C]  font-semibold mb-5 italic">
          💡 {topic.beginnerNote}
        </div>
      </div>

      {/* Progress & CTA */}
      <div>
        <div className="flex items-center justify-between text-xs font-bold text-[#101B3D]  mb-1.5">
          <span className="flex items-center gap-1 text-[#8C8C8C] ">
            <Clock className="w-3.5 h-3.5" />
            {topic.estimatedMinutes} mins
          </span>
          <span className="text-[#3478E5]">{progressPercent}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#EAEAEA]  h-2 rounded-full overflow-hidden mb-1">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPercent}%`,
              backgroundColor: isCompleted ? '#55C990' : topic.accentColor
            }}
          />
        </div>
      </div>
    </div>
  );
};
