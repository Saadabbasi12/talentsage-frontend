import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Jobs() {
  const jobs = useSelector((state) => state.recruiter.jobs);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 text-center">
          Jobs
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/recruiter/jobs/${job.id}`}
              className="block p-6 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 hover:shadow-lg transition transform duration-300 ease-in-out"
            >
              <h2 className="font-semibold text-xl text-gray-900 mb-2">
                {job.title}
              </h2>
              <p className="text-sm text-gray-500">{job.department}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}