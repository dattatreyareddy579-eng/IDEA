// app.ts
// TypeScript entry point for PharmaCo web app

document.addEventListener('DOMContentLoaded', () => {
    // Example product data
    const products = [
        { name: 'Pain Relief Tablets', description: 'Fast-acting pain relief.' },
        { name: 'Allergy Solution', description: 'Effective allergy management.' },
        { name: 'Vitamin D3', description: 'Supports bone and immune health.' }
    ];

    const productList = document.getElementById('product-list');
    if (productList) {
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${product.name}</strong>: ${product.description}`;
            productList.appendChild(li);
        });
    }

    // Contact form handler
    const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting PharmaCo! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
