import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import MotionWrapper from "../motion-wrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24">
        <MotionWrapper>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center">
                Experience & Skills
            </h2>
            <p className="mt-4 max-w-2xl text-center mx-auto text-muted-foreground md:text-xl/relaxed">
                Core competencies and tools I work with.
            </p>
        </MotionWrapper>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillCategory, index) => (
                <MotionWrapper key={skillCategory.category} delay={0.1 * (index + 1)}>
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary hover:-translate-y-2">
                        <CardHeader>
                            <CardTitle className="text-xl font-headline tracking-tight">{skillCategory.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {skillCategory.items.map((item) => (
                                    <Badge key={item} variant="secondary">
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </MotionWrapper>
            ))}
        </div>
    </section>
  );
}
