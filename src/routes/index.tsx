import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { useState } from "react";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";
import depo4 from "@/assets/depo-4.jpg";
import ebookCover from "@/assets/ebook-cover.jpg";
import draDanielle2 from "@/assets/dra-danielle-2.jpg";
import draDanielle3 from "@/assets/dra-danielle-3.jpg";
import checkinCover from "@/assets/checkin-cover.jpg";
import plannerCover from "@/assets/planner-cover.jpg";
import draCat from "@/assets/dra-cat.jpg";
import logo from "@/assets/logo.png";
import heroVideo from "@/assets/hero-video.mp4";
import videoPoster from "@/assets/video-poster.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DermaPet Care – Dra. Danielle Gatti" },
      {
        name: "description",
        content:
          "Aprenda a cuidar da pele e dos pelos do seu pet com segurança e prevenção. E-book + bônus por R$ 42,90.",
      },
      { property: "og:title", content: "DermaPet Care – Dra. Danielle Gatti" },
      {
        property: "og:description",
        content:
          "Guia completo de dermatologia veterinária para responsáveis de cães e gatos.",
      },
    ],
  }),
  component: Index,
});

const CHECKOUT = "https://pay.hotmart.com/E100972662S";
const WHATSAPP = "https://wa.link/39qtdz";
const INSTAGRAM =
  "https://www.instagram.com/dragatti?igsh=MTJ3YjZycjdwYmp5ZA%3D%3D&utm_source=qr";
const STORE = "https://hotmart.com/pt-br/club/gattidermatovet";
const EMAIL = "dradanigatti@gmail.com";

