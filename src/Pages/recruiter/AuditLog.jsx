import React, { useEffect, useRef, useState } from "react";

export default function AuditLog({ logs }) {
  const containerRef = useRef(null);
  const prevIdsRef = useRef([]); // to track previous log ids
  const [highlightedIds, setHighlightedIds] = useState(new Set());
  const [showNewTooltip, setShowNewTooltip] = useState(false);
  const [newCount, setNewCount] = useState(0);
  const tooltipTimerRef = useRef(null);

  useEffect(() => {
    const prevIds = prevIdsRef.current;
    const currIds = logs.map((l) => l.id);

    // Only consider additions after initial mount
    if (prevIds.length > 0) {
      const added = currIds.filter((id) => !prevIds.includes(id));
      if (added.length > 0) {
        // add to highlighted set
        setHighlightedIds((prev) => {
          const s = new Set(prev);
          added.forEach((id) => s.add(id));
          return s;
        });

        // show tooltip badge with count
        setNewCount(added.length);
        setShowNewTooltip(true);
        if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
        tooltipTimerRef.current = setTimeout(() => {
          setShowNewTooltip(false);
        }, 6000);

        // remove highlight after 4s for each added log
        added.forEach((id) => {
          setTimeout(() => {
            setHighlightedIds((prev) => {
              const s = new Set(prev);
              s.delete(id);
              return s;
            });
          }, 4000);
        });
      }
    }

    prevIdsRef.current = currIds;

    return () => {
      if (tooltipTimerRef.current) {
        clearTimeout(tooltipTimerRef.current);
        tooltipTimerRef.current = null;
      }
    };
  }, [logs]);

  const handleShowNewClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    setShowNewTooltip(false);
    setHighlightedIds(new Set()); // clear highlights when user views
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-4">Activity Timeline</h3>

      {/* scrollable container with fixed max height */}
      <div className="relative">
        {showNewTooltip && (
          <div className="absolute right-3 top-2 z-10">
            <button
              onClick={handleShowNewClick}
              className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow"
              title="New logs"
            >
              New logs ({newCount})
            </button>
          </div>
        )}

        <div
          ref={containerRef}
          className="max-h-64 overflow-y-auto pr-2 space-y-2"
        >
          <ul className="text-sm">
            {logs.map((log) => {
              const isNew = highlightedIds.has(log.id);
              return (
                <li
                  key={log.id}
                  className={`rounded transition-colors duration-700 ${
                    isNew
                      ? "bg-red-100 border border-red-300 text-red-800 p-2"
                      : "text-gray-600"
                  }`}
                >
                  <span className="block">{log.message}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(log.time).toLocaleString()}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}