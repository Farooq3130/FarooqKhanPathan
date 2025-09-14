import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Users, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "SkillDzire",
      location: "Remote",
      duration: "May 2025 - Jul 2025",
      type: "Internship",
      description: "Worked on cutting-edge AI applications focusing on real-time systems and intelligent automation solutions.",
      achievements: [
        "Developed Smart Grading Systems with 85% accuracy",
        "Built Virtual Assistants using NLP technologies", 
        "Enhanced model performance through hyperparameter tuning",
        "Published working projects to GitHub with comprehensive documentation",
        "Optimized datasets for improved model scalability"
      ],
      technologies: ["Python", "Machine Learning", "NLP", "Computer Vision", "Git"],
      icon: Zap,
      current: false
    },
    {
      title: "Virtual Internship Participant", 
      company: "Google Developers",
      location: "Virtual",
      duration: "Feb 2022 - Dec 2022",
      type: "Training Program",
      description: "Comprehensive virtual internship program focusing on Android development and mobile application deployment.",
      achievements: [
        "Learned Android development fundamentals and best practices",
        "Designed multiple mobile applications using Android Studio",
        "Mastered Kotlin programming for Android development",
        "Completed hands-on projects with real-world applications",
        "Gained expertise in mobile app deployment strategies"
      ],
      technologies: ["Kotlin", "Android Studio", "Java", "Mobile Development", "UI/UX"],
      icon: Users,
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on internships and real-world project development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                  
                  {/* Content Card */}
                  <Card className="card-hover ml-0 md:ml-16">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-foreground">
                              {exp.company}
                            </CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:items-end space-y-2 flex-shrink-0">
                          <Badge 
                            variant={exp.current ? "default" : "secondary"}
                            className={exp.current ? "bg-gradient-primary" : ""}
                          >
                            {exp.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-hover bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Ready for New Opportunities</h3>
              <p className="opacity-90 mb-4">
                Currently seeking internship and full-time opportunities in AI/ML and Software Development
              </p>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Available Immediately
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;