// 1. تعريف الأسعار الحقيقية (المحدثة حسب طلبك)
const prices = {
    economy: 1200,
    tourism: 1500,
    luxury: 12950,
    royal: 40842
};

// 2. توليد الخريطة التفاعلية للمقاعد (32 مقعد)
const seatMap = document.getElementById('seatMap');
for (let i = 1; i <= 32; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    
    // تحديد نوع المقعد وسعره بناءً على الرقم
    let type = 'economy';
    if (i <= 4) { seat.classList.add('royal'); type = 'royal'; }
    else if (i <= 12) { seat.classList.add('luxury'); type = 'luxury'; }
    else if (i <= 20) { seat.classList.add('tourism'); type = 'tourism'; }

    seat.dataset.price = prices[type];
    seat.dataset.type = type;
    seat.dataset.number = i;

    // وظيفة الضغط على المقعد (تعدد الاختيارات)
    seat.onclick = function() {
        this.classList.toggle('selected'); // السماح باختيار أكثر من مقعد
        updateTotalCalculations();
    };
    
    seatMap.appendChild(seat);
}

// 3. حساب السعر الإجمالي بناءً على المقاعد المختارة
function updateTotalCalculations() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    let total = 0;
    let seatNumbers = [];

    selectedSeats.forEach(s => {
        total += parseInt(s.dataset.price);
        seatNumbers.push(s.dataset.number);
    });

    // تحديث العرض في الواجهة
    document.getElementById('selectedSeatNum').innerText = seatNumbers.join(', ') || "-";
    document.getElementById('totalPrice').innerText = total.toLocaleString();
    
    // إذا كان هناك سعر في خانة "اجمالي السعر المبدئي" نقوم بتحديثه أيضاً
    if(document.getElementById('displayTotal')) {
        document.getElementById('displayTotal').innerText = total.toLocaleString();
    }
}

// 4. وظيفة الترشيح الذكي (تطوير كودك السابق)
function recommendClass() {
    const income = document.getElementById('income-select').value;
    const resultDiv = document.getElementById('recommendationResult');
    const name = document.getElementById('userName').value || "عزيزي المسافر";

    if (!income) {
        alert("يرجى اختيار فئة الدخل أولاً");
        return;
    }

    let message = "";
    if (income === 'royal') message = `سيد ${name}، بميزانيتك الراقية، نوصيك بالجناح الملكي الخاص (40,842 درهم).`;
    else if (income === 'luxury') message = `سيد ${name}، الدرجة الفاخرة خيار مثالي لراحتك (12,950 درهم).`;
    else message = `سيد ${name}، لدينا عروض ممتازة في الدرجة السياحية والاقتصادية تناسبك.`;

    resultDiv.innerHTML = `<div class="res-box" style="color:var(--gold); border:1px solid var(--gold); padding:15px; border-radius:10px; margin-top:15px;">${message}</div>`;
}

// 5. نظام الدفع البنكي المطور (Bank Integration Simulation)
function processPayment() {
    const total = document.getElementById('totalPrice').innerText;
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone')?.value; // لو أضفت حقل الهاتف

    if (total === "0" || name === "") {
        alert("يرجى إكمال البيانات واختيار المقاعد أولاً");
        return;
    }

    // طلب بيانات البنك (محاكاة)
    const cardNum = prompt(`إجمالي المبلغ: ${total} درهم\n\nأدخل رقم البطاقة البنكية (16 رقم):`);
    
    if (cardNum && cardNum.length >= 16) {
        const expiry = prompt("تاريخ الانتهاء (MM/YY):");
        const cvv = prompt("رمز التحقق (CVV):");
        
        if (expiry && cvv) {
            alert("جاري الاتصال بخادم البنك المركزي... يرجى عدم إغلاق الصفحة");
            
            setTimeout(() => {
                alert("✅ تمت عملية الدفع بنجاح!");
                alert(`سيد ${name}، شكراً لثقتك بـ SkyMaster.\nتم حجز مقاعدك بنجاح وسيتواصل معك الفريق قريباً عبر هاتفك.`);
                
                // إظهار التذكرة النهائية
                showFinalTicket(name);
            }, 2500);
        }
    } else {
        alert("فشلت العملية، يرجى التأكد من بيانات البطاقة.");
    }
}

function showFinalTicket(name) {
    const ticketArea = document.getElementById('ticket-area');
    if (ticketArea) {
        ticketArea.style.display = 'flex';
        document.getElementById('ticket-name').innerText = name;
        document.getElementById('ticket-seat').innerText = document.getElementById('selectedSeatNum').innerText;
        // التمرير للتذكرة
        ticketArea.scrollIntoView({ behavior: 'smooth' });
    }
}

// 6. التعامل مع الشكاوى
if(document.getElementById('complaintForm')) {
    document.getElementById('complaintForm').onsubmit = function(e) {
        e.preventDefault();
        this.style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';
    };
}
