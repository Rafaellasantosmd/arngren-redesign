const products = [
  {
    "id": 1,
    "name": "MiP · WowWee",
    "category": "Robótica",
    "price": 999,
    "description": "Um pequeno robô de duas rodas que equilibra, dança e responde a gestos.",
    "image": "assets/products/mip.jpg",
    "detail": "Equilíbrio em duas rodas · Controle por gestos",
    "source": "https://www.arngren.net/robot-mip.html",
    "photoCredit": "WowWee / ShopAbunda",
    "photoSource": "https://www.shopabunda.com/products/wowwee-mip-the-toy-robot-white",
    "alt": "Robô MiP branco e preto, apoiado em duas rodas",
    "imageSource": "https://m.media-amazon.com/images/I/71hlwJ-97-L._AC_US1000_.jpg"
  },
  {
    "id": 2,
    "name": "Pleo rb",
    "category": "Robótica",
    "price": 2998,
    "description": "Um dinossauro robótico que transforma interação em personalidade.",
    "image": "assets/products/pleo.jpg",
    "detail": "52 cm de comprimento · 14 motores",
    "source": "https://www.arngren.net/pleo.html",
    "photoCredit": "Frontgate",
    "photoSource": "https://www.frontgate.com/pleo-rb-robotic-dinosaur/480687",
    "alt": "Dinossauro robótico Pleo verde e bege",
    "imageSource": "https://akamai-scene7.frontgate.com/is/image/frontgate//62668_main"
  },
  {
    "id": 3,
    "name": "EcoRide Ambassador",
    "category": "Bicicletas e Mobilidade",
    "price": 14790,
    "description": "Mobilidade elétrica com quadro baixo, cesta frontal e desenho clássico.",
    "image": "assets/products/ecoride.jpg",
    "detail": "Rodas de 28 polegadas · 8 marchas",
    "source": "https://www.arngren.net/sykkel.html",
    "photoCredit": "Cykellagret",
    "photoSource": "https://www.cykellagret.se/p16052/ecoride-ambassador-28-8-vaxlar-vit",
    "alt": "Bicicleta EcoRide clara com cesta preta e banco marrom",
    "imageSource": "https://www.cykellagret.se/productfiles/images/6/69f99b56-0107-4692-9eb8-498fe1b9246c_large.jpg"
  },
  {
    "id": 4,
    "name": "Robosapien X",
    "category": "Robótica",
    "price": 998,
    "description": "Movimentos articulados e controle remoto em um clássico da robótica.",
    "image": "assets/products/robosapien.jpg",
    "detail": "Robô humanoide · Controle remoto",
    "source": "https://www.arngren.net/robosapien-x.html",
    "photoCredit": "Idealo",
    "photoSource": "https://www.idealo.co.uk/compare/367049/wowwee-robosapien-x.html",
    "alt": "Robosapien X preto e branco acompanhado de controles",
    "imageSource": "https://cdn.idealo.com/folder/Product/367/0/367049/s3_produktbild_max_1/wowwee-robosapien-x.jpg"
  },
  {
    "id": 5,
    "name": "Braço robótico Edge",
    "category": "Robótica",
    "price": 498,
    "description": "Monte as articulações e descubra a mecânica por trás de cada movimento.",
    "image": "assets/products/robot-arm.jpg",
    "detail": "Kit de montagem · Controle com fio",
    "source": "https://www.arngren.net/robotarm.html",
    "photoCredit": "Arduino.ua",
    "photoSource": "https://arduino.ua/prod3520-robot-manipylyator-owi-535-robotic-arm-edge-kit",
    "alt": "Braço robótico articulado amarelo e preto",
    "imageSource": "https://arduino.ua/products_pictures/large_ARA152-3.jpg"
  },
  {
    "id": 6,
    "name": "Walkera QR X350",
    "category": "Drones e Controle Remoto",
    "price": null,
    "description": "Um dos drones que deram espaço à fotografia aérea no catálogo Arngren.",
    "image": "assets/products/drone.jpg",
    "detail": "Quadricóptero · Linha QR X350",
    "source": "https://www.arngren.net/drone-qr350.html",
    "photoCredit": "HobbyKing",
    "photoSource": "https://hobbyking.com/walkera-qr-x350-gps-quadcopter-with-return-to-home-function-and-devo-7-mode-2-rtf.html",
    "alt": "Drone Walkera branco com quatro hélices",
    "imageSource": "https://cdn-global-hk.hobbyking.com/media/catalog/product/cache/1/image/660x415/17f82f742ffe127f42dca9de82fb58b1/legacy/catalog/46200-2.jpg"
  },
  {
    "id": 7,
    "name": "R2-D2 · Projetor DVD",
    "category": "Eletrônicos e Gadgets",
    "price": 22998,
    "description": "Um personagem de Star Wars transformado em um pequeno cinema.",
    "image": "assets/products/r2d2.jpg",
    "detail": "Nikko · Projetor com DVD",
    "source": "https://www.arngren.net/robotene.html",
    "photoCredit": "DVDPrime",
    "photoSource": "https://dvdprime.com/g2/bbs/board.php?bo_table=dpinfo&wr_id=26545",
    "alt": "Projetor Nikko no formato do robô R2-D2",
    "imageSource": "https://cdn.mania.kr/dvdprime/g2/data/file/dpinfo/26545_200707241006294030.jpg"
  },
  {
    "id": 8,
    "name": "Freego 250 W",
    "category": "Bicicletas e Mobilidade",
    "price": null,
    "description": "Bicicleta elétrica urbana com quadro baixo e bagageiro traseiro.",
    "image": "assets/products/freego.jpg",
    "detail": "Motor de 250 W · Sistema de 36 V",
    "source": "https://www.arngren.net/sykkel.html",
    "photoCredit": "Freego Norge",
    "photoSource": "https://www.freego-norge.no/products/el-sykkel-sinophx-250w",
    "alt": "Bicicleta elétrica Freego vermelha ao lado de uma marina",
    "imageSource": "https://freegonorge-i03.mycdn.no/mysimgprod/freegonorge_mystore_no/images/c3rkG_El_Sykkel_Freego_Norge_250w_36v_1.jpg/w1200h800.jpg"
  },
  {
    "id": 9,
    "name": "Comarth Cross Rider",
    "category": "Veículos Elétricos",
    "price": 89998,
    "description": "Um veículo elétrico compacto com a personalidade de um pequeno utilitário.",
    "image": "assets/products/comarth.jpg",
    "detail": "Linha Cross Rider · Mobilidade elétrica",
    "source": "https://www.arngren.net/jeep.html",
    "photoCredit": "MotorGiga",
    "photoSource": "https://motorgiga.com/fotos-de-coches/fotos-comarth-cross-rider-comercial-2014/gmx-niv186-con369649.htm",
    "alt": "Comarth Cross Rider laranja com capota preta",
    "imageSource": "https://cdn.exatic.com/motorgiga/cargadatos/fotos2/comarth/cross-rider-%28comercial%29-2014/1600px/exteriores-%285%29.jpg"
  },
  {
    "id": 10,
    "name": "SkyMaster Zoom",
    "category": "Eletrônicos e Gadgets",
    "price": 3299,
    "description": "Binóculo Celestron para observar detalhes distantes com mais aproximação.",
    "image": "assets/products/skymaster.jpg",
    "detail": "Celestron · Zoom de 25–125×",
    "source": "https://www.arngren.net/teleskop.html",
    "photoCredit": "Solargas",
    "photoSource": "https://www.solargas.cl/producto/celestron-25-125x80-skymaster-zoom-binocular/",
    "alt": "Binóculo Celestron SkyMaster preto com grandes lentes",
    "imageSource": "https://www.solargas.cl/wp-content/uploads/2018/11/1461186886000_IMG_619799.jpg"
  },
  {
    "id": 11,
    "name": "Wilesco D161",
    "category": "Acessórios e Utilidades",
    "price": 3799,
    "description": "Uma pequena oficina movida a vapor, feita para observar a mecânica acontecer.",
    "image": "assets/products/steam.jpg",
    "detail": "Máquina a vapor · Oficina em miniatura",
    "source": "https://www.arngren.net/dampmaskin.html",
    "photoCredit": "GamaHobby",
    "photoSource": "https://gamahobby.eu/en_US/p/Wilesco-D161-steam-engine-with-workshop/10337",
    "alt": "Máquina a vapor Wilesco D161 com ferramentas em uma base azul",
    "imageSource": "https://gamahobby.eu/environment/cache/images/500_500_productGfx_61a883199e761cedaebe6f82c3f4f7df.jpg"
  },
  {
    "id": 12,
    "name": "Roboraptor",
    "category": "Robótica",
    "price": 499,
    "description": "O dinossauro de linhas futuristas que faz parte da coleção de robôs do Arngren.",
    "image": "assets/products/raptor.jpg",
    "detail": "WowWee · Aproximadamente 80 cm",
    "source": "https://www.arngren.net/robot.html",
    "photoCredit": "Manua.ls",
    "photoSource": "https://www.manua.ls/wowwee/roboraptor/manual",
    "alt": "Dinossauro robótico Roboraptor branco e cinza",
    "imageSource": "https://www.manua.ls/thumbs/products/l/1776933-wowwee-roboraptor.jpg"
  },
  {
    "id": 13,
    "name": "i-Sobot · Tomy",
    "category": "Robótica",
    "price": 2999,
    "description": "Robótica em miniatura: um humanoide articulado de apenas 17 centímetros.",
    "image": "assets/products/isobot.jpg",
    "detail": "Tomy · 17 cm de altura",
    "source": "https://www.arngren.net/pleo.html",
    "photoCredit": "The Old Robots",
    "photoSource": "https://www.theoldrobots.com/SmallRobotb.html",
    "alt": "Mini robô humanoide i-Sobot branco com detalhes azuis",
    "imageSource": "https://www.theoldrobots.com/images28/i-sobot-m11.JPG"
  },
  {
    "id": 14,
    "name": "XM-5000Li",
    "category": "Veículos Elétricos",
    "price": 29998,
    "description": "Scooter elétrica com carenagem completa e posição de pilotagem urbana.",
    "image": "assets/products/scooter.jpg",
    "detail": "Motor de 5.000 W · Scooter elétrica",
    "source": "https://www.arngren.net/el-scooter-b.html",
    "photoCredit": "ManualsLib",
    "photoSource": "https://www.manualslib.com/manual/516056/X-Treme-Xm-5000li.html",
    "alt": "Scooter elétrica XM-5000Li vermelha vista de lado",
    "imageSource": "https://static-data2.manualslib.com/product-images/f98/516056/x-treme-xm-5000li-scooter.jpg"
  },
  {
    "id": 15,
    "name": "Sky-Watcher Mercury 705",
    "category": "Eletrônicos e Gadgets",
    "price": 2198,
    "description": "Um refrator com tripé para começar a olhar o céu de outra maneira.",
    "image": "assets/products/telescope.jpg",
    "detail": "Abertura de 70 mm · Montagem AZ-3",
    "source": "https://www.arngren.net/teleskop.html",
    "photoCredit": "Budapest Telescope Centre",
    "photoSource": "https://tavcso.hu/en/productgroup/SWR705az3",
    "alt": "Telescópio refrator preto sobre tripé de alumínio",
    "imageSource": "https://tavcso.hu/contents/img/products/l_SWR705az3.jpg"
  },
  {
    "id": 16,
    "name": "Tanque RC · Torro",
    "category": "Drones e Controle Remoto",
    "price": null,
    "description": "Um tanque em escala com esteiras, torre móvel e controle remoto.",
    "image": "assets/products/tank.jpg",
    "detail": "Modelismo · Controle remoto",
    "source": "https://www.arngren.net/tank-stor.html",
    "photoCredit": "Modellbau Berlinski",
    "photoSource": "https://www.modellbau-berlinski.de/rc-fahrzeuge-und-zubehoer/militaerfahrzeuge-und-zubehoer/panzer/tiger-i-spaete-ausf-tarn-ir-1_16-rc-panzer-24ghz-rtr",
    "alt": "Tanque Torro em miniatura com controle remoto",
    "imageSource": "https://www.modellbau-berlinski.de/img_big/b60eecd05c9a0415e1847d0c5b004657.jpg"
  },
  {
    "id": 17,
    "name": "Hornby · Toy Story 3",
    "category": "Drones e Controle Remoto",
    "price": 999,
    "description": "Uma ferrovia em miniatura inspirada no universo de Woody e Buzz.",
    "image": "assets/products/train.jpg",
    "detail": "Hornby R1149 · Modelismo ferroviário",
    "source": "https://www.arngren.net/tog.html",
    "photoCredit": "Hornby / Zavvi",
    "photoSource": "https://us.zavvi.com/toys-cars-trains/hornby-toy-story-3-oo-gauge-electric-train-set-r1149/10225409.html",
    "alt": "Conjunto de trem Hornby Toy Story 3 com locomotiva e vagões",
    "imageSource": "https://static.thcdn.com/images/large/original/productimg/0/600/600/09/10225409-1286552091-822000.jpg"
  },
  {
    "id": 18,
    "name": "Lanterna X60-L2",
    "category": "Acessórios e Utilidades",
    "price": 3999,
    "description": "Iluminação portátil em um corpo robusto, com bateria recarregável.",
    "image": "assets/products/flashlight.jpg",
    "detail": "Linha X60 · 6.500 lúmens anunciados",
    "source": "https://www.arngren.net/cree-led.html",
    "photoCredit": "Acebeam",
    "photoSource": "https://www.acebeam.com/6500-lumens-x60",
    "alt": "Lanterna preta Acebeam X60 com empunhadura texturizada",
    "imageSource": "https://www.acebeam.com/images/thumbs/005/0054656_x60l-professional-flashlight.jpeg"
  }
];

