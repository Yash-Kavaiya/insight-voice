import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mic, 
  Clock, 
  TrendingUp, 
  Users, 
  Play, 
  MoreVertical,
  Upload,
  Search,
  Calendar,
  Heart,
  Zap,
  FileAudio,
  ArrowLeft,
  Home
} from "lucide-react";
import AudioRecordingFeature from "./AudioRecordingFeature";

const Dashboard = ({ onBackToHome }: { onBackToHome?: () => void }) => {
  // Sample data for demonstration
  const recentRecordings = [
    {
      id: 1,
      title: "Client Strategy Call",
      date: "2024-01-29",
      duration: "45:32",
      participants: ["You", "Sarah Chen"],
      sentiment: "positive",
      status: "processed"
    },
    {
      id: 2,
      title: "Team Standup Meeting",
      date: "2024-01-29",
      duration: "23:15",
      participants: ["You", "Mike Johnson", "Alex Rivera"],
      sentiment: "neutral",
      status: "processing"
    },
    {
      id: 3,
      title: "Product Discovery Interview",
      date: "2024-01-28",
      duration: "62:45",
      participants: ["You", "Jennifer Smith"],
      sentiment: "positive",
      status: "processed"
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-success';
      case 'negative':
        return 'text-destructive';
      default:
        return 'text-warning';
    }
  };

  const getSentimentBadge = (sentiment: string) => {
    const colors = {
      positive: 'bg-success/20 text-success border-success/30',
      negative: 'bg-destructive/20 text-destructive border-destructive/30',
      neutral: 'bg-warning/20 text-warning border-warning/30'
    };
    return colors[sentiment as keyof typeof colors] || colors.neutral;
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex items-center gap-4">
            {onBackToHome && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBackToHome}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            )}
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your conversation insights.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="glass" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload Recording
            </Button>
            <Button variant="hero" className="flex items-center gap-2">
              <Mic className="w-4 h-4" />
              Start Recording
            </Button>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <FileAudio className="w-4 h-4" />
              Audio Analysis
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8 mt-8">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Recordings</p>
                  <p className="text-3xl font-bold text-foreground">147</p>
                  <p className="text-sm text-success flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12% this month
                  </p>
                </div>
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Mic className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hours Analyzed</p>
                  <p className="text-3xl font-bold text-foreground">2,547</p>
                  <p className="text-sm text-success flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    +156h this week
                  </p>
                </div>
                <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Sentiment</p>
                  <p className="text-3xl font-bold text-foreground">8.4</p>
                  <p className="text-sm text-success flex items-center mt-1">
                    <Heart className="w-4 h-4 mr-1" />
                    +0.3 improvement
                  </p>
                </div>
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Key Insights</p>
                  <p className="text-3xl font-bold text-foreground">23</p>
                  <p className="text-sm text-warning flex items-center mt-1">
                    <Zap className="w-4 h-4 mr-1" />
                    5 new today
                  </p>
                </div>
                <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Recordings */}
        <Card className="gradient-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-semibold">Recent Recordings</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Calendar className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRecordings.map((recording) => (
                <div 
                  key={recording.id}
                  className="flex items-center justify-between p-4 glass-effect rounded-lg hover:bg-white/10 transition-smooth"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <Mic className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{recording.title}</h3>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <span>{recording.date}</span>
                        <span>•</span>
                        <span>{recording.duration}</span>
                        <span>•</span>
                        <span>{recording.participants.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSentimentBadge(recording.sentiment)}`}>
                      {recording.sentiment}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      recording.status === 'processed' 
                        ? 'bg-success/20 text-success border border-success/30' 
                        : 'bg-warning/20 text-warning border border-warning/30'
                    }`}>
                      {recording.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="ghost" className="text-primary hover:text-primary-light">
                View All Recordings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="gradient-card border-border/50 hover-lift cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Start New Recording</h3>
              <p className="text-muted-foreground text-sm">Begin a new call recording session</p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border/50 hover-lift cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Recording</h3>
              <p className="text-muted-foreground text-sm">Upload existing audio files for analysis</p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border/50 hover-lift cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">View Analytics</h3>
              <p className="text-muted-foreground text-sm">Explore detailed conversation insights</p>
            </CardContent>
          </Card>
        </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="mt-8">
            <AudioRecordingFeature />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;