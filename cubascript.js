function changeTab(tabId) {
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll("nav button")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  document.getElementById("btn-" + tabId).classList.add("active");

  const hero = document.getElementById("capa-hero");
  if (tabId === "historia") {
    hero.style.display = "flex";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    hero.style.display = "none";
    window.scrollTo({ top: 0 });
  }
}

function openModal(titulo, desc, midia) {
  document.getElementById("tituloModal").innerText = titulo;
  document.getElementById("descModal").innerText = desc;

  const img = document.getElementById("imgModal");
  const video = document.getElementById("videoModal");
  const videoSrc = document.getElementById("videoSrcModal");

  // Verifica se é vídeo pela extensão
  const isVideo = midia.match(/\.(mp4|webm|ogg)$/i);

  if (isVideo) {
    img.style.display = "none";
    videoSrc.src = "Images/" + midia;
    video.load();
    video.style.display = "block";
  } else {
    video.pause();
    video.style.display = "none";
    img.src = "Images/" + midia;
    img.style.display = "block";
  }

  document.getElementById("meuModal").style.display = "flex";
}

function closeModal() {
  const video = document.getElementById("videoModal");
  video.pause(); // Para o vídeo ao fechar
  document.getElementById("meuModal").style.display = "none";
}

function traduzirSite() {
  const urlAtual = window.location.href;
  const urlTraduzida = `https://translate.google.com/translate?sl=pt&tl=es&u=${encodeURIComponent(urlAtual)}`;
  window.open(urlTraduzida, "_blank");
}