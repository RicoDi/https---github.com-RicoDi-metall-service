(function() {
    var nav = $('.top-m-wrap'); // Используем класс вашего меню вместо 'nav' для точности
    nav.on('click', 'a', function(e) {
      nav.find('.active').removeClass('active');
      $(this).closest('li').addClass('active'); // Присваиваем класс 'active' родительскому 'li', а не 'a'
    });
  })();


  // Test Case 1: Testing the functionality of the code snippet
it('should add the active class to the parent li when a link is clicked', () => {
  // Arrange
  const nav = $('.top-m-wrap');
  const link = nav.find('a');

  // Act
  link.click();

  // Assert
  expect(link.parent().hasClass('active')).toBeTruthy();
});

// Test Case 2: Testing the expected output of the code snippet
it('should remove the active class from all li elements when a link is clicked', () => {
  // Arrange
  const nav = $('.top-m-wrap');
  const link = nav.find('a');
  link.parent().addClass('active');

  // Act
  link.click();

  // Assert
  expect(nav.find('.active').length).toBe(0);
});

// Test Case 3: Testing for edge cases and error handling
it('should not add the active class to a link if it is already active', () => {
  // Arrange
  const nav = $('.top-m-wrap');
  const link = nav.find('a');
  link.parent().addClass('active');

  // Act
  link.click();
  link.click();

  // Assert
  expect(link.parent().hasClass('active')).toBeFalsy();
});




