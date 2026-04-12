import { useState } from "react";
import App from "./App";
import config from "./demo.config";
import {
  CalendarCheck, Flame, MessageCircle, UserCircle, CreditCard,
  CalendarDays, BellRing, BarChart3, Shield, Sparkles, MapPin,
  ChevronRight, ExternalLink
} from "lucide-react";

const S = {
  accent: config.accentColor,
  accentLight: config.accentLight,
  accentGhost: config.accentGhost,
  textDark: config.textDark,
  textMuted: config.textMuted,
  font: config.displayFont,
};

const features = [
  { icon: CalendarCheck, title: "Class Scheduling", desc: "Weekly schedule with real-time reservations" },
  { icon: Flame, title: "Practice Tracking", desc: "Reflections, streaks, and milestone badges" },
  { icon: MessageCircle, title: "Community Feed", desc: "Member milestones and celebrations" },
  { icon: UserCircle, title: "Teacher Profiles", desc: "Bios, certifications, and specialties" },
  { icon: CreditCard, title: "Membership Tiers", desc: `${6} plans from intro to unlimited` },
  { icon: CalendarDays, title: "Events & Workshops", desc: "Special sessions and teacher training" },
  { icon: BellRing, title: "Smart Notifications", desc: "Class reminders and streak alerts" },
  { icon: BarChart3, title: "Admin Dashboard", desc: "Full analytics, CRM, and broadcast tools" },
];

const salesCards = [
  {
    icon: Shield,
    title: "Admin Dashboard",
    desc: "Tap the shield icon in the app header to access the full admin suite -- analytics, member CRM, scheduling, and broadcast tools.",
  },
  {
    icon: Sparkles,
    title: `Built for ${config.studioName}`,
    desc: `Custom-designed around your brand, class types, teachers, and the welcoming community your members already love.`,
  },
  {
    icon: MapPin,
    title: "All-in-One Platform",
    desc: "Handles booking, payments, and member management natively -- no third-party software needed.",
  },
];

export default function DemoWrapper() {
  const [isAdmin, setIsAdmin] = useState(false);

  if (isAdmin) {
    return (
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <App onAdminChange={(admin) => setIsAdmin(admin)} />
        <style>{`
          * { scrollbar-width: none; }
          *::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#f5f3f0" }}>
      {/* LEFT SIDEBAR */}
      <aside
        style={{
          width: 320, flexShrink: 0, padding: "32px 28px", overflowY: "auto",
          display: "flex", flexDirection: "column", gap: 20,
          borderRight: "1px solid #e8e4df",
        }}
        className="demo-sidebar-left"
      >
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: S.accent, textTransform: "uppercase", marginBottom: 16 }}>
            Prototype Demo
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: S.accent,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: `'${S.font}', serif`, fontSize: 16, color: "#fff", fontWeight: 700,
            }}>
              {config.logoMark}
            </div>
            <div>
              <div style={{ fontFamily: `'${S.font}', serif`, fontSize: 22, fontWeight: 700, color: S.textDark, lineHeight: 1.1 }}>
                {config.studioName}
              </div>
              <div style={{ fontSize: 13, color: S.textMuted }}>{config.studioSubtitle}</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, paddingTop: 2 }}>
                  <Icon size={18} color={S.accent} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: S.textDark, lineHeight: 1.3 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: S.textMuted, lineHeight: 1.4 }}>{f.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: 11, color: "#b0a898", letterSpacing: "0.05em", marginTop: 12 }}>
          BUILT BY LUMI -- LUMICLASS.APP
        </p>
      </aside>

      {/* CENTER -- PHONE FRAME */}
      <div style={{
        flex: 1, display: "flex", alignItems: "stretch", justifyContent: "center",
        padding: "0", overflow: "hidden", background: "#eae6e1",
        minWidth: 420,
      }}>
        <div style={{
          width: 390, position: "relative",
          background: "#fff",
          boxShadow: "0 0 60px rgba(0,0,0,.12)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}>
          <App onAdminChange={(admin) => setIsAdmin(admin)} />
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside
        style={{
          width: 340, flexShrink: 0, padding: "32px 28px", overflowY: "auto",
          display: "flex", flexDirection: "column", gap: 20,
          borderLeft: "1px solid #e8e4df",
        }}
        className="demo-sidebar-right"
      >
        {salesCards.map((card, i) => {
          const CardIcon = card.icon;
          return (
            <div key={i} style={{
              background: "#fff", borderRadius: 14, padding: "24px 22px",
              border: "1px solid #e8e4df",
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: `${S.accent}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <CardIcon size={24} color={S.accent} />
              </div>
              <h3 style={{
                fontFamily: `'${S.font}', serif`, fontSize: 20, fontWeight: 700,
                color: S.textDark, margin: "0 0 8px", lineHeight: 1.2,
              }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 14, color: S.textMuted, lineHeight: 1.6, margin: 0 }}>
                {card.desc}
              </p>
            </div>
          );
        })}

        <div style={{
          background: S.accent, borderRadius: 14, padding: "24px 22px", color: "#fff",
          marginTop: "auto",
        }}>
          <h3 style={{
            fontFamily: `'${S.font}', serif`, fontSize: 20, fontWeight: 700,
            margin: "0 0 8px", lineHeight: 1.2,
          }}>
            Ready to Launch?
          </h3>
          <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6, margin: "0 0 16px" }}>
            Get a custom loyalty app built for your studio -- branded, data-driven, and ready to deploy.
          </p>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "10px 20px", borderRadius: 8,
            background: "rgba(255,255,255,0.2)", fontWeight: 700, fontSize: 14,
            cursor: "pointer", backdropFilter: "blur(4px)",
          }}>
            <ExternalLink size={14} />
            lumiclass.app
          </div>
        </div>
      </aside>

      <style>{`
        @media (max-width: 1100px) {
          .demo-sidebar-left, .demo-sidebar-right { display: none !important; }
        }
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
