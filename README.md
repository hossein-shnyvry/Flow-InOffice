<div dir="rtl" align="center">

![InOffice Flow](assets/logo.png)

# InOffice Flow

**افزونه اختصاصی InOffice برای دسترسی به Google Flow بدون تغییر ریجن**

[![Chrome](https://img.shields.io/badge/Chrome-Extension-blue?logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore)
[![Version](https://img.shields.io/badge/Version-1.1.0-green)](manifest.json)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-orange)](manifest.json)

</div>

---

## نمای کلی افزونه

<p align="center">
  <img src="assets/icon-128.png" alt="InOffice Flow Icon" width="100">
</p>

<div align="center">

| | |
|:---:|:---:|
| ![لوگوی InOffice](assets/logo.png) | **InOffice Flow** ابزاری ساده و سریع برای اتصال به Google Flow |

</div>

---

## ویژگی‌ها

<div dir="rtl">

| ویژگی | توضیح |
|:---|:---|
| ✅ اتصال یک‌کلیکی | با فشردن یک دکمه به Google Flow متصل شوید |
| ✅ رابط کاربری فارسی | محیط کاملاً فارسی با برند InOffice |
| ✅ بدون تغییر ریجن | نیازی به تغییر تنظیمات ریجن نیست |
| ✅ بازخورد لحظه‌ای | وضعیت اتصال به‌صورت زنده نمایش داده می‌شود |
| ✅ امنیت بالا | مجوزها فقط برای دامنه‌های مجاز Google Flow |

</div>

---

## نصب و راه‌اندازی

### مرحله ۱: دریافت فایل‌ها

```bash
git clone https://github.com/your-username/Flow-InOffice.git
```

### مرحله ۲: بارگذاری در Chrome

1. مرورگر Chrome را باز کنید
2. آدرس `chrome://extensions` را در نوار آدرس وارد کنید
3. گزینه **Developer mode** را در بالای صفحه فعال کنید
4. روی دکمه **Load unpacked** کلیک کنید
5. پوشه پروژه `Flow-InOffice` را انتخاب کنید

### مرحله ۳: استفاده

1. آیکون افزونه در نوار ابزار Chrome نمایش داده می‌شود
2. روی آیکون کلیک کنید
3. دکمه **اتصال** را بزنید
4. اگر تب Flow باز است، آن را بازنشانی کنید
5. آماده استفاده از Google Flow هستید!

---

## نمای پنل افزونه

<div align="center">

![آیکون InOffice](assets/icon-48.png)

**پنل اتصال سریع**

| وضعیت | توضیح |
|:---:|:---|
| ![اتصال](assets/mark-b.png) | آماده اتصال |
| ![متصل](assets/mark-w.png) | اتصال فعال |

</div>

---

## ساختار پروژه

```
Flow-InOffice/
├── app.js           ⚙️  سرویس‌ورکر پس‌زمینه (واکشی spec، ثبت اسکریپت)
├── engine.js        🔧 موتور اصلی (obfuscated)
├── content.js       📄 اسکریپت محتوا برای تزریق بنر
├── link.js          🔗 مدیریت لینک‌ها (obfuscated)
├── panel.js         🎯 منطق پنل popup
├── stat.js          📊 گزارش وضعیت تشخیصی
├── panel.html       🖼️  HTML پنل popup
├── panel.css        🎨 استایل‌های پنل popup
├── banner.css       📌 استایل‌های بنر درون‌صفحه‌ای
├── info.html        📖 صفحه راهنما
├── manifest.json    📋 مانیفست افزونه Chrome (v3)
├── assets/          🖼️  آیکون‌ها و رسانه‌ها
│   ├── logo.png
│   ├── icon-16.png
│   ├── icon-32.png
│   ├── icon-48.png
│   ├── icon-128.png
│   ├── mark-b.png
│   ├── mark-w.png
│   └── lockup-w.png
└── README.md        📝 مستندات فارسی
```

---

## مجوزها و دسترسی‌ها

<div dir="rtl">

| مجوز | نوع | توضیح |
|:---|:---:|:---|
| `scripting` | اختیاری | ثبت و حذف اسکریپت‌های محتوا |
| `flow.google.com/*` | شبکه | دسترسی به سرویس Google Flow |
| `flow.cfcnode.com/*` | شبکه | دسترسی به سرور اتصال |

</div>

> ⚠️ **نکته امنیتی:** این افزونه فقط به دامنه‌های Google Flow دسترسی دارد و هیچ اطلاعاتی را به سرورهای دیگر ارسال نمی‌کند.

---

## فناوری‌های استفاده شده

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chrome Extension](https://img.shields.io/badge/Chrome%20Extension-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)

</div>

---

## تغییرات نسخه ۱.۱.۰

<div dir="rtl">

- 🎨 بازطراحی کامل popup با استایل و رنگ‌های InOffice
- 🏷️ نام و توضیح نمایشی افزونه در `manifest.json` به InOffice تغییر کرده
- 🔗 سه لینک سایت، اینستاگرام و تلگرام در popup قرار گرفته‌اند
- 📝 متن معرفی فارسی اضافه شده
- 🛡️ فایل‌های عملکردی اصلی بدون تغییر حفظ شده‌اند

</div>

---

## نکات امنیتی

<div dir="rtl">

- این بسته هیچ hardening عملکردی انجام نمی‌دهد تا رفتار نسخه اصلی تغییر نکند
- کد هسته اصلی (`engine.js` و `link.js`) obfuscated است
- `app.js` همچنان منطق و مقصدهای شبکه نسخه اصلی را دارد
- **قبل از نصب**، مجوزها و فایل‌های بسته را بررسی کنید

</div>

---

## مشارکت‌کنندگان

<div dir="rtl">

**Hossein Shnyvry** — توسعه‌دهنده اصلی

</div>

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hossein-shnyvry/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/hossein_shnyvry/)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/hossein_shnyvry)

</div>

---

<div align="rtl">

## مجوز

این پروژه تحت مجوز [MIT](LICENSE) منتشر شده است.

</div>

---

<div align="center">

**ساخته شده با ❤️ توسط InOffice**

![InOffice](assets/lockup-w.png)

</div>
