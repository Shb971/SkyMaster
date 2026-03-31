// بيانات المقاعد والأسعار
const seatPrices = {
    royal: 5000,
    luxury: 2000,
    tourism: 800,
    economy: 400
};

// توليد المقاعد عند تشغيل الموقع
const seatMap = document.getElementById('seatMap');
for (let i = 1; i <= 32; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    
    // تصنيف المقاعد
    let type = 'economy';
    if (i <= 4) { seat.classList.add('royal'); type = 'royal'; }
    else if (i <= 12) { seat.classList.add('luxury'); type = 'luxury'; }
    
    seat.dataset.price = seatPrices[type];
    seat.dataset.number = i;

    seat.onclick = function() {
        // إلغاء تحديد المقاعد الأخرى (اختيار مقعد واحد فقط)
        document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        
        // تحديث البيانات
        document.getElementById('selectedSeatNum').innerText = this.dataset.number;
        document.getElementById('totalPrice').innerText = this.dataset.price;
    };
    
    seatMap.appendChild(seat);
}

// وظيفة الترشيح بناء على الدخل
function recommendClass() {
    const income = document.getElementById('income-select').value;
    const resultDiv = document.getElementById('recommendationResult');
    const name = document.getElementById('userName').value || "عزيزي المسافر";

    let message = "";
    if (income === 'royal') message = `سيد ${name}، نوصيك بالدرجة الملكية (جناح + شاور خاص).`;
    else if (income === 'luxury') message = `سيد ${name}، الدرجة الفاخرة تناسبك تماماً (مقعد نوم كامل).`;
    else message = `سيد ${name}، لدينا مقاعد مريحة جداً في الدرجة السياحية تناسب ميزانيتك.`;

    resultDiv.innerHTML = `<p style="color:var(--gold); margin-top:15px;">${message}</p>`;
}

// محاكاة الدفع
function openPayment() {
    const price = document.getElementById('totalPrice').innerText;
    if (price === "0") {
        alert("من فضلك اختر مقعدك أولاً");
    } else {
        const confirmPay = confirm(`إجمالي المبلغ: ${price} درهم. هل تريد إتمام الدفع عبر SkyMaster Pay؟`);
        if (confirmPay) {
            alert("تم الدفع بنجاح! تذكرتك جاهزة، نتمنى لك رحلة سعيدة.");
        }
    }
}

// التعامل مع الشكاوى
document.getElementById('complaintForm').onsubmit = function(e) {
    e.preventDefault();
    this.style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
};
