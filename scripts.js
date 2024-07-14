document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航菜单鼠标悬停效果
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#09d3ac';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
