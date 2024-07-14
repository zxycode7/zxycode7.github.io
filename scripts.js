// JavaScript代码可以在这里添加，例如处理导航菜单的交互等
console.log("Welcome to ZXYCode7 Blog!");

// 导航菜单鼠标悬停效果
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#09d3ac';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
