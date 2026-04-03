// This file is generated from TypeScript. Do not edit directly.
document.addEventListener('DOMContentLoaded', function () {
    var products = [
        { name: 'Pain Relief Tablets', description: 'Fast-acting pain relief.' },
        { name: 'Allergy Solution', description: 'Effective allergy management.' },
        { name: 'Vitamin D3', description: 'Supports bone and immune health.' }
    ];
    var productList = document.getElementById('product-list');
    if (productList) {
        products.forEach(function (product) {
            var li = document.createElement('li');
            li.innerHTML = "<strong>".concat(product.name, "</strong>: ").concat(product.description);
            productList.appendChild(li);
        });
    }
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for contacting PharmaCo! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
