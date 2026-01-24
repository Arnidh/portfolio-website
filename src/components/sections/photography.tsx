"use client";

import MotionWrapper from "../motion-wrapper";
import { communityLeadership } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Real photography images with descriptive titles
const photographyImages = [
  { id: "1", imageUrl: "/Photography/1.jpg", title: "Solitude in the City", description: "Modern cityscape perspective" },
  { id: "2", imageUrl: "/Photography/DSC-0078.jpg", title: "The Weight of a Day’s Work", description: "Sunset portrait composition" },
  { id: "3", imageUrl: "/Photography/DSC09273.JPG", title: "Lines of Escape", description: "Landscape photography" },
  { id: "4", imageUrl: "/Photography/DSC_0533.JPG", title: "Misty Mornings in the Tropics", description: "Structural elements in focus" },
  { id: "5", imageUrl: "/Photography/DSC_0557.JPG", title: "Riding the Waves", description: "Play of natural lighting" },
  { id: "6", imageUrl: "/Photography/DSC_0659.JPG", title: "Waiting for the Catch", description: "Street photography" },
  { id: "7", imageUrl: "/Photography/DSC_6454.jpg", title: "Colors of the Bazaar", description: "Character and expression" },
  { id: "8", imageUrl: "/Photography/IMG_20250901_110009.jpg", title: "Patterns of Urban Rhythm", description: "Finding art in the ordinary" },
  { id: "9", imageUrl: "/Photography/IMG_2805.JPG", title: "Afternoon Rest", description: "Unique angles and views" },
  { id: "10", imageUrl: "/Photography/IMG_2867.JPG", title: "The Fruit Seller’s Gaze", description: "Vibrant visual storytelling" },
  { id: "11", imageUrl: "/Photography/Mehul Goyal_1 (1).jpg", title: "Lost Between Steps", description: "Artistic composition" },
];


export default function ExtracurricularsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photographyImages.length : null));
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photographyImages.length) % photographyImages.length : null));

  return (
    <section id="extracurriculars" className="py-16 sm:py-24">
      <MotionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Extracurriculars
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Beyond my technical work, I engage in activities that foster creativity, discipline, and a broader perspective.
          </p>
        </div>
      </MotionWrapper>

      {/* Community & Leadership Section */}
      <div className="mt-16">
        <MotionWrapper delay={0.1}>
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">
              Community & Leadership
            </h3>
            <p className="mt-4 max-w-2xl text-center mx-auto text-muted-foreground md:text-lg/relaxed">
              Active involvement in developer communities, student organizations, and mentorship initiatives.
            </p>
          </div>
        </MotionWrapper>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {communityLeadership.map((item, index) => (
            <MotionWrapper key={item.id} delay={0.1 * (index + 2)}>
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{item.organization}</CardTitle>
                  <p className="text-accent font-semibold">{item.role}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* Photography Section */}
      <div className="mt-16">
        <MotionWrapper delay={0.1}>
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">
              Photography
            </h3>
            <p className="mt-4 max-w-2xl text-center mx-auto text-muted-foreground md:text-lg/relaxed">
              Exploring discipline, perspective, and attention to detail through the lens.
            </p>
          </div>
        </MotionWrapper>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photographyImages.map((image, index) => (
              <MotionWrapper key={image.id} delay={0.05 * index}>
                <div
                  className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-semibold text-lg">{image.title}</p>
                      <p className="text-sm text-gray-300">{image.description}</p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 text-white hover:text-accent transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 text-white hover:text-accent transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-7xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image
                src={photographyImages[lightboxIndex].imageUrl}
                alt={photographyImages[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            {/* Image Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold">{photographyImages[lightboxIndex].title}</h3>
              <p className="text-gray-300 mt-1">{photographyImages[lightboxIndex].description}</p>
              <p className="text-sm text-gray-400 mt-2">{lightboxIndex + 1} / {photographyImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
