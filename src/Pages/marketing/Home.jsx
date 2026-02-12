import Header from "../../components/layout/Header";
import { motion } from "framer-motion";
import Reveal from "../../components/ui/Reveal";
import Counter from '../../components/ui/Counter'

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
     <section className="pt-5 pb-20 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                whileHover={{ y: -5 }}
              >
                AI-Native Recruitment,  
                Built for Modern <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hiring Teams</span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-700 mb-8 leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                TalentSage helps recruiters hire faster with intelligent candidate
                matching, automated screening, and AI-powered workflows.
              </motion.p>

              <motion.div 
                className="flex gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg font-semibold transition-all duration-300"
                >
                  Request Demo
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, borderColor: "#2563eb", color: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-blue-50 font-semibold transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>

              <motion.div
                className="flex gap-6 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>7-day free access</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="h-80 md:h-96 bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl border border-blue-200 hover:shadow-3xl hover:border-blue-300 transition-all duration-500 cursor-default"
          >
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {/* Animated background elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
              >
                <div className="w-full h-full border-4 border-blue-400 rounded-full"></div>
              </motion.div>

              <div className="relative z-10 text-center space-y-6">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex justify-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-3xl shadow-xl hover:shadow-2xl transition-shadow">
                    🎯
                  </div>
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Recruitment</h3>
                  <p className="text-gray-600 text-sm">AI-powered candidate matching</p>
                </div>

                <div className="flex gap-3 justify-center flex-wrap">
                  <motion.div
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-white rounded-full text-sm font-bold text-blue-600 border-2 border-blue-200 shadow-md hover:shadow-lg hover:border-blue-400 transition-all cursor-default"
                  >
                    ⚡ 60% Faster
                  </motion.div>
                  <motion.div
                    animate={{ x: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-white rounded-full text-sm font-bold text-green-600 border-2 border-green-200 shadow-md hover:shadow-lg hover:border-green-400 transition-all cursor-default"
                  >
                    ✓ AI Powered
                  </motion.div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-8 left-8 bg-white p-4 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl hover:border-blue-400 transition-all cursor-default"
              >
                <p className="text-sm font-bold text-gray-900">📊 Matching</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-8 right-8 bg-blue-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all cursor-default"
              >
                <p className="text-sm font-bold">🤖 AI Screen</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What TalentSage Does Best
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Powerful features designed for modern recruitment</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {(
              [
                "Intelligent Candidate Matching",
                "Automated Resume Parsing",
                "AI-Driven Shortlisting & Scoring",
                "Smart Interview Scheduling",
                "Predictive Hiring Analytics",
                "Chat-based Candidate Engagement",
              ]
            ).map((feature, idx) => (
              <Reveal key={feature}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.15)" }}
                  className="p-8 border-2 border-gray-200 rounded-2xl bg-white hover:border-blue-300 transition-all duration-300 cursor-default group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {idx === 0 && "🎯"}
                    {idx === 1 && "📄"}
                    {idx === 2 && "⭐"}
                    {idx === 3 && "📅"}
                    {idx === 4 && "📈"}
                    {idx === 5 && "💬"}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Built to streamline recruiter workflows and improve hiring outcomes
                    with AI-native intelligence.
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Proven Business Impact
          </motion.h2>

         <div className="grid md:grid-cols-3 gap-8">
          <Counter value={60} label="Reduction in time-to-hire" />
          <Counter value={75} label="Faster screening & shortlisting" />
          <Counter value={40} label="Improved candidate engagement" />
          <Counter value={30} label="Higher recruiter productivity" />
          <Counter value={50} label="Cost savings on HR tasks" />
          <Counter value={24} label="Chatbot availability" />
        </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started Today
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="hover:bg-gray-800 rounded-2xl p-6 transition-all duration-300"
            >
              <p className="text-3xl mb-3">📞</p>
              <p className="text-gray-300 mb-2">Call Us</p>
              <p className="text-white font-bold">+1 (281) 786-0706</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="hover:bg-gray-800 rounded-2xl p-6 transition-all duration-300"
            >
              <p className="text-3xl mb-3">✉️</p>
              <p className="text-gray-300 mb-2">Email Us</p>
              <p className="text-white font-bold">info@visiontact.com</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="hover:bg-gray-800 rounded-2xl p-6 transition-all duration-300"
            >
              <p className="text-3xl mb-3">📍</p>
              <p className="text-gray-300 mb-2">Locations</p>
              <p className="text-white font-bold">Houston, TX · Dubai</p>
            </motion.div>
          </div>

          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            &copy; 2024 TalentSage. All rights reserved.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}