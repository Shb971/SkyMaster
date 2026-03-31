<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SkyMaster Airlines | طيران الفخامة</title>
    <style>
        /* تنسيق عام للموقع */
        body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 0; padding: 0; background-color: #f8f9fa; color: #1a1a1a; }
        header { background: linear-gradient(135deg, #002D62, #0056b3); color: white; padding: 40px 20px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .hero { padding: 50px 20px; text-align: center; background-color: #ffffff; }
        .container { max-width: 1200px; margin: auto; padding: 20px; }
        h2 { color: #002D62; border-bottom: 2px solid #d4af37; display: inline-block; padding-bottom: 10px; }
        
        /* تصميم كروت الخدمات */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 30px; }
        .card { background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.1); transition: 0.3s; }
        .card:hover { transform: translateY(-10px); }
        .card img { width: 100%; height: 200px; object-fit: cover; }
        .card-info { padding: 20px; }
        .card-info h3 { margin: 0; color: #002D62; }
        .price { font-size: 1.4rem; color: #b8860b; font-weight: bold; margin: 10px 0; }
        .btn { display: inline-block; background: #002D62; color: white; padding: 12px 25px; text-decoration: none; border-radius: 50px; font-weight: bold; transition: 0.3s; }
        .btn:hover { background: #d4af37; color: #002D62; }
    </style>
</head>
<body>

<header>
    <h1>SkyMaster Airlines ✈️</h1>
    <p>تجربة سفر لا تُنسى في أعالي السحاب</p>
</header>

<section class="hero">
    <div class="container">
        <h2>اكتشف مقاعدنا الفاخرة</h2>
        <p>نحن نوفر لك الراحة المطلقة مع أرقى الخدمات الجوية في مدينة العين.</p>
        
        <div class="grid">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1540339832862-47452993c66e?q=80&w=1000&auto=format&fit=crop" alt="First Class Seat">
                <div class="card-info">
                    <h3>أجنحة الدرجة الأولى</h3>
                    <p>كراسي جلدية فاخرة قابلة للانحناء بالكامل لتتحول إلى سرير مريح مع نظام تدليك.</p>
                    <p class="price">12,500 درهم</p>
                    <a href="#" class="btn">احجز جناحك</a>
                </div>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop" alt="Fine Dining">
                <div class="card-info">
                    <h3>قائمة طعام ملكية</h3>
                    <p>وجبات من اختيارك يحضرها لك طهاة حائزون على جوائز عالمية، متوفرة طوال الرحلة.</p>
                    <p class="price">مشمولة في السعر</p>
                    <a href="#" class="btn">عرض المنيو</a>
                </div>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1506013017302-455d32c40542?q=80&w=1000&auto=format&fit=crop" alt="Entertainment">
                <div class="card-info">
                    <h3>خدمة SkyCare</h3>
                    <p>اتصال واي فاي فائق السرعة، سماعات عازلة للضوضاء، وشاشات 4K ترفيهية.</p>
                    <p class="price">خدمة مجانية</p>
                    <a href="#" class="btn">التفاصيل</a>
                </div>
            </div>
        </div>
    </div>
</section>

<footer style="background: #1a1a1a; color: white; text-align: center; padding: 30px; margin-top: 50px;">
    <p>&copy; 2026 SkyMaster Airlines | جميع الحقوق محفوظة لـ عبيد</p>
</footer>

</body>
</html>
