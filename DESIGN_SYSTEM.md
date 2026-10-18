# 🟡 ARK FITNESS CENTER — TASARIM SİSTEMİ & MARKA KILAVUZU

Bu doküman, **ARK Fitness Center** kurumsal kimliğine ait renk paletini, tipografi hiyerarşisini, buton standartlarını ve tasarım kurallarını içerir.

---

## 🎨 Renk Paleti (Color Palette)

| Renk Adı | Hex Kodu | RGB | Kullanım Amacı |
|---|---|---|---|
| **Fitness Sarısı (Primary)** | `#FFD400` | `rgb(255, 212, 0)` | Ana marka rengi, birincil butonlar, ikon vurguları, önemli başlıklar |
| **Sarı Hover (Primary Hover)** | `#FFE033` | `rgb(255, 224, 51)` | Sarı butonların hover durumları |
| **Sarı Koyu (Primary Dark)** | `#D4AF00` | `rgb(212, 175, 0)` | Gradient sonları, aktif durumlar |
| **Derin Siyah (Deep Black)** | `#0A0A0A` | `rgb(10, 10, 10)` | Sayfa arka planı, footer, en koyu kontrast alanları |
| **Koyu Antrasit (Dark Surface)**| `#121212` | `rgb(18, 18, 18)` | Kart arka planları, dropdownlar |
| **Kart Hover (Card Hover)** | `#191919` | `rgb(25, 25, 25)` | Hover anındaki kart yüzeyleri |
| **Açık Yüzey (Surface Light)** | `#1E1E1E` | `rgb(30, 30, 30)` | Input alanları, sekmeler |
| **Ana Metin Beyazı** | `#FFFFFF` | `rgb(255, 255, 255)` | H1-H4 başlıklar, ana okuma metinleri |
| **İkincil Metin (Muted Gray)** | `#A1A1AA` | `rgb(161, 161, 170)` | Alt açıklamalar, paragraf metinleri |
| **Soluk Metin (Dim Gray)** | `#71717A` | `rgb(113, 113, 122)` | Yardımcı ipuçları, telif yazıları |
| **Kadın Seansı Vurgusu** | `#EC4899` | `rgb(236, 72, 153)` | Bayan seansları rozet ve vurguları |
| **Erkek Seansı Vurgusu** | `#3B82F6` | `rgb(59, 130, 246)` | Erkek seansları rozet ve vurguları |
| **WhatsApp Yeşili** | `#25D366` | `rgb(37, 211, 102)` | WhatsApp butonları ve iletişim rozetleri |

---

## 🔤 Tipografi (Typography)

### 1. Başlık Fontu: **Oswald & Montserrat**
- **Family:** `'Oswald', 'Montserrat', sans-serif`
- **Karakter:** Güçlü, atletik, büyük harfli (uppercase), dikkat çekici.
- **Kullanım:** Hero başlıkları, bölüm başlıkları, kart başlıkları, sayaçlar ve seans saatleri.
- **Ağırlıklar:** 600 (SemiBold), 700 (Bold), 800 (ExtraBold).

### 2. Gövde Metin Fontu: **Inter**
- **Family:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Karakter:** Modern, nötr, mobilde ve masaüstünde yüksek okunabilirlik.
- **Kullanım:** Paragraflar, listeler, açıklamalar, form alanları ve menü linkleri.
- **Ağırlıklar:** 400 (Regular), 500 (Medium), 600 (SemiBold).

---

## 💎 CSS Değişkenleri (CSS Custom Properties)

```css
:root {
  --primary: #FFD400;
  --primary-hover: #FFE033;
  --primary-dark: #D4AF00;
  --primary-glow: rgba(255, 212, 0, 0.25);
  --primary-glow-strong: rgba(255, 212, 0, 0.5);

  --bg-deep: #0A0A0A;
  --bg-card: #121212;
  --bg-card-hover: #191919;
  --bg-surface: #1E1E1E;

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-primary: rgba(255, 212, 0, 0.3);

  --text-main: #FFFFFF;
  --text-muted: #A1A1AA;
}
```

---

## 🔘 Buton Standartları

1. **Altın Buton (`.btn-gold`):**
   - Arka Plan: `#FFD400`
   - Metin Rengi: `#0A0A0A` (Siyah)
   - Font: `Oswald 700`, uppercase
   - Efekt: `box-shadow: 0 6px 20px rgba(255, 212, 0, 0.4)`
2. **Karanlık Buton (`.btn-dark`):**
   - Arka Plan: `rgba(255, 255, 255, 0.06)`
   - Çerçeve: `1px solid rgba(255, 255, 255, 0.08)`
   - Hover: Sarı border ve sarı metin
3. **WhatsApp Butonu (`.btn-whatsapp` / `.floating-whatsapp`):**
   - Arka Plan: `#25D366`
   - Metin: Beyaz
   - İkon: FontAwesome WhatsApp
