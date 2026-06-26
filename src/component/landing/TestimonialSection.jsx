const testimonials = [
  {
    name: "Nina Shah",
    quote: "Good Health made it easy for me to book an appointment with my doctor and follow up on treatment.",
    role: "Patient",
  },
  {
    name: "Rahul Mehta",
    quote: "The app is simple and fast. I love that I can manage health tasks in one place.",
    role: "Parent",
  },
  {
    name: "Ayesha Khan",
    quote: "Excellent support from the Care team and a great way to keep track of family checkups.",
    role: "Caregiver",
  },
];

function TestimonialSection() {
  return (
    <section className="rounded-3xl bg-slate-50 p-8 shadow-sm dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Patient stories</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">Trusted by families and care teams</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
              <p className="text-slate-600 dark:text-slate-300">“{item.quote}”</p>
              <p className="mt-6 font-semibold text-slate-900 dark:text-slate-100">{item.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;