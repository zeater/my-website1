const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");

// عند الضغط على الزر YES لتغيير الصفحات
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");  // إخفاء الصفحة الأولى
  page2.classList.remove("hidden"); // إظهار الصفحة الثانية
});

// جعل زر NO يتحرك بشكل عشوائي داخل حدود النافذة
noBtn.addEventListener("mouseover", () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const noBtnRect = noBtn.getBoundingClientRect();

  // حساب الحد الأقصى للحركة بناءً على حجم النافذة
  const maxX = viewportWidth - noBtnRect.width;
  const maxY = viewportHeight - noBtnRect.height;

  // إنشاء مواقع عشوائية داخل النافذة
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // تعيين المواقع الجديدة للزر
  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
