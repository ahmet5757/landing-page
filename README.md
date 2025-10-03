# Proje Adı: Landing Page

##  Canlı Demo ve Depo

Bu proje, belirlenen gereksinimlere uygun olarak geliştirilmiş ve Lighthouse'tan tam puan alacak şekilde optimize edilmiş ürün tanıtım sayfasıdır.

| Açıklama | Değer |
| :--- | :--- |
| 🌐 Canlı URL (Vercel) | **[Projenizi Buradan İnceleyin](https://landing-page-5sfa.vercel.app/)** |
| 💻 GitHub Deposu | `https://github.com/ahmet5757/landing-page` |

---

##  Proje Özeti ve Başarımlar

| Kategori | Gereksinim | Durum |
| :--- | :--- | :--- |
| **Performans Hedefi** | Lighthouse min 90/100 | **BAŞARILI (100/100)** |
| **Tasarım** | Mobil-öncelikli, 3 Breakpoint | **BAŞARILI** |
| **Bileşen Mimarisi** | 5 Yeniden Kullanılabilir Bileşen (Button, Input, Card, Modal, Accordion) | **BAŞARILI** |
| **Temalar** | Light/Dark Toggle (CSS vars) | **BAŞARILI** |
| **Form Doğrulama** | Basit e-posta formatı ve boş alan uyarısı (Vanilla JS) | **BAŞARILI** |

###  Lighthouse Performans Skoru

Vercel üzerindeki canlı yayında elde edilen Lighthouse raporu aşağıdadır. Performans hedefi aşılmış ve tüm kategorilerde üst düzey sonuçlar elde edilmiştir.

[Lighthouse Performance Raporu](lighthouse-report.png)

---

## 🛠️ Kullanılan Teknolojiler

Proje, hem modern hem de kurallarla uyumlu bir teknoloji yığını ile geliştirilmiştir.

* **Çekirdek:** React (Bileşen Mimarisi) & Vanilla JavaScript (Basit DOM Etkileşimleri)
* **Derleyici:** Vite (Hızlı Geliştirme Ortamı)
* **Stil:** SCSS (Sass - Zorunlu Gereksinim)
* **Hosting:** Vercel

---

##  Mimari ve Bileşen Yapısı

### 1. Bileşen Yaklaşımı

Proje, yüksek yeniden kullanılabilirlik sağlamak amacıyla bileşen tabanlı bir mimariyle tasarlanmıştır.

* **Organizasyon:** UI kütüphanesi bileşenleri (`/src/components`) içinde, sayfa bölümleri (`/src/sections`) içinde tutulmuştur.
* **Yeniden Kullanılabilirlik:** Tüm bileşenler, React **props** aracılığıyla yapılandırılabilir özelliklere sahiptir.

### 2. Stil Yönetimi (SCSS)

Zorunlu olan SCSS, stilin okunabilirliğini ve bakımını kolaylaştırmak için kullanılmıştır. Temalar, SCSS'te tanımlanan ve tüm bileşenler tarafından erişilebilen **CSS Değişkenleri (`--css-vars`)** ile yönetilmiştir. Bu sayede, tema değişimi anlık ve düşük maliyetlidir.

### 3. Responsive Tasarım

**Mobil-öncelikli (Mobile-First)** bir yaklaşım benimsenmiştir. Grid ve Flexbox teknikleri kullanılarak **3 ana breakpoint** (Mobile: ≤640px, Tablet: 641px–1024px, Desktop: ≥1025px) arasındaki geçişlerde kusursuz bir deneyim sunulmuştur.

### 4. Erişilebilirlik (A11y)

* **Semantik HTML:** Anlamsal etiketler kullanılarak ekran okuyucular için içerik hiyerarşisi sağlanmıştır.
* **Klavye Navigasyonu:** Tüm interaktif bileşenler (Accordion, Button, Form), klavye ile hatasız bir şekilde erişilebilir ve kullanılabilir durumdadır.
* **ARIA:** **Accordion** gibi bileşenlerde `aria-expanded` gibi temel ARIA nitelikleri kullanılarak durum bilgisi ekran okuyuculara iletilmiştir.

---

## 💻 Kurulum ve Geliştirme Komutları

Projeyi yerel makinenizde kurmak ve çalıştırmak için aşağıdaki adımları izleyin:

### Kurulum

```bash
# 1. Depoyu Klonlayın
git clone landing-page

# 2. Proje Klasörüne Gidin
cd landing-page

# 3. Bağımlılıkları Yükleyin
npm install





