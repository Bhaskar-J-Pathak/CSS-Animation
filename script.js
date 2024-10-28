document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    let angle = 0;

    function rotateSlider() {
        angle += 0.5;
        slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${angle}deg)`;
        requestAnimationFrame(rotateSlider);
    }

    rotateSlider();
});
