export type Subject = 'General Studies' | 'Maths' | 'Science' | 'Reasoning' | 'English';

export interface ClassItem {
  id: number;
  title: string;
  subject: Subject;
  description: string;
  videoUrl: string;
  pdfUrl: string;
}

export const subjects: Subject[] = ['General Studies', 'Maths', 'Science', 'Reasoning', 'English'];

export const subjectIcons: Record<Subject, string> = {
  'General Studies': '📚',
  'Maths': '🔢',
  'Science': '🔬',
  'Reasoning': '💡',
  'English': '📖',
};

// Generate 50 classes - 10 per subject
export const classesData: ClassItem[] = Array.from({ length: 50 }, (_, i) => {
  const subjectIndex = Math.floor(i / 10);
  const classNum = (i % 10) + 1;
  const subject = subjects[subjectIndex];
  
  return {
    id: i + 1,
    title: `Class ${classNum}`,
    subject,
    description: `${subject} - Lecture ${classNum}: Comprehensive study material and video lecture.`,
    videoUrl: '', // Placeholder - user will replace
    pdfUrl: '', // Placeholder - user will replace
  };
});

export const getClassesBySubject = (subject: Subject): ClassItem[] => {
  return classesData.filter(c => c.subject === subject);
};

export const getClassById = (id: number): ClassItem | undefined => {
  return classesData.find(c => c.id === id);
};

export const searchClasses = (query: string, subject?: Subject): ClassItem[] => {
  let results = classesData;
  
  if (subject) {
    results = results.filter(c => c.subject === subject);
  }
  
  if (query.trim()) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(c => 
      c.title.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.subject.toLowerCase().includes(lowerQuery)
    );
  }
  
  return results;
};
