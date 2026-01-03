
"use client";

import { useState } from "react";

enum Language {
  EN = "en",
  TR = "tr",
  ES = "es",
}

const signUpLinks: Record<Language, string> = {
  [Language.EN]: "https://forms.gle/uwdbH6nFLM9Tzs527",
  [Language.TR]: "https://forms.gle/qnoEtL5UXQLR6vrLA",
  [Language.ES]: "https://forms.gle/DNFQhHSSuMyNqFGu6",
};

const signUpText: Record<Language, string> = {
  [Language.EN]: "Click here to fill in the sign up form.",
  [Language.TR]: "Kayıt formunu doldurmak için buraya tıklayın.",
  [Language.ES]: "Haz clic aquí para completar el formulario de registro.",
};

const selectLanguageLabel: Record<Language, string> = {
  [Language.EN]: "Select Language:",
  [Language.TR]: "Dil Seçiniz:",
  [Language.ES]: "Seleccionar idioma:",
};

const languageLabels: Record<Language, string> = {
  [Language.EN]: "English",
  [Language.TR]: "Türkçe",
  [Language.ES]: "Español",
};

const languageOptions = Object.values(Language) as Language[];

export default function SignUpSection() {
  const [language, setLanguage] = useState<Language>(Language.EN);

 return (
    <section className="sign-up-section">
      <h2 className="sign-up-title">
        {language === Language.TR
          ? "Kayıt Ol"
          : language === Language.ES
          ? "Regístrate"
          : "Sign Up"}
      </h2>

      <div className="language-selector-wrapper">
        <label htmlFor="language-select" style={{ marginRight: '8px' }}>
          {selectLanguageLabel[language]}
        </label>
        
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="language-select-box"
        >
          {languageOptions.map((lang) => (
            <option key={lang} value={lang}>
              {languageLabels[lang]}
            </option>
          ))}
        </select>
      </div>

      <div className="sign-up-link-container">
        <p>
          <a
            href={signUpLinks[language]}
            target="_blank"
            rel="noopener noreferrer"
            className="sign-up-link"
          >
            {signUpText[language]}
          </a>
        </p>
      </div>
    </section>
  );
}
