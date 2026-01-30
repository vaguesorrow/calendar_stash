document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = now.toLocaleDateString('ru-RU', { month: 'long' });
    const day = now.getDate();
    const weekday = now.toLocaleDateString('ru-RU', { weekday: 'long' });
    
    function updateTime() {
        const now = new Date();
        document.getElementById('time').textContent =
            now.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
      });
    };

    updateTime();
    setInterval(updateTime, 1000);

    document.getElementById('year').textContent = year;
    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;
    document.getElementById('weekday').textContent = weekday;

    const images1=['./img/mem1.svg', './img/mem2.svg', './img/mem3.svg', './img/mem4.svg', './img/mem5.svg', './img/mem6.svg', './img/mem7.svg'];
    const randind1=Math.floor(Math.random()*images1.length);
    document.getElementById('random-img1').src=images1[randind1];

    const images2=['./img/hohma1.svg', './img/hohma2.svg', './img/hohma3.svg', './img/hohma4.svg', './img/hohma5.svg', './img/hohma6.svg', './img/hohma7.svg'];
    const randind2=Math.floor(Math.random()*images2.length);
    document.getElementById('random-img2').src=images2[randind2];

    document.querySelector('.red3').addEventListener("click", () => {
        window.open("https://t.me/oldweb_core", "_blank");
    });

});