import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { z } from 'zod';
import { PHONE_DISPLAY, PHONE_TEL } from '../config/business';
import { content, ContentLocale } from '../config/content';
import { floatingSectionVariants, floatingCardVariants } from '../utils/animations';

interface QuoteFormProps {
  lang: 'en' | 'es';
  selectedServiceId?: string;
  onSelectService: (serviceId: string) => void;
}

interface FormValues {
  service: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  details: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const buildQuoteSchema = (t: ContentLocale) =>
  z.object({
    service: z.string().min(1, { message: t.quoteForm.errors.serviceRequired }),
    name: z
      .string()
      .trim()
      .min(1, { message: t.quoteForm.errors.nameRequired })
      .min(2, { message: t.quoteForm.errors.nameMin }),
    phone: z
      .string()
      .trim()
      .min(1, { message: t.quoteForm.errors.phoneRequired })
      .refine(
        (val) => {
          const digits = val.replace(/\D/g, '');
          return digits.length >= 10;
        },
        { message: t.quoteForm.errors.phoneInvalid }
      ),
    email: z
      .string()
      .trim()
      .min(1, { message: t.quoteForm.errors.emailRequired })
      .email({ message: t.quoteForm.errors.emailInvalid }),
    address: z.string().optional(),
    details: z
      .string()
      .trim()
      .min(1, { message: t.quoteForm.errors.detailsRequired })
      .min(10, { message: t.quoteForm.errors.detailsMin }),
  });

export const QuoteForm: React.FC<QuoteFormProps> = ({
  lang,
  selectedServiceId,
  onSelectService,
}) => {
  const t = content[lang];

  const [formData, setFormData] = useState<FormValues>({
    service: selectedServiceId || '',
    name: '',
    phone: '',
    email: '',
    address: '',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<{ phone: string; email: string }>({
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, service: selectedServiceId }));
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  }, [selectedServiceId]);

