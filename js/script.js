document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLang") || "en";
    const savedFlag = localStorage.getItem("selectedFlag") || "img/icons/gb.png";
    const savedLangName = localStorage.getItem("selectedLangName") || "English";

    changeLanguage(savedLang, savedFlag, savedLangName);

    const langBtn = document.querySelector(".lang-btn");
    const langMenu = document.getElementById("lang-menu");

    if (langBtn && langMenu) {
        langBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            langMenu.classList.toggle("open");
        });

        document.addEventListener("click", function (event) {
            if (!langMenu.contains(event.target) && !langBtn.contains(event.target)) {
                langMenu.classList.remove("open");
            }
        });
    }
});

function changeLanguage(lang, flagSrc, langName) {
    const selectedFlag = document.getElementById("selected-flag");
    const selectedLang = document.getElementById("selected-lang");
    const langMenu = document.getElementById("lang-menu");

    if (selectedFlag) selectedFlag.src = flagSrc;
    if (selectedLang) selectedLang.innerText = langName;
    if (langMenu) langMenu.classList.remove("open");

    for (const key in translations[lang]) {
        let element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[lang][key];
        }
    }

    localStorage.setItem("selectedLang", lang);
    localStorage.setItem("selectedFlag", flagSrc);
    localStorage.setItem("selectedLangName", langName);
}
