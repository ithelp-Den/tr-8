document.addEventListener("DOMContentLoaded", () => {
    // ===== Слайдер «See where other students started» =====
    const studentsEl = document.querySelector(".students__swiper");
    if (studentsEl && window.Swiper) {
        // Відступ між слайдами в одиницях макета (сторінка завжди 390 одиниць завширшки)
        const unit = () => document.querySelector(".page").getBoundingClientRect().width / 390 || 1;
        const swiper = new Swiper(studentsEl, {
            slidesPerView: 1,
            spaceBetween: 20 * unit(),
            loop: true,
            navigation: {
                prevEl: ".students__arrow--prev",
                nextEl: ".students__arrow--next",
            },
        });
        window.addEventListener("resize", () => {
            swiper.params.spaceBetween = 20 * unit();
            swiper.update();
        });
    }

    // ===== FAQ: акордеон (за замовчуванням усі закриті) =====
    document.querySelectorAll(".faq__q").forEach(q => {
        q.addEventListener("click", () => q.parentElement.classList.toggle("is-open"));
    });

    // ===== Відео першого уроку: по кліку постер замінюється плеєром =====
    document.querySelectorAll(".lesson__video").forEach(box => {
        box.addEventListener("click", () => {
            if (box.classList.contains("is-playing")) return;
            const video = document.createElement("video");
            video.src = box.dataset.video;
            video.controls = true;
            video.playsInline = true;
            video.setAttribute("playsinline", "");
            box.appendChild(video);
            box.classList.add("is-playing");
            const p = video.play();
            if (p && p.catch) p.catch(() => {});
        });
    });
});