const css = `
.dp *{margin:0;padding:0;box-sizing:border-box}
.dp{
  --gold:#c9a84c;--gold-l:#e8d49a;--gold-d:#9c7a2e;
  --rose:#c47a8a;--rose-l:#f5dde3;--rose-ll:#fdf4f6;--rose-d:#8c4a5a;
  --white:#ffffff;--off:#faf8f6;--gray:#6b6460;--dark:#2a1f22;
  --red:#c0392b;--border:rgba(196,122,138,.22);
  background:#fff;color:var(--dark);font-family:'Georgia',serif;line-height:1.75;
}
.dp .sans{font-family:sans-serif}
.dp .container{max-width:860px;margin:0 auto;padding:0 24px;position:relative}
.dp .float-bar{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.97);backdrop-filter:saturate(140%) blur(8px);-webkit-backdrop-filter:saturate(140%) blur(8px);border-bottom:1px solid var(--border);padding:10px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 4px 18px rgba(140,74,90,.06)}
.dp .fb-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--dark);flex-shrink:0}
.dp .fb-brand img{width:42px;height:42px;object-fit:contain;display:block}
.dp .fb-brand-name{font-family:'Georgia',serif;font-size:15px;line-height:1.1;color:var(--dark)}
.dp .fb-brand-name small{display:block;font-family:sans-serif;font-size:9px;letter-spacing:2.5px;text-transform:uppercase;color:var(--rose);margin-top:2px;font-weight:700}
@media(max-width:560px){.dp .fb-brand-name{display:none}}
.dp .fb-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end}
.dp .float-bar a.fb-link{font-family:sans-serif;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;text-decoration:none;padding:9px 16px;border-radius:999px;transition:all .2s ease;display:inline-flex;align-items:center;gap:6px;line-height:1}
.dp .fb-rose{background:transparent;color:var(--rose-d);border:1.5px solid var(--rose)}
.dp .fb-rose:hover{background:var(--rose);color:#fff;transform:translateY(-1px)}
.dp .fb-gold{background:linear-gradient(135deg,var(--gold-d),var(--gold),var(--gold-l));color:#fff;border:1.5px solid transparent;box-shadow:0 6px 16px rgba(201,168,76,.35)}
.dp .fb-gold:hover{transform:translateY(-1px);box-shadow:0 8px 20px rgba(201,168,76,.5)}
.dp .fb-insta{background:transparent;color:var(--rose-d);border:1.5px solid var(--rose)}
.dp .fb-insta:hover{background:var(--rose);color:#fff;transform:translateY(-1px)}
@media(max-width:480px){.dp .float-bar a.fb-link{padding:8px 12px;font-size:10px;letter-spacing:.8px}.dp .fb-brand img{width:36px;height:36px}}
.dp .hero-video-wrap{max-width:560px;margin:0 auto 32px;border-radius:14px;overflow:hidden;box-shadow:0 18px 50px rgba(140,74,90,.22);border:1px solid var(--rose-l);background:#000}
.dp .hero-video-wrap video{display:block;width:100%;height:auto}
.dp .hero{background:var(--off);padding:72px 24px 64px;text-align:center;border-bottom:1px solid var(--border)}
.dp .hero .eyebrow{font-family:sans-serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--rose);margin-bottom:24px}
.dp .hero h1{font-size:clamp(22px,4vw,42px);font-weight:400;line-height:1.2;color:var(--dark);max-width:680px;margin:0 auto 20px}
.dp .hero h1 em{font-style:normal;color:var(--rose)}
.dp .rose-line{width:44px;height:2px;background:var(--rose);margin:18px auto}
.dp .hero .sub{font-family:sans-serif;font-size:15px;color:var(--gray);max-width:580px;margin:0 auto 36px;line-height:1.75}
.dp .btn{display:inline-block;padding:16px 36px;background:linear-gradient(135deg,var(--gold-d),var(--gold),var(--gold-l));color:#fff;font-family:sans-serif;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;border-radius:3px;cursor:pointer;border:none;transition:.18s}
.dp .btn:hover{opacity:.88;transform:translateY(-1px)}
.dp .bullets{position:relative;background:#fff;padding:64px 24px;border-bottom:1px solid var(--border);overflow:hidden}
.dp .bullets-bg{position:absolute;top:50%;right:-40px;transform:translateY(-50%);width:340px;max-width:42%;pointer-events:none;-webkit-mask-image:linear-gradient(to left,#000 35%,transparent 95%);mask-image:linear-gradient(to left,#000 35%,transparent 95%);opacity:.85}
@media(max-width:720px){.dp .bullets-bg{opacity:.18;width:60%;right:-30px}}
.dp .sec-label{font-family:sans-serif;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:var(--rose);margin-bottom:14px}
.dp .sec-title{font-size:clamp(20px,3vw,30px);color:var(--dark);font-weight:400;line-height:1.3;margin-bottom:8px}
.dp .sec-title em{font-style:normal;color:var(--rose)}
.dp .sec-title-hl{position:relative;display:inline-block;font-family:'Georgia',serif;font-weight:500;font-size:clamp(22px,3.4vw,34px);line-height:1.3;color:var(--dark);padding:18px 28px 20px;margin:0 auto 6px;background:linear-gradient(180deg,#fff,var(--rose-ll));border:1px solid var(--rose-l);border-radius:12px;box-shadow:0 12px 34px rgba(196,122,138,.14);max-width:760px}
.dp .sec-title-hl::before{content:"";display:block;width:54px;height:3px;margin:0 auto 14px;background:linear-gradient(90deg,var(--gold-d),var(--gold),var(--gold-l));border-radius:2px}
.dp .sec-title-hl em{font-style:normal;background:linear-gradient(135deg,var(--gold-d),var(--gold));-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:600}
.dp .hl-wrap{text-align:center;margin-bottom:8px}
.dp .learn-thumb{display:block;width:140px;height:140px;object-fit:cover;border-radius:50%;border:3px solid var(--rose-l);box-shadow:0 10px 28px rgba(140,74,90,.18);margin:24px auto 8px}
.dp .bullets-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:36px;position:relative;z-index:1}
@media(max-width:580px){.dp .bullets-grid{grid-template-columns:1fr}}
.dp .bcol{padding-right:20px}
.dp .bcol:last-child{padding-right:0;padding-left:20px;border-left:1px solid var(--border)}
@media(max-width:580px){.dp .bcol{padding:0}.dp .bcol:last-child{padding:0;border:none}}
.dp .bi{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid rgba(196,122,138,.1)}
.dp .bcheck{min-width:20px;height:20px;background:var(--rose);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;margin-top:2px;flex-shrink:0}
.dp .bi p{font-family:sans-serif;font-size:14px;color:#4a3d40;line-height:1.65}
.dp .forwhom{background:var(--rose-ll);padding:64px 24px;border-bottom:1px solid var(--border)}
.dp .fgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:36px}
.dp .fcard{background:#fff;border:1px solid var(--border);border-radius:8px;padding:24px 20px}
.dp .fcard-icon{font-size:28px;margin-bottom:12px;line-height:1}
.dp .fcard h3{font-family:sans-serif;font-size:14px;font-weight:700;color:var(--dark);margin-bottom:10px}
.dp .fcard p{font-family:sans-serif;font-size:13px;color:var(--gray);line-height:1.65}
.dp .doctor{background:#fff;padding:64px 24px;border-bottom:1px solid var(--border)}
.dp .doc-inner{display:flex;align-items:flex-start;gap:40px;max-width:760px;margin:0 auto}
@media(max-width:580px){.dp .doc-inner{flex-direction:column;gap:24px;align-items:center;text-align:center}}
.dp .doc-name{font-size:clamp(18px,3vw,26px);color:var(--dark);font-weight:400;margin-bottom:4px}
.dp .doc-cred{font-family:sans-serif;font-size:12px;color:var(--rose);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:16px}
.dp .doc-body p{font-family:sans-serif;font-size:14px;color:var(--gray);line-height:1.75}
.dp .offer{background:var(--off);padding:64px 24px;border-bottom:1px solid var(--border);text-align:center}
.dp .offer .sec-title{max-width:620px;margin:0 auto 8px}
.dp .offer .sub{font-family:sans-serif;font-size:15px;color:var(--gray);max-width:580px;margin:0 auto 40px;line-height:1.75}
.dp .products-stack{max-width:500px;margin:0 auto 36px}
.dp .prod-row{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:#fff;border:1px solid var(--border);border-radius:6px;margin-bottom:10px}
.dp .prod-row:last-child{margin-bottom:0}
.dp .prod-name{font-family:sans-serif;font-size:14px;color:var(--dark);font-weight:600;text-align:left}
.dp .prod-desc{font-family:sans-serif;font-size:12px;color:var(--gray);text-align:left;margin-top:2px}
.dp .prod-price{font-family:sans-serif;font-size:15px;font-weight:700;color:var(--gray);white-space:nowrap;margin-left:16px;text-decoration:line-through;text-decoration-color:var(--red);text-decoration-thickness:2px}
.dp .price-total-row{background:var(--rose-ll);border:1px solid var(--rose);border-radius:8px;padding:20px 24px;max-width:500px;margin:0 auto 28px}
.dp .price-old{font-family:sans-serif;font-size:14px;color:var(--gray);text-decoration:line-through;text-decoration-color:var(--red);margin-bottom:4px}
.dp .price-now-label{font-family:sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--rose-d);margin-bottom:4px}
.dp .price-now{font-size:38px;font-weight:700;color:var(--red)}
.dp .price-now strong{color:var(--red)}
.dp .guarantee{font-family:sans-serif;font-size:12px;color:var(--gray);margin-top:20px;display:flex;align-items:center;justify-content:center;gap:8px}
.dp .guarantee-icon{color:var(--gold);font-size:16px}
.dp .bonus{background:#fff;padding:64px 24px;border-bottom:1px solid var(--border)}
.dp .bonus-main{display:flex;gap:32px;align-items:center;max-width:720px;margin:36px auto 24px;background:linear-gradient(135deg,#fff,var(--rose-ll));border:1px solid var(--rose);border-radius:14px;padding:28px;box-shadow:0 14px 40px rgba(196,122,138,.18)}
@media(max-width:580px){.dp .bonus-main{flex-direction:column;text-align:center;padding:22px}}
.dp .bonus-main img{width:200px;max-width:48%;border-radius:8px;box-shadow:0 12px 28px rgba(140,74,90,.25);flex-shrink:0}
@media(max-width:580px){.dp .bonus-main img{max-width:60%;width:auto}}
.dp .bonus-main .bm-body{flex:1}
.dp .bonus-sub{display:grid;grid-template-columns:1fr 1fr;gap:18px;max-width:720px;margin:0 auto}
@media(max-width:580px){.dp .bonus-sub{grid-template-columns:1fr}}
.dp .bonus-card{display:flex;gap:16px;align-items:center;border:1px solid var(--rose-l);border-radius:10px;padding:18px;background:var(--rose-ll)}
.dp .bonus-card img{width:90px;border-radius:6px;box-shadow:0 6px 16px rgba(140,74,90,.18);flex-shrink:0}
.dp .bonus-badge{display:inline-block;background:var(--rose);color:#fff;font-family:sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:10px}
.dp .bonus-badge.gold{background:linear-gradient(135deg,var(--gold-d),var(--gold));font-size:11px}
.dp .bonus-card h3{font-family:sans-serif;font-size:14px;font-weight:700;color:var(--dark);margin-bottom:8px}
.dp .bonus-main h3{font-family:'Georgia',serif;font-size:24px;font-weight:400;color:var(--dark);margin-bottom:10px}
.dp .bonus-card p,.dp .bonus-main p{font-family:sans-serif;font-size:13px;color:var(--gray);line-height:1.65}
.dp .testi{background:var(--rose-ll);padding:64px 24px;border-bottom:1px solid var(--border)}
.dp .tgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;margin-top:36px}
.dp .tcard{background:#fff;border:1px solid var(--border);border-radius:8px;padding:24px 20px}
.dp .thead{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.dp .tname{font-family:sans-serif;font-size:14px;font-weight:700;color:var(--dark)}
.dp .tpet{font-family:sans-serif;font-size:12px;color:var(--rose)}
.dp .tcard blockquote{font-family:sans-serif;font-size:13px;color:var(--gray);line-height:1.7;font-style:italic;border-left:2px solid var(--rose-l);padding-left:12px}
.dp .paws{font-size:14px;letter-spacing:2px;margin-bottom:8px;filter:drop-shadow(0 1px 0 rgba(140,74,90,.15))}
.dp .consult{background:#fff;padding:64px 24px;border-bottom:1px solid var(--border);text-align:center}
.dp .consult-title{display:inline-block;background:linear-gradient(135deg,var(--gold-d),var(--gold),var(--gold-l));color:#fff;padding:18px 28px;border-radius:10px;box-shadow:0 10px 28px rgba(201,168,76,.35);font-size:clamp(18px,2.6vw,26px);font-weight:600;line-height:1.35;font-family:'Georgia',serif;max-width:680px;margin:0 auto}
.dp .consult-title em{font-style:normal;color:#fff;text-decoration:underline;text-decoration-color:rgba(255,255,255,.6);text-underline-offset:4px}
.dp .consult-doc{display:block;width:160px;height:160px;object-fit:cover;border-radius:50%;border:4px solid var(--gold);margin:28px auto 0;box-shadow:0 10px 28px rgba(140,74,90,.22)}
.dp .consult-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:680px;margin:36px auto}
@media(max-width:560px){.dp .consult-grid{grid-template-columns:1fr}}
.dp .ccard{border:1px solid var(--border);border-radius:8px;padding:28px 20px;background:var(--rose-ll);text-align:center}
.dp .ccard h3{font-family:sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--rose-d);margin-bottom:10px}
.dp .ccard p{font-family:sans-serif;font-size:13px;color:var(--gray);line-height:1.65;margin-bottom:0}
.dp .products-link{position:relative;background:var(--off);padding:64px 24px;border-bottom:1px solid var(--border);text-align:center;overflow:hidden}
.dp .products-bg{position:absolute;top:50%;left:-40px;transform:translateY(-50%);width:300px;max-width:38%;pointer-events:none;-webkit-mask-image:linear-gradient(to right,#000 30%,transparent 95%);mask-image:linear-gradient(to right,#000 30%,transparent 95%);opacity:.9}
.dp .products-bg-right{position:absolute;top:50%;right:-40px;left:auto;transform:translateY(-50%);width:300px;max-width:38%;pointer-events:none;-webkit-mask-image:linear-gradient(to left,#000 30%,transparent 95%);mask-image:linear-gradient(to left,#000 30%,transparent 95%);opacity:.9}
@media(max-width:720px){.dp .products-bg,.dp .products-bg-right{opacity:.14;width:55%}.dp .products-bg{left:-20px}.dp .products-bg-right{right:-20px}}
.dp .video-caption{max-width:560px;margin:12px auto 0;font-size:13px;line-height:1.6;color:var(--gray);text-align:center;font-style:italic}
.dp .products-link .container{position:relative;z-index:1}
.dp .faq{background:#fff;padding:64px 24px;border-bottom:1px solid var(--border)}
.dp .faq-group{margin-top:36px}
.dp .faq-cat{font-family:sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--rose);margin:32px 0 16px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.dp .faq-item{margin-bottom:10px}
.dp footer{background:var(--dark);padding:32px 24px;text-align:center}
.dp footer p{font-family:sans-serif;font-size:11px;color:rgba(255,255,255,.45);letter-spacing:1px;line-height:1.8}
.dp footer a{color:var(--gold-l);text-decoration:none}
.dp footer a:hover{text-decoration:underline}
.dp footer span{color:var(--rose)}
.dp .text-center{text-align:center}
.dp .doc-photo-img{width:200px;min-width:200px;height:240px;object-fit:cover;border-radius:8px;border:2px solid var(--rose-l)}
@media(max-width:580px){.dp .doc-photo-img{width:180px;min-width:180px;height:220px}}
.dp .avatar-img{width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid var(--rose-l)}
.dp .faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;background:#fff;border:1px solid var(--border);border-radius:6px;padding:14px 18px;text-align:left;cursor:pointer;font-family:sans-serif;font-size:14px;font-weight:700;color:var(--dark);transition:.18s}
.dp .faq-q:hover{background:var(--rose-ll);border-color:var(--rose)}
.dp .faq-q .chev{color:var(--rose);font-size:14px;transition:transform .2s}
.dp .faq-q.open .chev{transform:rotate(180deg)}
.dp .faq-a{padding:14px 18px 6px;font-family:sans-serif;font-size:13px;color:var(--gray);line-height:1.7}
.dp .faq-a ul{padding-left:18px;margin-top:4px}
.dp .wa-float{position:fixed;right:20px;bottom:20px;z-index:200;display:flex;align-items:center;gap:10px;padding:12px 20px 12px 16px;border-radius:999px;background:linear-gradient(135deg,#1ebe57,#25D366);color:#fff;text-decoration:none;font-family:sans-serif;font-weight:700;font-size:14px;letter-spacing:.5px;box-shadow:0 10px 28px rgba(37,211,102,.45);transition:transform .18s,box-shadow .18s;border:2px solid rgba(255,255,255,.85)}
.dp .wa-float:hover{transform:translateY(-2px) scale(1.03);box-shadow:0 14px 34px rgba(37,211,102,.55)}
.dp .wa-float svg{width:22px;height:22px;fill:#fff}
.dp .menu-btn{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;border:1.5px solid var(--rose);background:#fff;color:var(--rose-d);cursor:pointer;flex-shrink:0;transition:all .2s ease;margin-right:4px}
.dp .menu-btn:hover{background:var(--rose);color:#fff;transform:translateY(-1px)}
.dp .menu-btn svg{width:20px;height:20px}
.dp .sb-overlay{position:fixed;inset:0;background:rgba(42,31,34,.42);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:300;opacity:0;pointer-events:none;transition:opacity .35s ease}
.dp .sb-overlay.open{opacity:1;pointer-events:auto}
.dp .sb-panel{position:fixed;top:0;left:0;height:100vh;width:min(420px,92vw);background:rgba(255,255,255,.98);backdrop-filter:saturate(160%) blur(14px);-webkit-backdrop-filter:saturate(160%) blur(14px);box-shadow:24px 0 60px rgba(140,74,90,.18);z-index:301;transform:translateX(-105%);transition:transform .42s cubic-bezier(.22,1,.36,1);display:flex;flex-direction:column;border-right:1px solid var(--rose-l)}
.dp .sb-panel.open{transform:translateX(0)}
.dp .sb-head{display:flex;align-items:center;justify-content:space-between;padding:22px 24px;border-bottom:1px solid var(--border);gap:12px}
.dp .sb-brand{display:flex;align-items:center;gap:12px;min-width:0}
.dp .sb-brand img{width:40px;height:40px;object-fit:contain;flex-shrink:0}
.dp .sb-brand-text{font-family:'Georgia',serif;font-size:15px;color:var(--dark);line-height:1.15}
.dp .sb-brand-text small{display:block;font-family:sans-serif;font-size:9px;letter-spacing:2.5px;text-transform:uppercase;color:var(--rose);font-weight:700;margin-top:3px}
.dp .sb-close{background:transparent;border:none;color:var(--gray);width:36px;height:36px;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all .18s}
.dp .sb-close:hover{background:var(--rose-ll);color:var(--rose-d)}
.dp .sb-eyebrow{font-family:sans-serif;font-size:10px;letter-spacing:3.5px;text-transform:uppercase;color:var(--rose);padding:24px 24px 12px}
.dp .sb-list{flex:1;overflow-y:auto;padding:4px 16px 24px}
.dp .sb-item{display:flex;align-items:center;justify-content:space-between;width:100%;padding:18px 18px;background:transparent;border:1px solid transparent;border-radius:12px;text-align:left;cursor:pointer;font-family:'Georgia',serif;font-size:16px;color:var(--dark);transition:all .22s ease;margin-bottom:6px;line-height:1.3}
.dp .sb-item:hover{background:var(--rose-ll);border-color:var(--rose-l);transform:translateX(4px)}
.dp .sb-item.active{background:linear-gradient(135deg,var(--rose-ll),#fff);border-color:var(--rose);color:var(--rose-d);box-shadow:0 6px 18px rgba(196,122,138,.18)}
.dp .sb-item .sb-arrow{color:var(--rose);font-size:14px;flex-shrink:0;margin-left:12px;transition:transform .2s}
.dp .sb-item:hover .sb-arrow{transform:translateX(3px)}
.dp .sb-detail{flex:1;overflow-y:auto;padding:8px 26px 28px}
.dp .sb-back{background:transparent;border:none;color:var(--rose-d);font-family:sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;padding:8px 0;display:inline-flex;align-items:center;gap:6px;margin-bottom:12px}
.dp .sb-back:hover{color:var(--rose)}
.dp .sb-detail h3{font-family:'Georgia',serif;font-size:22px;font-weight:500;color:var(--dark);margin-bottom:6px;line-height:1.25}
.dp .sb-detail .sb-rule{width:40px;height:2px;background:var(--rose);margin:10px 0 18px;border-radius:2px}
.dp .sb-detail p{font-family:sans-serif;font-size:13.5px;color:#4a3d40;line-height:1.7;margin-bottom:12px}
.dp .sb-detail ul{font-family:sans-serif;font-size:13.5px;color:#4a3d40;line-height:1.7;padding-left:18px;margin-bottom:12px}
.dp .sb-detail ul li{margin-bottom:6px}
.dp .topic-list{list-style:none;padding:6px 0 4px;margin:0 0 14px;display:flex;flex-direction:column;gap:10px}
.dp .topic-list li{display:flex;align-items:flex-start;gap:12px;font-family:sans-serif;font-size:13.5px;color:#4a3d40;line-height:1.6;padding:10px 12px;background:linear-gradient(180deg,#fffaf2,#fff);border:1px solid #f0e3c8;border-radius:10px}
.dp .topic-list li svg{flex-shrink:0;margin-top:2px;color:var(--gold-d)}
.dp .sb-cta{display:inline-flex;align-items:center;gap:10px;margin-top:14px;padding:14px 26px;background:linear-gradient(135deg,var(--gold-d),var(--gold));color:#fff;text-decoration:none;font-family:sans-serif;font-size:13px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;border-radius:999px;box-shadow:0 10px 24px rgba(184,148,84,.4);transition:.2s}
.dp .sb-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(184,148,84,.55)}
.dp .ccard{cursor:pointer;transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease}
.dp .ccard:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(196,122,138,.18);border-color:var(--rose)}
`;

