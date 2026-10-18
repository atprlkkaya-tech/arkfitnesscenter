# 🟡 ARK FITNESS CENTER — BEYŞEHİR RESMİ WEB SİTESİ

![ARK Fitness Center Banner](assets/images/logo.jpg)

> **"GÜCÜNÜ KEŞFET. SINIRLARINI AŞ."**  
> Beyşehir, Konya'da 2014 yılından beri faaliyet gösteren ARK Fitness Center için tasarlanmış modern, yüksek performanslı, mobil uyumlu ve kurumsal web sitesi.

---

## ⚡ Hızlı Başlangıç & Yerel Çalıştırma

Projeyi çalıştırmak için hiçbir kurulum, derleme (build) veya sunucu zorunluluğu yoktur.

```bash
# Proje klasörüne gidin ve index.html dosyasını doğrudan tarayıcınızda açın:
start index.html
```

Veya bir lokal geliştirme sunucusu çalıştırmak isterseniz:
```bash
# npx serve ile
npx serve .
```

---

## 🚀 GitHub & Vercel Dağıtım Kılavuzu (Deploy to Vercel)

Proje Vercel ve GitHub için özel yapılandırma dosyalarıyla (`vercel.json`, `package.json`, `.gitignore`, `tailwind.config.js`) hazır hale getirilmiştir.

### 1. GitHub'a Gönderme Adımları:
```bash
# 1. Git deposunu başlatın (zaten hazır)
git init

# 2. Dosyaları ekleyin ve commit oluşturun
git add .
git commit -m "feat: initial commit - ARK Fitness Center official website"

# 3. GitHub repository'nizi bağlayın
git remote add origin https://github.com/<KULLANICI_ADINIZ>/ark-fitness-center.git
git branch -M main
git push -u origin main
```

### 2. Vercel'e Dağıtım:
1. [vercel.com](https://vercel.com) adresine giriş yapın.
2. **"Add New Project"** butonuna tıklayın.
3. GitHub'daki `ark-fitness-center` deposunu seçin.
4. Framework Preset olarak **"Other"** seçin (sıfır yapılandırma).
5. **"Deploy"** butonuna basın. Siteniz 10 saniye içinde dünya çapında CDN üzerinde canlıya alınacaktır!

---

## 🎨 Renk Paleti (Brand Color Palette)

ARK Fitness Center'ın kurumsal kimliği güçlü spor sarısı ve derin siyah kontrastı üzerine kurulmuştur:

| İsim | Hex | RGB | Kullanım |
|---|---|---|---|
| **Fitness Sarısı** | `#FFD400` | `255, 212, 0` | Birincil butonlar, logolar, ikonlar, vurgular |
| **Sarı Hover** | `#FFE033` | `255, 224, 51` | Buton hover ve aktif etkileşimler |
| **Derin Siyah** | `#0A0A0A` | `10, 10, 10` | Zemin arka planı, footer |
| **Koyu Antrasit** | `#121212` | `18, 18, 18` | Kart arka planları, dropdownlar |
| **Açık Yüzey** | `#1E1E1E` | `30, 30, 30` | Tablolar, input alanları |
| **Beyaz** | `#FFFFFF` | `255, 255, 255` | H1-H4 başlıklar, ana metinler |
| **Gri (Muted)** | `#A1A1AA` | `161, 161, 170` | Açıklamalar ve alt metinler |
| **Bayan Vurgusu** | `#EC4899` | `236, 72, 153` | Kadın seansları rozet ve vurguları |
| **Erkek Vurgusu** | `#3B82F6` | `59, 130, 246` | Erkek seansları rozet ve vurguları |
| **WhatsApp Yeşili**| `#25D366` | `37, 211, 102` | WhatsApp iletişim butonu |

---

## 🔤 Tipografi (Typography & Fonts)

- **Başlık Fontu:** `'Oswald', 'Montserrat', sans-serif`  
  *Güçlü, büyük harfli, yüksek enerjili ve dinamik fitness tipografisi.*
- **Gövde & Metin Fontu:** `'Inter', sans-serif`  
  *Tüm ekran ve çözünürlüklerde kusursuz okunabilirlik sunan modern font.*
- **Google Fonts Entegrasyonu:** Hem `<link>` hem de `assets/css/style.css` içerisinde `@import` ile çift yönlü yedeklenmiştir.

---

## ⏰ Haftalık Seans Saatleri

### 🌸 Bayan Üyelerimiz İçin Seanslar
- **Pazartesi:** 10:00 - 13:00
- **Salı:** 10:00 - 13:00 / 18:00 - 21:00 (Gündüz & Akşam)
- **Çarşamba:** 10:00 - 13:00
- **Perşembe:** 10:00 - 13:00 / 18:00 - 21:00 (Gündüz & Akşam)
- **Cuma:** 10:00 - 13:00
- **Cumartesi:** 10:00 - 13:00 / 18:00 - 21:00 (Gündüz & Akşam)
- **Pazar:** KAPALI

### ⚡ Erkek Üyelerimiz İçin Seanslar
- **Pazartesi:** 13:30 - 24:00 (Kesintisiz)
- **Salı:** 13:30 - 17:30 / 21:30 - 24:00
- **Çarşamba:** 13:30 - 24:00 (Kesintisiz)
- **Perşembe:** 13:30 - 17:30 / 21:30 - 24:00
- **Cuma:** 13:30 - 24:00 (Kesintisiz)
- **Cumartesi:** 13:30 - 17:30 / 21:30 - 24:00
- **Pazar:** KAPALI

---

## 🛡️ Salon Kurallarımız

1. **AĞIRLIKLARI YERLERİNE BIRAKINIZ.**
2. **HAVLU KULLANINIZ.**
3. **TEMİZ AYAKKABI İLE SPOR YAPINIZ.**

---

## 👨‍🏫 Kurucu & Eğitmen Bilgisi

- **Kuruluş:** 2014 — Beyşehir / Konya
- **Kurucu:** **Ramazan KARAÇELİK**
- **Nitelik:** Selçuk Üniversitesi Beden Eğitimi Akademisi ve Yüksek Lisans mezunu. Fitness ve vücut geliştirme uzmanlığı **3. Kademe Kıdemli Antrenör** belgesine sahiptir.

---

## 📞 İletişim

- **Telefon & WhatsApp:** [+90 542 695 95 02](https://wa.me/905426959502)
- **Konum:** Beyşehir, Konya, Türkiye
- **Instagram:** [@arkfitnesscenter](https://instagram.com/arkfitnesscenter)
