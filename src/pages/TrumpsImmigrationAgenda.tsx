import React, { useState } from "react";
import {
  BookOpen,
  Scale,
  Clock,
  AlertTriangle,
  Menu,
  X,
  TrendingUp,
  Shield,
  CheckCircle,
  XCircle,
  Gavel,
  Globe,
  ArrowRight
} from "lucide-react";

// --- Data Models ---

const proposals = [
  {
    id: "p1",
    title: "Pause 'Third World' Migration",
    claim: "Stop immigration from poorer nations.",
    reality: "Blocks most immigration from Africa, Asia, and Latin America. Affects family reunification & skilled workers.",
    impact: "High",
    status: "Rhetoric"
  },
  {
    id: "p2",
    title: "Mass Deportations",
    claim: "Remove anyone not a 'net asset'.",
    reality: "Targets undocumented immigrants; vague criteria likely unconstitutional.",
    impact: "Severe",
    status: "Rhetoric"
  },
  {
    id: "p3",
    title: "End Federal Benefits",
    claim: "Cut off welfare for immigrants.",
    reality: "Most undocumented immigrants are already barred. Would harm legal refugees.",
    impact: "Moderate",
    status: "Policy"
  },
  {
    id: "p4",
    title: "Denaturalization",
    claim: "Strip citizenship from 'disloyal' citizens.",
    reality: "Protected by 14th Amendment; extremely difficult to enforce legally.",
    impact: "Extreme",
    status: "Legal Risk"
  }
];

const legalMatrix = [
  {
    policy: "Travel Bans",
    status: "YES",
    color: "bg-green-50 border-green-200 text-green-900",
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    reason: "INA §212(f) broad authority.",
    reality: "Courts usually defer to national security framing."
  },
  {
    policy: "Mass Deportation",
    status: "PARTIAL",
    color: "bg-yellow-50 border-yellow-200 text-yellow-900",
    icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
    reason: "Legal for undocumented.",
    reality: "Logistically impossible; 'net asset' test is baseless."
  },
  {
    policy: "Denaturalization",
    status: "BARELY",
    color: "bg-red-50 border-red-200 text-red-900",
    icon: <XCircle className="w-5 h-5 text-red-600" />,
    reason: "Fraud only.",
    reality: "Requires individual federal trials (slow)."
  },
  {
    policy: "Benefits Cuts",
    status: "CONTESTED",
    color: "bg-orange-50 border-orange-200 text-orange-900",
    icon: <Gavel className="w-5 h-5 text-orange-600" />,
    reason: "Congress power.",
    reality: "Executive Orders cannot override Welfare Reform Act."
  }
];

const timelineEvents = [
  { date: "Nov 26", title: "The Catalyst", desc: "Afghan shooting triggers Trump’s initial post.", active: false },
  { date: "Nov 27", title: "The Directive", desc: "USCIS announces pause on 19 countries & review of asylum.", active: true },
  { date: "Nov 28", title: "Implementation", desc: "Visa and asylum reviews begin immediately.", active: false },
  { date: "Dec 05", title: "The Resistance", desc: "ACLU and states likely file first APA lawsuits.", active: false },
  { date: "Jan 20", title: "The Executive", desc: "Inauguration; anticipated signing of broad EOs.", active: false }
];

// --- Sub-Components ---

