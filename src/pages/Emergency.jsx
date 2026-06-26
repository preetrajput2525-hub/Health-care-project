function Emergency() {
  return (
    <div className="space-y-8 p-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Emergency Care</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          In an emergency, get the fastest support from our on-call doctors and trusted partners.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">24/7 Hotline</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Call our emergency hotline for immediate assistance.</p>
          <p className="mt-4 text-2xl font-bold">+1 (800) 911-1234</p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Ambulance Support</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Fast coordination with nearby ambulance services.</p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Urgent Care</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Connect with urgent care doctors quickly through the app.</p>
        </article>
      </div>
    </div>
  );
}
export default Emergency;
