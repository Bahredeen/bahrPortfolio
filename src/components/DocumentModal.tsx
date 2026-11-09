import { useEffect } from 'react';
import { X, ExternalLink, Download, FileText } from 'lucide-react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  documentUrl: string;
}

export function DocumentModal({
  isOpen,
  onClose,
  title,
  subtitle,
  documentUrl,
}: DocumentModalProps) {
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !documentUrl) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-md" />

      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-700/80 shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-navy-900/95 backdrop-blur border-b border-navy-100 dark:border-navy-800">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center shrink-0">
              <FileText size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base sm:text-lg font-bold text-navy-900 dark:text-white truncate">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-navy-500 dark:text-navy-400 truncate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={documentUrl}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-50 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-500/25 text-xs font-semibold transition-colors"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Save Copy</span>
            </a>
            <a
              href={documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-navy-500 hover:text-teal-600 dark:text-navy-400 dark:hover:text-teal-400 hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors"
              title="Open full resolution in new tab"
            >
              <ExternalLink size={18} />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-navy-500 hover:text-navy-900 dark:text-navy-400 dark:hover:text-white hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Document Display Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 bg-navy-950/5 dark:bg-navy-950/40 flex items-center justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-200/50 dark:border-navy-700/50 bg-white dark:bg-navy-950 max-h-[75vh]">
            <img
              src={documentUrl}
              alt={title}
              className="w-auto h-auto max-h-[72vh] max-w-full object-contain mx-auto select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}