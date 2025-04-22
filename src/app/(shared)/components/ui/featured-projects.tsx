"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

export type FeaturedProject = {
  title: string;
  description: string;
  image: string;
  url: string;
  author: {
    name: string;
    avatar?: string;
  };
  type: "article" | "project" | "tool";
};

type FeaturedProjectsProps = {
  projects: readonly FeaturedProject[];
  className?: string;
};

export function FeaturedProjects({
  projects,
  className = "",
}: FeaturedProjectsProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <motion.section
      className={`p-10 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-2 "
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Artigos e projetos em destaque
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mt-0.5" />
        </motion.h3>
        <motion.p
          className="text-sm text-slate-400 mt-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Conheça projetos e artigos interessantes da minha comunidade de amigos
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

type ProjectCardProps = {
  project: FeaturedProject;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="relative aspect-[16/9] md:aspect-auto md:h-40 lg:h-48 overflow-hidden rounded-lg mb-4">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          </motion.div>
        </div>

        <div className="flex flex-col flex-grow">
          <motion.div
            className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className={`
                text-xs px-2 py-1 rounded-full font-code
                ${
                  project.type === "article"
                    ? "bg-blue-500/20 text-blue-400"
                    : project.type === "project"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-amber-500/20 text-amber-400"
                }
              `}
              whileHover={{ scale: 1.05 }}
            >
              {project.type === "article"
                ? "Artigo"
                : project.type === "project"
                ? "Projeto"
                : "Ferramenta"}
            </motion.span>
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>

          <motion.h4
            className="text-xl font-bold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.title}
          </motion.h4>

          <motion.p
            className="text-slate-300 mb-6 line-clamp-3 flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex items-center justify-between mt-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              {project.author.avatar ? (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={project.author.avatar || "/placeholder.svg"}
                    alt={project.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-mono text-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.author.name.charAt(0)}
                </motion.div>
              )}
              <span className="text-xs text-slate-300 font-mono">
                {project.author.name}
              </span>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-sans"
              >
                Visitar
                <ExternalLink
                  size={14}
                  className="transition-transform duration-200"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
