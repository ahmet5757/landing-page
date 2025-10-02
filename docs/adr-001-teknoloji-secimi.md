# 001. Frontend Teknolojisi Seçimi (React & SCSS)


## Karar Tarihi
29 09 2025

## Amaç
Projenin temel amacı olan yeniden kullanılabilir UI bileşenleri, basit etkileşimler ve yüksek performansın sağlanması için uygun bir frontend kütüphanesi ve stil ön işlemcisi seçimi.

## Varsayımlar
1.  Landing Page'in gelecekte daha karmaşık etkileşimler içerme potansiyeli vardır.
2.  Kodun ölçeklenebilir ve modüler bir yapıda olması gerekmektedir.
3.  Proje kuralı gereği SCSS kullanımı zorunludur.

## Değerlendirilen Seçenekler
1.  **Vanilla JS / TS:** En yüksek performansı sağlar ancak bileşen yönetimini zorlaştırır.
2.  **React (Seçilen):** Modern, bileşen tabanlı, güçlü bir ekosisteme sahiptir.
3.  **Angular:** Öğrenme eğrisi daha yüksektir ve bu boyuttaki bir proje için ağır kalabilir.

## Karar
Frontend kütüphanesi olarak **React** ve stil ön işlemcisi olarak **SCSS** kullanılmasına karar verilmiştir.

### React Seçimi Gerekçesi
* **Yeniden Kullanılabilirlik (Kabul Kriteri):** React'in bileşen tabanlı yapısı, UI bileşenlerinin **props** aracılığıyla kolayca yapılandırılabilir olmasını sağlar.
* **Etkileşim Yönetimi:** Durum yönetimi (Form verisi, Modal durumu vb.) için temiz ve yönetilebilir bir yapı sunar.

### SCSS Seçimi Gerekçesi
* **Zorunluluk:** Proje kuralı gereği SCSS zorunludur.
* **Modülerlik ve Temalar:** Değişkenler ve iç içe kurallar sayesinde stilin ölçeklenebilirliğini artırır.

## Sonuç
React ve SCSS kombinasyonu, projenin temel hedeflerini verimli bir şekilde karşılayan yüksek performanslı ve modern bir yapı sunmaktadır.