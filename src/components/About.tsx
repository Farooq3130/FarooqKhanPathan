import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Trophy, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging AI and full-stack development to create innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Education & Info */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Bachelor of Technology in Artificial Intelligence</h4>
                  <p className="text-muted-foreground">Chaithanya Bharathi Institute of Technology</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Jun 2022 - Jun 2026
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">CGPA</span>
                    <Badge variant="secondary" className="text-primary">8.75</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Achievements</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Winner - Project Expo at CBIT</span>
                    <Badge variant="outline">🏆</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Runner-Up - Hackathon at CMR</span>
                    <Badge variant="outline">🥈</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Finalist - GNIT Hackathon</span>
                    <Badge variant="outline">🎯</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Personal Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                B.Tech student in Artificial Intelligence with strong skills in Full Stack Development and AI/ML. 
                Seeking opportunities to apply scalable coding practices and contribute to innovative real-world projects. 
                Passionate about building intelligent systems that improve efficiency and user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Strong collaborator with proven problem-solving skills, eager to learn and adapt in fast-paced environments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">English</Badge>
                <Badge variant="secondary">Telugu</Badge>
                <Badge variant="secondary">Hindi</Badge>
              </div>
            </div>

            <Card className="card-hover bg-gradient-secondary">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">Let's Connect!</h4>
                <p className="text-muted-foreground mb-4">
                  Always open to discussing new opportunities and collaborations
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  Hyderabad, India
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;