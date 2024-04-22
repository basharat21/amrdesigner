interface SchemasProps {
  schemaData: any;
}
function formatDate(date:any) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const timezoneOffset = -date.getTimezoneOffset() / 60;
  const offset = timezoneOffset >= 0 ? `+${timezoneOffset}` : timezoneOffset;
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offset}:00`;
}
const Schemas: React.FC<SchemasProps> = ({ schemaData }) => {
    const postdate=new Date();
    const datePublished = formatDate(postdate);
    const dateModified = formatDate(postdate);
    const jsonData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": "https://www.amarwebdesigner.com/"+`${schemaData.slug}`+"#article",
            "isPartOf": {
              "@id": "https://www.amarwebdesigner.com/"+`${schemaData.slug}`
            },
            "author": {
              "name": "Amardeep Chahal - Website Designer"
            },
            "headline":  `${schemaData.title}`,
            datePublished,
            dateModified,
            "mainEntityOfPage": {
              "@id": "https://www.amarwebdesigner.com/"+`${schemaData.slug}`
            },
            "wordCount": 238,
            "commentCount": 0,
            "publisher": {
              "@id": "https://www.amarwebdesigner.com/#organization"
            },
            "image": {
              "@id": "https://www.amarwebdesigner.com/#primaryimage"
            },
            "thumbnailUrl": "https://www.amarwebdesigner.com/images/amardeep-singh-website-designer-maker-in-india.jpg?fit=1920%2C1080&ssl=1",
            "keywords": [
              "Website designer in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Website maker in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Web developer in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Best website designer in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Best web designer in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Affordable web development services in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Web Design Company in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Web development company "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Website Development Company in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Website Design Company in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Website development "+`${schemaData.acfPageAdditionalOptions.acfCityName}`,
              "Web development in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`
            ],
            "articleSection": [
              " Website Designer in "+`${schemaData.acfPageAdditionalOptions.acfCityName}`
            ],
            "inLanguage": "en-US",
            "potentialAction": [
              {
                "@type": "CommentAction",
                "name": "Comment",
                "target": [
                  "https://www.amarwebdesigner.com/#respond"
                ]
              }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://www.amarwebdesigner.com/"+`${schemaData.slug}`,
            "url": "https://www.amarwebdesigner.com/"+`${schemaData.slug}`,
            "name": "Amardeep Singh | Website Designer | +91-9888940088",
            "isPartOf": {
              "@id": "https://www.amarwebdesigner.com/#website"
            },
            "primaryImageOfPage": {
              "@id": "https://www.amarwebdesigner.com/#primaryimage"
            },
            "image": {
              "@id": "https://www.amarwebdesigner.com/#primaryimage"
            },
            "thumbnailUrl": "https://www.amarwebdesigner.com/images/amardeep-singh-website-designer-maker-in-india.jpg?fit=1920%2C1080&ssl=1",
            datePublished,
            dateModified,
            "inLanguage": "en-US",
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": [
                  "https://www.amarwebdesigner.com/"
                ]
              }
            ]
          },
          {
            "@type": "ImageObject",
            "inLanguage": "en-US",
            "@id": "https://www.amarwebdesigner.com/#primaryimage",
            "url": "https://www.amarwebdesigner.com/images/amardeep-singh-website-designer-maker-in-india.jpg?fit=1920%2C1080&ssl=1",
            "contentUrl": "https://www.amarwebdesigner.com/images/amardeep-singh-website-designer-maker-in-india.jpg?fit=1920%2C1080&ssl=1",
            "width": 1000,
            "height": 1000
          },
          {
            "@type": "WebSite",
            "@id": "https://www.amarwebdesigner.com/#website",
            "url": "https://www.amarwebdesigner.com/",
            "name": "Amardeep Singh | Website Designer | +91-9888940088",
            "description": "",
            "publisher": {
              "@id": "https://www.amarwebdesigner.com/#organization"
            },
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.amarwebdesigner.com/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            ],
            "inLanguage": "en-US"
          },
          {
            "@type": "Organization",
            "@id": "https://www.amarwebdesigner.com/#organization",
            "name": "Amardeep Singh | Website Designer | +91-9888940088",
            "url": "https://www.amarwebdesigner.com/",
            "logo": {
              "@type": "ImageObject",
              "inLanguage": "en-US",
              "@id": "https://www.amarwebdesigner.com/#/schema/logo/image/",
              "url": "https://www.amarwebdesigner.com/images/amardeep-singh-website-designer-maker-in-india.jpg?fit=1122%2C303&ssl=1",
              "contentUrl": "https://www.amarwebdesigner.com/images/amardeep-singh-website-designer-maker-in-india.jpg?fit=1122%2C303&ssl=1",
              "width": 1000,
              "height": 1000,
              "caption": "Amardeep Singh | Website Designer | +91-9888940088"
            },
            "image": {
              "@id": "https://www.amarwebdesigner.com/#/schema/logo/image/"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "6666"
            }
          },
          {
            "@type": "Person",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mohali",
              "addressRegion": "PB",
              "postalCode": "160071",
              "streetAddress": "D151, Phase 8, Industrial Area"
            },
            "colleague": [
              "http://www.amrsoftec.com",
              "http://www.punjabwebdesign.com",
              "https://seodaddy.co"
            ],
            "email": "mailto:info@amrsoftec.com",
            "image": "https://www.amarwebdesigner.com/images/amardeep-singh-website-designer-maker-in-india.jpg",
            "jobTitle": "Website Designer in India",
            "name": "Amardeep Singh Chahal",
            "telephone": "+91-98889-40088",
            "url": "https://www.amarwebdesigner.com"
          },
          {
            "@type": "Service",
            "serviceType": "Amardeep Singh | Website Designer | +91-9888940088",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Amar Website Designer India",
                "location": {
                    "@type": "Place",
                    "geo": {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": `${schemaData.acfPageAdditionalOptions.acfCityLatitude}`,
                            "longitude": `${schemaData.acfPageAdditionalOptions.acfCityLongitude}`
                        },
                        "geoRadius": "20000"
                    }
                }
            },
            "providerMobility": "dynamic",
            "areaServed": {
                "@type": "State",
                "name": `${schemaData.acfPageAdditionalOptions.acfCityName}`
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Website Design, eCommerce Development & SEO Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Web Design Service",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "WordPress Website Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Shopify Website Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Webflow Website Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Wix Website Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Weebly Website Design"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Web Development Service",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "E-Commerce Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Laravel Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Next.js Development"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Digital Marketing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "SEO- Search Engine Optimization"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Local SEO"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "eCommerce SEO"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "WordPress SEO"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Shopify SEO"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "SMM - Social Media Marketing"
                      }
                    }
                  ]
                }
              ]
            }
        }
        ]
      };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
        />
  );
}
export default Schemas;