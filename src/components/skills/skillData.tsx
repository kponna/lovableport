
import { 
  Code, Database, BarChart3, Brain, LineChart, Server, Bot, FileJson, 
  Layers, GitBranch, Workflow, PieChart, Cpu, FileCode, Library, PenTool, 
  Infinity
} from "lucide-react";
import { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "Languages",
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "Python", icon: <FileCode className="w-5 h-5" /> },
      { name: "SQL", icon: <Database className="w-5 h-5" /> },
      { name: "HTML", icon: <FileJson className="w-5 h-5" /> },
      { name: "CSS", icon: <PenTool className="w-5 h-5" /> },
    ],
  },
  {
    id: "MachineLearning",
    title: "Machine Learning",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: "Scikit-learn", icon: <Bot className="w-5 h-5" /> },
      { name: "MLflow", icon: <Server className="w-5 h-5" /> },
      { name: "XGBoost", icon: <Bot className="w-5 h-5" /> },
      { name: "TensorFlow", icon: <Brain className="w-5 h-5" /> },
    ],
  },
  {
    id: "DataVisualization",
    title: "Data Visualization",
    icon: <BarChart3 className="w-5 h-5" />,
    skills: [
      { name: "PowerBI", icon: <BarChart3 className="w-5 h-5" /> },
      { name: "Plotly", icon: <PieChart className="w-5 h-5" /> },
      { name: "Matplotlib", icon: <LineChart className="w-5 h-5" /> },
      { name: "Seaborn", icon: <LineChart className="w-5 h-5" /> },
    ],
  },
  {
    id: "DeepLearning",
    title: "Deep Learning",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: "PyTorch", icon: <Layers className="w-5 h-5" /> },
      { name: "TensorFlow", icon: <Brain className="w-5 h-5" /> },
      { name: "Keras", icon: <Cpu className="w-5 h-5" /> },
      { name: "CNN", icon: <Cpu className="w-5 h-5" /> },
    ],
  },
  {
    id: "MLOps",
    title: "MLOps",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
      { name: "DVC", icon: <Database className="w-5 h-5" /> },
      { name: "Docker", icon: <Server className="w-5 h-5" /> },
      { name: "Jenkins", icon: <Workflow className="w-5 h-5" /> },
    ],
  },
];
