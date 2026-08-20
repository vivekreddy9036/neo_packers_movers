"use client";

import { forwardRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  Truck,
  Buildings,
  Airplane,
  Package,
  Wrench,
  Anchor,
  GearSix,
  Spinner,
  ShieldCheck,
  Clock,
  CurrencyInr,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const schema = z.object({
  moveType: z.enum(["industrial", "export", "wooden-boxes", "office"], {
    errorMap: () => ({ message: "Please pick a service type" }),
  }),
  origin: z.string().min(2, "Origin city required"),
  destination: z.string().min(2, "Destination city required"),
  name: z.string().min(2, "Your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile"),
  email: z.string().email("Enter a valid email"),
});

type Form = z.infer<typeof schema>;

const MOVE_TYPES: { value: Form["moveType"]; label: string; sub: string; icon: typeof Truck }[] = [
  { value: "industrial",   label: "Industrial & Heavy Machinery",  sub: "Packing, unpacking & relocation",      icon: Wrench   },
  { value: "export",       label: "Export & Cargo Packing",        sub: "ISPM 15 · container lashing · shipping", icon: Airplane },
  { value: "wooden-boxes", label: "Wooden Crates & Boxes",         sub: "Custom boxes, pallets & saddles",       icon: Package  },
  { value: "office",       label: "Office Goods",                  sub: "Packing, unpacking & movement",         icon: Buildings},
];

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const moveType = watch("moveType");

  const onSubmit: SubmitHandler<Form> = async (data) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/neo_packermovers@yahoo.co.in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: data.name,
            Email: data.email,
            Phone: `+91 ${data.phone}`,
            "Move Type": data.moveType,
            From: data.origin,
            To: data.destination,
            // FormSubmit config fields
            _replyto: data.email,
            _subject: `New Enquiry — ${data.moveType} move | Neo Packers & Movers`,
            _template: "table",
            _captcha: "false",
            _honey: "",
          }),
        }
      );
      const payload = await res.json();
      if (!res.ok || payload.success !== "true") {
        throw new Error(payload.message ?? "Submission failed");
      }
      setSubmitted(true);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "";
      setError(
        msg.toLowerCase().includes("activation") || msg.toLowerCase().includes("activate")
          ? "Our enquiry system is being set up. Please call us directly on " + SITE.phone + " and we'll arrange your site survey right away."
          : "Could not submit. Please call us on " + SITE.phone + " or try again shortly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  async function next() {
    let valid = false;
    if (step === 0) valid = !!moveType;
    if (step === 1) valid = await trigger(["origin", "destination"]);
    if (valid) setStep((s) => s + 1);
  }

  return (
    <section id="lead-form" className="section-py bg-canvas-50/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Pitch */}
          <div className="lg:col-span-5">
            <p className="display-eyebrow mb-4">Start your move</p>
            <h2 className="display-h2">
              Tell us what
              <br />
              <span className="text-slate-500">needs moving.</span>
            </h2>
            <p className="lead mt-6">
              A specialist responds in under 2 hours, Monday–Saturday.
            </p>

            <div className="mt-10 space-y-4">
              <Reassurance
                icon={CurrencyInr}
                text="No pricing pressure. Site survey is free across India."
              />
              <Reassurance
                icon={Clock}
                text="Named project manager from kickoff through sign-off."
              />
              <Reassurance
                icon={ShieldCheck}
                text="Cargo insured up to ₹50 crore on every shipment."
              />
            </div>
          </div>

          {/* Form card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 shadow-elevated">
              {submitted ? (
                <SuccessState />
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-7">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ease-premium ${
                          i <= step ? "bg-signal-500" : "bg-slate-100"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="num text-xs uppercase tracking-[0.18em] text-slate-500 mb-7 font-medium">
                    Step {step + 1} / 3
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <AnimatePresence mode="wait">
                      {step === 0 && (
                        <motion.div
                          key="s0"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.4, ease }}
                        >
                          <h3 className="font-display font-bold text-2xl text-ink-900 mb-6 tracking-tight-display">
                            What kind of move?
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            {MOVE_TYPES.map(({ value, label, sub, icon: Icon }) => {
                              const active = moveType === value;
                              return (
                                <button
                                  type="button"
                                  key={value}
                                  onClick={() => setValue("moveType", value, { shouldValidate: true })}
                                  className={`group flex flex-col gap-2 p-4 rounded-xl border text-left transition-all duration-200 ${
                                    active
                                      ? "border-ink-900 bg-ink-900 text-white shadow-soft"
                                      : "border-slate-200 bg-white text-ink-900 hover:border-slate-300 hover:bg-canvas-50"
                                  }`}
                                >
                                  <Icon
                                    size={18}
                                    weight="duotone"
                                    className={active ? "text-signal-500" : "text-slate-400"}
                                  />
                                  <div>
                                    <p className="text-[13px] font-semibold leading-tight">{label}</p>
                                    <p className={`text-[11px] mt-0.5 leading-tight ${active ? "text-white/60" : "text-slate-400"}`}>{sub}</p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                          {errors.moveType && (
                            <p className="mt-3 text-sm text-signal-600">
                              {errors.moveType.message}
                            </p>
                          )}
                        </motion.div>
                      )}

                      {step === 1 && (
                        <motion.div
                          key="s1"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.4, ease }}
                        >
                          <h3 className="font-display font-bold text-2xl text-ink-900 mb-6 tracking-tight-display">
                            From where to where?
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input
                              label="Origin city"
                              placeholder="e.g. Pune"
                              error={errors.origin?.message}
                              {...register("origin")}
                            />
                            <Input
                              label="Destination"
                              placeholder="e.g. Chennai"
                              error={errors.destination?.message}
                              {...register("destination")}
                            />
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="s2"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.4, ease }}
                        >
                          <h3 className="font-display font-bold text-2xl text-ink-900 mb-6 tracking-tight-display">
                            Where do we send the survey details?
                          </h3>
                          <div className="grid grid-cols-1 gap-4">
                            <Input
                              label="Full name"
                              placeholder="Your name"
                              error={errors.name?.message}
                              {...register("name")}
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <Input
                                label="Mobile"
                                placeholder="10-digit number"
                                prefix="+91"
                                error={errors.phone?.message}
                                {...register("phone")}
                              />
                              <Input
                                label="Email"
                                placeholder="you@company.com"
                                type="email"
                                error={errors.email?.message}
                                {...register("email")}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {error && (
                      <p className="mt-5 text-sm text-signal-600">{error}</p>
                    )}

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep((s) => Math.max(0, s - 1))}
                        disabled={step === 0}
                        className="text-sm text-slate-500 hover:text-ink-900 transition-colors disabled:opacity-0 font-medium"
                      >
                        ← Back
                      </button>

                      {step < 2 ? (
                        <button type="button" onClick={next} className="btn-cta">
                          Continue
                          <ArrowRight size={16} weight="bold" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-cta disabled:opacity-70"
                        >
                          {submitting ? (
                            <>
                              <Spinner size={16} className="animate-spin" />
                              Submitting…
                            </>
                          ) : (
                            <>
                              Request site survey
                              <ArrowRight size={16} weight="bold" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reassurance({
  icon: Icon,
  text,
}: {
  icon: typeof CheckCircle;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white border border-slate-100 flex-shrink-0">
        <Icon size={16} weight="duotone" className="text-verify-500" />
      </span>
      <p className="pt-1.5 text-slate-700">{text}</p>
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  prefix?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, prefix, ...rest },
  ref
) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.14em] text-slate-500 mb-2 font-medium">
        {label}
      </span>
      <div
        className={`flex items-stretch border rounded-lg overflow-hidden bg-white transition-colors ${
          error
            ? "border-signal-500"
            : "border-slate-200 focus-within:border-ink-900 focus-within:ring-2 focus-within:ring-ink-900/5"
        }`}
      >
        {prefix && (
          <span className="num grid place-items-center px-3 bg-canvas-50 text-slate-500 text-sm border-r border-slate-200 font-medium">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          {...rest}
          className="flex-1 bg-transparent px-4 py-3.5 text-ink-900 placeholder-slate-400 focus:outline-none text-base"
        />
      </div>
      {error && <p className="mt-2 text-xs text-signal-600">{error}</p>}
    </label>
  );
});

function SuccessState() {
  return (
    <div className="text-center py-10">
      <div className="inline-grid h-16 w-16 place-items-center rounded-full bg-verify-500/10 border border-verify-500/30 mb-6">
        <CheckCircle size={32} weight="duotone" className="text-verify-500" />
      </div>
      <h3 className="font-display font-bold text-3xl text-ink-900 tracking-tight-display">
        Survey request received.
      </h3>
      <p className="lead mt-4 max-w-md mx-auto">
        A specialist will be in touch within 2 hours during operating times.
        We&rsquo;ve also queued an SMS confirmation to your mobile.
      </p>
    </div>
  );
}
