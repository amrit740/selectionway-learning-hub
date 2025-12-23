import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Play, FileText, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { subjects } from '@/data/classes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center pt-16"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-fade-in">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Learning Platform</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up">
              Your Path to{' '}
              <span className="text-primary">Selection</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Access comprehensive video lectures and study materials for your competitive exam preparation journey.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
              <Link to="/classes">
                <Button size="lg" className="glow-primary gap-2 text-base px-8">
                  Browse Classes
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto animate-fade-in-up delay-300">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Classes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">5</div>
                <div className="text-sm text-muted-foreground">Subjects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-foreground">HD</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Everything You Need to <span className="text-primary">Succeed</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center group hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Video Lectures</h3>
              <p className="text-muted-foreground">High-quality streaming lectures by expert educators</p>
            </div>

            <div className="glass-card p-6 text-center group hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">PDF Notes</h3>
              <p className="text-muted-foreground">Comprehensive study materials for each lecture</p>
            </div>

            <div className="glass-card p-6 text-center group hover:border-subject-maths/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-subject-maths/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-subject-maths" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">5 Subjects</h3>
              <p className="text-muted-foreground">Complete coverage across all major exam topics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Explore <span className="text-primary">Subjects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Choose from our comprehensive curriculum designed for competitive exam success
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {subjects.map((subject, index) => (
              <Link
                key={subject}
                to={`/classes?subject=${encodeURIComponent(subject)}`}
                className="glass-card px-6 py-4 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <span className="font-medium text-foreground">{subject}</span>
                <span className="text-muted-foreground ml-2">→</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/classes">
              <Button variant="outline" size="lg" className="gap-2">
                View All Classes
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
