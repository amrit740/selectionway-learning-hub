import { Link } from 'react-router-dom';
import { Play, FileText, ChevronRight } from 'lucide-react';
import { ClassItem, Subject } from '@/data/classes';

interface ClassCardProps {
  classItem: ClassItem;
  index: number;
}

const subjectColors: Record<Subject, string> = {
  'General Studies': 'border-l-[hsl(199,89%,48%)]',
  'Maths': 'border-l-[hsl(45,93%,47%)]',
  'Science': 'border-l-[hsl(174,72%,56%)]',
  'Reasoning': 'border-l-[hsl(142,71%,45%)]',
  'English': 'border-l-[hsl(24,95%,53%)]',
};

const ClassCard = ({ classItem, index }: ClassCardProps) => {
  const animationDelay = `${(index % 12) * 50}ms`;

  return (
    <div
      className={`glass-card p-5 border-l-4 ${subjectColors[classItem.subject]} 
                  hover:bg-card/90 transition-all duration-300 hover:scale-[1.02] 
                  hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up opacity-0`}
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
        {classItem.title}
      </h3>

      <div className="flex flex-col gap-2.5">
        {/* Lecture Button */}
        <Link 
          to={`/class/${classItem.id}`}
          className="action-btn-primary group"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/30 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-medium">Lecture</span>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Download PDF Button */}
        <a
          href={classItem.pdfUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => !classItem.pdfUrl && e.preventDefault()}
          className="action-btn group"
        >
          <div className="w-6 h-6 rounded bg-muted flex items-center justify-center">
            <FileText className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <span className="font-medium">Download PDF</span>
        </a>
      </div>
    </div>
  );
};

export default ClassCard;
