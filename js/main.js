document.addEventListener('DOMContentLoaded', function() {
  // 移动菜单按钮交互
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav ul');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('show');
      mobileMenuBtn.classList.toggle('active');
    });
  }
  
  // 截图轮播
  const sliders = document.querySelectorAll('.screenshots-slider');
  const prevBtns = document.querySelectorAll('.prev-btn');
  const nextBtns = document.querySelectorAll('.next-btn');
  const sliderDots = document.querySelectorAll('.slider-dots');
  
  sliders.forEach((slider, sliderIndex) => {
    const slides = slider.querySelectorAll('.screenshot-card');
    const dotsContainer = sliderDots[sliderIndex];
    
    if (slides.length > 0) {
      // 创建点状导航
      slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
        
        dot.addEventListener('click', () => {
          const index = parseInt(dot.dataset.index);
          scrollToSlide(slider, slides, index);
          updateDots(dotsContainer, index);
        });
      });
      
      // 前后按钮
      if (prevBtns[sliderIndex] && nextBtns[sliderIndex]) {
        prevBtns[sliderIndex].addEventListener('click', () => {
          let activeIndex = findActiveIndex(dotsContainer);
          if (activeIndex > 0) {
            activeIndex--;
            scrollToSlide(slider, slides, activeIndex);
            updateDots(dotsContainer, activeIndex);
          }
        });
        
        nextBtns[sliderIndex].addEventListener('click', () => {
          let activeIndex = findActiveIndex(dotsContainer);
          if (activeIndex < slides.length - 1) {
            activeIndex++;
            scrollToSlide(slider, slides, activeIndex);
            updateDots(dotsContainer, activeIndex);
          }
        });
      }
      
      // 滑动检测
      let touchStartX = 0;
      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });
      
      slider.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        let activeIndex = findActiveIndex(dotsContainer);
        
        if (diff > 50 && activeIndex < slides.length - 1) { // 向左滑动
          activeIndex++;
          scrollToSlide(slider, slides, activeIndex);
          updateDots(dotsContainer, activeIndex);
        } else if (diff < -50 && activeIndex > 0) { // 向右滑动
          activeIndex--;
          scrollToSlide(slider, slides, activeIndex);
          updateDots(dotsContainer, activeIndex);
        }
      });
    }
  });
  
  function scrollToSlide(slider, slides, index) {
    const slideWidth = slides[0].offsetWidth + parseInt(window.getComputedStyle(slides[0]).marginRight);
    slider.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
  }
  
  function updateDots(dotsContainer, activeIndex) {
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  function findActiveIndex(dotsContainer) {
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    let activeIndex = 0;
    dots.forEach((dot, i) => {
      if (dot.classList.contains('active')) {
        activeIndex = i;
      }
    });
    return activeIndex;
  }
  
  // 用户评价轮播
  const testimonialSlider = document.querySelector('.testimonials-slider');
  const testimonials = document.querySelectorAll('.testimonial-card');
  const prevTestimonial = document.querySelector('.prev-testimonial');
  const nextTestimonial = document.querySelector('.next-testimonial');
  const testimonialDots = document.querySelector('.testimonial-dots');
  
  if (testimonials.length > 0 && testimonialDots) {
    let currentTestimonial = 0;
    
    // 创建点状导航
    testimonials.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('testimonial-dot');
      if (i === 0) dot.classList.add('active');
      dot.dataset.index = i;
      testimonialDots.appendChild(dot);
      
      dot.addEventListener('click', () => {
        currentTestimonial = parseInt(dot.dataset.index);
        showTestimonial();
      });
    });
    
    // 显示指定评价
    function showTestimonial() {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === currentTestimonial ? 'flex' : 'none';
      });
      
      // 更新点状导航
      const dots = testimonialDots.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentTestimonial);
      });
    }
    
    // 前后按钮
    if (prevTestimonial && nextTestimonial) {
      prevTestimonial.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial();
      });
      
      nextTestimonial.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial();
      });
    }
    
    // 初始化显示第一个评价
    showTestimonial();
    
    // 自动轮播
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial();
    }, 5000);
  }
  
  // FAQ交互
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // 关闭其他所有FAQ
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // 切换当前FAQ
      item.classList.toggle('active', !isActive);
    });
  });
  
  // 倒计时功能
  function startCountdown() {
    const daysEl = document.querySelector('.days');
    const hoursEl = document.querySelector('.hours');
    const minutesEl = document.querySelector('.minutes');
    const secondsEl = document.querySelector('.seconds');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
    // 设定倒计时结束时间（2天后）
    const now = new Date();
    const endDate = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
    
    function updateTimer() {
      const now = new Date();
      const diff = endDate - now;
      
      if (diff <= 0) {
        // 倒计时结束
        daysEl.textContent = '0';
        hoursEl.textContent = '0';
        minutesEl.textContent = '0';
        secondsEl.textContent = '0';
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      daysEl.textContent = days < 10 ? `0${days}` : days;
      hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
      minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }
    
    // 立即更新一次
    updateTimer();
    // 设置每秒更新
    setInterval(updateTimer, 1000);
  }
  
  startCountdown();
  
  // 返回顶部按钮
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Tab切换功能
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 移除所有活动状态
      tabBtns.forEach(otherBtn => {
        otherBtn.classList.remove('active');
      });
      
      // 设置当前按钮为活动状态
      btn.classList.add('active');
      
      // 显示对应内容
      const tabId = btn.dataset.tab;
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => {
        content.style.display = content.id === tabId ? 'block' : 'none';
      });
    });
  });
  
  // Cookie横幅
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieAccept = document.querySelector('.cookie-accept');
  const cookieSettings = document.querySelector('.cookie-settings');
  
  if (cookieBanner && cookieAccept) {
    // 检查是否已接受Cookie
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'block';
    }
    
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
    
    if (cookieSettings) {
      cookieSettings.addEventListener('click', () => {
        // 这里可以添加打开Cookie设置面板的逻辑
        alert('Cookie设置功能将在未来版本中提供');
      });
    }
  }
  
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // 如果移动菜单显示，点击后关闭
        if (nav.classList.contains('show')) {
          nav.classList.remove('show');
          mobileMenuBtn.classList.remove('active');
        }
      }
    });
  });
});

