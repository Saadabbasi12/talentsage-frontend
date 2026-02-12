import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import VideoScreening from "./VideoScreening";
import AIScreeningSummary from "./AIScreeningSummary";
import { addAuditLog } from "../../store/recruiterSlice";

export default function CandidateProfile() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const jobId = params.get("job");

  const dispatch = useDispatch();

  const job = useSelector((state) =>
    state.recruiter.jobs.find((j) => j.id === jobId)
  );

  const candidate = job?.candidates.find((c) => c.id === id);

  if (!candidate) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <p className="text-lg text-gray-600">Candidate not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                  {candidate.name}
                </h1>
                <p className="text-gray-600 text-lg font-medium">
                  Candidate Profile
                </p>
              </div>
              <span className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ${
                candidate.stage === "Shortlisted" ? "bg-green-100 text-green-700" :
                candidate.stage === "Interview" ? "bg-blue-100 text-blue-700" :
                candidate.stage === "Offer" ? "bg-purple-100 text-purple-700" :
                "bg-gray-100 text-gray-700"
              }`}>
                {candidate.stage}
              </span>
            </div>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>📧 {candidate.email || "No email"}</span>
              <span>📞 {candidate.phone || "No phone"}</span>
              <span>⭐ Score: {candidate.score || 0}%</span>
            </div>
          </div>
        </motion.div>

        {/* ================= SKILLS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              Skills
            </h2>
            <div className="flex gap-3 flex-wrap">
              {candidate.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 rounded-lg text-sm font-semibold border border-blue-200 hover:border-blue-400 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= RESUME PREVIEW ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">📄</span>
              Resume Preview
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {candidate.resume || "This is a dummy resume preview. The candidate has experience building frontend applications using React, Tailwind CSS, and modern JavaScript frameworks. Previously worked on SaaS dashboards and recruiter-facing tools."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= VIDEO SCREENING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">🎬</span>
              Video Screening
            </h2>
          <VideoScreening
  onSubmit={({ decision, notes }) => {
    dispatch(
      addAuditLog({
        jobId,
        message: `Video screening result: ${decision} for ${candidate.name}${
          notes ? ` — Notes: ${notes}` : ""
        }`,
      })
    );
  }}
/>
          </div>
        </motion.div>

        {/* ================= AI SCREENING SUMMARY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AIScreeningSummary />
        </motion.div>

      </div>
    </div>
  );
}