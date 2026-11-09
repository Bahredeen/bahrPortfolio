import { useState, useEffect, useRef } from 'react';
import {
  X,
  ExternalLink,
  Download,
  FileText,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Move,
} from 'lucide-react';

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
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while modal is active & reset viewport transforms
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setScale(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard shortcuts (Escape, + / -, r for clockwise rotation, 0 for reset)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-') zoomOut();
      if (e.key.toLowerCase() === 'r') {
        if (e.shiftKey) {
          rotateLeft();
        } else {
          rotateRight();
        }
      }
      if (e.key === '0') resetView();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, scale, rotation]);

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.35, 4));
  };

  const zoomOut = () => {
    setScale((prev) => {
      const nextScale = Math.max(prev - 0.35, 0.7);
      if (nextScale <= 1) setPosition({ x: 0, y: 0 });
      return nextScale;
    });
  };

  const rotateLeft = () => {
    setRotation((prev) => (prev - 90) % 360);
  };

  const rotateRight = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const resetView = () => {
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  // Zoom via wheel or trackpad scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  // Mouse pan listeners
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen || !documentUrl) return null;

  const safeUrl = encodeURI(documentUrl);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-md" />

      <div
        className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-700/80 shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-navy-900/95 backdrop-blur border-b border-navy-100 dark:border-navy-800 z-10 shrink-0">
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
              href={safeUrl}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-50 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-500/25 text-xs font-semibold transition-colors"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Save</span>
            </a>
            <a
              href={safeUrl}
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

        {/* Document Viewing Area */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`relative flex-1 overflow-hidden p-4 sm:p-8 bg-navy-950/5 dark:bg-navy-950/50 flex items-center justify-center select-none ${
            scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
          }`}
        >
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
              transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="inline-block rounded-2xl overflow-hidden shadow-2xl border border-navy-200/50 dark:border-navy-700/50 bg-white dark:bg-navy-950 max-h-[75vh]"
          >
            <img
              src={safeUrl}
              alt={title}
              draggable={false}
              className="w-auto h-auto max-h-[72vh] max-w-full object-contain pointer-events-none"
            />
          </div>

          {/* Floating Controls Bar: Zoom & Rotation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-navy-200/80 dark:border-navy-700/80 shadow-2xl text-navy-700 dark:text-navy-200">
            {/* Rotate Left (Counter-Clockwise) */}
            <button
              onClick={rotateLeft}
              className="p-2 rounded-xl hover:bg-navy-100 dark:hover:bg-navy-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              title="Rotate Left 90° (Shift+R)"
            >
              <RotateCcw size={16} />
            </button>

            {/* Rotate Right (Clockwise) */}
            <button
              onClick={rotateRight}
              className="p-2 rounded-xl hover:bg-navy-100 dark:hover:bg-navy-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              title="Rotate Right 90° (R)"
            >
              <RotateCw size={16} />
            </button>

            <div className="w-px h-5 bg-navy-200 dark:bg-navy-700 mx-0.5" />

            {/* Zoom Out */}
            <button
              onClick={zoomOut}
              disabled={scale <= 0.7}
              className="p-2 rounded-xl hover:bg-navy-100 dark:hover:bg-navy-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Zoom Out (-)"
            >
              <ZoomOut size={16} />
            </button>

            {/* Scale Value Indicator */}
            <span className="px-2 text-xs font-bold tabular-nums min-w-[3.2rem] text-center text-teal-600 dark:text-teal-400">
              {Math.round(scale * 100)}%
            </span>

            {/* Zoom In */}
            <button
              onClick={zoomIn}
              disabled={scale >= 4}
              className="p-2 rounded-xl hover:bg-navy-100 dark:hover:bg-navy-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Zoom In (+)"
            >
              <ZoomIn size={16} />
            </button>

            <div className="w-px h-5 bg-navy-200 dark:bg-navy-700 mx-0.5" />

            {/* Reset View */}
            <button
              onClick={resetView}
              className="px-2.5 py-1.5 rounded-xl text-xs font-semibold hover:bg-navy-100 dark:hover:bg-navy-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              title="Reset View (0)"
            >
              Reset
            </button>

            {scale > 1 && (
              <span className="hidden sm:inline-flex items-center gap-1 pl-2 pr-2.5 text-[11px] font-medium text-navy-400 dark:text-navy-500 border-l border-navy-200 dark:border-navy-700">
                <Move size={12} /> Drag to pan
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}