import { funProjects } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MotionWrapper from "../motion-wrapper";
import { Github, ExternalLink } from "lucide-react";

export default function FunProjectsSection() {
  return (
    <div id="fun-projects" className="mt-20 md:mt-28">
      <MotionWrapper>
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Mini Fun Projects
            </h2>
            <p className="mt-4 max-w-2xl text-center mx-auto text-muted-foreground md:text-xl/relaxed">
            A few things I've built for fun and learning.
            </p>
        </div>
      </MotionWrapper>
      <MotionWrapper delay={0.2}>
        <TooltipProvider>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {funProjects.map((project) => (
              <Tooltip key={project.title} delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                      {project.title}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="w-80 p-0 border-none bg-transparent shadow-none">
                    <Card className="transition-all duration-300 shadow-xl shadow-primary/20 border-primary">
                        <CardContent className="p-6">
                            <div>
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                            </div>
                            <div className="flex items-center gap-2 mt-4 -ml-2">
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
                            </div>
                        </CardContent>
                    </Card>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </MotionWrapper>
    </div>
  );
}
