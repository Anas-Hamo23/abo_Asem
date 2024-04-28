const image = document.getElementById('myImage');
const filterSelect = document.getElementById('filterSelect');
// console.log(image)
// console.log(filterSelect)
filterSelect.addEventListener('change', function() {
    const selectedFilter = this.value;
    image.style.filter = selectedFilter;
    // console.log(image)
});
// const fontSelect = document.getElementById('fontSelect');
// const body = document.querySelector('main');

// fontSelect.addEventListener('change', function() {
//     const selectedFont = this.value;
//     body.style.fontFamily = selectedFont;
// });

// const changeFontBtn = document.getElementById('change-font-btn');

// changeFontBtn.addEventListener('click', function() {
//   const body = document.body;
//   const currentFontClass = body.classList.value;

//   if (currentFontClass === 'default-font') {
//     body.classList.remove('default-font');
//     body.classList.add('abo-font');
//     changeFontBtn.textContent = 'استعادة الخط الافتراضي';
//   } else {
//     body.classList.remove('abo-font');
//     body.classList.add('default-font');
//     changeFontBtn.textContent = 'جرب الخط الخاص بي';
//   }
// });
const cvSelect = document.getElementById('cvSelect');
const cvContainer = document.getElementById('cvContainer');

cvSelect.addEventListener('change', function() {
  const selectedModel = this.value;
  cvContainer.className = 'cv-model-' + selectedModel;
  console.log(cvContainer);
});

// محتوى نماذج السيرة الذاتية
const cvModels = {
  '1': `<div class="cv-model-1">
  <h2>اسمك</h2>
  <p>عنوانك</p>
  <p>رقم هاتفك</p>
  <p>بريدك الإلكتروني</p>

  <hr>

  <h2>التعليم</h2>
  <p>2019 - 2023: بكالوريوس في [اسم التخصص]، [اسم الجامعة]</p>

  <hr>

  <h2>الخبرة العملية</h2>
  <p>2022 - الآن: [مسمى الوظيفة]، [اسم الشركة]</p>
  <ul>
    <li>[مسؤولية 1]</li>
    <li>[مسؤولية 2]</li>
    <li>[مسؤولية 3]</li>
  </ul>

  <p>2020 - 2022: [مسمى الوظيفة]، [اسم الشركة]</p>
  <ul>
    <li>[مسؤولية 1]</li>
    <li>[مسؤولية 2]</li>
  </ul>

  <hr>

  <h2>المهارات</h2>
  <ul>
    <li>[مهارة 1]</li>
    <li>[مهارة 2]</li>
    <li>[مهارة 3]</li>
  </ul>
</div>`
  ,
  '2': `<div class="cv-model-2">
  <h2>اسمك</h2>
  <p><b>مسمى الوظيفة</b></p>
  <p>[عنوان بريدك الإلكتروني] | [رقم هاتفك]</p>

  <hr>

  <h2>التعليم</h2>
  <h3>بكالوريوس [اسم التخصص]</h3>
  <h4>[اسم الجامعة] | 2019 - 2023</h4>

  <hr>

  <h2>الخبرة العملية</h2>
  <h3>[مسمى الوظيفة]</h3>
  <h4>[اسم الشركة] | 2022 - الآن</h4>
  <ul>
    <li>[مسؤولية 1]</li>
    <li>[مسؤولية 2]</li>
    <li>[مسؤولية 3]</li>
  </ul>

  <h3>[مسمى الوظيفة]</h3>
  <h4>[اسم الشركة] | 2020 - 2022</h4>
  <ul>
    <li>[مسؤولية`
  ,
  '3': `<div class="cv-model-3">
  <h2>اسمك</h2>
  <p><b>مطور برمجيات</b></p>
  <p>[عنوان بريدك الإلكتروني] | [رقم هاتفك] | [موقعك الإلكتروني]</p>

  <hr>

  <h2>مهاراتي</h2>
  <ul>
    <li>[مهارة 1] (مستوى خبرة)</li>
    <li>[مهارة 2] (مستوى خبرة)</li>
    <li>[مهارة 3] (مستوى خبرة)</li>
  </ul>

  <hr>

  <h2>مشاريعي</h2>
  <ul>
    <li><b>[اسم المشروع 1]</b> - [وصف موجز للمشروع]</li>
    <li><b>[اسم المشروع 2]</b> - [وصف موجز للمشروع]</li>
    <li><b>[اسم المشروع 3]</b> - [وصف موجز للمشروع]</li>
  </ul>

  <hr>

  <h2>التواصل الاجتماعي</h2>
  <ul>
    <li><a href="[رابط حساب LinkedIn]"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
    <li><a href="[رابط حساب GitHub]"><i class="fab fa-github"></i> GitHub</a></li>
    <li><a href="[رابط حساب Twitter]"><i class="fab fa-twitter"></i> Twitter</a></li>
  </ul>
</div>`
  ,
};

// عرض النموذج المختار عند بدء تشغيل الصفحة
const initialModel = cvSelect.value;
cvContainer.innerHTML = cvModels[initialModel];
console.log(cvModels[initialModel]);