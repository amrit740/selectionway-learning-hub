import { Subject, subjects } from '@/data/classes';
import { BookOpen, Calculator, FlaskConical, Brain, Languages } from 'lucide-react';

interface SubjectTabsProps {
  activeSubject: Subject | null;
  onSelectSubject: (subject: Subject | null) => void;
}

const subjectConfig: Record<Subject, { icon: typeof BookOpen; colorClass: string }> = {
  'General Studies': { icon: BookOpen, colorClass: 'subject-general' },
  'Maths': { icon: Calculator, colorClass: 'subject-maths' },
  'Science': { icon: FlaskConical, colorClass: 'subject-science' },
  'Reasoning': { icon: Brain, colorClass: 'subject-reasoning' },
  'English': { icon: Languages, colorClass: 'subject-english' },
};

const SubjectTabs = ({ activeSubject, onSelectSubject }: SubjectTabsProps) => {
  return (
    <div className="glass-card inline-flex flex-wrap gap-2 p-2 rounded-xl">
      {subjects.map((subject) => {
        const config = subjectConfig[subject];
        const Icon = config.icon;
        const isActive = activeSubject === subject;

        return (
          <button
            key={subject}
            onClick={() => onSelectSubject(isActive ? null : subject)}
            className={`subject-tab ${isActive ? 'subject-tab-active' : ''} ${config.colorClass} border`}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{subject}</span>
            <span className="sm:hidden">
              {subject === 'General Studies' ? 'General' : subject}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SubjectTabs;
