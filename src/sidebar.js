// Sidebar dropdown logic for PharmaCo
document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtns = document.querySelectorAll('.dropdown-btn');
    var sidebar = document.querySelector('.sidebar');
    var sidebarLinks = document.querySelectorAll('.sidebar a');
    // Ensure all dropdowns are closed on load
    dropdownBtns.forEach(function (btn) {
        btn.classList.remove('active');
        var parent = btn.parentElement;
        if (parent)
            parent.classList.remove('open');
    });
    // Dropdown toggle
    dropdownBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            var parent = this.parentElement;
            if (parent) {
                parent.classList.toggle('open');
                btn.classList.toggle('active');
            }
        });
    });
    // Close sidebar and dropdowns on link click (mobile)
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 700 && sidebar) {
                sidebar.classList.remove('open');
                // Close all dropdowns
                dropdownBtns.forEach(function (btn) {
                    btn.classList.remove('active');
                    var parent = btn.parentElement;
                    if (parent)
                        parent.classList.remove('open');
                });
            }
        });
    });
    // Close sidebar when clicking outside (mobile)
    document.addEventListener('click', function (e) {
        if (window.innerWidth > 700 || !sidebar)
            return;
        var target = e.target;
        if (!sidebar.contains(target) && target.id !== 'sidebar-toggle') {
            sidebar.classList.remove('open');
            dropdownBtns.forEach(function (btn) {
                btn.classList.remove('active');
                var parent = btn.parentElement;
                if (parent)
                    parent.classList.remove('open');
            });
        }
    });
});
