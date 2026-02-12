import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCandidateStage,
  addAuditLog,
  updateRubric,
} from "../../store/recruiterSlice";
import { FaUserCircle, FaClipboardList } from "react-icons/fa";

import AIScreeningSummary from "./AIScreeningSummary";
import RubricEditor from "./RubricEditor";
import AuditLog from "./AuditLog";

const stages = ["Applied", "Shortlisted", "Interview", "Rejected"];

const stageColors = {
  Applied: "bg-green-100 border-green-400 text-green-800",
  Shortlisted: "bg-yellow-100 border-yellow-400 text-yellow-800",
  Interview: "bg-purple-100 border-purple-400 text-purple-800",
  Rejected: "bg-red-100 border-red-400 text-red-800",
};

export default function JobDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const job = useSelector((state) =>
    state.recruiter.jobs.find((j) => j.id === id)
  );

  if (!job) return <p className="p-6 text-gray-700">Job not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-900">
          <FaClipboardList className="inline mr-3 text-blue-600" />
          {job.title}
        </h1>

        {/* ================= PIPELINE ================= */}
        <div className="grid md:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div
              key={stage}
              className="p-4 rounded-lg border border-gray-200 bg-gray-50"
            >
              <h3 className="font-semibold mb-4 text-gray-700">{stage}</h3>

              {job.candidates
                .filter((c) => c.stage === stage)
                .map((candidate) => (
                  <div
                    key={candidate.id}
                    className={`p-3 rounded-lg border shadow-sm mb-3 transition-all duration-300 
                               ${stageColors[candidate.stage]} hover:scale-105 hover:shadow-lg flex items-center gap-2`}
                  >
                    <FaUserCircle className="text-xl" />
                    <div className="flex-1">
                      <Link
                        to={`/recruiter/candidate/${candidate.id}?job=${job.id}`}
                        className="font-medium hover:underline transition-colors duration-200"
                      >
                        {candidate.name}
                      </Link>

                      <p className="text-sm mt-1">Score: {candidate.score}</p>

                      <select
                        value={candidate.stage}
                        onChange={(e) => {
                          dispatch(
                            updateCandidateStage({
                              jobId: job.id,
                              candidateId: candidate.id,
                              newStage: e.target.value,
                            })
                          );

                          dispatch(
                            addAuditLog({
                              jobId: job.id,
                              message: `${candidate.name} moved to ${e.target.value}`,
                            })
                          );
                        }}
                        className="mt-2 w-full border rounded text-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
                      >
                        {stages.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* ================= RUBRIC + AUDIT ================= */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-700 flex items-center gap-2">
              <FaClipboardList className="text-blue-500" /> Evaluation Rubric
            </h2>
            <RubricEditor
              rubric={job.rubric}
              onSave={(rubric) => {
                dispatch(updateRubric({ jobId: job.id, rubric }));
                dispatch(
                  addAuditLog({
                    jobId: job.id,
                    message: "Evaluation rubric updated",
                  })
                );
              }}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-700 flex items-center gap-2">
              <FaClipboardList className="text-blue-500" /> Activity Timeline
            </h2>
            <AuditLog logs={job.auditLog} />
          </div>
        </div>
      </div>
    </div>
  );
}