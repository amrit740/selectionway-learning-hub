import { GeneralStudiesTopic, ScienceTopic, generalStudiesTopics, scienceTopics } from '@/data/classes';
import { Landmark, BookOpen, TrendingUp, Globe, Award, Atom, FlaskConical, Dna } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SubTopicTabsProps {
  subject: 'General Studies' | 'Science';
  activeSubTopic: GeneralStudiesTopic | ScienceTopic | null;
  onSelectSubTopic: (topic: GeneralStudiesTopic | ScienceTopic | null) => void;
}

interface TopicConfig {
  icon: LucideIcon;
  colorClass: string;
}

const gsTopicConfig: Record<GeneralStudiesTopic, TopicConfig> = {
  'Polity': { icon: Landmark, colorClass: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  'History': { icon: BookOpen, colorClass: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  'Economics': { icon: TrendingUp, colorClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  'Geography': { icon: Globe, colorClass: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  'Static GK': { icon: Award, colorClass: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
};

const scienceTopicConfig: Record<ScienceTopic, TopicConfig> = {
  'Physics': { icon: Atom, colorClass: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  'Chemistry': { icon: FlaskConical, colorClass: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  'Biology': { icon: Dna, colorClass: 'bg-green-500/20 text-green-400 border-green-500/30' },
};

const SubTopicTabs = ({ subject, activeSubTopic, onSelectSubTopic }: SubTopicTabsProps) => {
  if (subject === 'General Studies') {
    return (
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {generalStudiesTopics.map((topic) => {
          const topicConfig = gsTopicConfig[topic];
          const Icon = topicConfig.icon;
          const isActive = activeSubTopic === topic;

          return (
            <button
              key={topic}
              onClick={() => onSelectSubTopic(isActive ? null : topic)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium transition-all duration-200
                ${isActive 
                  ? `${topicConfig.colorClass} scale-105` 
                  : 'bg-card/50 border-border/30 text-muted-foreground hover:bg-card hover:text-foreground'
                }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{topic}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {scienceTopics.map((topic) => {
        const topicConfig = scienceTopicConfig[topic];
        const Icon = topicConfig.icon;
        const isActive = activeSubTopic === topic;

        return (
          <button
            key={topic}
            onClick={() => onSelectSubTopic(isActive ? null : topic)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium transition-all duration-200
              ${isActive 
                ? `${topicConfig.colorClass} scale-105` 
                : 'bg-card/50 border-border/30 text-muted-foreground hover:bg-card hover:text-foreground'
              }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm">{topic}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SubTopicTabs;
