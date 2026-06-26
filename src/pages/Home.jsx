import HeroSection from "../component/landing/HeroSection";
import FeatureCard from "../component/landing/FeatureCard";
import CTAbanner from "../component/landing/CTAbanner";
import TestimonialSection from "../component/landing/TestimonialSection";

function Home() {
  const features = [
    {
      icon: "🩺",
      title: "Expert Care",
      description: "Connect with trusted doctors across specialties for fast, expert treatment.",
    },
    {
      icon: "📅",
      title: "Easy Appointments",
      description: "Schedule visits in minutes and manage bookings from your dashboard.",
    },
    {
      icon: "❤️",
      title: "Wellness Support",
      description: "Receive ongoing guidance with patient-centered health resources.",
    },
  ];

  return (
    <div className="space-y-12 p-6">
      <HeroSection />

      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Our services</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Care built around your needs</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Good Health gives you one place to discover care, book appointments, and track your progress with ease.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Find the Right Doctor</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Browse our list of specialists and choose the doctor who fits your needs. Access expertise in general medicine, cardiology, pediatrics, and more.
          </p>
          <div className="mt-6">
            <a href="/doctor" className="inline-flex rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
              View Doctors
            </a>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Book an Appointment</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Schedule your next consultation quickly and easily with our appointment booking feature. Pick a time, choose a doctor, and get confirmation right away.
          </p>
          <div className="mt-6">
            <a href="/appointment" className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Book Appointment
            </a>
          </div>
        </article>
      </section>

      <TestimonialSection />
      <CTAbanner />
    </div>
  );
}

export default Home;