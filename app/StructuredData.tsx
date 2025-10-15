export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Baraka Mtito Academy",
    "alternateName": "Baraka Mtito School",
    "description": "Quality educational institution in Kibwezi East, Kenya offering primary and secondary education",
    "url": "https://www.barakamtitoacademy.co.ke",
    "logo": "https://www.barakamtitoacademy.co.ke/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your school address here",
      "addressLocality": "Kibwezi East",
      "addressRegion": "Kibwezi East",
      "addressCountry": "KE"
    },
    "telephone": "+254746407573",
    "email": " barakamtitoacademy@gmail.com",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61582130754565",
      "https://x.com/BarakaMtito?t=k6ilY6Rm9Dl5FozJLmXgpQ&s=09"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}