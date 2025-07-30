import { useState } from "react";
import AudioUpload from "./AudioUpload";
import AudioAnalysis from "./AudioAnalysis";

interface AudioFile {
  file: File;
  url: string;
  name: string;
  duration?: number;
}

const AudioRecordingFeature = () => {
  const [selectedFile, setSelectedFile] = useState<AudioFile | null>(null);

  const handleFileSelect = (file: AudioFile) => {
    setSelectedFile(file.file ? file : null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Audio Call Analysis</h2>
        <p className="text-muted-foreground">
          Upload your call recordings for AI-powered analysis including transcription, 
          sentiment analysis, PII detection, and intelligent summaries.
        </p>
      </div>

      <AudioUpload onFileSelect={handleFileSelect} selectedFile={selectedFile || undefined} />
      
      {selectedFile && <AudioAnalysis audioFile={selectedFile} />}
    </div>
  );
};

export default AudioRecordingFeature;