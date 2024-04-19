const personalInfoForm = document.getElementById('personal-info-form');
const educationItemsContainer = document.getElementById('education-items');
const experienceItemsContainer = document.getElementById('experience-items');
const skillsItemsContainer = document.getElementById('skills-items');

const addEducationItemButton = document.getElementById('add-education-item');
const addExperienceItemButton = document.getElementById('add-experience-item');
const addSkillItemButton = document.getElementById('add-skill-item');

personalInfoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Create personal info item
    const personalInfoItem = document.createElement('div');
    personalInfoItem.classList.add('personal-info-item');
    personalInfoItem.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
    `;

    // Add personal info item to container
    educationItemsContainer.appendChild(personalInfoItem);
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

// Similar functions for adding and removing experience and skill items

addExperienceItemButton.addEventListener('click', () => {
        // Create experience item
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = `
            <h3>الخبرة</h3>
            <label for="company">الشركة</label>
            <input type="text" id="company" name="company" required>
    
            <label for="position">Position:</label>
            <input type="text" id="position" name="position" required>
    
            <label for="start-date">تاريخ البداية</label>
            <input type="date" id="start-date" name="start-date" required>
    
            <label for="end-date">تاريخ النهاية</label>
            <input type="date" id="end-date" name="end-date" required>
    
            <label for="description">وصف</label>
            <textarea id="description" name="description" required></textarea>
    
            <button type="button" class="remove-item-button">حذف العنصر</button>
        `;
    
        // Add experience item to container
        experienceItemsContainer.appendChild(experienceItem);
    
        // Add event listener to remove experience item
        const removeItemButton = experienceItem.querySelector('.remove-item-button');
        removeItemButton.addEventListener('click', () => {
            experienceItemsContainer.removeChild(experienceItem);
        });
});

addSkillItemButton.addEventListener('click', () => {
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
