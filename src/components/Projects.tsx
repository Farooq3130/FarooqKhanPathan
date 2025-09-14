import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Bot, Zap, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Script Sense – AI Handwriting Evaluator",
      description: "Built an intelligent grading system that digitizes and evaluates handwritten student answer sheets using OCR and NLP technologies.",
      longDescription: "Advanced AI-powered solution that revolutionizes academic assessment by automatically grading handwritten papers. The system combines computer vision, natural language processing, and machine learning to provide accurate, consistent evaluations.",
      icon: Brain,
      technologies: ["Python", "Tesseract OCR", "NLP", "Machine Learning", "Computer Vision"],
      achievements: [
        "85% accuracy in content evaluation",
        "60% reduction in evaluation time",
        "Semantic analysis implementation",
        "Scalable architecture design"
      ],
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "AI Assistant Robot for Pipeline Maintenance",
      description: "Designed and simulated an autonomous robot for pipeline inspection and maintenance using AI-based visual recognition systems.",
      longDescription: "Cutting-edge robotics solution that combines artificial intelligence with industrial automation to revolutionize infrastructure maintenance and monitoring.",
      icon: Bot,
      technologies: ["AI/ML", "Computer Vision", "Robotics", "Python", "Simulation"],
      achievements: [
        "Autonomous navigation system",
        "Real-time damage detection",
        "AI-powered visual recognition",
        "Preventive maintenance optimization"
      ],
      demoLink: "#",
      githubLink: "#",
      featured: true
    }
  ];

  const additionalProjects = [
    {
      title: "Smart Healthcare Monitor",
      description: "IoT-based health monitoring system with predictive analytics",
      technologies: ["Python", "IoT", "Machine Learning", "React"],
      icon: Zap
    },
    {
      title: "Expense Tracker App",
      description: "Full-stack web application for personal finance management",
      technologies: ["MERN Stack", "Chart.js", "JWT Authentication"],
      icon: Target
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card key={index} className={`group card-hover overflow-hidden ${project.featured ? 'border-primary/50 glow' : ''} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-cols-2' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 ${!isEven ? 'lg:order-2' : ''} transition-all duration-300 group-hover:translate-y-[-4px]`}>
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 mr-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <IconComponent className="h-6 w-6 text-primary transition-all duration-300 group-hover:rotate-12" />
                      </div>
                      {project.featured && (
                        <Badge variant="default" className="bg-gradient-primary">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="hero" className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:translate-y-[-2px]">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12" />
                          View Demo
                        </Button>
                        <Button variant="outline" className="group transition-all duration-300 hover:bg-primary/5 hover:border-primary/50 hover:translate-y-[-2px]">
                          <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12" />
                          View Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                  
                  {/* Visual/Placeholder */}
                  <div className={`bg-gradient-secondary p-8 flex items-center justify-center min-h-[300px] ${!isEven ? 'lg:order-1' : ''} transition-all duration-500 group-hover:bg-gradient-primary/10`}>
                    <div className="text-center transition-all duration-500 group-hover:scale-110">
                      <IconComponent className="h-24 w-24 text-primary/30 mx-auto mb-4 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-125 group-hover:rotate-6" />
                      <p className="text-muted-foreground transition-all duration-300 group-hover:text-primary/70">Project Demo Coming Soon</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="group card-hover transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
                  <CardHeader className="transition-all duration-300 group-hover:bg-primary/5">
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-5 w-5 text-primary mr-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                      <CardTitle className="text-lg transition-all duration-300 group-hover:text-primary">{project.title}</CardTitle>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="transition-all duration-300 group-hover:translate-y-[-2px]">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-105">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;