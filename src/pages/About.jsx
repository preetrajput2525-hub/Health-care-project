function About() {
  return (
    <div className="space-y-8 p-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">About Good Health</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Good Health connects patients with care teams, simplifies appointment scheduling, and helps you stay on top of your health.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Our Mission</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Deliver personalized care and make health services easier to access for everyone.</p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Our Vision</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Create a healthier community with modern tools for patients and doctors.</p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Our Promise</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Safe, responsive healthcare experiences from first visit to follow-up support.</p>
        </article>
      </section>
    </div>
  );
}
export default About;