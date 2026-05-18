function changeTab(tabId) {
            document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            document.getElementById('btn-' + tabId).classList.add('active');

            const hero = document.getElementById('capa-hero');
            if (tabId === 'historia') {
                hero.style.display = 'flex';
                window.scrollTo({top: 0, behavior: 'smooth'});
            } else {
                hero.style.display = 'none';
                window.scrollTo({top: 0});
            }
        }

        function openModal(titulo, desc, img) {
            document.getElementById('tituloModal').innerText = titulo;
            document.getElementById('descModal').innerText = desc;
            document.getElementById('imgModal').src = img;
            document.getElementById('meuModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('meuModal').style.display = 'none';
        }

function traduzirSite() {
  const urlAtual = window.location.href;
  const urlTraduzida = `https://translate.google.com/translate?sl=pt&tl=es&u=${encodeURIComponent(urlAtual)}`;
  window.open(urlTraduzida, "_blank");
}