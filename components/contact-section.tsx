export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#ffffff,#f4f7fc)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <span className="inline-flex rounded-full border border-[color:var(--border)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand)]">
            Contact
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
            Speak to our team
          </h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
            Tell us about your company, operating model, or integration requirements and we will follow up
            with a tailored overview of Atlas Crypto.
          </p>
          <div className="mt-8 rounded-[1.5rem] border border-[color:var(--border)] bg-white p-5">
            <p className="text-sm font-semibold text-[color:var(--text)]">Marketing site only</p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
              This is a static landing page presentation. No live account opening, transaction execution,
              custody functionality, or backend integrations are implemented here.
            </p>
          </div>
          <div className="mt-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            Our team will respond within 24 hours
          </div>
        </div>

        <form className="rounded-[2rem] border border-[color:var(--border)] bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[color:var(--text)]">Full name</span>
              <input className="input-field" type="text" name="fullName" placeholder="Jane Doe" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[color:var(--text)]">Company</span>
              <input className="input-field" type="text" name="company" placeholder="Company name" />
            </label>
          </div>

          <div className="mt-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[color:var(--text)]">Email</span>
              <input className="input-field" type="email" name="email" placeholder="name@company.com" />
            </label>
          </div>

          <div className="mt-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[color:var(--text)]">Message</span>
              <textarea
                className="input-field min-h-40 resize-y"
                name="message"
                placeholder="Share a little about your business, expected use case, or the systems you may want to connect."
              />
            </label>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[color:var(--text-muted)]">Static contact form for landing page presentation.</p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f172e,#1640ff,#0eb7b6)] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/15 transition-transform hover:-translate-y-0.5"
            >
              Speak to our team
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
