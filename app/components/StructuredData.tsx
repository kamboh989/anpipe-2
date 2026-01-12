import Script from "next/script";
import { site } from "@/lib/site";

export default function StructuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.organization.legalName,
    url: site.url,
    sameAs: site.organization.sameAs,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${site.author.name}, ${site.author.suffix}`,
    jobTitle: site.author.jobTitle,
    url: site.url,
    sameAs: site.organization.sameAs,
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
