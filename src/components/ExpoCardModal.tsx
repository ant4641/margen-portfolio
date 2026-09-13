import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import profileImg from '../assets/profile.jpg';
import { MARGEN_PROFILE } from '../data/resumeData';
import { X, Copy, Check, Mail, Phone, ExternalLink, Sparkles, QrCode } from 'lucide-react';

interface ExpoCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExpoCardModal: React.FC<ExpoCardModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-pre-oikck7sibbupaf6qq7xt3k-259017495537.asia-northeast1.run.app';

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        currentUrl,
        {
          width: 200,
          margin: 2,
          color: {
            dark: '#0A0C10',
            light: '#FFFFFF',
          },
        },
        (error) => {
          if (error) console.error("Error generating QR code:", error);
        }
      );
    }
  }, [isOpen, currentUrl]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1115]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0A0C10] border border-[#2D3748] rounded-xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 font-sans">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded bg-[#131720] text-slate-400 hover:text-white border border-[#2D3748] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Avatar & Title */}
        <div className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
            <QrCode className="w-3.5 h-3.5 text-emerald-400" />
            <span>資訊展現場互動名片</span>
          </div>

          <div className="flex justify-center pt-1">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500/70 shadow-lg shadow-emerald-950/50">
              <img
                src={profileImg}
                alt={MARGEN_PROFILE.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              {MARGEN_PROFILE.name} ({MARGEN_PROFILE.englishName})
            </h3>
            <p className="text-xs text-emerald-400 font-bold mt-0.5">
              {MARGEN_PROFILE.title}
            </p>
          </div>
        </div>

        {/* QR Code Canvas Frame */}
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-inner border border-slate-200">
          <canvas ref={canvasRef} className="rounded shadow" />
        </div>

        {/* Stats Summary Badge */}
        <div className="p-3.5 rounded bg-[#0F1115] border border-[#2D3748] text-xs text-slate-300 space-y-1.5">
          <p className="font-bold text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>核心成果亮點</span>
          </p>
          <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
            • 日誌平台：MariaDB MVCC 零鎖表備份 & 1,680萬筆資料 100% 零掉單<br />
            • 口袋證券：開戶查詢速度 +87% & 節省 $10,000 USD 升級服務費<br />
            • IoT 智慧場域：串接 15+ 硬體設備 & 50 隻 RTSP 攝影機
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 font-mono">
          <button
            onClick={handleCopy}
            className="w-full py-2.5 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
          >
            {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '已複製網站連結！' : '複製個人網站連結'}</span>
          </button>

          <div className="grid grid-cols-2 gap-2 pt-1 font-sans">
            <a
              href={`mailto:${MARGEN_PROFILE.contact.email}`}
              className="py-2.5 px-3 rounded bg-[#131720] hover:bg-[#1C232E] border border-[#2D3748] text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Email 聯絡</span>
            </a>
            <a
              href={`tel:${MARGEN_PROFILE.contact.phone}`}
              className="py-2.5 px-3 rounded bg-[#131720] hover:bg-[#1C232E] border border-[#2D3748] text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>電話 聯絡</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
