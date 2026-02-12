import { useState, useEffect } from "react";

export default function VideoScreening({ onSubmit }) {
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [decision, setDecision] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Create video URL only once (prevents UI shaking)
  useEffect(() => {
    if (!video) {
      setVideoUrl(null);
      return;
    }

    const url = URL.createObjectURL(video);
    setVideoUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [video]);

  const handleSubmit = () => {
    if (!video || !decision || submitted) return;

    onSubmit({
      video,
      decision,
      notes,
    });

    setSubmitted(true); // ✅ lock submission
  };

  return (
    <div className="p-4 border rounded-lg mt-6 transition-all bg-white">
      <h3 className="font-semibold mb-3">Video Screening</h3>

      {/* Upload */}
      <input
        type="file"
        accept="video/*"
        disabled={submitted}
        onChange={(e) => setVideo(e.target.files[0])}
        className="mb-3 disabled:opacity-60"
      />

      {/* Preview */}
      {videoUrl && (
        <video
          controls
          src={videoUrl}
          className="w-full rounded mb-3"
        />
      )}

      {/* Decision */}
      <div className="flex gap-3 mb-3">
        {["Pass", "Hold", "Reject"].map((d) => (
          <button
            key={d}
            type="button"
            disabled={submitted}
            onClick={() => setDecision(d)}
            className={`px-4 py-1 rounded border text-sm transition-all
              ${
                decision === d
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white hover:bg-gray-100"
              }
              disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Notes */}
      <textarea
        placeholder="Recruiter notes..."
        value={notes}
        disabled={submitted}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full border rounded p-2 text-sm resize-none
                   focus:outline-none focus:ring-2 focus:ring-blue-300
                   transition-all disabled:opacity-60"
        rows={3}
      />

      {/* Submit / Submitted */}
      {!submitted ? (
        <button
          disabled={!video || !decision}
          onClick={handleSubmit}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all"
        >
          Submit Screening
        </button>
      ) : (
        <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold">
          <span className="text-xl">✅</span>
          <span>Your response is submitted to audit log</span>
        </div>
      )}
    </div>
  );
}