const state = { query: "", category: "all", sort: "featured" };
const productGrid = document.querySelector("#product-grid");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const catalogSearch = document.querySelector("#catalog-search");
const categoryFilter = document.querySelector("#category-filter");
const sortFilter = document.querySelector("#sort-filter");
const clearFilters = document.querySelector("#clear-filters");
const emptyClear = document.querySelector("#empty-clear");
const globalSearchForm = document.querySelector("#global-search-form");
const globalSearch = document.querySelector("#global-search");
const productDialog = document.querySelector("#product-dialog");
const dialogClose = document.querySelector("#dialog-close");

const formatPrice = (price) => price === null ? "Sob consulta" : `${new Intl.NumberFormat("pt-BR").format(price)} kr`;
const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function getFilteredProducts() {
  const query = normalize(state.query.trim());
  const filtered = products.filter((product) => {
    const matchesQuery = !query || normalize(`${product.name} ${product.category} ${product.description}`).includes(query);
    const matchesCategory = state.category === "all" || product.category === state.category;
    return matchesQuery && matchesCategory;
  });
  if (state.sort === "price-asc") filtered.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  if (state.sort === "price-desc") filtered.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  if (state.sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productGrid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" decoding="async" width="600" height="450" />
        <span class="product-tag">${String(product.id).padStart(2,"0")} / AR</span>
      </div>
      <div class="product-content">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <p class="product-price"><small>${product.price === null ? "preço não confirmado" : "preço no catálogo · NOK"}</small><br />${formatPrice(product.price)}</p>
          <button class="detail-button" type="button" data-product-id="${product.id}">Ver detalhes <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </article>
  `).join("");
  document.querySelectorAll(".category-card").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.category === state.category));
  });
  const countLabel = filtered.length === 1 ? "produto encontrado" : "produtos encontrados";
  resultCount.textContent = `${filtered.length} ${countLabel}`;
  emptyState.hidden = filtered.length !== 0;
  productGrid.hidden = filtered.length === 0;
}

function clearAllFilters() {
  state.query = "";
  state.category = "all";
  state.sort = "featured";
  catalogSearch.value = "";
  categoryFilter.value = "all";
  sortFilter.value = "featured";
  globalSearch.value = "";
  renderProducts();
}

function openProductDialog(id) {
  const product = products.find((item) => item.id === Number(id));
  if (!product) return;
  document.querySelector("#dialog-image").src = product.image;
  document.querySelector("#dialog-image").alt = product.alt;
  document.querySelector("#dialog-category").textContent = product.category;
  document.querySelector("#dialog-title").textContent = product.name;
  document.querySelector("#dialog-price").textContent = formatPrice(product.price) + (product.price === null ? "" : " · NOK");
  document.querySelector("#dialog-source").href = product.source;
  document.querySelector("#dialog-photo-source").href = product.photoSource;
  document.querySelector("#dialog-photo-source").textContent = product.photoCredit;
  document.querySelector("#dialog-description").textContent = product.description;
  document.querySelector("#dialog-detail").innerHTML = `<strong>Sobre o item</strong><br />${product.detail}`;
  if (typeof productDialog.showModal === "function") productDialog.showModal();
}

function closeProductDialog() { productDialog.close(); }

catalogSearch.addEventListener("input", (event) => { state.query = event.target.value; renderProducts(); });
categoryFilter.addEventListener("change", (event) => { state.category = event.target.value; renderProducts(); });
sortFilter.addEventListener("change", (event) => { state.sort = event.target.value; renderProducts(); });
clearFilters.addEventListener("click", clearAllFilters);
emptyClear.addEventListener("click", clearAllFilters);
productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (button) openProductDialog(button.dataset.productId);
});
dialogClose.addEventListener("click", closeProductDialog);
productDialog.addEventListener("click", (event) => { if (event.target === productDialog) closeProductDialog(); });

function scrollToCatalog() {
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  document.querySelector("#produtos").scrollIntoView({ behavior, block: "start" });
}

globalSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = globalSearch.value.trim();
  catalogSearch.value = state.query;
  renderProducts();
  scrollToCatalog();
});

document.querySelectorAll(".category-card").forEach((button) => button.addEventListener("click", () => {
  state.category = button.dataset.category;
  categoryFilter.value = state.category;
  scrollToCatalog();
  renderProducts();
}));

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
  if (!isOpen) siteNav.querySelector("a").focus();
});
siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) { siteNav.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("is-open")) { siteNav.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.focus(); }
});

const headerSearch = document.querySelector(".header-search");
document.querySelector(".header-search .icon-button").addEventListener("click", (event) => {
  if (window.innerWidth <= 760 && !headerSearch.classList.contains("is-open")) { event.preventDefault(); headerSearch.classList.add("is-open"); globalSearch.focus(); }
});

document.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", () => {
  document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("is-active"));
  link.classList.add("is-active");
}));

renderProducts();
