window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 600);


    document.querySelectorAll(".progress").forEach(bar => {
        const target = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = target;
        }, 500);

        const heroImage = document.querySelector(".hero-image");
        const images = [
            "IMG_20211209_192751_932.jpg",
            "DSC_4674.JPG",
            "DSC_5487.JPG",
            "IMG_20211220_232819.jpg",
            "IMG_20220603_234750_408.jpg",
            "IMG_20220702_052902_137.jpg",
            "IMG_20221118_202420_609.jpg",
            "IMG_20230320_200611_943.jpg",
        ];

        let index = 0;

        function changeHeroImage() {
            index = (index + 1) % images.length;
            heroImage.src = images[index];
        }


        setInterval(changeHeroImage, 2000);
    });


    const heroText = document.querySelector('.hero-text h1');
    const text = "Hi, I'm Shoaib";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heroText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        const progress = card.querySelector('.progress');
        const width = progress.style.width;
        progress.style.width = '0';
        progress.style.color = green;

        setTimeout(() => {
            progress.style.width = width;
        }, 500);


        card.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = width;
            card.appendChild(tooltip);
        });

        card.addEventListener('mouseleave', () => {
            const tooltip = card.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const codeSnippets = document.querySelectorAll('.code-snippet code');

    codeSnippets.forEach(snippet => {
        const text = snippet.innerText;
        snippet.innerText = '';
        let index = 0;

        function typeCode() {
            if (index < text.length) {
                snippet.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeCode, 50);
            }
        }

        typeCode();
    });
});