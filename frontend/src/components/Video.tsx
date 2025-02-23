import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import videoFile from "../assets/screenrecording.mp4";
// Define the type for a note
interface Note {
  time: number;
  text: string;
}

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Example transcript
  const transcript: string[] = [
    "This is the transcript of the video.",
    "This video explains the basics of React.",
    "In this section, we will cover React hooks.",
    "The next part demonstrates the usage of the useState hook.",
  ];

  // Update current time when the video is playing
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Handle video play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Format the time for progress tracking
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Handle note input change
  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentNote(e.target.value);
  };

  // Handle note submission
  const handleNoteSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentNote.trim()) {
      setNotes([...notes, { time: currentTime, text: currentNote }]);
      setCurrentNote("");
    }
  };

  // Update video duration when metadata is loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
        );
      }
    };
  }, []);

  return (
    <div className="flex">
      <div className="video-container">
        {/* Video Player */}
        <video
          ref={videoRef}
          width="600"
          controls={false}
          onClick={togglePlayPause}
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button */}
        <button onClick={togglePlayPause} className="play-pause-button">
          {isPlaying ? "Pause" : "Play"}
        </button>

        {/* Progress Bar */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${(currentTime / videoDuration) * 100}%` }}
          ></div>
        </div>
        <div className="time-info">
          <span>{formatTime(currentTime)}</span> /{" "}
          <span>{formatTime(videoDuration)}</span>
        </div>
      </div>

      <div className="notes-container">
        {/* Transcript */}
        <div className="transcript">
          <h3>Transcript:</h3>
          <ul>
            {transcript.map((line, index) => (
              <li key={index}>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note-taking Section */}
        <div className="notes">
          <h3>Notes:</h3>
          <form onSubmit={handleNoteSubmit}>
            <textarea
              value={currentNote}
              onChange={handleNoteChange}
              placeholder="Take a note..."
            />
            <button type="submit">Submit Note</button>
          </form>

          <ul className="note-list">
            {notes.map((note, index) => (
              <li key={index}>
                <strong>At {formatTime(note.time)}:</strong> {note.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
