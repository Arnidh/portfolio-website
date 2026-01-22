import MotionWrapper from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { about, contact } from "@/lib/data";
import Link from "next/link";
import RotatingText from "../rotating-text";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import imageData from "@/lib/placeholder-images.json";

const roles = [
  "AI/ML Engineer",
  "Software Developer",
  "Systems Builder",
  "Problem Solver",
];

const heroImage = imageData.heroImage;

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/background.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(214,215,218,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <MotionWrapper>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline">
            {about.name}
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.1}>
          <div className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold h-12 flex items-center justify-center text-primary">
            <RotatingText items={roles} />
          </div>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            A builder at heart, creating robust and intelligent systems from first principles.
          </p>
        </MotionWrapper>
        <MotionWrapper delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href={contact.github} target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href={contact.linkedin} target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
