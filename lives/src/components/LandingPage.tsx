import Image from "next/image"
import "./landing-page.css"
import FeatureDescription from "./FeatureDescription"
import { getAssetPath } from "@/utils/assets"
import { title } from "process"
import { useState } from "react";

const signUpLinks = {
    en: "https://forms.gle/uwdbH6nFLM9Tzs527",
    tr: "https://forms.gle/qnoEtL5UXQLR6vrLA",
    es: "https://forms.gle/DNFQhHSSuMyNqFGu6",
};

const imgWhatsAppImage = "/images/banner.svg"
const imgIcon = "/images/landing-page/icon-placeholder.png"

const navItems = [
  { label: "Home", active: true },
  { label: "Contact us", href: "#footer" },
  { label: "About Us", comingSoon: true },
  { label: "Services", comingSoon: true },
  { label: "Our Adventures", comingSoon: true },
  { label: "Try for Free", comingSoon: true },
  { label: "Language", comingSoon: true },
]

const features = [
  {
    title: "What is LIVES?",
    img: "/images/what.png",
    description:
      "A Helsinki-based project that teaches English through collaborative gaming. We use video games such as Minecraft to help learners communicate, create, and solve problems in English.",
  },
  {
    title: "Who is this for?",
    description: [
      "Kids who want to learn English in a playful, meaningful way.",
      "Teens and adults who prefer learning through interaction instead of textbooks.",
      "Anyone who loves games and wants to improve their communication skills.",
      "Families seeking safe online spaces  for their kids.",
    ],
    img: "/images/who.png",
    reverse: true,
  },
  {
    title: "How does it work?",
    img: "/images/how.png",
    description: [
      "Sign up to our service",
      "Play, build, explore, and collaborate with peers",
      "Use English in engaging, authentic, and interactive settings",
      "Speak, listen, and learn naturally without pressure",
    ],
  },
  {
    title: "What have we achieved so far?",
    useCheckboxes: true,
    subtitle: "In our weekly Minecraft sessions, students have:",
    img: "/images/achieve.png",
    description: [
      "Engaged in intercultural and multilingual digital learning environment",
      "Practiced English naturally — often without even realizing it",
      "Collaborated in teamwork challenges",
    ],
  },
  {
    title: "What other games can I join?",
    useCheckboxes: true,
    img: "/images/games.png",
    description: [
      "Among Us",
      "Counter-Strike 2",
      "Grand Theft Auto Online",
      "Overcooked 2!",
      "And many more!",
    ],
    reverse: true,
  },
  {
    title: "Ready to level up your English?",
    description: [
      "Join our groups for kids and adults",
      "Check our link in bio or scan QR code to join our waiting list",
      "Let’s learn by playing. Let’s learn by living",
    ],
    img: "/images/qr-code.png",
    },
]
 


export default function LandingPage() {
    const [language, setLanguage] = useState<keyof typeof signUpLinks>("en");

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <nav className="navigation">
          {navItems.map((item, index) => {
            const className = `nav-button ${item.active ? "active" : ""} ${
              item.comingSoon ? "coming-soon" : ""
            }`

            if (item.href) {
              return (
                <a key={index} href={item.href} className={className}>
                  {item.label}
                </a>
              )
            }

            return (
              <button
                key={index}
                className={className}
                disabled={item.comingSoon}
              >
                {item.label}
                {item.comingSoon && <span className="badge">Coming Soon</span>}
              </button>
            )
          })}
        </nav>

        <div className="hero-image-container">
          <Image
            alt="Hero background"
            className="hero-image"
            src={getAssetPath(imgWhatsAppImage)}
            width={435}
            height={213}
          />
        </div>
          </header>

          
      {/* Language Selector */}
      <div className="language-selector">
        <label>Select Language: </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as keyof typeof signUpLinks)}

        >
          <option value="en">English</option>
          <option value="tr">Turkish</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      {/* Sign Up Section */}
      <section className="sign-up-section">
        <h2>Sign Up</h2>
        <p>
          <a
            href={signUpLinks[language]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to fill in sign up form.
          </a>
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature ${feature.reverse ? "reverse" : ""}`}
          >
            <div className="feature-icon">
              <img
                alt={`${feature.title} Icon`}
                src={getAssetPath(feature.img) || imgIcon}
              />
            </div>
            <div className="feature-content">
              <h2 className="feature-title">{feature.title}</h2>
              <FeatureDescription
                content={feature.description}
                subtitle={feature.subtitle}
                reverse={feature.reverse}
                useCheckboxes={feature.useCheckboxes}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer id="footer" className="footer-section">
        <div className="footer-content">
          <h2 className="footer-title">Get in Touch</h2>
          <p className="footer-description">
            Have questions or want to join our community? We&apos;d love to hear
            from you!
          </p>
          <a
            href="mailto:project.lives.project@gmail.com"
            className="footer-email"
          >
            project.lives.project@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}
