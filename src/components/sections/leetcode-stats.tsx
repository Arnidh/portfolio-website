"use client";

import { useEffect, useState } from "react";
import { leetcodeConfig } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Loader2, Trophy } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "../motion-wrapper";

interface LeetCodeData {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    acceptanceRate: number;
    ranking: number;
    status: string;
    message?: string;
}

export default function LeetCodeStats() {
    const [data, setData] = useState<LeetCodeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            try {
                const response = await fetch(
                    `https://leetcode-stats-api.herokuapp.com/${leetcodeConfig.username}`
                );
                const result = await response.json();

                if (result.status === "error") {
                    setError(true);
                } else {
                    setData(result);
                }
            } catch (err) {
                console.error("Failed to fetch LeetCode stats", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLeetCodeStats();
    }, []);

    if (error) {
        return null; // Hide section if functionality fails (graceful degradation)
    }

    return (
        <section id="leetcode" className="relative overflow-hidden h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <MotionWrapper>
                <div>
                    <div className="flex flex-col items-center text-center mb-10">
                        <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary">
                            <Trophy className="w-3 h-3 mr-2" />
                            Problem Solving
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                            LeetCode Statistics
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            My continuous journey in data structures and algorithms.
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        </div>
                    ) : data ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Main Stats Card */}
                            <Card className="bg-card/50 border-primary/10 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <span>Total Solved</span>
                                        <Link
                                            href={`https://leetcode.com/u/${leetcodeConfig.username}/`}
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </CardTitle>
                                    <CardDescription>
                                        Global Ranking: #{data.ranking?.toLocaleString() || "N/A"}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-end gap-2 mb-6">
                                        <span className="text-6xl font-bold text-primary">
                                            {data.totalSolved}
                                        </span>
                                        <span className="text-muted-foreground text-lg mb-2">
                                            / {data.totalQuestions}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Acceptance Rate</span>
                                            <span className="font-medium">{data.acceptanceRate}%</span>
                                        </div>
                                        <Progress value={data.acceptanceRate} className="h-2 bg-muted/50" />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Breakdown Card */}
                            <Card className="bg-card/50 border-primary/10 backdrop-blur-sm flex flex-col justify-center">
                                <CardContent className="pt-6 space-y-6">
                                    {/* Easy */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-emerald-400 font-medium">Easy</span>
                                            <span className="text-muted-foreground">
                                                {data.easySolved} / {data.totalEasy}
                                            </span>
                                        </div>
                                        <Progress
                                            value={(data.easySolved / data.totalEasy) * 100}
                                            className="h-2 bg-muted/50 [&>div]:bg-emerald-400"
                                        />
                                    </div>

                                    {/* Medium */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-amber-400 font-medium">Medium</span>
                                            <span className="text-muted-foreground">
                                                {data.mediumSolved} / {data.totalMedium}
                                            </span>
                                        </div>
                                        <Progress
                                            value={(data.mediumSolved / data.totalMedium) * 100}
                                            className="h-2 bg-muted/50 [&>div]:bg-amber-400"
                                        />
                                    </div>

                                    {/* Hard */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-rose-400 font-medium">Hard</span>
                                            <span className="text-muted-foreground">
                                                {data.hardSolved} / {data.totalHard}
                                            </span>
                                        </div>
                                        <Progress
                                            value={(data.hardSolved / data.totalHard) * 100}
                                            className="h-2 bg-muted/50 [&>div]:bg-rose-400"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ) : null}
                </div>
            </MotionWrapper>
        </section>
    );
}
