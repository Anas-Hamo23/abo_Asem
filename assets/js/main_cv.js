// const personalInfoForm = document.getElementById('personal-info-form');
// const educationItemsContainer = document.getElementById('education-items');
// const experienceItemsContainer = document.getElementById('experience-items');
// const skillsItemsContainer = document.getElementById('skills-items');

// const addEducationItemButton = document.getElementById('add-education-item');
// const addExperienceItemButton = document.getElementById('add-experience-item');
// const addSkillItemButton = document.getElementById('add-skill-item');

// personalInfoForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;

//     // Create personal info item
//     const personalInfoItem = document.createElement('div');
//     personalInfoItem.classList.add('personal-info-item');
//     personalInfoItem.innerHTML = `
//         <h3>${name}</h3>
//         <p>Email: ${email}</p>
//         <p>Phone: ${phone}</p>
//         <p>Address: ${address}</p>
//     `;

//     // Add personal info item to container
//     educationItemsContainer.appendChild(personalInfoItem);
// });

// addEducationItemButton.addEventListener('click', () => {
//     // Create education item
//     const educationItem = document.createElement('div');
//     educationItem.classList.add('education-item');
//     educationItem.innerHTML = `
//         <h3>التعليم</h3>
//         <label for="institution">مؤسسة او جامعة</label>
//         <input type="text" id="institution" name="institution" required>

//         <label for="degree">الدرجة</label>
//         <input type="text" id="degree" name="degree" required>

//         <label for="start-date">تاريخ البداية</label>
//         <input type="date" id="start-date" name="start-date" required>

//         <label for="end-date">تاريخ النهاية</label>
//         <input type="date" id="end-date" name="end-date" required>

//         <button type="button" class="remove-item-button">حذف العنصر</button>
//     `;

//     // Add education item to container
//     educationItemsContainer.appendChild(educationItem);

//     // Add event listener to remove education item
//     const removeItemButton = educationItem.querySelector('.remove-item-button');
//     removeItemButton.addEventListener('click', () => {
//         educationItemsContainer.removeChild(educationItem);
//     });
// });

// // Similar functions for adding and removing experience and skill items

// addExperienceItemButton.addEventListener('click', () => {
//         // Create experience item
//         const experienceItem = document.createElement('div');
//         experienceItem.classList.add('experience-item');
//         experienceItem.innerHTML = `
//             <h3>الخبرة</h3>
//             <label for="company">الشركة</label>
//             <input type="text" id="company" name="company" required>
    
//             <label for="position">Position:</label>
//             <input type="text" id="position" name="position" required>
    
//             <label for="start-date">تاريخ البداية</label>
//             <input type="date" id="start-date" name="start-date" required>
    
//             <label for="end-date">تاريخ النهاية</label>
//             <input type="date" id="end-date" name="end-date" required>
    
//             <label for="description">وصف</label>
//             <textarea id="description" name="description" required></textarea>
    
//             <button type="button" class="remove-item-button">حذف العنصر</button>
//         `;
    
//         // Add experience item to container
//         experienceItemsContainer.appendChild(experienceItem);
    
//         // Add event listener to remove experience item
//         const removeItemButton = experienceItem.querySelector('.remove-item-button');
//         removeItemButton.addEventListener('click', () => {
//             experienceItemsContainer.removeChild(experienceItem);
//         });
// });

// addSkillItemButton.addEventListener('click', () => {
//         // Create skill item
//         const skillItem = document.createElement('div');
//         skillItem.classList.add('skill-item');
//         skillItem.innerHTML = `
//             <h3>المهارة</h3>
//             <label for="skill-name">أسم المهارة</label>
//             <input type="text" id="skill-name" name="skill-name" required>
    
//             <label for="skill-level">المستوى</label>
//             <select id="skill-level" name="skill-level" required>
//                 <option value="beginner">مبتدئ</option>
//                 <option value="intermediate">متوسط</option>
//                 <option value="advanced">خبير</option>
//             </select>
    
//             <button type="button" class="remove-item-button">حذف النعصر</button>
//         `;
    
//         // Add skill item to container
//         skillsItemsContainer.appendChild(skillItem);
    
//         // Add event listener to remove skill item
//         const removeItemButton = skillItem.querySelector('.remove-item-button');
//         removeItemButton.addEventListener('click', () => {
//             skillsItemsContainer.removeChild(skillItem);
//         });
// });
const profilePictureInput = document.getElementById('profile-picture-input');
const profileImage = document.getElementById('profile-image');

profilePictureInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }

    reader.onload = (event) => {
        profileImage.src = event.target.result;
    };

    reader.readAsDataURL(file);
});
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
  <section class="personal-info">
  <h2>المعلومات الشخصية</h2>
  <form id="personal-info-form">
      <label for="name">الأسم الكامل</label>
      <input type="text" id="name" name="name" required>

      <label for="email">البريد الالكتروني</label>
      <input type="email" id="email" name="email" required>

      <label for="phone">رقم الهاتف</label>
      <input type="tel" id="phone" name="phone" required>

      <label for="address">العنوان</label>
      <input type="text" id="address" name="address" required>

      <!-- <button type="submit">ارسال</button> -->
  </form>
</section>

<section class="education">
  <h2>التعليم</h2>
  <div id="education-items">
      <label for="institution">مؤسسة او جامعة</label>
      <input type="text" id="institution" name="institution" required>

      <label for="degree">الدرجة</label>
      <input type="text" id="degree" name="degree" required>

      <label for="start-date">تاريخ البداية</label>
      <input type="date" id="start-date" name="start-date" required>

      <label for="end-date">تاريخ النهاية</label>
      <input type="date" id="end-date" name="end-date" required>
  </div>
  <button id="add-education-item" style="margin-top: 20px;">إضافة تعليم</button>
</section>

<section class="experience">
  <h2>الخبرات</h2>
  <div id="experience-items">
      <label for="company">الشركة</label>
      <input type="text" id="company" name="company" required>

      <label for="position">الموقع:</label>
      <input type="text" id="position" name="position" required>

      <label for="start-date">تاريخ البداية</label>
      <input type="date" id="start-date" name="start-date" required>

      <label for="end-date">تاريخ النهاية</label>
      <input type="date" id="end-date" name="end-date" required>

      <label for="description">وصف</label>
      <textarea id="description" name="description" required></textarea>
  </div>
  <button id="add-experience-item"> إضافة خبرة</button>
</section>

<section class="skills">
  <h2>المهارات</h2>
  <div id="skills-items">
      <label for="skill-name">أسم المهارة</label>
      <input type="text" id="skill-name" name="skill-name" required>

      <label for="skill-level">المستوى</label>
      <select id="skill-level" name="skill-level" required>
          <option value="beginner">مبتدئ</option>
          <option value="intermediate">متوسط</option>
          <option value="advanced">خبير</option>
      </select>
  </div>
  <button id="add-skill-item">إضافة مهارة</button>
</section>
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
