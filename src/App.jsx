import { useSelector } from "react-redux";

const statusStyles = {
    Excellent: "bg-emerald-100 text-emerald-700",
    Strong: "bg-blue-100 text-blue-700",
    Good: "bg-amber-100 text-amber-700",
    "Needs Work": "bg-rose-100 text-rose-700"
};

function App() {
    const { stats, recentAnalyses } = useSelector((state) => state.dashboard);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Resume Analyzer Dashboard</h1>
                        <p className="mt-1 text-sm text-slate-500">Overview of student resume performance</p>
                    </div>
                    <button
                        type="button"
                        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700"
                    >
                        New Analysis
                    </button>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                            <h2 className="text-sm font-medium text-slate-500">{item.title}</h2>
                            <p className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</p>
                            <p className="mt-2 text-xs font-medium text-emerald-600">{item.change}</p>
                        </article>
                    ))}
                </section>

                <section className="mt-8 grid gap-6 lg:grid-cols-3">
                    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Recent Resume Analyses</h3>
                            <span className="text-sm text-slate-500">Last 7 days</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm">
                                <thead className="border-b border-slate-200 text-slate-500">
                                    <tr>
                                        <th className="pb-3 font-medium">Student</th>
                                        <th className="pb-3 font-medium">ATS Score</th>
                                        <th className="pb-3 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentAnalyses.map((row) => (
                                        <tr key={row.id} className="border-b border-slate-100 last:border-b-0">
                                            <td className="py-3 font-medium text-slate-700">{row.student}</td>
                                            <td className="py-3">{row.score}%</td>
                                            <td className="py-3">
                                                <span
                                                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[row.status]}`}
                                                >
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Quick Notes</h3>
                        <ul className="mt-4 space-y-3 text-sm text-slate-600">
                            <li className="rounded-lg bg-slate-50 p-3">Most common weakness: missing measurable achievements.</li>
                            <li className="rounded-lg bg-slate-50 p-3">Top-performing resumes include clear project outcomes.</li>
                            <li className="rounded-lg bg-slate-50 p-3">Recommend tailoring keywords to job descriptions.</li>
                        </ul>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default App;