const learnLeft = [
  "Identifique sinais de problemas de pele antes que se tornem graves.",
  "Evite erros comuns que pioram a coceira, queda de pelo e irritações.",
  "Descubra a forma correta de dar banho e escolher os produtos ideais.",
  "Aprenda qual escova usar para cada tipo de pelagem.",
  "Reduza gastos com produtos e tentativas que não funcionam.",
];
const learnRight = [
  "Crie uma rotina simples, prática e realmente eficaz de cuidados.",
  "Previna dermatites, alergias e infecções de forma estratégica.",
  "Tenha mais segurança para cuidar do seu animal no dia a dia.",
  "Conte com um guia de base profissional, direto ao ponto e aplicável.",
];

const fwIcons = ["🐾", "🐾", "🐾", "🐾", "🐾", "🐾"];
const forWhom: Array<[string, string]> = [
  ["Se preocupa com o bem-estar do pet", "Quer ir além do básico, entendendo de verdade como manter a pele e os pelos saudáveis."],
  ["Já percebeu sinais de alerta", "Coceira, queda de pelo, irritações — mas não sabe exatamente o que fazer ou como evitar que piore."],
  ["Quer prevenir antes de tratar", "Prefere agir de forma estratégica, evitando doenças em vez de correr atrás de soluções depois."],
  ["Sente que pode estar errando", "Busca orientação clara sobre banho, escovação, produtos e frequência ideal na rotina."],
  ["Já gastou sem resultado", "Quer parar de perder dinheiro testando soluções sem direção e sem base profissional."],
  ["Busca praticidade com ciência", "Quer um guia direto, aplicável no dia a dia, com segurança e lógica profissional."],
];

