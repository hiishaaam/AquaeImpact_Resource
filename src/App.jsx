import React from 'react';
import Navbar from './components/ui/navbar';
import Hero from './components/ui/hero';
import BlogCard from './components/ui/blog-card';
import Footer from './components/ui/footer';
import Button from './components/ui/button';
import Card, { CardContent } from './components/ui/card';

const navigationItems = [
  { name: "Home", active: false },
  { name: "Who we are", active: false },
  { name: "What we do", active: false },
  { name: "Resources", active: true },
];

const blogPosts = [
  {
    id: 1,
    title: "Another Response to Global Warming",
    excerpt: "Exploring innovative approaches to address climate change and global warming challenges.",
    author: "Environmental Research Team",
    date: "September 20, 2024",
    readTime: "11:24 AM",
    category: "Journals",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "A way out of Carbon maze – 'Towards a commonsense understanding of Carbon'.",
    excerpt: "Breaking down the complexities of carbon emissions and finding practical solutions for carbon management.",
    author: "Carbon Research Institute",
    date: "September 20, 2024",
    readTime: "11:21 AM",
    category: "Journals",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Development Trap",
    excerpt: "Analyzing the challenges and paradoxes in sustainable development and economic growth.",
    author: "Development Studies Center",
    date: "September 20, 2024",
    readTime: "11:17 AM",
    category: "Journals",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Sitting In The hotseat",
    excerpt: "Examining the urgent challenges facing environmental leadership and decision-making in crisis situations.",
    author: "Leadership Institute",
    date: "September 20, 2024",
    readTime: "11:14 AM",
    category: "Journals",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Those Killer Robots",
    excerpt: "Investigating the environmental and ethical implications of autonomous systems and artificial intelligence.",
    author: "AI Ethics Research",
    date: "September 20, 2024",
    readTime: "11:12 AM",
    category: "Journals",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Towards an Informed Water Vision",
    excerpt: "Developing comprehensive strategies for sustainable water management and conservation.",
    author: "Water Resources Institute",
    date: "September 20, 2024",
    readTime: "11:10 AM",
    category: "Journals",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Resource = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Navigation */}
      <Navbar 
        navigationItems={navigationItems}
        ctaText="Green Credits"
      />

      {/* Hero Section */}
      <Hero 
        title="RESOURCES"
        subtitle="Discover cutting-edge insights, research, and innovations in environmental sustainability and green technology"
        ctaText="Explore Resources"
        backgroundImage="/resources.jpeg"
      />

      {/* Blog Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">Latest Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Learn how our solutions drive sustainable economic growth while supporting environmental restoration. Stay updated on innovations shaping a greener future.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className={index === 1 ? "md:transform md:-translate-y-8" : ""}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="group">
              Load More Articles
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card variant="gradient" className="text-center p-12">
            <CardContent padding="none">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Connected
                </h3>
                <p className="text-xl text-white/80">
                  Get the latest insights delivered directly to your inbox
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl
                           text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500
                           transition-all duration-200"
                />
                <Button variant="primary" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Resource;
