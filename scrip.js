const form = document.getElementById('contactForm');
const response = document.getElementById('response');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const applyTheme = mode => {
    const isLight = mode === 'light';
    body.classList.toggle('light-theme', isLight);
    if (themeToggle) {
        themeToggle.textContent = isLight ? 'Dark Mode' : 'Bright Mode';
    }
    localStorage.setItem('theme', mode);
};

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const nextTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
        applyTheme(nextTheme);
    });
}

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name') || 'Friend';
        const email = formData.get('email') || 'your email';
        const message = formData.get('message') || '';

        response.textContent = `Thanks, ${name}! We received your message and will reach out at ${email}.`;
        form.reset();

        console.log('Contact form submitted:', { name, email, message });
    });
} else {
    console.warn('Contact form element not found.');
}
