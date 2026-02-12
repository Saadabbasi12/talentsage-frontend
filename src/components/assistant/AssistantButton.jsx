import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleAssistant } from "../../store/assistantSlice";

export default function AssistantButton({ position, setPosition }) {
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragOffsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragOffsetRef.current.x,
      y: e.clientY - dragOffsetRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    if (!isDragging) {
      dispatch(toggleAssistant());
    }
  };

  // Listen to mousemove and mouseup on the whole window
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <button
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`, 
        cursor: isDragging ? "grabbing" : "grab",
        zIndex: 50,
        transform: isHovered && !isDragging ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.2s ease",
      }}
      className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-2xl text-2xl flex items-center justify-center hover:shadow-3xl select-none"
    >
      🤖
    </button>
  );
}