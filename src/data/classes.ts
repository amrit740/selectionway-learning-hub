export type Subject = 'General Studies' | 'Maths' | 'Science' | 'Reasoning' | 'English';

export type GeneralStudiesTopic = 'Polity' | 'History' | 'Economics' | 'Geography' | 'Static GK';
export type ScienceTopic = 'Physics' | 'Chemistry' | 'Biology';

export type SubTopic = GeneralStudiesTopic | ScienceTopic;

export interface ClassItem {
  id: number;
  title: string;
  subject: Subject;
  subTopic?: SubTopic;
  description: string;
  videoUrl: string;
  pdfUrl: string;
}

export const subjects: Subject[] = ['General Studies', 'Maths', 'Science', 'Reasoning', 'English'];

export const generalStudiesTopics: GeneralStudiesTopic[] = ['Polity', 'History', 'Economics', 'Geography', 'Static GK'];
export const scienceTopics: ScienceTopic[] = ['Physics', 'Chemistry', 'Biology'];

// Generate classes with sub-topics
const generateClasses = (): ClassItem[] => {
  const classes: ClassItem[] = [];
  let id = 1;

  // General Studies - 2 classes per topic (10 total)
  generalStudiesTopics.forEach((topic) => {
    for (let i = 1; i <= 2; i++) {
      classes.push({
        id: id++,
        title: `Class ${i}`,
        subject: 'General Studies',
        subTopic: topic,
        description: `${topic} - Lecture ${i}: Comprehensive study material and video lecture.`,
        videoUrl: '',
        pdfUrl: '',
      });
    }
  });

  // Maths - 10 classes
  for (let i = 1; i <= 10; i++) {
    classes.push({
      id: id++,
      title: `Class ${i}`,
      subject: 'Maths',
      description: `Maths - Lecture ${i}: Comprehensive study material and video lecture.`,
      videoUrl: '',
      pdfUrl: '',
    });
  }

  // Science - 3-4 classes per topic (10 total)
  const scienceClassesPerTopic = [4, 3, 3]; // Physics 4, Chemistry 3, Biology 3
  scienceTopics.forEach((topic, topicIndex) => {
    for (let i = 1; i <= scienceClassesPerTopic[topicIndex]; i++) {
      classes.push({
        id: id++,
        title: `Class ${i}`,
        subject: 'Science',
        subTopic: topic,
        description: `${topic} - Lecture ${i}: Comprehensive study material and video lecture.`,
        videoUrl: '',
        pdfUrl: '',
      });
    }
  });

  // Reasoning - 10 classes
  for (let i = 1; i <= 10; i++) {
    classes.push({
      id: id++,
      title: `Class ${i}`,
      subject: 'Reasoning',
      description: `Reasoning - Lecture ${i}: Comprehensive study material and video lecture.`,
      videoUrl: '',
      pdfUrl: '',
    });
  }

  // English - 10 classes
  for (let i = 1; i <= 10; i++) {
    classes.push({
      id: id++,
      title: `Class ${i}`,
      subject: 'English',
      description: `English - Lecture ${i}: Comprehensive study material and video lecture.`,
      videoUrl: '',
      pdfUrl: '',
    });
  }

  return classes;
};

export const classesData: ClassItem[] = generateClasses();

export const getClassesBySubject = (subject: Subject, subTopic?: SubTopic): ClassItem[] => {
  let results = classesData.filter(c => c.subject === subject);
  if (subTopic) {
    results = results.filter(c => c.subTopic === subTopic);
  }
  return results;
};

export const getClassById = (id: number): ClassItem | undefined => {
  return classesData.find(c => c.id === id);
};

export const searchClasses = (query: string, subject?: Subject, subTopic?: SubTopic): ClassItem[] => {
  let results = classesData;
  
  if (subject) {
    results = results.filter(c => c.subject === subject);
  }

  if (subTopic) {
    results = results.filter(c => c.subTopic === subTopic);
  }
  
  if (query.trim()) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(c => 
      c.title.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.subject.toLowerCase().includes(lowerQuery) ||
      (c.subTopic && c.subTopic.toLowerCase().includes(lowerQuery))
    );
  }
  
  return results;
};
