import React from "react"

interface FeatureDescriptionProps {
  content: string | string[]
  subtitle?: string
  reverse?: boolean
}

export default function FeatureDescription({
  content,
  subtitle,
  reverse = false,
}: FeatureDescriptionProps) {
  if (Array.isArray(content)) {
    return (
      <>
        {subtitle && <p className="feature-subtitle">{subtitle}</p>}
        <ul className={`feature-list ${reverse ? "reverse" : ""}`}>
          {content.map((item, index) => (
            <li key={index} className="feature-list-item">
              {item}
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <>
      {subtitle && <p className="feature-subtitle">{subtitle}</p>}
      <p className="feature-description">{content}</p>
    </>
  )
}
