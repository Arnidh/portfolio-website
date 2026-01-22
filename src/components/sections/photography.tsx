import PhotographyGrid from "./photography-grid";
import MotionWrapper from "../motion-wrapper";
import { communityLeadership } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Real photography images
const photographyImages = [
  { id: "1", imageUrl: "/Photography/1.jpg", description: "Photography", location: "", year: "" },
  { id: "2", imageUrl: "/Photography/DSC-0078.jpg", description: "Photography", location: "", year: "" },
  { id: "3", imageUrl: "/Photography/DSC09273.JPG", description: "Photography", location: "", year: "" },
  { id: "4", imageUrl: "/Photography/DSC_0533.JPG", description: "Photography", location: "", year: "" },
  { id: "5", imageUrl: "/Photography/DSC_0557.JPG", description: "Photography", location: "", year: "" },
  { id: "6", imageUrl: "/Photography/DSC_0659.JPG", description: "Photography", location: "", year: "" },
  { id: "7", imageUrl: "/Photography/DSC_6454.jpg", description: "Photography", location: "", year: "" },
  { id: "8", imageUrl: "/Photography/IMG_20250901_110009.jpg", description: "Photography", location: "", year: "" },
  { id: "9", imageUrl: "/Photography/IMG_2805.JPG", description: "Photography", location: "", year: "" },
  { id: "10", imageUrl: "/Photography/IMG_2867.JPG", description: "Photography", location: "", year: "" },
  { id: "11", imageUrl: "/Photography/Mehul Goyal_1 (1).jpg", description: "Photography", location: "", year: "" },
  { id: "12", imageUrl: "/Photography/_HPS1183.JPG", description: "Photography", location: "", year: "" },
];

export default function ExtracurricularsSection() {
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
          <PhotographyGrid images={photographyImages} />
        </div>
      </div>
    </section>
  );
}
