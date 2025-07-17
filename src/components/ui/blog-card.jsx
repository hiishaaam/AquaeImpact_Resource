import React from 'react';
import Card, { CardContent, CardHeader, CardFooter } from './card';

const BlogCard = ({ 
  title = "Sustainable Innovation",
  excerpt = "Discover how cutting-edge technology is revolutionizing environmental conservation and creating lasting impact.",
  author = "Dr. Sarah Chen",
  date = "March 15, 2024",
  readTime = "5 min read",
  category = "Innovation",
  image = null,
  className = '' 
}) => {
  return (
    <Card variant="glass" className={`h-full ${className}`}>
      {/* Black Background Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <div 
          className="w-full h-full bg-black group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      <CardContent padding="lg">
        {/* Header */}
        <CardHeader>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {excerpt}
          </p>
        </CardHeader>

        {/* Footer */}
        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              {/* Author Avatar */}
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">
                  {author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <div>
                <p className="text-white/80 text-sm font-medium">{author}</p>
                <p className="text-white/50 text-xs">{date}</p>
              </div>
            </div>

            {/* Read Time */}
            <div className="flex items-center space-x-1 text-white/50 text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime}</span>
            </div>
          </div>

          {/* Read More Button */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-200 group flex items-center">
              Read More
              <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default BlogCard; 