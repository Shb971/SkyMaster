<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Pro Interface</title>
    
    <style>
        :root {
            --primary-color: #4f46e5;
            --bg-color: #f8fafc;
            --text-color: #1e293b;
            --card-bg: #ffffff;
            --transition: all 0.3s ease;
        }

        [data-theme="dark"] {
            --bg-color: #0f172a;
            --text-color: #f1f5f9;
            --card-bg: #1e293b;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: var(--transition);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Navigation */
        nav {
            width: 100%;
            padding: 1.5rem 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--card-bg);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }

        .controls {
            display: flex;
            gap: 1rem;
        }

        button {
            padding: 0.6rem 1.2rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: var(--transition);
            background: var(--primary-color);
            color: white;
        }

        button:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }

        /* Main Content */
        .container {
            max-width: 1000px;
            width: 90%;
            margin-top: 3rem;
            text-align: center;
        }

        .card {
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }

        h1 { margin-bottom: 1rem; font-size: 2.5rem; }
        p { line-height: 1.6; opacity: 0.8; }

        /* Multi-language alignment helper */
        html[dir="ltr"] body { text-align: left; }
        html[dir="rtl"] body { text-align: right; }
        .container { text-align: inherit; }

    </style>
</head>
<body data-theme="light">

    <nav>
        <div class="logo">
            <h2 id="logo-text">برو تيك</h2>
        </div>
        <div class="controls">
            <button onclick="toggleLanguage()" id="lang-btn">English</button>
            <button onclick="toggleTheme()" id="theme-btn">الوضع المظلم</button>
        </div>
    </nav>

    <div class="container">
        <div class="card">
            <h1 id="main-title">مرحباً بك في المستقبل</h1>
            <p id="description">
                هذا النموذج مصمم بأحدث التقنيات ليدعم اللغات المختلفة والتحويل السلس بين الألوان (الوضع الليلي والنهاري) باستخدام CSS Variables و JavaScript الذكي.
            </p>
        </div>

        <div class="card">
            <h3 id="feature-title">المميزات الاحترافية:</h3>
            <ul style="list-style: none; margin-top: 1rem;" id="feature-list">
                <li>✅ دعم كامل للغة العربية والإنجليزية (RTL/LTR).</li>
                <li>✅ تغيير الألوان فورياً دون إعادة تحميل الصفحة.</li>
                <li>✅ تصميم متجاوب مع الهواتف والكمبيوتر.</li>
            </ul>
        </div>
    </div>

    <script>
        const translations = {
            ar: {
                logo: "برو تيك",
                langBtn: "English",
                themeBtn: "الوضع المظلم",
                title: "مرحباً بك في المستقبل",
                desc: "هذا النموذج مصمم بأحدث التقنيات ليدعم اللغات المختلفة والتحويل السلس بين الألوان (الوضع الليلي والنهاري) باستخدام CSS Variables و JavaScript الذكي.",
                featTitle: "المميزات الاحترافية:",
                list: `<li>✅ دعم كامل للغة العربية والإنجليزية (RTL/LTR).</li>
                       <li>✅ تغيير الألوان فورياً دون إعادة تحميل الصفحة.</li>
                       <li>✅ تصميم متجاوب مع الهواتف والكمبيوتر.</li>`
            },
            en: {
                logo: "Pro Tech",
                langBtn: "العربية",
                themeBtn: "Dark Mode",
                title: "Welcome to the Future",
                desc: "This template is designed with the latest technologies to support multiple languages and seamless transitions between themes using CSS Variables and smart JavaScript.",
                featTitle: "Professional Features:",
                list: `<li>✅ Full RTL/LTR support.</li>
                       <li>✅ Instant theme switching.</li>
                       <li>✅ Responsive design for all screens.</li>`
            }
        };

        let currentLang = 'ar';

        function toggleLanguage() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            const doc = document.documentElement;
            
            // تغيير الاتجاه واللغة
            doc.lang = currentLang;
            doc.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

            // تحديث النصوص
            document.getElementById('logo-text').innerText = translations[currentLang].logo;
            document.getElementById('lang-btn').innerText = translations[currentLang].langBtn;
            document.getElementById('theme-btn').innerText = translations[currentLang].themeBtn;
            document.getElementById('main-title').innerText = translations[currentLang].title;
            document.getElementById('description').innerText = translations[currentLang].desc;
            document.getElementById('feature-title').innerText = translations[currentLang].featTitle;
            document.getElementById('feature-list').innerHTML = translations[currentLang].list;
        }

        function toggleTheme() {
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            
            const btn = document.getElementById('theme-btn');
            if(currentLang === 'ar') {
                btn.innerText = newTheme === 'light' ? "الوضع المظلم" : "الوضع المضيء";
            } else {
                btn.innerText = newTheme === 'light' ? "Dark Mode" : "Light Mode";
            }
        }
    </script>
</body>
</html>
