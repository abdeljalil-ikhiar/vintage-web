export function ContactSection() {
  return (
    <section id="contact" className="anchor-section px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#ffffff,#f4f7fc)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <span className="eyebrow-pill">
            Contact
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
            Contact the sales team
          </h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
            Share your company profile, operating model, or integration requirements and our team will
            follow up with a tailored overview of the platform.
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
            <FormField
              id="full-name"
              label="Full name"
              name="fullName"
              type="text"
              placeholder="Jane Doe"
              autoComplete="name"
            />
            <FormField
              id="company"
              label="Company"
              name="company"
              type="text"
              placeholder="Company name"
              autoComplete="organization"
            />
            <FormField
              id="email"
              label="Email"
              name="email"
              type="email"
              placeholder="name@company.com"
              autoComplete="email"
            />
            <FormField
              id="phone"
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              autoComplete="tel"
            />
          </div>

          <div className="mt-5">
            <label className="block" htmlFor="message">
              <span className="mb-2 block text-sm font-semibold text-[color:var(--text)]">Message</span>
              <textarea
                id="message"
                className="input-field min-h-40 resize-y"
                name="message"
                placeholder="Share a little about your business, expected use case, or the systems you may want to connect."
              />
            </label>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[color:var(--text-muted)]">
              Presentation-only form. No backend or message delivery is configured in this demo.
            </p>
            <button
              type="button"
              className="cta-primary px-6 py-3.5 text-sm"
            >
              Contact Sales
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
};

function FormField({ id, label, name, type, placeholder, autoComplete }: FormFieldProps) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-sm font-semibold text-[color:var(--text)]">{label}</span>
      <input
        id={id}
        className="input-field"
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </label>
  );
}
