"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export type RelatedArticle = {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
};

type RelatedArticlesProps = {
  articles: RelatedArticle[];
  className?: string;
};

export function RelatedArticles({
  articles,
  className = "",
}: RelatedArticlesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      className={`my-12 py-8 border-t border-b border-slate-700/30 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Continue explorando</h3>
        <Link
          href="/blog"
          className="text-sm text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1 group"
        >
          Ver todos os artigos
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            className="inline-block font-mono"
          >
            <ArrowRight size={16} />
          </motion.span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.slug}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/blog/${article.slug}`} className="block h-full">
              <div className="overflow-hidden rounded-lg mb-3 aspect-[16/9] relative">
                <motion.div
                  className="absolute inset-0 bg-blue-500/10 z-10 opacity-0 transition-opacity"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />
                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={article.coverImage || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-slate-400">{article.date}</p>
                <h4 className="font-medium text-lg group-hover:text-blue-500 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-slate-300 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