const testimonials: Array<[string, string, string, string]> = [
  ["Mariana R.", "Responsável pelo Thor", "Nunca imaginei que pequenos sinais já mostravam que meu cachorro estava começando uma crise alérgica. Depois de aplicar as orientações do Check-in Sem Coceira, consegui identificar tudo muito mais cedo. Hoje ele está muito melhor e as crises diminuíram bastante.", depo1],
  ["Fernanda A.", "Responsável pela Luna", "O DermaPet Care me ajudou a entender que dermatologia vai muito além de shampoo. Aprendi sobre rotina, alimentação, manejo e cuidados corretos. Minha gata vivia se lambendo excessivamente e hoje está muito mais confortável.", depo2],
  ["Ricardo M.", "Responsável pela Mel", "O Diário PetCare mudou completamente minha organização com o tratamento dermatológico da minha cachorra. Antes eu esquecia medicações, banhos e detalhes importantes. Agora consigo acompanhar tudo e percebi melhora muito mais rápido.", depo3],
  ["Juliana P.", "Responsável pelo Bento", "Meu cachorro frequenta creche e sempre voltava com problemas de pele. Depois dos ensinamentos do e-book, aprendi a fazer o manejo correto antes e depois da escolinha. As coceiras reduziram muito e eu me sinto muito mais segura.", depo4],
];

