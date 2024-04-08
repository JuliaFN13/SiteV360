const containers = document.querySelectorAll('.container');

  containers.forEach(container => {
    container.addEventListener('mouseenter', () => {
      container.querySelector('.image').style.filter = 'blur(5px)';
      container.querySelector('.text').style.opacity = '1';
    });

    container.addEventListener('mouseleave', () => {
      container.querySelector('.image').style.filter = 'none';
      container.querySelector('.text').style.opacity = '0';
    });
  });