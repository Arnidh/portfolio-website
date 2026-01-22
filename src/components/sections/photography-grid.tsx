"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

type PhotographyGridProps = {
  images: (ImagePlaceholder & { location?: string, year?: string })[];
};

export default function PhotographyGrid({ images }: PhotographyGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="relative group overflow-hidden rounded-lg aspect-[4/3]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
          transition-delay={(index % 3) * 0.1 + 's'}
        >
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-end p-4">
            <div className="text-white">
              <p className="font-semibold">{image.location}</p>
              <p className="text-sm opacity-80">{image.year}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
