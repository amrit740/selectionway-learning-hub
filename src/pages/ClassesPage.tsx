import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubjectTabs from '@/components/SubjectTabs';
import ClassCard from '@/components/ClassCard';
import SearchBar from '@/components/SearchBar';
import { Subject, subjects, searchClasses } from '@/data/classes';
import heroBg from '@/assets/hero-bg.jpg';

const ClassesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);

  // Parse subject from URL on mount
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam && subjects.includes(subjectParam as Subject)) {
      setActiveSubject(subjectParam as Subject);
    }
  }, [searchParams]);

  const handleSubjectChange = (subject: Subject | null) => {
    setActiveSubject(subject);
    if (subject) {
      setSearchParams({ subject });
    } else {
      setSearchParams({});
    }
  };

  const filteredClasses = useMemo(() => {
    return searchClasses(searchQuery, activeSubject || undefined);
  }, [searchQuery, activeSubject]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <header 
        className="relative pt-24 pb-16"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-8 animate-fade-in">
            Classes
          </h1>

          {/* Subject Tabs */}
          <div className="flex justify-center mb-6 animate-fade-in-up delay-100">
            <SubjectTabs 
              activeSubject={activeSubject} 
              onSelectSubject={handleSubjectChange} 
            />
          </div>

          {/* Search */}
          <div className="flex justify-center animate-fade-in-up delay-200">
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery}
              placeholder="Search by class name or subject..." 
            />
          </div>
        </div>
      </header>

      {/* Classes Grid */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredClasses.length}</span> classes
              {activeSubject && (
                <span> in <span className="text-primary">{activeSubject}</span></span>
              )}
            </p>
          </div>

          {/* Grid */}
          {filteredClasses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredClasses.map((classItem, index) => (
                <ClassCard key={classItem.id} classItem={classItem} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No classes found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClassesPage;
