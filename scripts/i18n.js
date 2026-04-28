const translations = {
  en: {
    subtitle: "DevOps & Cybersecurity Enthusiast",

    p1: "Passionate about technology, automation, and security.",
    p2: "Focused on DevOps, cloud, and infrastructure.",
    p3: "Active in tech communities and events.",
    p4: "Goal: work internationally.",

    btnCv: "View CV",
    btnContact: "Contact",

    journeyTitle: "Professional Journey",
    journeyText: "Participation in Angola Open Source and Google Developers Angola.",

    certsTitle: "Courses & Certifications",
    certsText: "Courses in programming, cloud, and cybersecurity.",

    contactTitle: "Contact"
  },

  pt: {
    subtitle: "DevOps & Cibersegurança",

    p1: "Apaixonado por tecnologia e segurança.",
    p2: "Focado em DevOps e cloud.",
    p3: "Ativo em eventos tecnológicos.",
    p4: "Objetivo: trabalhar internacionalmente.",

    btnCv: "Ver CV",
    btnContact: "Contacto",

    journeyTitle: "Jornada Profissional",
    journeyText: "Participação em Angola Open Source e Google Developers Angola.",

    certsTitle: "Cursos & Certificados",
    certsText: "Cursos em programação, cloud e segurança.",

    contactTitle: "Contacto"
  }
};

function setLang(lang) {
  const t = translations[lang];

  document.getElementById("subtitle").innerText = t.subtitle;
  document.getElementById("p1").innerText = t.p1;
  document.getElementById("p2").innerText = t.p2;
  document.getElementById("p3").innerText = t.p3;
  document.getElementById("p4").innerText = t.p4;

  document.getElementById("btnCv").innerText = t.btnCv;
  document.getElementById("btnContact").innerText = t.btnContact;

  document.getElementById("journeyTitle").innerText = t.journeyTitle;
  document.getElementById("journeyText").innerText = t.journeyText;

  document.getElementById("certsTitle").innerText = t.certsTitle;
  document.getElementById("certsText").innerText = t.certsText;

  document.getElementById("contactTitle").innerText = t.contactTitle;
}