import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Line,
} from "recharts";
import {
  LayoutDashboard,
  ShieldAlert,
  Mic,
  PhoneOff,
  Globe,
  CreditCard,
  LogIn,
  LogOut,
  User,
  Zap,
  Lock,
  Search,
  Play,
  Plus,
  Trash2,
  Sun,
  Moon,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Server,
  Fingerprint,
  Info,
  Video,
  Mail,
  Key,
  Filter,
  List,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

// --- UI Kit ---

const GlassCard = ({ children, className = "", onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
    className={`backdrop-blur-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 shadow-xl rounded-2xl overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-cyan-400 dark:to-blue-500">
      {title}
    </h1>
    <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium text-sm md:text-base">
      {subtitle}
    </p>
  </div>
);

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}) => {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30",
    outline:
      "border-2 border-blue-600 text-blue-700 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30",
    ghost:
      "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300",
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`px-4 md:px-6 py-2 rounded-xl font-bold transition-all duration-200 text-sm md:text-base ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white p-3 rounded-lg shadow-xl border border-slate-700 text-xs">
        <p className="font-bold mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// --- Sub-Pages ---

const Dashboard = ({ navigate }) => {
  const data = [
    { name: "Mon", smishing: 400, voice: 240, vishing: 240 },
    { name: "Tue", smishing: 300, voice: 139, vishing: 221 },
    { name: "Wed", smishing: 200, voice: 980, vishing: 229 },
    { name: "Thu", smishing: 278, voice: 390, vishing: 200 },
    { name: "Fri", smishing: 189, voice: 480, vishing: 218 },
    { name: "Sat", smishing: 239, voice: 380, vishing: 250 },
    { name: "Sun", smishing: 349, voice: 430, vishing: 210 },
  ];

  const pieData = [
    { name: "Secure", value: 65, color: "#10b981" },
    { name: "Suspicious", value: 25, color: "#f59e0b" },
    { name: "Malicious", value: 10, color: "#ef4444" },
  ];

  return (
    <div className="space-y-6 pb-24">
      <SectionTitle
        title="Security Command Center"
        subtitle="Live threat vectors and neural network analysis."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Smishing Threats",
            value: "1,240",
            change: "+12%",
            icon: <ShieldAlert className="text-orange-500" />,
            route: "smishing",
            color: "orange",
          },
          {
            title: "Voice Clones",
            value: "85",
            change: "-5%",
            icon: <Mic className="text-purple-500" />,
            route: "fakevoice",
            color: "purple",
          },
          {
            title: "Vishing Calls",
            value: "342",
            change: "+24%",
            icon: <PhoneOff className="text-red-500" />,
            route: "vishing",
            color: "red",
          },
        ].map((stat, idx) => (
          <GlassCard
            key={idx}
            className="p-6 relative group cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all"
            onClick={() => navigate(stat.route)}
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-3 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg`}
              >
                {stat.icon}
              </div>
              <span
                className={`text-sm font-bold px-2 py-1 rounded-full ${
                  stat.change.startsWith("+")
                    ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-4xl font-extrabold text-slate-800 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-semibold mt-1">
              {stat.title}
            </p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <GlassCard className="p-6 lg:col-span-2 min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Activity size={20} className="text-blue-500" /> Threat Volume
              Trends
            </h3>
            <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm p-2 font-medium text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-blue-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVoice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorSmishing"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                  opacity={0.1}
                />
                <XAxis
                  dataKey="name"
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="voice"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorVoice)"
                  name="Fake Voice"
                />
                <Area
                  type="monotone"
                  dataKey="smishing"
                  stroke="#f97316"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorSmishing)"
                  name="Smishing"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-6 flex flex-col">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
            Traffic Analysis
          </h3>
          <div className="flex-1 min-h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
              <span className="text-3xl font-bold text-slate-800 dark:text-white">
                99.9%
              </span>
              <span className="text-xs text-slate-500">Uptime</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

const DetectionPage = ({ type, sliders }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [taskSearch, setTaskSearch] = useState("");

  const tasks = [
    {
      id: "TSK-9921",
      status: "High Risk",
      desc: `Suspicious ${type} pattern from unknown origin`,
      time: "2 mins ago",
    },
    {
      id: "TSK-9920",
      status: "Safe",
      desc: "Routine scan complete - No threats",
      time: "15 mins ago",
    },
    {
      id: "TSK-9919",
      status: "Review",
      desc: "Flagged for manual review by admin",
      time: "1 hr ago",
    },
  ];

  const radarData = [
    { subject: "Tone", A: 120, fullMark: 150 },
    { subject: "Pitch", A: 98, fullMark: 150 },
    { subject: "Cadence", A: 86, fullMark: 150 },
    { subject: "Background", A: 99, fullMark: 150 },
    { subject: "Keywords", A: 85, fullMark: 150 },
    { subject: "Biometrics", A: 65, fullMark: 150 },
  ];

  const monthlyScanData = [
    { name: "Jan", scans: 4000, risk: 2400 },
    { name: "Feb", scans: 3000, risk: 1398 },
    { name: "Mar", scans: 2000, risk: 9800 },
    { name: "Apr", scans: 2780, risk: 3908 },
    { name: "May", scans: 1890, risk: 4800 },
    { name: "Jun", scans: 2390, risk: 3800 },
  ];

  const contentInfo = {
    Smishing: {
      title: "How Smishing Works",
      desc: "Smishing (SMS Phishing) attacks use text messages to trick you into downloading malware or sharing sensitive information.",
      example:
        "ALERT: Your bank account locked. Click: http://bit.ly/secure-login",
      tips: ["Check sender number", "Don't click links", "Verify with bank"],
      videoThumbnail: "bg-orange-500/20",
    },
    Voice: {
      title: "Deepfake Audio Detection",
      desc: "AI-generated voice clones can mimic executives to authorize transfers. Our engine analyzes frequency artifacts.",
      example: "Audio: 'Wire $50k immediately. I can't talk.'",
      tips: [
        "Verify via 2nd channel",
        "Listen for pauses",
        "Challenge questions",
      ],
      videoThumbnail: "bg-purple-500/20",
    },
    Vishing: {
      title: "Vishing (Voice Phishing)",
      desc: "Attackers use phone calls and social engineering. We monitor call patterns and cross-reference blacklisted numbers.",
      example: "Caller: 'Microsoft Support. You have a virus.'",
      tips: ["Hang up", "Never give remote access", "Check Caller ID"],
      videoThumbnail: "bg-red-500/20",
    },
  };

  const currentInfo = contentInfo[type] || contentInfo["Smishing"];

  return (
    <div className="h-full flex flex-col pb-32 overflow-y-auto no-scrollbar">
      <div className="flex justify-center mb-8 sticky top-0 z-30 pt-4 pb-2 backdrop-blur-sm">
        <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-full flex relative shadow-inner overflow-x-auto no-scrollbar max-w-full">
          {sliders.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative z-10 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === idx
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {s}
            </button>
          ))}
          <motion.div
            className="absolute top-1 bottom-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg"
            layoutId={`tab-${type}`}
            animate={{
              width: `${100 / sliders.length}%`,
              left: `${(100 / sliders.length) * activeTab}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex-1"
        >
          {sliders[activeTab].includes("Analytics") ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              <GlassCard className="p-6 lg:col-span-1">
                <h4 className="text-lg font-bold mb-6 dark:text-white flex items-center gap-2">
                  <Fingerprint className="text-cyan-500" /> Biometric Analysis
                </h4>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      data={radarData}
                    >
                      <PolarGrid stroke="#475569" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                      />
                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 150]}
                        tick={false}
                        axisLine={false}
                      />
                      <Radar
                        name="Suspect Voice"
                        dataKey="A"
                        stroke="#06b6d4"
                        strokeWidth={3}
                        fill="#06b6d4"
                        fillOpacity={0.3}
                      />
                      <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>

              <GlassCard className="p-6 lg:col-span-2">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-bold dark:text-white flex items-center gap-2">
                      <Server className="text-indigo-500" /> Monthly Scan Volume
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-indigo-500">
                      14.2k
                    </span>
                    <p className="text-xs text-slate-500">Total Events</p>
                  </div>
                </div>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={monthlyScanData}>
                      <defs>
                        <linearGradient
                          id="colorScans"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#6366f1"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#6366f1"
                            stopOpacity={0.2}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#334155"
                        opacity={0.1}
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="#64748b"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#64748b"
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        cursor={{ fill: "rgba(255,255,255,0.05)" }}
                        content={<CustomTooltip />}
                      />
                      <Legend />
                      <Bar
                        dataKey="scans"
                        fill="url(#colorScans)"
                        radius={[4, 4, 0, 0]}
                        barSize={30}
                        name="Total Scans"
                      />
                      <Line
                        type="monotone"
                        dataKey="risk"
                        stroke="#f43f5e"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        name="High Risk Detected"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>

              <GlassCard className="p-6 lg:col-span-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h4 className="text-lg font-bold dark:text-white flex items-center gap-2">
                    <List size={20} className="text-blue-500" /> Recent
                    Detection Tasks
                  </h4>
                  <div className="flex gap-2">
                    <div className="relative flex-1 md:flex-none">
                      <Search
                        className="absolute left-3 top-2.5 text-slate-400"
                        size={16}
                      />
                      <input
                        type="text"
                        value={taskSearch}
                        onChange={(e) => setTaskSearch(e.target.value)}
                        placeholder="Search ID..."
                        className="w-full md:w-auto pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm border-none focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-slate-200"
                      />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <Filter size={16} />{" "}
                      <span className="hidden md:inline">Filter</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {tasks
                    .filter((t) =>
                      t.id.toLowerCase().includes(taskSearch.toLowerCase())
                    )
                    .map((task, i) => (
                      <div
                        key={i}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors gap-3"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              task.status === "High Risk"
                                ? "bg-red-500"
                                : task.status === "Safe"
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            }`}
                          />
                          <div>
                            <p className="text-sm font-bold dark:text-white font-mono">
                              {task.id}
                            </p>
                            <p className="text-xs text-slate-500 w-full">
                              {task.desc}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-4">
                          <span className="text-xs text-slate-400 font-mono">
                            {task.time}
                          </span>
                          <span
                            className={`px-2 py-1 rounded text-xs font-bold ${
                              task.status === "High Risk"
                                ? "bg-red-100 dark:bg-red-900/30 text-red-600"
                                : task.status === "Safe"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-600"
                                : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600"
                            }`}
                          >
                            {task.status}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </GlassCard>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              <GlassCard className="p-8 text-center border-t-4 border-blue-500">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  {type === "Voice" ? (
                    <Mic size={48} className="text-blue-600" />
                  ) : (
                    <Search size={48} className="text-blue-600" />
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-800 dark:text-white">
                  {type === "Voice"
                    ? "AI Voice Forensic Lab"
                    : "Deep Text Inspector"}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto text-sm md:text-base">
                  Upload artifacts for deep-learning analysis against our
                  database.
                </p>

                {type === "Voice" ? (
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button variant="outline" className="w-full md:w-40">
                      <Mic className="mr-2 inline" size={18} /> Record
                    </Button>
                    <Button className="w-full md:w-40">
                      <Plus className="mr-2 inline" size={18} /> Upload
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Paste suspicious text or URL..."
                      className="flex-1 p-4 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:text-white transition-all font-mono"
                    />
                    <Button>Analyze</Button>
                  </div>
                )}
              </GlassCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold mb-4 dark:text-white flex items-center gap-2">
                    <Info size={18} className="text-blue-500" />{" "}
                    {currentInfo.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {currentInfo.desc}
                  </p>
                  <div className="bg-slate-100 dark:bg-black/30 p-4 rounded-lg border-l-4 border-orange-500 mb-4">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">
                      Example Payload
                    </p>
                    <p className="font-mono text-sm text-slate-700 dark:text-slate-200 italic truncate">
                      "{currentInfo.example}"
                    </p>
                  </div>
                </GlassCard>

                <GlassCard
                  className={`p-6 flex flex-col justify-between ${currentInfo.videoThumbnail} relative overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-0" />
                  <div className="relative z-10">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                      LIVE DEMO
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      See It In Action
                    </h3>
                  </div>
                  <div className="relative z-10 self-center mt-8 group-hover:scale-110 transition-transform">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                      <Play
                        fill="white"
                        className="text-white ml-1"
                        size={32}
                      />
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Domains = () => {
  const [domains, setDomains] = useState([
    {
      id: 1,
      url: "finance.xpectro.com",
      protocol: "https",
      status: "Secured",
      ssl: true,
      date: "2023-10-01",
    },
    {
      id: 2,
      url: "legacy.xpectro-internal.net",
      protocol: "http",
      status: "Review",
      ssl: false,
      date: "2023-10-05",
    },
  ]);
  const [input, setInput] = useState("");
  const [protocol, setProtocol] = useState("https");
  const [domainSearch, setDomainSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState("All");

  const addDomain = () => {
    if (!input) return;
    setDomains([
      ...domains,
      {
        id: Date.now(),
        url: input,
        protocol: protocol,
        status: "Pending",
        ssl: protocol === "https",
        date: new Date().toISOString().split("T")[0],
      },
    ]);
    setInput("");
  };

  const filteredDomains = domains.filter((d) => {
    const matchesSearch = d.url
      .toLowerCase()
      .includes(domainSearch.toLowerCase());
    const matchesFilter = domainFilter === "All" || d.status === domainFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pb-24">
      <SectionTitle
        title="Domain Fortress"
        subtitle="Manage your organization's attack surface."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">
            Total Assets
          </div>
          <div className="text-3xl font-bold text-slate-800 dark:text-white mt-1">
            {domains.length}
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">
            SSL Secured
          </div>
          <div className="text-3xl font-bold text-green-500 mt-1">
            {domains.filter((d) => d.ssl).length}
          </div>
        </div>
      </div>

      <GlassCard className="p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative min-w-[120px]">
            <select
              value={protocol}
              onChange={(e) => setProtocol(e.target.value)}
              className="w-full h-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white appearance-none cursor-pointer"
            >
              <option value="https">HTTPS</option>
              <option value="http">HTTP</option>
              <option value="wp">WP</option>
              <option value="ftp">FTP</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-4 text-slate-400 pointer-events-none"
              size={16}
            />
          </div>

          <div className="flex-1 relative">
            <Globe
              className="absolute left-4 top-3.5 text-slate-400"
              size={20}
            />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all font-mono"
              placeholder="e.g. portal.company.com"
            />
          </div>
          <Button onClick={addDomain}>
            <Plus size={20} className="mr-2 inline" /> Add
          </Button>
        </div>
      </GlassCard>

      <div className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h3 className="text-lg font-bold dark:text-white">Active Domains</h3>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:flex-none">
            <Search
              className="absolute left-3 top-2.5 text-slate-400"
              size={16}
            />
            <input
              type="text"
              value={domainSearch}
              onChange={(e) => setDomainSearch(e.target.value)}
              placeholder="Search domains..."
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-slate-200"
            />
          </div>
          <select
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
            className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Secured">Secured</option>
            <option value="Review">Review</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {filteredDomains.length > 0 ? (
          filteredDomains.map((d) => (
            <GlassCard
              key={d.id}
              className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between group hover:bg-white/90 dark:hover:bg-slate-800/80 transition-colors gap-3"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-lg ${
                    d.ssl
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30"
                      : "bg-orange-100 text-orange-600 dark:bg-orange-900/30"
                  }`}
                >
                  {d.ssl ? <Lock size={18} /> : <AlertTriangle size={18} />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                      {d.protocol}
                    </span>
                    <p className="font-mono font-bold text-slate-700 dark:text-slate-200 break-all">
                      {d.url}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">Added: {d.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    d.status === "Secured"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : d.status === "Pending"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {d.status}
                </span>
                <button className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </GlassCard>
          ))
        ) : (
          <div className="text-center py-10 text-slate-500">
            No domains found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  return (
    <div className="text-center max-w-5xl mx-auto pb-24">
      <SectionTitle
        title="Neural Defense Pricing"
        subtitle="Enterprise-grade security scaled for your organization."
      />
      <div className="flex items-center justify-center gap-4 mb-12">
        <span
          className={`text-sm ${
            !yearly ? "font-bold dark:text-white" : "text-slate-500"
          }`}
        >
          Monthly
        </span>
        <button
          onClick={() => setYearly(!yearly)}
          className="w-14 h-8 bg-blue-600 rounded-full relative transition-colors shadow-inner"
        >
          <motion.div
            animate={{ x: yearly ? 24 : 4 }}
            className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm"
          />
        </button>
        <span
          className={`text-sm ${
            yearly ? "font-bold dark:text-white" : "text-slate-500"
          }`}
        >
          Yearly{" "}
          <span className="text-green-500 text-xs font-bold ml-1 bg-green-500/10 px-2 py-0.5 rounded-full">
            -20%
          </span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Scout", "Guardian", "Sentinel"].map((plan, i) => (
          <GlassCard
            key={i}
            className={`p-8 relative ${
              i === 1 ? "border-blue-500/50 ring-2 ring-blue-500/20" : ""
            }`}
          >
            {i === 1 && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
            )}
            <h3 className="text-xl font-bold dark:text-white mb-2">{plan}</h3>
            <p className="text-xs text-slate-500 mb-6 uppercase tracking-wider">
              For{" "}
              {i === 0 ? "Startups" : i === 1 ? "Growing Teams" : "Large Orgs"}
            </p>
            <div className="text-4xl font-bold mb-6 dark:text-white">
              ${yearly ? (i + 1) * 90 : (i + 1) * 10}
              <span className="text-base font-normal text-slate-500">
                /{yearly ? "yr" : "mo"}
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-green-500" /> Real-time
                Smishing Scan
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-green-500" />{" "}
                {i > 0 ? "Advanced Voice Biometrics" : "Basic Voice Scan"}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-green-500" />{" "}
                {i > 1 ? "Unlimited" : (i + 1) * 5} Monitored Domains
              </li>
            </ul>
            <Button
              variant={i === 1 ? "primary" : "outline"}
              className="w-full"
            >
              Choose {plan}
            </Button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

const LoginPage = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <GlassCard className="p-10 w-full max-w-md relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full"></div>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/40">
            <Lock size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Secure Access
          </h2>
          <p className="text-sm text-slate-500">
            Enter your credentials to access the grid.
          </p>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1 ml-1">
              Work Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-3.5 text-slate-400"
                size={18}
              />
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1 ml-1">
              Password
            </label>
            <div className="relative">
              <Key
                className="absolute left-4 top-3.5 text-slate-400"
                size={18}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
              />
            </div>
          </div>
          <Button className="w-full mt-6" type="submit">
            Authenticate
          </Button>
        </form>
        <div className="mt-6 text-center text-xs text-slate-500">
          Protected by Xpectro SSO. <br />
          IP Address:{" "}
          <span className="font-mono text-slate-400">192.168.1.104</span>
        </div>
      </GlassCard>
    </div>
  );
};

// --- Main Layout ---

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredDockItem, setHoveredDockItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const menuItems = [
    { id: "dashboard", icon: <LayoutDashboard />, label: "Dashboard" },
    { id: "smishing", icon: <ShieldAlert />, label: "Smishing Detection" },
    { id: "fakevoice", icon: <Mic />, label: "Deepfake Audio" },
    { id: "vishing", icon: <PhoneOff />, label: "Vishing Monitor" },
    { id: "domains", icon: <Globe />, label: "Domain Security" },
    { id: "pricing", icon: <CreditCard />, label: "Pricing Plans" },
    {
      id: "login",
      icon: isLoggedIn ? (
        <LogOut className="text-red-500" />
      ) : (
        <LogIn className="text-emerald-500" />
      ),
      label: isLoggedIn ? "Logout" : "Login",
      action: () => {
        if (isLoggedIn) setIsLoggedIn(false);
        else setActiveTab("login");
      },
    },
  ];

  const renderContent = () => {
    if (!isLoggedIn && activeTab !== "login")
      return (
        <div className="h-full flex flex-col items-center justify-center text-center p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Lock
              size={80}
              className="mx-auto mb-6 text-slate-300 dark:text-slate-700"
            />
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Restricted Access
            </h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              This terminal is locked. Please authenticate using the dock menu
              to access the Neural Defense Grid.
            </p>
            <Button
              onClick={() => {
                setActiveTab("login");
              }}
            >
              Initiate Sequence
            </Button>
          </motion.div>
        </div>
      );

    switch (activeTab) {
      case "dashboard":
        return <Dashboard navigate={setActiveTab} />;
      case "smishing":
        return (
          <DetectionPage type="Smishing" sliders={["Detection", "Analytics"]} />
        );
      case "fakevoice":
        return (
          <DetectionPage type="Voice" sliders={["Detection", "Analytics"]} />
        );
      case "vishing":
        return (
          <DetectionPage
            type="Vishing"
            sliders={["Detection Online", "Detection Offline", "Analytics"]}
          />
        );
      case "domains":
        return <Domains />;
      case "pricing":
        return <Pricing />;
      case "login":
        return (
          <LoginPage
            onLogin={() => {
              setIsLoggedIn(true);
              setActiveTab("dashboard");
            }}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950" : "bg-slate-50"
      } font-sans overflow-hidden relative`}
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 dark:bg-blue-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 dark:bg-purple-900/20 blur-[150px] rounded-full" />
      </div>

      <nav className="fixed top-0 left-0 right-0 h-20 backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 z-50 flex items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
            X
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
              Xpectro
              <span className="text-blue-600 dark:text-blue-400">
                Solutions
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hidden md:block text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
          >
            API
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-[2px] shadow-lg"
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Profile"
                className="rounded-full bg-slate-100 dark:bg-black"
              />
            </button>
            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-14 w-80 backdrop-blur-xl bg-white/90 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-2xl p-5 z-50"
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-xl">
                      JD
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-slate-800 dark:text-white">
                        John Doe
                      </h4>
                      <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                        Enterprise Admin
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-100 dark:bg-black/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                      <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">
                        Client ID
                      </p>
                      <p className="font-mono text-xs text-slate-700 dark:text-slate-300 truncate">
                        client_829304823
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-32 px-4 md:px-12 max-w-[1400px] mx-auto h-screen overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Desktop Dock */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-end gap-2 px-6 py-4 backdrop-blur-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl shadow-blue-900/10">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  if (item.action) item.action();
                  else setActiveTab(item.id);
                }}
                onHoverStart={() => setHoveredDockItem(item.id)}
                onHoverEnd={() => setHoveredDockItem(null)}
                whileHover={{ scale: 1.2, y: -10 }}
                whileTap={{ scale: 0.9 }}
                className={`relative group p-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shadow-inner"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}
              >
                <AnimatePresence>
                  {hoveredDockItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -50, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute left-1/2 -translate-x-1/2 -top-2 px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-xl border border-slate-600 pointer-events-none z-50"
                    >
                      {item.label}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-slate-600"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative z-10">{item.icon}</div>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Button & Container */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="backdrop-blur-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 min-w-[200px]"
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.action) item.action();
                    else setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="h-14 w-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/40 z-50"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </div>
  );
}
