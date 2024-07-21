document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.sidebar .dropdown > a');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function () {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });
});
