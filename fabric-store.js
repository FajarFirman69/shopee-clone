const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function showSlide(index) {
      if (index >= slideCount) currentIndex = 0;
      else if (index < 0) currentIndex = slideCount - 1;
      else currentIndex = index;

      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() { showSlide(currentIndex + 1); }
    function prevSlide() { showSlide(currentIndex - 1); }