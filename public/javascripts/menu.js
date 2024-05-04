document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.button-mob-menu');
  const menu = document.querySelector('#topmenu');
  const menuItems = document.querySelectorAll('.top-m-wrap a');

  if (menuToggle && menu) { // Убедимся, что элементы существуют
      menuToggle.addEventListener('click', (e) => {
          e.preventDefault();
          menu.classList.toggle('active');
      });
  } else {
      console.log('Element not found: .button-mob-menu or #topmenu');
  }

  if (menuItems.length > 0) { // Убедимся, что элементы найдены
      menuItems.forEach(item => {
          item.addEventListener('click', () => {
              menuItems.forEach(i => i.parentNode.classList.remove('active'));
              item.parentNode.classList.add('active');
          });
      });
  } else {
      console.log('Menu items not found: .top-m-wrap a');
  }
});