// توليد المقاعد تلقائياً عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('map');
    
    // لننشئ 20 مقعد كمثال
    for (let i = 1; i <= 24; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        
        // تقسيم المقاعد حسب النوع
        if (i <= 4) seat.classList.add('royal'); // أول صفين ملكي
        else if (i <= 8) seat.classList.add('luxury'); // الصفوف التالية فاخرة
        
        seat.onclick = () => {
            seat.classList.toggle('selected');
        };
        map.appendChild(seat);
    }
});

function checkClass() {
    const income = document.getElementById('income-select').value;
    if (income === 'royal') {
        alert('أهلاً بك في SkyMaster! ننصحك بالدرجة الملكية (جناح خاص + شاور)');
    } else if (income === 'luxury') {
        alert('أهلاً بك! الدرجة الفاخرة خيار مثالي لك (مقعد مساج ونوم)');
    } else {
        alert('أهلاً بك! لدينا أفضل العروض على الدرجة السياحية والاقتصادية مع وجبات مدار الساعة');
    }
}

function processPayment() {
    const selected = document.querySelectorAll('.seat.selected');
    if (selected.length === 0) {
        alert('الرجاء اختيار مقعد أولاً!');
    } else {
        alert('جاري الاتصال ببنك SkyMaster... تم الدفع بنجاح! رحلة سعيدة');
    }
}