type FaqEntry = { q: string; a: React.ReactNode };
type FaqGroup = { cat: string; items: FaqEntry[] };
const faqGroups: FaqGroup[] = [
  {
    cat: "Sobre os produtos",
    items: [
      { q: "O que exatamente vou receber?", a: (<ul><li>O e-book digital Check-in Sem Coceira</li><li>O e-book digital DermaPet Care</li><li>O planner Diário PetCare em PDF (para imprimir ou usar digitalmente)</li></ul>) },
      { q: "Este produto serve para mim?", a: "Sim. Os materiais foram desenvolvidos para responsáveis de cães e gatos que desejam aprender sobre prevenção, identificação precoce e cuidados dermatológicos no dia a dia — especialmente pets com alergias, sensibilidade de pele ou que frequentam ambientes coletivos." },
      { q: "Como funciona na prática?", a: "Após a compra, você recebe acesso imediato aos materiais digitais. Os e-books trazem orientações práticas e educativas sobre saúde dermatológica, enquanto o Diário PetCare ajuda no acompanhamento diário da pele e dos pelos em casa." },
      { q: "O produto tem garantia?", a: "Sim. Você possui garantia de 7 dias conforme o Código de Defesa do Consumidor para produtos digitais." },
    ],
  },
  {
    cat: "Compra e entrega",
    items: [
      { q: "Quais são as formas de pagamento?", a: "Cartão de crédito, PIX e boleto bancário. O parcelamento pode variar conforme a plataforma." },
      { q: "Qual é o prazo de entrega?", a: "O acesso é digital e enviado automaticamente após a confirmação do pagamento." },
      { q: "Há frete?", a: "Não. Os produtos são 100% digitais." },
      { q: "Como acompanho meu pedido?", a: "Após a compra, você receberá todas as informações de acesso diretamente no e-mail cadastrado na plataforma." },
    ],
  },
  {
    cat: "Pós-venda",
    items: [
      { q: "Como funciona a política de devolução?", a: "Você pode solicitar reembolso em até 7 dias após a compra, conforme a garantia legal para produtos digitais." },
      { q: "Como entro em contato em caso de dúvidas?", a: (<>Você pode entrar em contato pelo WhatsApp, pelas redes sociais da Dra. Danielle Gatti ou pelo e-mail <a href={`mailto:${EMAIL}`} style={{color:"var(--rose-d)"}}>{EMAIL}</a>.</>) },
      { q: "Por que devo confiar neste produto?", a: "Os materiais foram desenvolvidos com foco educativo e preventivo, baseados na rotina da dermatologia veterinária — informações práticas, acessíveis e aplicáveis no dia a dia dos responsáveis." },
    ],
  },
];

