import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blog';
import { BlogPost } from '../types';
import { ArrowRight, Clock, User, ArrowLeft } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      {selectedPost ? (
        /* SINGLE ARTICLE DETAIL VIEW */
        <div className="max-w-3xl mx-auto space-y-6">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#D81B68] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal Articles</span>
          </button>

          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D81B68] block">
            {selectedPost.category}
          </span>

          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {selectedPost.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs text-gray-500 pb-4 border-b border-[#E8E2DF]">
            <span className="flex items-center space-x-1">
              <User className="w-3.5 h-3.5" />
              <span>{selectedPost.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{selectedPost.readTime}</span>
            </span>
            <span>•</span>
            <span>{selectedPost.date}</span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E8E2DF] shadow-md my-6">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="prose prose-pink text-xs md:text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
            {selectedPost.content}
          </div>
        </div>
      ) : (
        /* ARTICLES LIST GRID */
        <div>
          <div className="border-b border-[#E8E2DF] pb-6 mb-8">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D81B68]">
              VALORA JOURNAL
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mt-1">
              Handbag Care, Style & Craftsmanship
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white border border-[#E8E2DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#D81B68] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 block mb-1">
                      {post.date} • {post.readTime}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#D81B68] transition mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#E8E2DF] flex items-center space-x-1 text-xs font-bold text-[#D81B68]">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
