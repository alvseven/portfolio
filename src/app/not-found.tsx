"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Code } from "lucide-react";
import { Button } from "./(shared)/components/ui/button";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

const TypeParticle = ({ delay, duration, x, y }: Omit<Particle, "id">) => {
  return (
    <motion.div
      className={`absolute text-xs sm:text-sm font-mono text-blue-400 opacity-70 pointer-events-none`}
      initial={{
        x: x,
        y: y,
        opacity: 0,
        scale: Math.random() * 0.5 + 0.5,
      }}
      animate={{
        x: x + (Math.random() * 200 - 100),
        y: y - (Math.random() * 300 + 100),
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
    >
      {"undefined"}
    </motion.div>
  );
};

const TypeGalaxy = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const particleCount = Math.min(Math.floor((width * height) / 15000), 50);

      const newParticles = Array.from({ length: particleCount }).map(
        (_, i) => ({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height + height * 0.2,
          delay: Math.random() * 5,
          duration: Math.random() * 5 + 5,
        })
      );

      setParticles(newParticles);
    };

    createParticles();

    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <TypeParticle
          key={particle.id}
          delay={particle.delay}
          duration={particle.duration}
          x={particle.x}
          y={particle.y}
        />
      ))}
    </div>
  );
};

export default function NotFound() {
  return (
    <div className="flex min-h-[77vh] flex-col items-center justify-center bg-background relative overflow-hidden">
      <TypeGalaxy />

      <div className="container flex max-w-md flex-col items-center px-4 text-center z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Página não encontrada
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg text-gray-400">
            A página que você está procurando não existe ou foi movida.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8 w-full rounded-lg bg-gray-900/70 backdrop-blur-sm p-4 font-mono"
        >
          <div className="flex items-center gap-2 text-gray-500">
            <Code className="h-4 w-4" />
            <span>not-found.tsx</span>
          </div>
          <div className="mt-2 text-left">
            <span className="text-blue-400">type</span>&nbsp;
            <span className="text-green-400">Page</span>&nbsp;
            <span className="text-white">=</span>&nbsp;
            <motion.span
              className="text-green-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              404
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            asChild
            variant="outline"
            className="gap-2 border-blue-700 bg-blue-900/20 backdrop-blur-sm text-blue-400 hover:bg-blue-900/30 hover:text-blue-300"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <p>Voltar para home</p>
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