function FaqItem({ q, a }: FaqEntry) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button type="button" className={`faq-q${open ? " open" : ""}`} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span><span className="chev">▼</span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

type ConsultKey = "clinica" | "estetica";

const PawIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <ellipse cx="6" cy="10" rx="1.7" ry="2.4"/>
    <ellipse cx="10" cy="6.5" rx="1.7" ry="2.4"/>
    <ellipse cx="14" cy="6.5" rx="1.7" ry="2.4"/>
    <ellipse cx="18" cy="10" rx="1.7" ry="2.4"/>
    <path d="M12 11.5c-3.2 0-5.5 2.6-5.5 5 0 1.7 1.4 2.8 3 2.8 1.1 0 1.7-.5 2.5-.5s1.4.5 2.5.5c1.6 0 3-1.1 3-2.8 0-2.4-2.3-5-5.5-5z"/>
  </svg>
);

const TopicList = ({ items }: { items: string[] }) => (
  <ul className="topic-list">
    {items.map((t, i) => (
      <li key={i}><PawIcon /><span>{t}</span></li>
    ))}
  </ul>
);

const consultaContent: Record<ConsultKey, { title: string; node: React.ReactNode }> = {
  clinica: {
    title: "Consulta Clínica Dermatológica",
    node: (
      <>
        <p>A consulta clínica é realizada no domicílio do responsável pelo pet e de forma individualizada, com foco no diagnóstico, tratamento e acompanhamento das doenças dermatológicas em cães e gatos, proporcionando conforto e praticidade ao paciente e à família no ambiente domiciliar.</p>
        <p>Durante a consulta, é realizada uma avaliação clínica completa da pele, pelagem e ouvidos, além da investigação detalhada do histórico do paciente, hábitos, alimentação e possíveis fatores relacionados ao quadro dermatológico.</p>
        <p>Quando indicado, podem ser realizados exames dermatológicos complementares no momento do atendimento, como:</p>
        <TopicList items={[
          "Citologia de pele e ouvido (exame já incluso no valor da consulta)",
          "Raspado cutâneo (exame não incluso no valor da consulta)",
          "Tricograma (exame não incluso no valor da consulta)",
          "Exames de sangue (exames não inclusos no valor da consulta)",
        ]} />
        <p>Além disso, os responsáveis recebem acesso a materiais exclusivos com orientações completas sobre cuidados dermatológicos e manejo de pacientes alérgicos, auxiliando na continuidade do tratamento e na melhora da qualidade de vida do animal.</p>
        <p>Caso deseje, posso explicar melhor como funciona a consulta e verificar horários disponíveis.</p>
      </>
    ),
  },
  estetica: {
    title: "Consulta Estética On-line",
    node: (
      <>
        <p>A consulta estética online foi desenvolvida para responsáveis que desejam melhorar os cuidados com a pele, pelagem e higiene do seu pet de forma prática, personalizada e no conforto de casa.</p>
        <p>Durante o atendimento, realizo uma avaliação individualizada através do histórico do paciente, rotina de cuidados, alimentação, produtos utilizados e análise visual da pele e pelagem por fotos e/ou vídeo.</p>
        <p>A consulta é focada em orientações estéticas e preventivas, auxiliando os responsáveis nos cuidados diários para manutenção da saúde e beleza da pele e dos pelos dos pets.</p>
        <p>Entre as orientações abordadas durante a consulta estão cuidados voltados tanto para pets com sensibilidade/alergias dermatológicas quanto para pets saudáveis que necessitam de uma rotina adequada de manutenção da pele e pelagem:</p>
        <TopicList items={[
          "Rotina ideal de banhos",
          "Indicação de produtos adequados para cada tipo de pele e pelagem",
          "Cuidados com hidratação da pele e manutenção da pelagem",
          "Manejo de queda de pelos e escovação",
          "Higiene dos ouvidos e cuidados gerais dermatológicos",
          "Orientações especiais para pets que frequentam hotéis, creches e outros ambientes coletivos",
          "Orientações complementares relacionadas à alimentação e suplementação para saúde da pele e pelos",
        ]} />
        <p>Além disso, o responsável recebe orientações práticas e personalizadas para aplicar no dia a dia, promovendo mais conforto, bem-estar e qualidade de vida ao pet.</p>
        <p>Caso deseje, posso explicar melhor como funciona o atendimento online e verificar horários disponíveis para consulta.</p>
      </>
    ),
  },
};