const SidebarItem = ({ icon, label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
      active
        ? "bg-blue-600 text-white shadow-md transform scale-105"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

const ContextPanel = () => (
  <div className="bg-white border-l border-slate-200 p-6 h-full min-h-screen hidden xl:block w-80 shrink-0 overflow-y-auto">
    <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-6 border-b pb-2">Analyst Briefing</h3>

    <div className="space-y-6">
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <h4 className="font-bold text-sm text-blue-900">The Core Strategy</h4>
        </div>
        <p className="text-xs text-blue-800 leading-relaxed">
          The administration is using <strong>administrative delays</strong> to achieve what courts might block if attempted as direct bans.
        </p>
      </div>

      <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
        <h4 className="font-bold text-sm mb-2 text-slate-800">Key Precedent</h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          <em>Trump v. Hawaii (2018)</em> gave the President broad power over entry, but <em>Afroyim v. Rusk (1967)</em> protects citizenship.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-sm mb-2 text-slate-800">Current Status</h4>
        <div className="flex items-center space-x-2 text-xs text-green-700 bg-green-50 p-2 rounded border border-green-100">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Directives Active</span>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Layout ---

export default function ImmigrationDashboard() {
  const [activeTab, setActiveTab] = useState("proposals");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "proposals":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Rhetoric vs. Reality</h2>
                <p className="text-slate-500">Comparing campaign promises against administrative capabilities.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {proposals.map((p) => (
                <div key={p.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg text-slate-800 leading-tight pr-4">{p.title}</h3>
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                      p.impact === "Severe" || p.impact === "Extreme" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                    }`}>
                      {p.impact}
                    </span>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">The Claim</span>
                      <p className="text-sm text-slate-700 font-medium">"{p.claim}"</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">The Reality</span>
                      <p className="text-sm text-slate-600">{p.reality}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "legal":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">The Legal Matrix</h2>
                <p className="text-slate-500">Can the administration actually enforce these ideas? The courts serve as the primary filter.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {legalMatrix.map((l, idx) => (
                <div key={idx} className={`p-6 rounded-xl border ${l.color} relative overflow-hidden transition-all hover:scale-[1.01]`}>
                  <div className="flex justify-between items-center mb-4 border-b border-black/5 pb-4">
                    <h3 className="font-bold text-lg">{l.policy}</h3>
                    <div className="flex items-center space-x-2 bg-white/60 px-3 py-1 rounded-full backdrop-blur-sm">
                      {l.icon}
                      <span className="text-xs font-bold">{l.status}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                        <span className="text-[10px] font-bold opacity-60 uppercase block">Legal Basis</span>
                        <p className="text-sm font-medium">{l.reason}</p>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold opacity-60 uppercase block">Reality Check</span>
                        <p className="text-sm opacity-90">{l.reality}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Timeline of Action</h2>
                <p className="text-slate-500">Tracing the escalation from social media posts to executive directives.</p>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-200 space-y-10 py-2">
              {timelineEvents.map((t, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-slate-50 ${t.active ? 'bg-green-500 ring-4 ring-green-100' : 'bg-slate-300'}`}></div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{t.date}</span>
                        {t.active && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">CURRENT STAGE</span>}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{t.title}</h4>
                    <p className="text-sm text-slate-600 mt-2">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "consistency":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Systemic Contradictions</h2>
                <p className="text-slate-500">Where policy goals actively conflict with one another.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:border-red-200 transition-colors group">
                    <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">Economic Growth</h3>
                    <div className="my-3 flex items-center justify-center gap-2">
                        <div className="h-px bg-slate-200 w-full"></div>
                        <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded">VS</span>
                        <div className="h-px bg-slate-200 w-full"></div>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">Mass Deportation</h3>
                    <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                        Removing millions of workers creates labor shortages, driving inflation and hurting the economy Trump promises to fix.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:border-blue-200 transition-colors group">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                        <Scale className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">Law & Order</h3>
                    <div className="my-3 flex items-center justify-center gap-2">
                        <div className="h-px bg-slate-200 w-full"></div>
                        <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded">VS</span>
                        <div className="h-px bg-slate-200 w-full"></div>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">Due Process</h3>
                    <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                        Expedited removal often bypasses the 14th Amendment, violating the very Constitution the administration claims to uphold.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:border-purple-200 transition-colors group">
                    <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
                        <Globe className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">America First</h3>
                    <div className="my-3 flex items-center justify-center gap-2">
                        <div className="h-px bg-slate-200 w-full"></div>
                        <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded">VS</span>
                        <div className="h-px bg-slate-200 w-full"></div>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">Diplomacy</h3>
                    <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                        Deportation requires the home country's consent. Antagonizing nations makes them refuse to accept returnees.
                    </p>
                </div>
             </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out shadow-2xl
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0
      `}>
        <div className="p-6 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
             </div>
             <div>
                <h1 className="text-white font-bold text-lg tracking-tight leading-none">Agenda 2025</h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Analyst Dashboard</span>
             </div>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-2">
          <SidebarItem
            icon={<BookOpen size={20} />}
            label="Proposals"
            active={activeTab === "proposals"}
            onClick={() => { setActiveTab("proposals"); setMobileMenuOpen(false); }}
          />
          <SidebarItem
            icon={<Scale size={20} />}
            label="Legal Matrix"
            active={activeTab === "legal"}
            onClick={() => { setActiveTab("legal"); setMobileMenuOpen(false); }}
          />
          <SidebarItem
            icon={<Clock size={20} />}
            label="Timeline"
            active={activeTab === "timeline"}
            onClick={() => { setActiveTab("timeline"); setMobileMenuOpen(false); }}
          />
          <SidebarItem
            icon={<AlertTriangle size={20} />}
            label="Contradictions"
            active={activeTab === "consistency"}
            onClick={() => { setActiveTab("consistency"); setMobileMenuOpen(false); }}
          />
        </nav>

        <div className="absolute bottom-0 w-full p-6 bg-slate-800 border-t border-slate-700">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <p className="text-xs text-slate-400">
               Live Updates: <span className="text-white font-medium">Nov 29, 2025</span>
             </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">

        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center z-40">
          <div className="flex items-center gap-2">
             <Shield className="text-blue-600 w-5 h-5" />
             <span className="font-bold text-slate-900">Agenda 2025</span>
          </div>
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
            <div className="max-w-5xl mx-auto pb-12">
               {renderContent()}
            </div>
          </div>

          {/* Right Context Panel (Desktop Only) */}
          <ContextPanel />
        </div>

      </main>

    </div>
  );
}
