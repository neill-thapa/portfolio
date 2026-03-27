// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Project filter
const filterButtons = document.querySelectorAll('.project-filters button');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        projects.forEach(project => {
            if(filter === 'all' || project.dataset.category === filter){
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Skills animation (progress bars)
const skills = document.querySelectorAll('.skill-item');

window.addEventListener('load', () => {
    skills.forEach(skill => {
        // set the css variable from data-level
        const level = skill.dataset.level;
        skill.style.setProperty('--skill-level', level);

        // trigger the animation after a tiny delay
        setTimeout(() => {
            skill.classList.add('active');
        }, 200);
    });
});