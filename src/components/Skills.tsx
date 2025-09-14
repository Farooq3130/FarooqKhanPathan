import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
      ]
    },
    {
      icon: Database,
      title: "Web Development",
      skills: [
        { name: "MERN Stack", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
      ]
    },
    {
      icon: Brain,
      title: "AI/ML & Data Science",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Data Science", level: 80 },
        { name: "Computer Vision", level: 75 },
        { name: "NLP", level: 78 },
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Android Studio", level: 75 },
        { name: "Tesseract OCR", level: 80 },
      ]
    }
  ];

  const certifications = [
    "Python from Coursera, Google, Excler",
    "MongoDB from MongoDB",
    "Edge computing & Data Mining from NPTEL",
    "MERN Full stack from GeeksforGeeks"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical skills across AI, web development, and software engineering
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <IconComponent className="h-6 w-6 text-primary mr-3" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              <span className="gradient-text">Certifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;