function Contact() {
  return (
    <div className="space-y-10 p-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Contact Us</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Need help or have a question? Reach out to the Good Health team and we’ll get back to you soon.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">Email</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">support@goodhealth.com</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">Phone</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">+1 (800) 123-4567</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">Address</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">123 Wellness Drive, Healthy City</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Send us a message</h2>
        <form className="mt-6 grid gap-6">
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
            <input type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
            <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
            <textarea rows="5" placeholder="How can we help?" className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"></textarea>
          </label>
          <button type="submit" className="w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Send Message</button>
        </form>
      </section>
    </div>
  );
}
export default Contact;
