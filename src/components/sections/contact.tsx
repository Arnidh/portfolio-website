import { contact } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "../motion-wrapper";

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 sm:py-24">
            <MotionWrapper>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                        Open to new opportunities and collaborations.
                    </p>
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
                </div>
            </MotionWrapper>
        </section>
    );
}
