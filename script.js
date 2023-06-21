const topButton = document.getElementById('topButton');

topButton.addEventListener('click', function() {
  scrollToTop();
});

function scrollToTop() {
  if (window.scrollY !== 0 || document.documentElement.scrollTop !== 0) {
    // 페이지가 스크롤된 상태인 경우, 부드럽게 상단으로 스크롤
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
  } else {
    // 페이지가 스크롤되지 않은 상태인 경우, 바로 상단으로 이동
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  });
});