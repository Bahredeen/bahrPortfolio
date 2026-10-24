import { useState, useEffect, type FormEvent } from 'react';
import { X, Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMessage('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    let emailSent = false;
    let tgSent = false;

    // 1. Dispatch email via Web3Forms API to bahredeen@gmail.com
    try {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '3d04ce04-4fb4-4284-a508-3b7d2572c0f1',
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `New Portfolio Message from ${trimmedName}`,
          to_email: 'bahredeen@gmail.com',
        }),
      });

      const web3Result = await web3Res.json();
      if (web3Result.success) {
        emailSent = true;
      }
    } catch (web3Err) {
      console.error('Web3Forms Error:', web3Err);
    }

    // 2. Dispatch to Telegram Bot (Chat ID: 433708398)
    const botToken = '8841038095:AAGsUz8qwGe8KdoixTIPG9a0LumEWgqd_qg';
    const chatId = '433708398';

    try {
      const text = `📬 New Portfolio Message!\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nMessage:\n${trimmedMessage}`;
      const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      const tgResult = await tgRes.json();
      if (tgResult.ok) {
        tgSent = true;
      }
    } catch (tgErr) {
      console.error('Telegram API Error:', tgErr);
    }

    if (emailSent || tgSent) {
      setSubmitState('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSubmitState('idle');
        onClose();
      }, 2500);
    } else {
      setSubmitState('error');
      setErrorMessage('Something went wrong. Please try again or send an email directly.');
    }
  };

  if (!isOpen) return null;

  const contactItems = [
    { label: personalInfo.email, icon: Mail, href: `mailto:${personalInfo.email.split(' / ')[0]}` },
    { label: personalInfo.phone, icon: Phone, href: `tel:${personalInfo.phone.split(' / ')[0].replace(/\s/g, '')}` },
    { label: personalInfo.location, icon: MapPin, href: '#' },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto scrollbar-hide rounded-3xl bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700/50 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-white/95 dark:bg-navy-900/95 backdrop-blur border-b border-navy-100 dark:border-navy-800/50">
          <div>
            <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-sm text-navy-500 dark:text-navy-400 mt-0.5">
              Let's discuss how I can help your team
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-navy-500 dark:text-navy-400 hover:bg-navy-100 dark:hover:bg-navy-800/50 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {submitState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-500/15 flex items-center justify-center mb-4">
                <CheckCircle2 size={32} className="text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">
                Message Sent!
              </h3>
              <p className="mt-2 text-sm text-navy-500 dark:text-navy-400">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-navy-50 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700/40 hover:border-teal-300 dark:hover:border-teal-500/40 transition-colors"
                    >
                      <Icon size={16} className="text-teal-500 shrink-0" />
                      <span className="text-xs font-medium text-navy-700 dark:text-navy-200 truncate">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-navy-700 dark:text-navy-200 mb-1.5 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-700/50 text-navy-900 dark:text-white text-sm placeholder:text-navy-400 dark:placeholder:text-navy-500 focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-700 dark:text-navy-200 mb-1.5 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-700/50 text-navy-900 dark:text-white text-sm placeholder:text-navy-400 dark:placeholder:text-navy-500 focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-700 dark:text-navy-200 mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-700/50 text-navy-900 dark:text-white text-sm placeholder:text-navy-400 dark:placeholder:text-navy-500 focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                  />
                </div>

                {submitState === 'error' && (
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 animate-fade-in">
                    <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitState === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-navy-100 dark:border-navy-800/50">
                <p className="text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wide mb-3">
                  Connect
                </p>
                <div className="flex items-center gap-3">
                  {personalInfo.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700/40 flex items-center justify-center text-navy-600 dark:text-navy-300 hover:border-teal-400 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110 transition-all"
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
