
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/constants';

const ProjectShowcase = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [dimensions, setDimensions] = useState({
    viewport: 0,
    content: 0,
  });

  const shouldReduceMotion = useReducedMotion();

  const maxScroll = Math.max(
    0,
    dimensions.content - dimensions.viewport
  );

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const updateDimensions = () => {
      setDimensions({
        viewport: section.clientWidth,
        content: track.scrollWidth,
      });
    };

    updateDimensions();

    let resizeObserver;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(section);
      resizeObserver.observe(track);
    }

    window.addEventListener('resize', updateDimensions);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const horizontalX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxScroll]
  );

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  const projects = PORTFOLIO_DATA.projects;

  const sectionHeight = `calc(100vh + ${maxScroll}px)`;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#090909]"
      style={{
        height: sectionHeight,
      }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Section heading */}
        <div className="absolute left-6 right-6 top-24 z-20 flex items-center justify-between md:left-12 md:right-12">
          <div className="flex items-center gap-4">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-[#929292]">
              01 / Selected Work
            </span>

            <span className="hidden h-px w-12 bg-[#333] md:block" />
          </div>

          <span className="font-body text-xs uppercase tracking-widest text-[#929292]">
            {String(projects.length).padStart(2, '0')} Projects
          </span>
        </div>

        {/* Horizontal project track */}
        <motion.div
          ref={trackRef}
          style={
            shouldReduceMotion
              ? undefined
              : { x: horizontalX }
          }
          className="flex w-max items-start gap-10 px-6 pt-12 md:gap-20 md:px-12 lg:gap-28"
        >
          {projects.map((project, index) => {
            const projectUrl = project.liveUrl || project.url;
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <motion.article
                key={project.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 32 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group w-[82vw] flex-shrink-0 md:w-[62vw] lg:w-[46vw]"
              >
                {/* Project image */}
                <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-[#151515]">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { scale: 1.045 }
                      }
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-display text-4xl uppercase tracking-tight text-[#333] md:text-6xl">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Project number */}
                  <span className="absolute left-4 top-4 z-10 font-body text-xs tracking-widest text-white/80 md:left-6 md:top-6">
                    PROJECT / {projectNumber}
                  </span>

                  {/* Project link overlay */}
                  {projectUrl && (
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title}`}
                      className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                    />
                  )}

                  {/* View project icon */}
                  {projectUrl && (
                    <div className="absolute bottom-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black md:bottom-6 md:right-6">
                      <ArrowUpRight size={20} strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Project details */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 font-body text-[10px] uppercase tracking-[0.2em] text-[#737373] md:text-xs">
                        {project.id} — {project.category}
                      </p>

                      <h3 className="font-display text-3xl uppercase leading-none tracking-tight text-[#929292] transition-colors duration-300 group-hover:text-[#F2F0EB] md:text-5xl lg:text-6xl">
                        {projectUrl ? (
                          <a
                            href={projectUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="focus-visible:outline-none focus-visible:underline"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                    </div>

                    {projectUrl && (
                      <ArrowDownRight
                        size={22}
                        strokeWidth={1}
                        className="mt-1 flex-shrink-0 text-[#737373] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#F2F0EB]"
                      />
                    )}
                  </div>

                  <p className="max-w-md font-body text-sm leading-relaxed text-[#929292] md:text-base">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Horizontal scroll progress */}
        <div className="absolute bottom-8 left-6 right-6 z-20 md:left-12 md:right-12">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#737373]">
              Explore the work
            </span>

            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#737373]">
              Scroll to explore
            </span>
          </div>

          <div className="h-px w-full overflow-hidden bg-[#292929]">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-[#F2F0EB]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
