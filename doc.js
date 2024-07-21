document.addEventListener('DOMContentLoaded', function () {
    var dropdownLinks = document.querySelectorAll('.nav-item');
    var lastClickedLink = null;

    dropdownLinks.forEach(function (dropdownLink) {
        dropdownLink.addEventListener('click', function (event) {
            var dropdownContent = this.nextElementSibling;

            if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
                
                // 判断是否为特定链接
                if (this.href.includes('doc/command.html')) {
                    
                    if (lastClickedLink === this) {
                        event.preventDefault(); // 阻止默认行为
                        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
                        
                    } else {
                        
                        document.querySelectorAll('.dropdown-content').forEach(function (content) {
                            content.style.display = 'none'; // Hide other dropdown contents
                        });
                        
                        dropdownContent.style.display = 'block';
                    }

                    lastClickedLink = this;
                } else {
                    // 执行跳转
                    window.location.href = this.href;
                }

            } else if (!this.href.includes('doc/command.html')) {
                // 如果不是特定链接，执行跳转
                window.location.href = this.href;
            }
        });

        // 默认隐藏子选项
        var dropdownContent = dropdownLink.nextElementSibling;
        if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
            dropdownContent.style.display = 'block';
        }
    });
});


document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // 存储选中的 section ID
        localStorage.setItem('activeSection', this.dataset.section);
    });
});

// 保持按钮状态
window.addEventListener('load', function() {
    const activeSection = localStorage.getItem('activeSection');
    if (activeSection) {
        const activeItem = document.querySelector(`.nav-item[data-section="${activeSection}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname;

    // 根据当前路径设置活动状态
    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (currentPath.includes(itemPath)) {
            item.classList.add('active');
        }
    });
});
