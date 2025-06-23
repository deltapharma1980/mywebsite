// script.js
function openProductModal(productId) {
  document.getElementById(productId).style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.style.display = "none";
  });
  document.body.style.overflow = "auto";
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}


document.querySelector('.contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const alertDiv = document.getElementById('form-alert');
  
  // تعطيل الزر أثناء الإرسال
  submitBtn.disabled = true;
  submitBtn.textContent = 'جاري الإرسال...';
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      showAlert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
      form.reset();
    } else {
      const errorData = await response.json();
      showAlert('حدث خطأ أثناء الإرسال: ' + (errorData.error || 'يرجى المحاولة لاحقاً'), 'error');
    }
  } catch (error) {
    showAlert('فشل الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت والمحاولة مرة أخرى.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'إرسال الرسالة';
  }
});

function showAlert(message, type) {
  const alertDiv = document.getElementById('form-alert');
  alertDiv.textContent = message;
  alertDiv.style.display = 'block';
  alertDiv.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
  alertDiv.style.color = type === 'success' ? '#155724' : '#721c24';
  alertDiv.style.border = `1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'}`;
  
  // إخفاء التنبيه بعد 5 ثواني
  setTimeout(() => {
    alertDiv.style.display = 'none';
  }, 5000);
}

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
  const npProducts = [
    {
      name: "توبرابيوتيك",
      desc: "قطرة مضادة للبكتيريا لعلاج التهابات العين البكتيرية.",
      comp: "توبرامایسین ٣٠٠ ملغ / ١٠٠ مل",
      warn: "قد يسبب احمراراً مؤقتاً. لا يستخدم مع الحساسية من مكوناته."
    },
    {
      name: "أوبتيكلير",
      desc: "قطرة مرطبة للعين الجافة والحساسة.",
      comp: "هيالورونيك أسيد، بدون مواد حافظة",
      warn: "استخدم خلال 30 يومًا من الفتح."
    }
  ];

  function npShowModal(index) {
    const p = npProducts[index];
    document.getElementById("np-title").innerText = p.name;
    document.getElementById("np-desc").innerText = p.desc;
    document.getElementById("np-comp").innerText = p.comp;
    document.getElementById("np-warn").innerText = p.warn;
    document.getElementById("np-modal").style.display = "block";
  }

  function npCloseModal() {
    document.getElementById("np-modal").style.display = "none";
  }

  window.onclick = function (event) {
    const modal = document.getElementById("np-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const swiper = new Swiper(".np-swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".np-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".np-next",
      prevEl: ".np-prev"
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
</script>








