import { projects } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "../motion-wrapper";
import { Badge } from "@/components/ui/badge";
import FunProjectsSection from "./fun-projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8 sm:py-12">
        <MotionWrapper>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center">
                Projects
            </h2>
            <p className="mt-4 max-w-2xl text-center mx-auto text-muted-foreground md:text-xl/relaxed">
                A selection of high-impact technical work.
            </p>
        </MotionWrapper>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
                <MotionWrapper key={project.title} delay={0.1 * (index + 1)}>
                    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary hover:-translate-y-2">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center gap-4">
                                {project.links.github && (
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href={project.links.github} target="_blank" aria-label="GitHub repository">
                                            <Github className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                )}
                                {project.links.demo && (
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href={project.links.demo} target="_blank" aria-label="Live demo">
                                            <ExternalLink className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                )}
                                {project.links.paper && (
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href={project.links.paper} target="_blank" aria-label="Research paper">
                                            <FileText className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </CardFooter>
                    </Card>
                </MotionWrapper>
            ))}
        </div>
        <FunProjectsSection />
    </section>
  );
}
