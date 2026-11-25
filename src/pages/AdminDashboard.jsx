const tasks = [
  {
    location: 'Block A · Floor 1',
    restroom: "Men's restroom",
    cleaner: 'R. Kumar',
    time: '09:00 AM',
    status: 'Completed',
  },
  {
    location: 'Block A · Floor 2',
    restroom: "Women's restroom",
    cleaner: 'S. Devi',
    time: '10:00 AM',
    status: 'Awaiting inspection',
  },
  {
    location: 'Block B · Floor 1',
    restroom: 'Common restroom',
    cleaner: 'M. Arjun',
    time: '11:00 AM',
    status: 'Scheduled',
  },
]

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-slate-500">
              Monitor restroom cleaning and inspections.
            </p>
          </div>

          <button
            onClick={() => alert('The schedule form will be added next.')}
            className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            + Create Cleaning Schedule
          </button>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Tasks today', '12'],
            ['Cleaning completed', '8'],
            ['Awaiting inspection', '3'],
            ['Open issues', '2'],
          ].map(([label, value]) => (
            <article key={label} className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-800">{value}</p>
            </article>
          ))}
        </section>

        <section className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-800">
              Today’s Cleaning Tasks
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Sample tasks for the dashboard preview
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Location</th>
                  <th className="px-5 py-3 font-medium">Restroom</th>
                  <th className="px-5 py-3 font-medium">Cleaner</th>
                  <th className="px-5 py-3 font-medium">Time</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.location} className="border-t border-slate-100">
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {task.location}
                    </td>
                    <td className="px-5 py-4 text-slate-600">{task.restroom}</td>
                    <td className="px-5 py-4 text-slate-600">{task.cleaner}</td>
                    <td className="px-5 py-4 text-slate-600">{task.time}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}