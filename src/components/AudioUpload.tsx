import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileAudio, X, Play, Pause } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AudioFile {
  file: File;
  url: string;
  name: string;
  duration?: number;
}

interface AudioUploadProps {
  onFileSelect: (file: AudioFile) => void;
  selectedFile?: AudioFile;
}

const AudioUpload = ({ onFileSelect, selectedFile }: AudioUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('audio/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an audio file",
        variant: "destructive",
      });
      return;
    }

    const audioFile: AudioFile = {
      file,
      url: URL.createObjectURL(file),
      name: file.name,
    };

    onFileSelect(audioFile);
    
    toast({
      title: "File uploaded",
      description: `${file.name} ready for analysis`,
    });
  };

  const handleSampleSelect = (sampleName: string) => {
    // Create a mock audio file for demo purposes
    const mockAudioData = new Uint8Array(1024); // Small audio buffer
    const blob = new Blob([mockAudioData], { type: 'audio/wav' });
    const file = new File([blob], sampleName, { type: 'audio/wav' });
    handleFileSelect(file);
  };

  const togglePlayback = () => {
    if (!audioRef.current || !selectedFile) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const removeFile = () => {
    if (selectedFile) {
      URL.revokeObjectURL(selectedFile.url);
    }
    setIsPlaying(false);
    onFileSelect({} as AudioFile);
  };

  return (
    <Card className="gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileAudio className="w-5 h-5" />
          Audio Upload
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!selectedFile?.file ? (
          <>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                dragActive
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Drop your audio file here</p>
              <p className="text-muted-foreground mb-4">
                or click to browse (MP3, WAV, M4A supported)
              </p>
              <Button 
                onClick={() => fileInputRef.current?.click()}
                variant="hero"
              >
                Choose File
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleChange}
                className="hidden"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Or try our sample recordings:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  variant="glass"
                  onClick={() => handleSampleSelect('Sample Business Call.wav')}
                  className="justify-start"
                >
                  <FileAudio className="w-4 h-4 mr-2" />
                  Sample Business Call
                </Button>
                <Button
                  variant="glass"
                  onClick={() => handleSampleSelect('Sample Team Meeting.wav')}
                  className="justify-start"
                >
                  <FileAudio className="w-4 h-4 mr-2" />
                  Sample Team Meeting
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="glass-effect p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <FileAudio className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(selectedFile.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={removeFile}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlayback}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </Button>
              <audio
                ref={audioRef}
                src={selectedFile.url}
                onEnded={() => setIsPlaying(false)}
                onLoadedMetadata={() => {
                  if (audioRef.current) {
                    selectedFile.duration = audioRef.current.duration;
                  }
                }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AudioUpload;