  const handleChange = (field: keyof FormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for that field when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const schema = buildQuoteSchema(t);
    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldError = result.error.issues.find((err) => err.path[0] === field);
      if (fieldError) {
        setErrors((prev) => ({ ...prev, [field]: fieldError.message }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const schema = buildQuoteSchema(t);
    const validationResult = schema.safeParse(formData);

    if (!validationResult.success) {
      const newErrors: FormErrors = {};
      const newTouched: Partial<Record<keyof FormValues, boolean>> = {};

      validationResult.error.issues.forEach((err) => {
        const fieldName = err.path[0] as keyof FormValues;
        if (!newErrors[fieldName]) {
          newErrors[fieldName] = err.message;
        }
        newTouched[fieldName] = true;
      });

      setErrors(newErrors);
      setTouched(newTouched);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmittedData({ phone: formData.phone, email: formData.email });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      service: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      details: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <section id="quote-form" className="w-full bg-[var(--tint)] py-16 sm:py-20 lg:py-28">
      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <p className="font-label text-[var(--ink-soft)] mb-2">
              {t.quoteForm.label}
            </p>
            <h2 className="font-h2 text-[var(--ink)] mb-3">
              {t.quoteForm.title}
            </h2>
            <p className="font-body text-[var(--ink-soft)]">
              {t.quoteForm.subhead}
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            variants={floatingCardVariants}
            className="bg-[var(--surface)] border border-[var(--line)] rounded-[20px] p-6 sm:p-10 app-shadow-soft"
          >
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-[var(--tint)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-h3 text-[var(--ink)] mb-3">
                  {t.quoteForm.success.title}
                </h3>
                <p className="font-body text-[var(--ink-soft)] mb-6">
                  {t.quoteForm.success.messageStart}{' '}
                  <strong className="text-[var(--ink)] font-semibold">{submittedData.phone}</strong>{' '}
                  {t.quoteForm.success.messageEnd}
                </p>

                <div className="bg-[var(--bg)] border border-[var(--line)] rounded-xl p-4 mb-6">
                  <p className="font-['Nunito_Sans'] text-sm text-[var(--ink-soft)] mb-2">
                    {t.quoteForm.success.callImmediate}
                  </p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="font-['Outfit'] font-semibold text-xl text-[var(--primary)] hover:underline inline-block"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-secondary-pill w-full sm:w-auto"
                >
                  {t.quoteForm.success.submitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Service Selection */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="service-select"
                      className="font-['Nunito_Sans'] font-semibold text-sm text-[var(--ink)]"
                    >
                      {t.quoteForm.fields.service} <span className="text-[var(--error)]">*</span>
                    </label>
                  </div>
                  <div className="relative">
                    <select
                      id="service-select"
                      value={formData.service}
                      onChange={(e) => {
                        handleChange('service', e.target.value);
                        onSelectService(e.target.value);
                      }}
                      onBlur={() => handleBlur('service')}
                      className={`w-full h-12 px-4 rounded-xl border bg-[var(--surface)] text-[var(--ink)] font-['Nunito_Sans'] text-base focus:outline-2 focus:outline-[var(--primary)] transition-colors appearance-none ${
                        errors.service
                          ? 'border-[var(--error)] ring-1 ring-[var(--error)]'
                          : 'border-[var(--line)]'
                      }`}
                    >
                      <option value="">{t.quoteForm.fields.selectPlaceholder}</option>
                      {t.services.items.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[var(--ink)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.service && (
                    <div className="flex items-center gap-1.5 mt-1.5 font-['Nunito_Sans'] text-xs font-semibold text-[var(--error)]">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span>{errors.service}</span>
                    </div>
                  )}
                </div>

                {/* Name & Phone in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block font-['Nunito_Sans'] font-semibold text-sm text-[var(--ink)] mb-1.5"
                    >
                      {t.quoteForm.fields.name} <span className="text-[var(--error)]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="client-name"
                        type="text"
                        value={formData.name}
                        placeholder={t.quoteForm.fields.namePlaceholder}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`w-full h-12 px-4 rounded-xl border bg-[var(--surface)] text-[var(--ink)] font-['Nunito_Sans'] text-base focus:outline-2 focus:outline-[var(--primary)] transition-colors ${
                          errors.name
                            ? 'border-[var(--error)] ring-1 ring-[var(--error)]'
                            : 'border-[var(--line)]'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <div className="flex items-center gap-1.5 mt-1.5 font-['Nunito_Sans'] text-xs font-semibold text-[var(--error)]">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block font-['Nunito_Sans'] font-semibold text-sm text-[var(--ink)] mb-1.5"
                    >
                      {t.quoteForm.fields.phone} <span className="text-[var(--error)]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="client-phone"
                        type="tel"
                        value={formData.phone}
                        placeholder={t.quoteForm.fields.phonePlaceholder}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full h-12 px-4 rounded-xl border bg-[var(--surface)] text-[var(--ink)] font-['Nunito_Sans'] text-base focus:outline-2 focus:outline-[var(--primary)] transition-colors ${
                          errors.phone
                            ? 'border-[var(--error)] ring-1 ring-[var(--error)]'
                            : 'border-[var(--line)]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <div className="flex items-center gap-1.5 mt-1.5 font-['Nunito_Sans'] text-xs font-semibold text-[var(--error)]">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email & Address in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email with Zod validation */}
                  <div>
                    <label
                      htmlFor="client-email"
                      className="block font-['Nunito_Sans'] font-semibold text-sm text-[var(--ink)] mb-1.5"
                    >
                      {t.quoteForm.fields.email} <span className="text-[var(--error)]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="client-email"
                        type="email"
                        value={formData.email}
                        placeholder={t.quoteForm.fields.emailPlaceholder}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full h-12 px-4 rounded-xl border bg-[var(--surface)] text-[var(--ink)] font-['Nunito_Sans'] text-base focus:outline-2 focus:outline-[var(--primary)] transition-colors ${
                          errors.email
                            ? 'border-[var(--error)] ring-1 ring-[var(--error)]'
                            : 'border-[var(--line)]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <div className="flex items-center gap-1.5 mt-1.5 font-['Nunito_Sans'] text-xs font-semibold text-[var(--error)]">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Address (Optional/Helpful) */}
                  <div>
                    <label
                      htmlFor="client-address"
                      className="block font-['Nunito_Sans'] font-semibold text-sm text-[var(--ink)] mb-1.5"
                    >
                      {t.quoteForm.fields.address}
                    </label>
                    <div className="relative">
                      <input
                        id="client-address"
                        type="text"
                        value={formData.address}
                        placeholder={t.quoteForm.fields.addressPlaceholder}
                        onChange={(e) => handleChange('address', e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] font-['Nunito_Sans'] text-base focus:outline-2 focus:outline-[var(--primary)] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label
                    htmlFor="client-details"
                    className="block font-['Nunito_Sans'] font-semibold text-sm text-[var(--ink)] mb-1.5"
                  >
                    {t.quoteForm.fields.details} <span className="text-[var(--error)]">*</span>
                  </label>
                  <textarea
                    id="client-details"
                    rows={4}
                    value={formData.details}
                    placeholder={t.quoteForm.fields.detailsPlaceholder}
                    onChange={(e) => handleChange('details', e.target.value)}
                    onBlur={() => handleBlur('details')}
                    className={`w-full p-4 rounded-xl border bg-[var(--surface)] text-[var(--ink)] font-['Nunito_Sans'] text-base focus:outline-2 focus:outline-[var(--primary)] transition-colors resize-y ${
                      errors.details
                        ? 'border-[var(--error)] ring-1 ring-[var(--error)]'
                        : 'border-[var(--line)]'
                    }`}
                  />
                  {errors.details && (
                    <div className="flex items-center gap-1.5 mt-1.5 font-['Nunito_Sans'] text-xs font-semibold text-[var(--error)]">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span>{errors.details}</span>
                    </div>
                  )}
                </div>

                {/* Privacy note */}
                <p className="font-['Nunito_Sans'] text-xs text-[var(--ink-soft)]">
                  {t.quoteForm.note}
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-pill w-full text-center"
                >
                  {isSubmitting ? t.buttons.submitting : t.buttons.submitQuote}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
