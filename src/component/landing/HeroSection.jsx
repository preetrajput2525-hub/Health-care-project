import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-sky-600 via-cyan-500 to-slate-900 p-10 text-white shadow-lg shadow-sky-500/20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">
              Health care made easy
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Your health, managed in one place.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-sky-100/90">
              Good Health helps you book appointments, consult specialists, and keep your family healthy with secure digital tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/appointment" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100">
                Book Appointment
              </Link>
              <Link to="/signup" className="rounded-2xl border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Create Account
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-8 text-slate-100 ring-1 ring-white/10">
            <h2 className="text-2xl font-semibold">Fast access to care</h2>
            <p className="mt-3 text-sm leading-7 text-sky-100/90">
              Get connected to doctors, book same-day visits, and review your care history all from one place.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Emergency</p>
                <p className="mt-2 text-3xl font-semibold">24/7 Support</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Appointments</p>
                <p className="mt-2 text-3xl font-semibold">Quick Booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;