function SideMenu({ open, onClose, selected, setSelected }: { open: boolean; onClose: () => void; selected: ConsultKey | null; setSelected: (k: ConsultKey | null) => void }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  return (
    <>
      <div className={`sb-overlay${open ? " open" : ""}`} onClick={onClose} aria-hidden={!open} />
      <aside className={`sb-panel${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu de consultas">
        <div className="sb-head">
          <div className="sb-brand">
            <img src={logo} alt="" />
            <div className="sb-brand-text">Dra. Danielle Gatti<small>DermaPet Care</small></div>
          </div>
          <button type="button" className="sb-close" onClick={onClose} aria-label="Fechar menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        {selected === null ? (
          <>
            <div className="sb-eyebrow">Consultas</div>
            <div className="sb-list">
              {(Object.keys(consultaContent) as ConsultKey[]).map((k) => (
                <button key={k} type="button" className="sb-item" onClick={() => setSelected(k)}>
                  <span>{consultaContent[k].title}</span>
                  <span className="sb-arrow" aria-hidden="true">›</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="sb-detail">
            <button type="button" className="sb-back" onClick={() => setSelected(null)}>‹ Voltar</button>
            <h3>{consultaContent[selected].title}</h3>
            <div className="sb-rule" />
            {consultaContent[selected].node}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="sb-cta">
              {selected === "clinica" ? "Agendar Consulta Clínica" : "Agendar Consulta Estética"}
            </a>
          </div>
        )}
      </aside>
    </>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<ConsultKey | null>(null);
  const openMenuWith = (k: ConsultKey | null) => { setSelected(k); setMenuOpen(true); };
  const closeMenu = () => { setMenuOpen(false); setTimeout(() => setSelected(null), 250); };
  return (
    <div className="dp">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SideMenu open={menuOpen} onClose={closeMenu} selected={selected} setSelected={setSelected} />

      <div className="float-bar">
        <button type="button" className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
        <a href="#top" className="fb-brand" aria-label="DermaPet Care - Dra. Danielle Gatti">
          <img src={logo} alt="Logo Dra. Danielle Gatti" />
          <span className="fb-brand-name">Dra. Danielle Gatti<small>DermaPet Care</small></span>
        </a>
        <div className="fb-actions">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="fb-link fb-rose">WhatsApp</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="fb-link fb-insta">Instagram</a>
          <a href={CHECKOUT} target="_blank" rel="noreferrer" className="fb-link fb-gold">Adquirir Agora</a>
        </div>
      </div>

      <section className="hero" id="top">
        <div className="eyebrow">Dermatologia Veterinária · Dra. Danielle Gatti</div>
        <h1>Pare de errar nos cuidados com a pele do seu pet — e descubra como prevenir <em>coceiras, alergias, queda de pelo e crises dermatológicas</em>, mantendo os pelos saudáveis, bonitos e protegidos de forma simples e segura.</h1>
        <div className="rose-line"></div>
        <p className="sub sans">Com o DermaPet Care, você aprende exatamente o que fazer no dia a dia para prevenir doenças dermatológicas, evitar erros comuns e cuidar da pele e dos pelos do seu animal com orientação profissional, mesmo em casa.</p>
        <div className="hero-video-wrap">
          <video src={heroVideo} poster={videoPoster} autoPlay muted loop playsInline controls preload="metadata" />
        </div>
        <p className="video-caption sans">Se você quer entender de forma clara como funciona o combo dermatológico e por que ele faz diferença no dia a dia do seu pet, assista até o final — no vídeo eu te explico tudo.</p>
      </section>

      <section className="bullets">
        <div className="container">
          <div className="hl-wrap"><h2 className="sec-title-hl">Tudo o que você vai aprender para manter seu pet <em>longe da coceira e das irritações</em></h2></div>
          <div className="bullets-grid">
            <div className="bcol">
              {learnLeft.map((t, i) => (
                <div key={i} className="bi"><div className="bcheck">✓</div><p>{t}</p></div>
              ))}
            </div>
            <div className="bcol">
              {learnRight.map((t, i) => (
                <div key={i} className="bi"><div className="bcheck">✓</div><p>{t}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="forwhom">
        <div className="container">
          <div className="sec-label">Para quem é</div>
          <h2 className="sec-title">O DermaPet Care foi criado <em>para você</em></h2>
          <div className="fgrid">
            {forWhom.map(([title, desc], i) => (
              <div key={i} className="fcard">
                <div className="fcard-icon" aria-hidden="true">{fwIcons[i % fwIcons.length]}</div>
                <h3 className="sans">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bonus">
        <div className="container">
          <div className="sec-label text-center">Bônus inclusos na sua compra</div>
          <div className="hl-wrap"><h2 className="sec-title-hl">Você recebe <em>três produtos</em> pelo preço de um</h2></div>

          <div className="bonus-main">
            <img src={ebookCover} alt="Capa do e-book DermaPet Care" />
            <div className="bm-body">
              <span className="bonus-badge gold">E-book principal</span>
              <h3>DermaPet Care</h3>
              <p>Guia completo para pele saudável, menos coceira e mais qualidade de vida — com rotinas, produtos, escovação e prevenção.</p>
            </div>
          </div>

          <div className="bonus-sub">
            <div className="bonus-card">
              <img src={plannerCover} alt="Capa do planner Diário PetCare" />
              <div>
                <span className="bonus-badge">Bônus 1 — grátis</span>
                <h3>Diário PetCare</h3>
                <p>Planner dermatológico em PDF para monitorar coceira, vermelhidão, queda de pelos e resposta a tratamentos.</p>
              </div>
            </div>
            <div className="bonus-card">
              <img src={checkinCover} alt="Capa do e-book Check-in Sem Coceira" />
              <div>
                <span className="bonus-badge">Bônus 2 — grátis</span>
                <h3>Check-in Sem Coceira</h3>
                <p>Para pets que frequentam creches, hotéis e day care — como prevenir contaminações e crises dermatológicas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer">
        <div className="container">
          <div className="sec-label text-center">Oferta completa</div>
          <div className="hl-wrap"><h2 className="sec-title-hl">Invista em conhecimento que evita <em>sofrimento e gastos desnecessários</em></h2></div>
          <div className="rose-line"></div>
          <p className="sub sans">Adquira o DermaPet Care agora e receba todos os materiais com orientação profissional para cuidar do seu pet com segurança. Se comprados separadamente, você pagaria muito mais:</p>

          <div className="products-stack">
            <div className="prod-row">
              <div>
                <div className="prod-name sans">DermaPet Care (e-book principal)</div>
                <div className="prod-desc sans">Guia completo de dermatologia veterinária</div>
              </div>
              <div className="prod-price sans">R$ 44,00</div>
            </div>
            <div className="prod-row">
              <div>
                <div className="prod-name sans">Diário PetCare (planner dermatológico)</div>
                <div className="prod-desc sans">Acompanhamento diário da saúde da pele</div>
              </div>
              <div className="prod-price sans">R$ 87,00</div>
            </div>
            <div className="prod-row">
              <div>
                <div className="prod-name sans">Check-in Sem Coceira (e-book bônus)</div>
                <div className="prod-desc sans">Para pets de creche, hotel e day care</div>
              </div>
              <div className="prod-price sans">R$ 37,00</div>
            </div>
          </div>

          <div className="price-total-row">
            <div className="price-old sans">De R$ 168,00</div>
            <div className="price-now-label sans">Hoje por apenas</div>
            <div className="price-now">R$ <strong>42,90</strong></div>
          </div>

          <a href={CHECKOUT} target="_blank" rel="noreferrer" className="btn">Quero o Combo Dermatológico por R$ 42,90</a>
          <div className="guarantee sans">
            <span className="guarantee-icon">ⓘ</span>
            Garantia de 7 dias — se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.
          </div>
        </div>
      </section>

      <section className="doctor">
        <div className="container">
          <div className="doc-inner">
            <img src={draDanielle2} alt="Dra. Danielle Gatti" className="doc-photo-img" />
            <div className="doc-body">
              <div className="sec-label">Sobre a autora</div>
              <h2 className="doc-name">Dra. Danielle Gatti</h2>
              <div className="doc-cred sans">Médica Veterinária · Dermatologia · Estética Pet</div>
              <p>Médica Veterinária com atuação em dermatologia, estética e cuidados com a pele e os pelos de cães e gatos. Seu trabalho vai além do tratamento de doenças: ela busca identificar a causa dos problemas dermatológicos e orientar, de forma clara e prática, como manter a saúde da pele, a beleza da pelagem e o bem-estar dos animais no dia a dia.</p>
              <p style={{ marginTop: 12 }}>Criadora do DermaPet Care, do Check-in Sem Coceira e do Diário PetCare — materiais desenvolvidos para que responsáveis possam cuidar com mais segurança, prevenção e consciência.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testi">
        <div className="container">
          <div className="sec-label text-center">Resultados reais</div>
          <h2 className="sec-title text-center">O que os responsáveis <em>estão dizendo</em></h2>
          <div className="tgrid">
            {testimonials.map(([name, pet, quote, photo], i) => (
              <div key={i} className="tcard">
                <div className="paws" aria-label="5 estrelas" style={{color:"var(--gold)",fontSize:18,letterSpacing:3}}>★★★★★</div>
                <div className="thead">
                  <img src={photo} alt={name} className="avatar-img" />
                  <div>
                    <div className="tname sans">{name}</div>
                    <div className="tpet sans">{pet}</div>
                  </div>
                </div>
                <blockquote>{quote}</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="consult">
        <div className="container">
          <div className="sec-label text-center">Acompanhamento veterinário</div>
          <div className="consult-title">Quer um olhar profissional direto para o seu pet? <em>Agende uma consulta.</em></div>
          <img src={draDanielle3} alt="Dra. Danielle Gatti" className="consult-doc" />
          <p className="sans" style={{ fontSize: 15, color: "var(--gray)", maxWidth: 580, margin: "24px auto 0", lineHeight: 1.75 }}>
            Os e-books são o primeiro passo. Para casos que precisam de avaliação individualizada, a Dra. Danielle Gatti oferece dois tipos de consulta — escolha a que melhor atende ao seu pet.
          </p>
          <div className="consult-grid">
            <div className="ccard" role="button" tabIndex={0} onClick={() => openMenuWith("clinica")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openMenuWith("clinica"); } }}>
              <h3>Consulta Clínica Dermatológica</h3>
              <p><strong style={{ color: "var(--rose-d)" }}>Atendimento presencial.</strong> Avaliação completa das condições dermatológicas do seu animal, com exame clínico, diagnóstico e orientações de tratamento personalizadas.</p>
            </div>
            <div className="ccard" role="button" tabIndex={0} onClick={() => openMenuWith("estetica")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openMenuWith("estetica"); } }}>
              <h3>Consulta Estética para Cães e Gatos</h3>
              <p><strong style={{ color: "var(--rose-d)" }}>100% on-line, para todo o Brasil.</strong> Orientações especializadas em cuidados estéticos, pelagem, rotina de banho e escovação com foco em saúde e beleza.</p>
            </div>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn">Agendar Consulta</a>
        </div>
      </section>

      <section className="products-link">
        <div className="container">
          <div className="sec-label text-center">Outros materiais</div>
          <h2 className="sec-title">Conheça todos os <em>produtos da Dra. Danielle Gatti</em></h2>
          <div className="rose-line"></div>
          <p className="sans" style={{ fontSize: 15, color: "var(--gray)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.75 }}>
            Acesse a loja completa e descubra todos os e-books, planners e materiais educacionais disponíveis para responsáveis de cães e gatos.
          </p>
          <a href={STORE} target="_blank" rel="noreferrer" className="btn">Ver Todos os Produtos</a>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="sec-label">Perguntas frequentes</div>
          <h2 className="sec-title">Tire suas <em>dúvidas</em></h2>
          <div className="faq-group">
            {faqGroups.map((g) => (
              <div key={g.cat}>
                <div className="faq-cat sans">{g.cat}</div>
                {g.items.map((it, i) => (
                  <FaqItem key={i} q={it.q} a={it.a} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="wa-float" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.8 5.5 2.2 7.9L.5 31.5l7.8-2.1c2.3 1.3 4.9 2 7.7 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.2c-2.5 0-4.9-.7-7-2l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.4-2.2-2.2-4.7-2.2-7.4C2.6 8.6 8.6 2.6 16 2.6S29.4 8.6 29.4 16 23.4 28.7 16 28.7zm7.4-9.6c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.2 1.5c-.2.2-.4.2-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.7-.7-.9-.7h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.7c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.2 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z"/></svg>
        Fale Conosco
      </a>

      <footer>
        <p>
          Contato: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a> · <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
          <br />
          © 2025 <span>Dra. Danielle Gatti</span> · DermaPet Care · Todos os direitos reservados · Produto digital com garantia de 7 dias
        </p>
      </footer>
    </div>
  );
}
