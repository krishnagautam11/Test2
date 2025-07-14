document.addEventListener("DOMContentLoaded", function () {
  // Pagination
  const allTopics = [
    {
      id: 1,
      title: "Web Design",
      description:
        "Topic Listing includes home, listing, detail and contact pages.",
      image: "assets/images/undraw_Remote_design_team_re_urdx.png",
      badge: 14,
    },
    {
      id: 2,
      title: "Advertising",
      description: "Visit TemplateMo website to download free CSS templates.",
      image: "assets/images/undraw_online_ad_re_ol62.png",
      badge: 30,
    },
    {
      id: 3,
      title: "Podcast",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: "assets/images/undraw_Podcast_audience_re_4i5q.png",
      badge: 20,
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Learn the latest digital marketing strategies.",
      image: "assets/images/undraw_Podcast_audience_re_4i5q.png",
      badge: 25,
    },
    {
      id: 5,
      title: "Graphic Design",
      description: "Master the art of visual communication.",
      image: "assets/images/undraw_online_ad_re_ol62.png",
      badge: 18,
    },
    {
      id: 6,
      title: "SEO Optimization",
      description: "Improve your website's visibility in search results.",
      image: "assets/images/undraw_Remote_design_team_re_urdx.png",
      badge: 22,
    },

    {
      id: 7,
      title: "Content Writing",
      description: "Create engaging content for your audience.",
      image: "assets/images/undraw_Remote_design_team_re_urdx.png",
      badge: 15,
    },
    {
      id: 8,
      title: "Social Media",
      description: "Grow your brand through social platforms.",
      image: "assets/images/undraw_online_ad_re_ol62.png",
      badge: 28,
    },
    {
      id: 9,
      title: "Video Production",
      description: "Professional video creation techniques.",
      image: "assets/images/undraw_Podcast_audience_re_4i5q.png",
      badge: 12,
    },
    {
      id: 10,
      title: "E-commerce",
      description: "Build and optimize online stores.",
      image: "assets/images/undraw_Podcast_audience_re_4i5q.png",
      badge: 19,
    },
    {
      id: 11,
      title: "UI/UX Design",
      description: "Create intuitive user experiences.",
      image: "assets/images/undraw_Remote_design_team_re_urdx.png",
      badge: 24,
    },
    {
      id: 12,
      title: "Data Analytics",
      description: "Make data-driven decisions for your business.",
      image: "assets/images/undraw_Podcast_audience_re_4i5q.png",
      badge: 17,
    },
  ];

  const itemsPerPage = 3;
  let currentPage = 1;

  function displayTopics() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTopics = allTopics.slice(startIndex, endIndex);

    const topicsContainer = document.getElementById("topics-container");
    if (!topicsContainer) return;

    topicsContainer.innerHTML = "";

    paginatedTopics.forEach((topic) => {
      topicsContainer.innerHTML += `
                <div class="topic-item  ">
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <img src="${topic.image}" class="img-fluid" alt="${topic.title}">
                        </div>
                        <div class="col-md-6">
                            <h5>${topic.title}</h5>
                            <p>${topic.description}</p>
                            <a href="topics-detail.html?id=${topic.id}" class="btn-view">Learn More</a>
                        </div>
                        <div class="col-md-2 text-end">
                            <span class="badge">${topic.badge}</span>
                        </div>
                    </div>
                </div>
            `;
    });
  }

  function setupPagination() {
    const totalPages = Math.ceil(allTopics.length / itemsPerPage);
    const pagination = document.getElementById("pagination");
    if (!pagination) return;

    const prevBtn = pagination.querySelector(".prev-btn")?.parentNode;
    const nextBtn = pagination.querySelector(".next-btn")?.parentNode;
    pagination.innerHTML = "";

    if (prevBtn) pagination.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement("li");
      pageItem.className = `page-item ${i === currentPage ? "active" : ""}`;
      pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      pageItem.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        displayTopics();
        updatePaginationUI();
      });
      pagination.appendChild(pageItem);
    }

    if (nextBtn) pagination.appendChild(nextBtn);

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) {
          currentPage--;
          displayTopics();
          updatePaginationUI();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
          currentPage++;
          displayTopics();
          updatePaginationUI();
        }
      });
    }
  }

  function updatePaginationUI() {
    const pageItems = document.querySelectorAll(".page-item");
    pageItems.forEach((item) => {
      item.classList.remove("active");
      if (item.textContent == currentPage) {
        item.classList.add("active");
      }
    });
  }

  if (document.querySelector(".topics-listing-page")) {
    displayTopics();
    setupPagination();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const dropdowns = document.querySelectorAll(".dropdown");

      dropdowns.forEach((dropdown) => {
        const menu = dropdown.querySelector(".dropdown-menu");
        let hideTimeout;

        dropdown.addEventListener("mouseenter", function () {
          clearTimeout(hideTimeout);
          menu.style.opacity = "1";
          menu.style.visibility = "visible";
          menu.style.transform = "translateY(0)";
        });

        dropdown.addEventListener("mouseleave", function () {
          hideTimeout = setTimeout(function () {
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
            menu.style.transform = "translateY(20px)";
          }, 200);
        });

        menu.addEventListener("mouseenter", function () {
          clearTimeout(hideTimeout);
        });

        menu.addEventListener("mouseleave", function () {
          hideTimeout = setTimeout(function () {
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
            menu.style.transform = "translateY(20px)";
          }, 100);
        });
      });
    }, 100);
  });

  // Navbar

  const navbars = [
    document.querySelector(".home-page-header nav"),
    document.querySelector(".contact-page-header nav"),
    document.querySelector(".page-header nav"),
  ].filter((nav) => nav !== null);

  const navLinks = document.querySelectorAll(".nav-link a");
  const sections = document.querySelectorAll("section[id]");

  if (navbars.length > 0) {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;

      navbars.forEach((navbar) => {
        if (scrollPosition > 50) {
          navbar.classList.add("scrolled");
          navbar.classList.add("bg-white");
          navbar.classList.remove("bg-transparent");
        } else {
          navbar.classList.remove("scrolled");
          navbar.classList.remove("bg-white");
          navbar.classList.add("bg-transparent");
        }
      });

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 87;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    });

    if (window.scrollY > 50) {
      navbars.forEach((navbar) => {
        navbar.classList.add("scrolled");
        navbar.classList.add("bg-white");
        navbar.classList.remove("bg-transparent");
      });
    } else {
      navbars.forEach((navbar) => {
        navbar.classList.remove("scrolled");
        navbar.classList.add("bo");
        navbar.classList.remove("bg-white");
        navbar.classList.add("bg-transparent");
      });
    }
  }

  // Category tab
  // Category tab functionality - Modified version
  const categoryTabs = document.querySelectorAll(".category-tabs ul li a");
  const tabContents = document.querySelectorAll(".tab-content");

  if (categoryTabs.length > 0) {
    categoryTabs.forEach((tab) => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling

        // Get the parent li element
        const tabItem = this.parentElement;

        // Remove active class from all tabs
        categoryTabs.forEach((t) => t.parentElement.classList.remove("active"));

        // Add active class to clicked tab
        tabItem.classList.add("active");

        // Hide all tab contents
        tabContents.forEach((content) => content.classList.remove("active"));

        // Show the corresponding tab content
        const tabId = this.getAttribute("href").substring(1);
        document.getElementById(tabId).classList.add("active");
      });
    });
  }

  // $('.category-tabs ul li').click(function () {

  //     $('.category-tabs ul li').removeClass('active');
  //     $(this).addClass('active');

  //     const target = $(this).data('target');
  //     $('.tab-content').removeClass('active');
  //     $(target).addClass('active');
  // });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector("nav").offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  if (window.scrollY < 100) {
    navLinks[0]?.classList.add("active");
  }

  //onInput function for search

  function inputColor() {
    document.getElementById("searchInput").style.color = "gray";
  }

  inputColor();

  // Timeline
  function initTimelineAnimation() {
    const timeline = document.querySelector(".timeline");
    if (!timeline) return;

    const progressBar = document.createElement("div");
    progressBar.className = "timeline-progress";
    timeline.appendChild(progressBar);

    const icons = [
      document.querySelector(".timeline-icon1"),
      document.querySelector(".timeline-icon2"),
      document.querySelector(".timeline-icon3"),
    ].filter((icon) => icon !== null);

    const contents = document.querySelectorAll(".timeline-content");
    const timelineSection = document.querySelector(".timeline-section");
    if (!timelineSection) return;

    const timelineHeight = timelineSection.offsetHeight;
    const timelineOffset = timelineSection.offsetTop;

    function updateTimeline() {
      const scrollPosition = window.scrollY;
      const timelineStart = timelineOffset - window.innerHeight * 1;
      const timelineEnd = timelineOffset + timelineHeight;

      if (scrollPosition > timelineStart && scrollPosition < timelineEnd) {
        const progress =
          (scrollPosition - timelineStart) / (timelineEnd - timelineStart);
        progressBar.style.height = `${progress * 100}%`;

        icons.forEach((icon, index) => {
          const threshold = (index + 1) / (icons.length + 1);
          if (progress >= threshold * 0.8) {
            icon.classList.add("active");
            if (contents[index]) contents[index].classList.add("active");
          } else {
            icon.classList.remove("active");
            if (contents[index]) contents[index].classList.remove("active");
          }
        });
      } else if (scrollPosition <= timelineStart) {
        progressBar.style.height = "0";
        icons.forEach((icon) => icon.classList.remove("active"));
        contents.forEach((content) => content.classList.remove("active"));
      } else if (scrollPosition >= timelineEnd) {
        progressBar.style.height = "100%";
        icons.forEach((icon) => icon.classList.add("active"));
        contents.forEach((content) => content.classList.add("active"));
      }
    }

    window.addEventListener("scroll", updateTimeline);
    updateTimeline();
  }

  initTimelineAnimation();
});
