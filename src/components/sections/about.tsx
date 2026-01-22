import { about } from "@/lib/data";
import MotionWrapper from "../motion-wrapper";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
        <MotionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                        <img
                            src={about.imageUrl}
                            alt="Mehul Goyal"
                            className="rounded-full object-cover shadow-lg w-full h-full"
                        />
                    </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        About Me
                    </h2>
                    <p className="mt-6 text-muted-foreground md:text-xl/relaxed">
                        {about.bio}
                    </p>
                </div>
            </div>
        </MotionWrapper>
    </section>
  );
}
