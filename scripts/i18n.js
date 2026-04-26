const langData = {
  en: {
    subtitle: "DevOps & Platform Engineering Enthusiast",
    p1: "I am an Angolan technology professional currently based in Portugal.",
    p2: "I have experience in IT infrastructure, networking and technical support.",
    p3: "I worked as a DevOps intern contributing to deployment and automation.",
    p4: "I participated in tech communities like Angola Open Source and Google Developer Group.",
    btnCv: "View CV",
    btnContact: "Contact Me",
    navHome: "Home",
    navCv: "CV",
    navContact: "Contact"
  },

  pt: {
    subtitle: "Entusiasta de DevOps & Platform Engineering",
    p1: "Sou um profissional de tecnologia angolano residente em Portugal.",
    p2: "Tenho experiência em infraestrutura, redes e suporte técnico.",
    p3: "Atuei como estagiário de DevOps em Angola.",
    p4: "Participei em comunidades como Angola Open Source e Google Developer Group.",
    btnCv: "Ver CV",
    btnContact: "Entrar em Contacto",
    navHome: "Início",
    navCv: "CV",
    navContact: "Contacto"
  }
};

function setLang(lang) {
  const t = langData[lang];

  document.getElementById("subtitle").innerText = t.subtitle;

  document.getElementById("p1").innerText = t.p1;
  document.getElementById("p2").innerText = t.p2;
  document.getElementById("p3").innerText = t.p3;
  document.getElementById("p4").innerText = t.p4;

  document.getElementById("btnCv").innerText = t.btnCv;
  document.getElementById("btnContact").innerText = t.btnContact;

  document.getElementById("navHome").innerText = t.navHome;
  document.getElementById("navCv").innerText = t.navCv;
  document.getElementById("navContact").innerText = t.navContact;
}