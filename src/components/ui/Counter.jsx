import { useEffect, useState, useRef } from "react";

export default function Counter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const duration = 2000; 
    const stepTime = 30;
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <div
      ref={ref}
      className="p-6 bg-white rounded-xl shadow-sm text-center"
    >
      <p className="text-4xl font-bold text-blue-600">{count}%</p>
      <p className="mt-2 text-gray-600 text-sm">{label}</p>
    </div>
  );
}