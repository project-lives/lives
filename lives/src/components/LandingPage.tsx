import Image from "next/image"
import "./landing-page.css"
import FeatureDescription from "./FeatureDescription"
import { getAssetPath } from "@/utils/assets"

const imgWhatsAppImage = "/images/banner.svg"
const imgIcon = "/images/landing-page/icon-placeholder.png"

const navItems = [
  { label: "Home", active: true },
  { label: "About Us", comingSoon: true },
  { label: "Services", comingSoon: true },
  { label: "Our Adventures", comingSoon: true },
  { label: "Contact us", comingSoon: true },
  { label: "Try for Free", comingSoon: true },
  { label: "Language", comingSoon: true },
]

const features = [
  {
    title: "What is LIVES?",
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
    reverse: true,
  },
  {
    title: "What have we achieved so far?",
    subtitle: "In our weekly Minecraft sessions, students have:",
    description: [
      "Engaged in intercultural and multilingual digital learning environment",
      "Practiced English naturally — often without even realizing it",
      "Collaborated in teamwork challenges",
    ],
  },
  {
    title: "What other games can I join?",
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
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <nav className="navigation">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`nav-button ${item.active ? "active" : ""} ${
                item.comingSoon ? "coming-soon" : ""
              }`}
              disabled={item.comingSoon}
            >
              {item.label}
              {item.comingSoon && <span className="badge">Coming Soon</span>}
            </button>
          ))}
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

      {/* Features Section */}
      <section className="features-section">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature ${feature.reverse ? "reverse" : ""}`}
          >
            <div className="feature-icon">
              <img alt={`${feature.title} Icon`} src={feature.img || imgIcon} />
            </div>
            <div className="feature-content">
              <h2 className="feature-title">{feature.title}</h2>
              <FeatureDescription
                content={feature.description}
                subtitle={feature.subtitle}
                reverse={feature.reverse}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
