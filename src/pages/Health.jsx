function Health() {
  return (
    <div className="space-y-8 p-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Health Services</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Discover preventive care, specialist consultations, and wellness resources to keep you feeling your best.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Preventive Care</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Screenings, health checks, and regular visits to keep your wellness on track.</p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Nutrition Guidance</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Personalized advice to help you eat well and build healthy habits.</p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Mental Wellness</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Support for stress, sleep, and emotional health with care resources you can trust.</p>
        </article>
      </div>
    </div>
  );
}
export default Health;
