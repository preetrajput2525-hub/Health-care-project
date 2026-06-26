import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. Amina Rahman", date: "2026-07-03", time: "10:00 AM", status: "Confirmed" },
    { id: 2, doctor: "Dr. John Smith", date: "2026-07-10", time: "2:30 PM", status: "Pending" },
  ]);
  const [messages] = useState(1);
  const [notes] = useState(5);

  const completeAppointment = (id) => {
    setAppointments((current) => current.filter((appointment) => appointment.id !== id));
    alert("Appointment marked complete.");
  };

  const handleQuickAction = (path) => {
    navigate(path);
  };

  return (
    <div className="space-y-8 p-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Dashboard</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Your health overview and recent activity are shown here. Stay updated with upcoming appointments and care reminders.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Upcoming</p>
          <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{appointments.length} appointments</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Records</p>
          <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{notes} notes</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Messages</p>
          <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{messages} unread</p>
        </div>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Upcoming Appointments</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Manage your next visits and confirm details.</p>
            </div>
            <button
              onClick={() => handleQuickAction("/appointment")}
              className="rounded-2xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Book Appointment
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {appointments.length === 0 ? (
              <div className="rounded-3xl bg-slate-50 p-6 text-slate-600 dark:bg-slate-950 dark:text-slate-300">
                No upcoming appointments. Schedule one to stay on track.
              </div>
            ) : (
              appointments.map((appointment) => (
                <div key={appointment.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">{appointment.doctor}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{appointment.date} · {appointment.time}</p>
                    </div>
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/20 dark:text-sky-200">{appointment.status}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <button
                      onClick={() => completeAppointment(appointment.id)}
                      className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Mark Complete
                    </button>
                    <button
                      onClick={() => handleQuickAction("/doctor")}
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                    >
                      View Doctor
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Quick Actions</h2>
          <div className="space-y-4">
            <button
              onClick={() => handleQuickAction("/doctor")}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            >
              Browse Doctors
            </button>
            <button
              onClick={() => handleQuickAction("/appointment")}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            >
              Book New Appointment
            </button>
            <button
              onClick={() => handleQuickAction("/emergency")}
              className="w-full rounded-2xl border border-rose-300 bg-rose-50 px-4 py-3 text-left text-sm font-semibold text-rose-700 transition hover:bg-rose-100 dark:border-rose-900/60 dark:bg-rose-950 dark:text-rose-200"
            >
              Emergency Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Dashboard;
