import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Eye } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "../motion-wrapper";

export default function ResumeSection() {
    return (
        <section id="resume" className="h-full">
            <MotionWrapper>
                <Card className="h-full mx-auto text-center transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary flex flex-col justify-center">
                    <CardContent className="p-8 md:p-12 !pt-8 md:!pt-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                            Resume
                        </h2>
                        <p className="mt-6 text-muted-foreground md:text-xl/relaxed">
                            You can view and download my full resume for more details on my experience and qualifications.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <a href="/MehulGoyal_Resume.pdf" download="MehulGoyal_Resume.pdf">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Resume
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/MehulGoyal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <Eye className="mr-2 h-5 w-5" />
                                    View Resume
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </MotionWrapper>
        </section>
    );
}
