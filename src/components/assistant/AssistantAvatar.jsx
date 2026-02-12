export default function AssistantAvatar({ status }) {
  const emojiMap = {
    idle: "😌",
    thinking: "🤔",
    speaking: "🗣️",
    listening: "🎧",
  };

  return (
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-semibold shadow-md border-2 border-blue-400">
      {emojiMap[status]}
    </div>
  );
} 