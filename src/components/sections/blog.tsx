"use client";

import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "../motion-wrapper";

export default function BlogSection() {
    if (!blogPosts.length) return null;

    return (
        <section id="blog" className="py-20 sm:py-32 relative">
            <MotionWrapper>
                <div>
                    <div className="flex flex-col items-center text-center mb-16">
                        <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary">
                            <BookOpen className="w-3 h-3 mr-2" />
                            Writing
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Latest Articles
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Thoughts on technology, software engineering, and the future of AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Card
                                key={index}
                                className="bg-card/50 border-primary/10 backdrop-blur-sm flex flex-col h-full hover:border-primary/30 transition-colors group"
                            >
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs text-muted-foreground">{post.date}</span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm line-clamp-3">
                                        {post.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {post.tags?.map((tag) => (
                                            <span key={tag} className="text-xs text-primary/70 bg-primary/5 px-2 py-1 rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-2 flex-wrap">
                                    {post.links.map((link, i) => (
                                        <Button key={i} asChild variant="outline" size="sm" className="flex-1 hover:text-primary hover:bg-primary/5">
                                            <Link href={link.url} target="_blank">
                                                {link.platform}
                                                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    ))}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </MotionWrapper>
        </section>
    );
}
