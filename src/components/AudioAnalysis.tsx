import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, 
  Brain, 
  Shield, 
  Heart, 
  Play, 
  Pause,
  Download,
  RefreshCw
} from "lucide-react";

interface AudioFile {
  file: File;
  url: string;
  name: string;
  duration?: number;
}

interface AnalysisResult {
  transcript: string;
  summary: string;
  piiDetected: string[];
  sentimentScore: number;
  sentimentLabel: string;
  keyTopics: string[];
  speakerCount: number;
}

interface AudioAnalysisProps {
  audioFile: AudioFile;
}

const AudioAnalysis = ({ audioFile }: AudioAnalysisProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [currentStep, setCurrentStep] = useState("");

  // Mock analysis function - in real implementation, this would call actual APIs
  const startAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisResult(null);

    const steps = [
      { step: "Processing audio file...", progress: 20 },
      { step: "Transcribing speech...", progress: 40 },
      { step: "Analyzing sentiment...", progress: 60 },
      { step: "Detecting PII...", progress: 80 },
      { step: "Generating summary...", progress: 100 },
    ];

    for (const { step, progress } of steps) {
      setCurrentStep(step);
      setAnalysisProgress(progress);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    // Mock results
    const mockResult: AnalysisResult = {
      transcript: `Speaker 1: Hello, thank you for joining today's call. I wanted to discuss the Q4 marketing strategy and get your thoughts on the campaign proposals.

Speaker 2: Absolutely, I've reviewed the materials you sent over. I think the digital marketing approach looks solid, but I have some concerns about the budget allocation.

Speaker 1: What specific concerns do you have? We allocated about 60% to digital channels and 40% to traditional media.

Speaker 2: I think we should consider increasing the social media budget, especially for LinkedIn and Instagram. Our target demographic has shifted more towards these platforms.

Speaker 1: That's a great point. Let me check with Sarah Johnson from our analytics team to get the latest engagement numbers. Can you send me your email again? It's sarah.johnson@company.com, right?

Speaker 2: Yes, that's correct. Also, my phone number is 555-123-4567 if you need to reach me directly.`,
      
      summary: "This call focused on Q4 marketing strategy discussion between two team members. Key topics included budget allocation between digital and traditional media, with emphasis on increasing social media presence on LinkedIn and Instagram. The conversation highlighted the need for updated engagement analytics and coordination with the analytics team.",
      
      piiDetected: [
        "sarah.johnson@company.com",
        "555-123-4567"
      ],
      
      sentimentScore: 8.2,
      sentimentLabel: "Positive",
      
      keyTopics: [
        "Q4 Marketing Strategy",
        "Budget Allocation", 
        "Social Media Marketing",
        "Analytics Review",
        "Digital Channels"
      ],
      
      speakerCount: 2
    };

    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
    setCurrentStep("Analysis complete!");
  };

  const getSentimentColor = (score: number) => {
    if (score >= 7) return "text-success";
    if (score >= 4) return "text-warning";
    return "text-destructive";
  };

  const getSentimentBadgeColor = (label: string) => {
    switch (label.toLowerCase()) {
      case 'positive':
        return "bg-success/20 text-success border-success/30";
      case 'negative':
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-warning/20 text-warning border-warning/30";
    }
  };

  return (
    <div className="space-y-6">
      {/* Analysis Controls */}
      <Card className="gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Audio Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium">{audioFile.name}</p>
              <p className="text-sm text-muted-foreground">
                Ready for analysis
              </p>
            </div>
            <Button 
              onClick={startAnalysis}
              disabled={isAnalyzing}
              variant="hero"
              className="flex items-center gap-2"
            >
              {isAnalyzing ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              {isAnalyzing ? "Analyzing..." : "Start Analysis"}
            </Button>
          </div>

          {isAnalyzing && (
            <div className="space-y-3">
              <Progress value={analysisProgress} className="w-full" />
              <p className="text-sm text-muted-foreground">{currentStep}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysisResult && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transcript */}
          <Card className="gradient-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Live Transcript
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <Textarea
                value={analysisResult.transcript}
                readOnly
                className="min-h-[300px] text-sm"
              />
            </CardContent>
          </Card>

          {/* Summary & Insights */}
          <div className="space-y-6">
            {/* Summary */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{analysisResult.summary}</p>
              </CardContent>
            </Card>

            {/* Sentiment Analysis */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Sentiment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-2xl font-bold">{analysisResult.sentimentScore}/10</p>
                    <p className="text-sm text-muted-foreground">Overall Sentiment</p>
                  </div>
                  <Badge className={getSentimentBadgeColor(analysisResult.sentimentLabel)}>
                    {analysisResult.sentimentLabel}
                  </Badge>
                </div>
                <Progress value={analysisResult.sentimentScore * 10} className="w-full" />
              </CardContent>
            </Card>

            {/* PII Detection */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  PII Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    {analysisResult.piiDetected.length} sensitive items detected:
                  </p>
                  {analysisResult.piiDetected.map((pii, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="mr-2 mb-2 bg-destructive/10 text-destructive border-destructive/30"
                    >
                      {pii}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Key Topics */}
      {analysisResult && (
        <Card className="gradient-card border-border/50">
          <CardHeader>
            <CardTitle>Key Topics & Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-4 glass-effect rounded-lg">
                <p className="text-2xl font-bold text-primary">{analysisResult.speakerCount}</p>
                <p className="text-sm text-muted-foreground">Speakers Detected</p>
              </div>
              <div className="text-center p-4 glass-effect rounded-lg">
                <p className="text-2xl font-bold text-primary">{analysisResult.keyTopics.length}</p>
                <p className="text-sm text-muted-foreground">Key Topics</p>
              </div>
              <div className="text-center p-4 glass-effect rounded-lg">
                <p className="text-2xl font-bold text-primary">{Math.floor((audioFile.duration || 180) / 60)}m</p>
                <p className="text-sm text-muted-foreground">Duration</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Topics Discussed:</p>
              <div className="flex flex-wrap gap-2">
                {analysisResult.keyTopics.map((topic, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AudioAnalysis;