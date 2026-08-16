import "./InfoPage.css";
import "./PropertiesPage.css";

const hotelPhotos = {
  boardman: [
    "https://www.hilton.com/im/en/YNGOHHX/25377676/image-6-copy.jpg?ch=2799&cw=5000&gravity=NorthWest&impolicy=crop&rh=430&rw=768&xposition=0&yposition=271",
    "https://www.hilton.com/im/en/YNGOHHX/25377686/image-8-copy.jpg?ch=2723&cw=4864&gravity=NorthWest&impolicy=crop&rh=430&rw=768&xposition=0&yposition=139",
  ],
  canton: [
    "https://www.hilton.com/im/en/CAKNCHT/26770045/caknc-exterior.jpg?ch=3324&cw=5000&gravity=NorthWest&impolicy=crop&rh=425&rw=640&xposition=0&yposition=284",
    "https://www.hilton.com/im/en/CAKNCHT/26769963/caknc-1-king-suite-bedroom-nkspa-nksqg-nksqb-nksqa-nks.jpg?ch=3263&cw=4894&gravity=NorthWest&impolicy=crop&rh=427&rw=640&xposition=52&yposition=0",
  ],
  solon: [
    "https://www.hilton.com/im/en/CLESLHX/27042050/image-1.jpg?ch=2966&cw=4449&gravity=NorthWest&impolicy=crop&rh=427&rw=640&xposition=275&yposition=0",
    "https://www.hilton.com/im/en/CLESLHX/13928865/dsc-6457-edit.jpg?ch=3333&cw=5000&gravity=NorthWest&impolicy=crop&rh=427&rw=640&xposition=0&yposition=25",
  ],
  barkeyville: [
    "https://images.trvl-media.com/lodging/1000000/900000/899800/899772/005021b3.jpg?impolicy=resizecrop&ra=fit&rw=900",
    "https://images.trvl-media.com/lodging/1000000/900000/899800/899772/52f64591.jpg?h=800&impolicy=fcrop&w=1200",
  ],
  fairfield: [
    "https://cache.marriott.com/content/dam/marriott-renditions/YNGFS/yngfs-lobby-1883-hor-wide.jpg?downsize=1336px:*&interpolation=progressive-bilinear&output-quality=70",
    "https://cache.marriott.com/content/dam/marriott-renditions/YNGFS/yngfs-guestroom-1172-hor-wide.jpg?downsize=1336px:*&interpolation=progressive-bilinear&output-quality=70",
  ],
};

const properties = [
  {
    name: "Hampton Inn Youngstown/Boardman",
    location: "Boardman, Ohio",
    brand: "Hampton Inn by Hilton",
    photos: hotelPhotos.boardman,
    description:
      "Reach us from I-680, just 10 minutes from Youngstown, Youngstown State University, Covelli Center, and the Butler Institute of American Art. The hotel is surrounded by parks, with Reserve Run and Mill Creek Golf Courses within 15 minutes, plus neighborhood dining and shopping nearby. Guests can enjoy free hot breakfast and WiFi.",
    highlights: [
      "Near I-680",
      "Free hot breakfast",
      "Close to Youngstown",
    ],
    mapQuery: "Hampton Inn Youngstown Boardman Ohio",
  },
  {
    name: "Home2 Suites by Hilton Canton",
    location: "Canton, Ohio",
    brand: "Home2 Suites by Hilton",
    photos: hotelPhotos.canton,
    description:
      "An all-suite extended-stay hotel in Canton with easy access to Belden Village, local dining, and the Pro Football Hall of Fame. Spacious suites, in-room conveniences, free WiFi, breakfast, an indoor pool, and fitness amenities make it a flexible stay for business travelers, families, and longer visits.",
    highlights: [
      "All-suite hotel",
      "Near Hall of Fame",
      "Indoor pool",
    ],
    mapQuery: "Home2 Suites by Hilton Canton Ohio",
  },
  {
    name: "Hampton Inn Cleveland-Solon",
    location: "Solon, Ohio",
    brand: "Hampton Inn by Hilton",
    photos: hotelPhotos.solon,
    description:
      "Located in Solon's business district, this Hampton Inn sits near Aurora Road dining, local offices, and entertainment. Guests are within reach of major Solon employers, MGM Northfield Park, Aurora Farms Premium Outlets, and downtown Cleveland, with free hot breakfast, WiFi, an indoor pool, and fitness amenities.",
    highlights: [
      "Business district",
      "Free hot breakfast",
      "Indoor pool",
    ],
    mapQuery: "Hampton Inn Cleveland Solon Ohio",
  },
  {
    name: "Motel 6 Barkeyville, PA",
    location: "Barkeyville, Pennsylvania",
    brand: "Motel 6",
    photos: hotelPhotos.barkeyville,
    description:
      "A straightforward roadside stay for travelers moving through the Barkeyville area, with practical access to regional highways and nearby stops. The property is positioned for guests who want simple lodging, easy parking, and efficient service during a quick overnight stay.",
    highlights: [
      "Roadside access",
      "Simple overnight stays",
      "Easy parking",
    ],
    mapQuery: "Motel 6 Barkeyville Pennsylvania",
  },
  {
    name: "Fairfield Inn & Suites Youngstown/Austintown",
    location: "Austintown, Ohio",
    brand: "Fairfield Inn & Suites by Marriott",
    photos: hotelPhotos.fairfield,
    description:
      "Set just off Interstate 80 in the Mahoning Valley, Fairfield Inn & Suites Youngstown/Austintown keeps guests close to Hollywood Gaming, Mill Creek MetroParks, Youngstown State University, Covelli Center, and area employers. The hotel offers free breakfast, WiFi, a bright lobby, fitness amenities, and an indoor pool.",
    highlights: [
      "Off I-80",
      "Free breakfast",
      "Indoor pool",
    ],
    mapQuery: "Fairfield Inn Suites Youngstown Austintown Ohio",
  },
];

function PropertiesPage() {
  return (
    <main className="properties-page">
      <section className="properties-hero">
        <img
          src={hotelPhotos.boardman[0]}
          alt="Ascend Hotel Group property exterior"
        />
        <div className="properties-hero-overlay"></div>
        <div className="properties-hero-content">
          <p>Ascend Hotel Group</p>
          <h1>Properties</h1>
        </div>
      </section>

      <section className="properties-intro">
        <p>Our Portfolio</p>
        <h2>Branded hotels managed with consistency, care, and ownership focus.</h2>
      </section>

      <section className="properties-list" aria-label="Ascend Hotel Group portfolio">
        {properties.map((property, index) => (
          <article
            className={
              index % 2 === 0
                ? "portfolio-card"
                : "portfolio-card portfolio-card-reverse"
            }
            key={property.name}
          >
            <div className="portfolio-images">
              <img
                alt={`${property.name} main preview`}
                className="portfolio-main-image"
                src={property.photos[0]}
              />
              <img
                alt={`${property.name} secondary preview`}
                className="portfolio-accent-image"
                src={property.photos[1]}
              />
            </div>

            <div className="portfolio-info">
              <div className="portfolio-card-header">
                <p className="portfolio-brand">{property.brand}</p>
                <p className="portfolio-location">{property.location}</p>
              </div>

              <h3>{property.name}</h3>
              <p className="portfolio-description">{property.description}</p>

              <ul className="portfolio-highlights">
                {property.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="portfolio-card-footer">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    property.mapQuery
                  )}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  View Location
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default PropertiesPage;
