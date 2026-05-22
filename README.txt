Sonic Spinball 64-bit iOS PWA
==============================

Bu dosya ROM'ları gerçek anlamda 64-bit'e çevirmez.
Mega Drive / Genesis ROM'u 16-bit konsol ROM'udur. iOS'ta çalışması için 64-bit çalışan bir emülatör kabuğu gerekir.

Bu pakette:
- assets/rom.bin
- assets/rom_J.bin
- index.html
- manifest.webmanifest
- sw.js
- icons/

Nasıl kullanılır:
1) ZIP'i çıkar.
2) Klasörü HTTPS destekli bir yere yükle: GitHub Pages, Netlify, Vercel gibi.
3) iPhone/iPad Safari ile index.html adresini aç.
4) Paylaş > Ana Ekrana Ekle yap.
5) ROM US/EU veya ROM J butonundan sürüm seç.

Not:
EmulatorJS çekirdeği CDN üzerinden yüklenir, bu yüzden ilk açılışta internet gerekir.
Kendi iOS IPA yapmak istersen bu www klasörünü Capacitor içine koyup Mac/Xcode ile arm64 IPA olarak imzalayabilirsin.


Eklenen ikon:
- favicon.ico
- icons/custom-icon-192.png
- icons/custom-icon-512.png
Manifest ve HTML bu ikonları kullanacak şekilde güncellendi.
