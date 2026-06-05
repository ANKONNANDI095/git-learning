const form = document.getElementById('contactForm');
const response = document.getElementById('response');

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
