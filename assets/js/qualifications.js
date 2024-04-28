// const skillsContent = document.getElementsByClassName('skills__content'),
//     skillsHeader = document.querySelectorAll('.skills__header')
//     console.log(skillsHeader)

// function toggleSkills() {
//     console.log(skillsHeader)
//     let itemClass = this.parentNode.className

//     for (i = 0; i < skillsContent.length; i++) {
//         skillsContent[i].className = 'skills__content skills__close'
//     }
//     if (itemClass === 'skills__content skills__close') {
//         this.parentNode.className = 'skills__content skills__open'
//     }
// }

// skillsHeader.forEach((el) => {
//     el.addEventListener('click', toggleSkills)
// })
const personalInfoForm = document.getElementById('personal-info-form');
const educationItemsContainer = document.getElementById('education-items');
const experienceItemsContainer = document.getElementById('experience-items');
const skillsItemsContainer = document.getElementById('skills-items');

const addEducationItemButton = document.getElementById('add-education-item');
const addExperienceItemButton = document.getElementById('add-experience-item');
const addSkillItemButton = document.getElementById('add-skill-item');
console.log(skillsItemsContainer)
addSkillItemButton.addEventListener('click', () => {
    console.log(skillsItemsContainer)
    // Create skill item
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');
    skillItem.innerHTML = `
        <h3>المهارة</h3>
        <label for="skill-name">أسم المهارة</label>
        <input type="text" id="skill-name" name="skill-name" required>

        <label for="skill-level">المستوى</label>
        <select id="skill-level" name="skill-level" required>
            <option value="beginner">مبتدئ</option>
            <option value="intermediate">متوسط</option>
            <option value="advanced">خبير</option>
        </select>

        <button type="button" class="remove-item-button">حذف النعصر</button>
    `;

    // Add skill item to container
    skillsItemsContainer.appendChild(skillItem);

    // Add event listener to remove skill item
    const removeItemButton = skillItem.querySelector('.remove-item-button');
    removeItemButton.addEventListener('click', () => {
        skillsItemsContainer.removeChild(skillItem);
    });
});
addEducationItemButton.addEventListener('click', () => {
    // Create education item
    const educationItem = document.createElement('div');
    educationItem.classList.add('education-item');
    educationItem.innerHTML = `
        <h3>التعليم</h3>
        <label for="institution">مؤسسة او جامعة</label>
        <input type="text" id="institution" name="institution" required>

        <label for="degree">الدرجة</label>
        <input type="text" id="degree" name="degree" required>

        <label for="start-date">تاريخ البداية</label>
        <input type="date" id="start-date" name="start-date" required>

        <label for="end-date">تاريخ النهاية</label>
        <input type="date" id="end-date" name="end-date" required>

        <button type="button" class="remove-item-button">حذف العنصر</button>
    `;

    // Add education item to container
    educationItemsContainer.appendChild(educationItem);

    // Add event listener to remove education item
    const removeItemButton = educationItem.querySelector('.remove-item-button');
    removeItemButton.addEventListener('click', () => {
        educationItemsContainer.removeChild(educationItem);
    });
});