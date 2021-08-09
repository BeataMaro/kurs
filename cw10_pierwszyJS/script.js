const chopekInfo = [
  {
    src: "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/gada.gif?raw=true",
    alt: "Pan Cyfrowy gada",
    desc: "Pan Cyfrowy gada, ale nikt Go nie słucha.",
  },
  {
    src: "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/siada.gif?raw=true",
    alt: "Pan Cyfrowy siada",
    desc: "Pan Cyfrowy siada, bo już się nastał.",
  },
  {
    src: "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/odwr+-t%20wprost.gif?raw=true",
    alt: "Pan Cyfrowy odwraca głowę",
    desc: "Pan Cyfrowy uwodzicielsko odwraca głowę.",
  },
  {
    src: "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/majta%20nog%C2%A6%C5%AF.gif?raw=true",
    alt: "Pan Cyfrowy majta nogą",
    desc: "Pan Cyfrowy majta nogą, bo lubi.",
  },
];

const gifs = document.querySelector(".gifs");

const divs = gifs.querySelectorAll("div");

for (const [idx, gif] of divs.entries()) {
  const img = gif.querySelector("img");
  img.src = chopekInfo[idx].src;
  img.alt = chopekInfo[idx].alt;
  gif.onclick = () => {
    const content = document.querySelector(".content");
    const div = content.querySelectorAll("div");
    div[1].innerHTML = chopekInfo[idx].desc;
    const img = div[0].querySelector("img");
    img.src = chopekInfo[idx].src;
    img.alt = chopekInfo[idx].alt;
  };
}
