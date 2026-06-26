import { Link } from "react-router-dom";

function CTAbanner() {
  return (
    <section className="rounded-3xl bg-sky-700 p-10 text-white shadow-lg shadow-sky-700/20">
      <div className="mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:max-w-5xl">
        <div>
          <h2 className="text-3xl font-semibold">Ready to start your health journey?</h2>
          <p className="mt-3 max-w-2xl text-sky-100/90">
            Sign up now to manage appointments, doctors, and care updates from a single dashboard.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/signup" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            Sign up now
          </Link>
          <Link to="/login" className="rounded-2xl border border-white/70 px-6 py-3 text-sm font-semibold text-white">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTAbanner;