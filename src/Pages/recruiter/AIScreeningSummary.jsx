import { motion } from "framer-motion";

export default function AIScreeningSummary() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="text-2xl">🤖</span>
        AI Screening Summary
      </h2>

      <div className="space-y-6">
        {/* Overall Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Overall Assessment</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Good Fit
            </span>
          </div>
          <p className="text-gray-700">
            This candidate demonstrates strong technical skills and relevant experience. 
            Excellent communication abilities observed during screening.
          </p>
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-bold text-gray-900 mb-4">Key Strengths</h3>
          <div className="space-y-3">
            {["Problem-solving skills", "Technical expertise", "Team collaboration"].map((strength, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">{strength}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Areas for Development */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-bold text-gray-900 mb-4">Areas for Development</h3>
          <div className="space-y-3">
            {["Leadership experience", "Industry-specific knowledge"].map((area, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <span className="text-amber-600 font-bold">⚠</span>
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200"
        >
          <h3 className="font-bold text-gray-900 mb-3">AI Recommendation</h3>
          <p className="text-gray-700 mb-4">
            Recommended for shortlisting. This candidate meets 85% of job requirements and shows high potential for the role.
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Accept Recommendation
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Review Later
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}