import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Play, Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getClassById, classesData, Subject } from '@/data/classes';

const subjectBadgeClass: Record<Subject, string> = {
  'General Studies': 'subject-general',
  'Maths': 'subject-maths',
  'Science': 'subject-science',
  'Reasoning': 'subject-reasoning',
  'English': 'subject-english',
};

const ClassDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const classId = parseInt(id || '1');
  const classItem = getClassById(classId);

  if (!classItem) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Class Not Found</h1>
            <Link to="/classes">
              <Button>Back to Classes</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const prevClass = classId > 1 ? getClassById(classId - 1) : null;
  const nextClass = classId < classesData.length ? getClassById(classId + 1) : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 animate-fade-in">
            <Link 
              to="/classes" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Classes</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8 animate-fade-in-up">
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full border text-sm font-medium mb-4 ${subjectBadgeClass[classItem.subject]}`}>
              {classItem.subject}
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
              {classItem.title}
            </h1>
            <p className="text-muted-foreground text-lg">{classItem.description}</p>
          </div>

          {/* Video Player */}
          <div className="glass-card overflow-hidden mb-8 animate-fade-in-up delay-100">
            <div className="aspect-video bg-card flex items-center justify-center relative">
              {classItem.videoUrl ? (
                <iframe
                  src={classItem.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={classItem.title}
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg mb-2">Video Coming Soon</p>
                  <p className="text-muted-foreground/60 text-sm">The lecture video will be available here</p>
                </div>
              )}
            </div>
          </div>

          {/* PDF Download */}
          <div className="glass-card p-6 mb-8 animate-fade-in-up delay-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Study Notes</h3>
                  <p className="text-muted-foreground text-sm">Download PDF notes for this lecture</p>
                </div>
              </div>
              
              <a
                href={classItem.pdfUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => !classItem.pdfUrl && e.preventDefault()}
                className={classItem.pdfUrl ? '' : 'pointer-events-none'}
              >
                <Button 
                  variant={classItem.pdfUrl ? "default" : "secondary"}
                  className="gap-2"
                  disabled={!classItem.pdfUrl}
                >
                  <Download className="w-4 h-4" />
                  {classItem.pdfUrl ? 'Download PDF' : 'PDF Coming Soon'}
                </Button>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4 animate-fade-in-up delay-300">
            {prevClass ? (
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => navigate(`/class/${prevClass.id}`)}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevClass.title}</span>
                <span className="sm:hidden">Previous</span>
              </Button>
            ) : (
              <div />
            )}

            {nextClass && (
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => navigate(`/class/${nextClass.id}`)}
              >
                <span className="hidden sm:inline">{nextClass.title}</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClassDetailPage;
