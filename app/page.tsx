import Image from "next/image";

const services = [
  "מצלמות אבטחה",
  "אזעקות",
  "אינטרקום",
  "בקרות כניסה",
  "מרכזיות ותקשורת",
  "שליטה וניהול מרחוק",
];

const reasons = [
  "ניסיון של עשרות שנים",
  "שירות אישי וזמין",
  "התקנה נקייה ומקצועית",
  "פתרונות יציבים לטווח ארוך",
  "סטנדרט ביצוע גבוה",
];

const testimonials = [
  {
    quote:
      "אופק ליוו אותנו משלב התכנון ועד ההפעלה. העבודה נקייה, מסודרת, והמערכת פשוט עובדת.",
    name: "משפחת רוזנפלד, רעננה",
    date: "12.03.2026",
    rating: 5,
    type: "בית פרטי",
  },
  {
    quote:
      "במשרד היינו צריכים פתרון אבטחה ותקשורת שלא יעצור את העבודה. קיבלנו ביצוע מדויק ושירות רגוע.",
    name: "מנהלת תפעול, חברת שירותים ארצית",
    date: "28.01.2026",
    rating: 4.5,
    type: "עסק",
  },
  {
    quote:
      "התקינו לנו מצלמות ואינטרקום בבית. הגיעו בזמן, עבדו נקי והסבירו בסבלנות איך להשתמש באפליקציה.",
    name: "עמית לוי, הוד השרון",
    date: "09.12.2025",
    rating: 5,
    type: "בית פרטי",
  },
  {
    quote:
      "שדרגנו בקרת כניסה ומרכזייה במשרד. ההתקנה הייתה שקטה, בלי בלגן ובלי לעצור את יום העבודה.",
    name: "רונית ברק, מנהלת משרד",
    date: "17.11.2025",
    rating: 4,
    type: "משרדים",
  },
  {
    quote:
      "אחרי שנים של תקלות עם מערכת ישנה, קיבלנו פתרון יציב וברור. מרגישים שיש למי לפנות.",
    name: "יואב מזרחי, כפר סבא",
    date: "04.10.2025",
    rating: 4.5,
    type: "בית פרטי",
  },
  {
    quote:
      "מקצועיים מאוד. התכנון היה מדויק, הכבלים הוסתרו כמו שצריך, והכול נראה חלק מהמבנה.",
    name: "דנה שלו, סטודיו אדריכלות",
    date: "22.08.2025",
    rating: 5,
    type: "עסק",
  },
  {
    quote:
      "שירות מהיר, אדיב ומסודר. גם אחרי ההתקנה ענו לנו על שאלות ועזרו לכוון את המערכת.",
    name: "משפחת גולן, ראשון לציון",
    date: "15.07.2025",
    rating: 4.5,
    type: "בית פרטי",
  },
  {
    quote:
      "היינו צריכים פתרון אבטחה לכמה אזורים בחברה. אופק נתנו מענה פרקטי ולא מכרו דברים מיותרים.",
    name: 'אורי דביר, סמנכ"ל תפעול',
    date: "02.06.2025",
    rating: 5,
    type: "חברה",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="checkIcon">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`דירוג ${rating} מתוך 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            rating >= star
              ? "star full"
              : rating >= star - 0.5
              ? "star half"
              : "star"
          }
        >
          ★
        </span>
      ))}
      <strong>{rating % 1 === 0 ? rating : rating.toFixed(1)}</strong>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="hero pageSection" id="top">
        <div className="heroLines" aria-hidden="true">
          <div className="heroLine" />
          <div className="heroLine" />
          <div className="heroLine" />
        </div>
        <div className="heroPlate" aria-hidden="true" />

        <nav className="nav" aria-label="ניווט ראשי">
          <a href="#top" className="navMark">
            אופק מערכות
          </a>
          <div className="navLinks">
            <a href="#audiences">למי זה מתאים</a>
            <a href="#services">פתרונות</a>
            <a href="#contact">יצירת קשר</a>
          </div>
        </nav>

        <div className="heroInner">
          {/* Logo — first in DOM = right column in RTL */}
          <div className="heroLogoWrap reveal">
            <Image
              src="/ofek-brand-transparent.png"
              alt="אופק מערכות"
              width={1125}
              height={543}
              priority
              className="heroLogo"
            />
          </div>

          {/* Copy — second in DOM = left column in RTL */}
          <div className="heroCopy reveal d1">
            <p className="eyebrow">מאז 1991</p>
            <h1>
              <span>טכנולוגיה חכמה.</span>
              <span>ראש שקט.</span>
            </h1>
            <p className="heroText">
              פתרונות אבטחה ותקשורת מתקדמים לבתים פרטיים, עסקים וחברות — עם
              ניסיון, שירות וסטנדרט ביצוע מאז 1991.
            </p>
            <div className="heroActions">
              <a href="#contact" className="button primary">
                לתיאום שיחת ייעוץ
                <ArrowIcon />
              </a>
              <a href="#services" className="button secondary">
                לפתרונות שלנו
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST ─────────────────────────────────────────── */}
      <section className="trust sectionBand pageSection">
        <div className="container trustLayout reveal">
          <div className="trustStatement">
            <p className="sectionKicker">אמינות שנבנית לאורך זמן</p>
            <h2>מאז 1991 — מתקינים אמינות, שירות וראש שקט</h2>
          </div>

          <div className="trustRight">
            <div className="trustMetric">
              <strong>35</strong>
              <span>שנות ניסיון</span>
            </div>
            <p className="trustBody">
              התקנה טובה אינה מתחילה במוצר. היא מתחילה באבחון נכון, תכנון נקי,
              התאמה למבנה ולשגרה, ושירות שממשיך גם אחרי שהמערכת עובדת.
            </p>
          </div>
        </div>
      </section>

      {/* ─── AUDIENCES ─────────────────────────────────────── */}
      <section className="audiences pageSection" id="audiences">
        <div className="container">
          <div className="sectionHeader reveal">
            <p className="sectionKicker">שני עולמות, אותו סטנדרט</p>
            <h2>פתרונות שמותאמים לבית, לעסק ולמי שנמצא בתוכם</h2>
          </div>

          <div className="audienceSplit">
            {/* Home first → right column in RTL (matches reference) */}
            <article className="audiencePanel reveal">
              <Image
                src="/ofek-home-entrance.png"
                alt="כניסה לבית פרטי עם מצלמת אבטחה ואינטרקום"
                width={1536}
                height={864}
                className="audienceImage"
              />
              <div className="audienceCard">
                <h3>לבתים פרטיים</h3>
                <p>
                  מצלמות, אזעקות, אינטרקום ושליטה מרחוק שמתחברים לשגרת הבית
                  בלי להפוך אותו לאתר עבודה. תכנון אלגנטי, התקנה נקייה
                  ותפעול פשוט למשפחה.
                </p>
              </div>
            </article>

            {/* Office second → left column in RTL (matches reference) */}
            <article className="audiencePanel reveal d1">
              <Image
                src="/ofek-office-access.png"
                alt="לובי משרד מודרני עם בקרת כניסה ומצלמות אבטחה"
                width={1641}
                height={925}
                className="audienceImage"
              />
              <div className="audienceCard">
                <h3>לעסקים וחברות</h3>
                <p>
                  מערכות אבטחה, בקרת כניסה, תקשורת ומרכזיות לעבודה רציפה.
                  פתרון יציב שמכבד את סביבת העבודה, את העובדים ואת הצורך
                  בשליטה אמינה.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────── */}
      <section className="services sectionBand pageSection" id="services">
        <div className="container servicesLayout">
          <div className="servicesIntro reveal">
            <p className="sectionKicker">הפתרונות שלנו</p>
            <h2>מערכת אחת מתוכננת היטב עדיפה על אוסף רכיבים יקרים</h2>
            <p className="servicesIntroBody">
              אופק מערכות מחברת בין אבטחה, תקשורת וניהול יומיומי למערכת
              ברורה, חזקה ונוחה לתחזוקה.
            </p>
          </div>

          <div className="serviceList reveal d1">
            {services.map((service) => (
              <div className="serviceRow" key={service}>
                <strong>{service}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY OFEK ──────────────────────────────────────── */}
      <section className="why pageSection">
        <div className="container whyLayout">
          <div className="whyVisual reveal">
            <Image
              src="/ofek-clean-installation.png"
              alt="התקנת מערכת אבטחה מקצועית ונקייה"
              width={1024}
              height={1536}
              className="whyImage"
            />
          </div>

          <div className="whyContent reveal d1">
            <p className="sectionKicker">למה אופק מערכות</p>
            <h2>ביצוע שקט, מדויק, ומוכן לשנים קדימה</h2>
            <div className="reasonList">
              {reasons.map((reason) => (
                <div className="reason" key={reason}>
                  <CheckIcon />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────── */}
      <section className="testimonials sectionBand pageSection">
        <div className="container">
          <div className="sectionHeader reveal">
            <p className="sectionKicker">אמון לקוחות</p>
            <h2>שירות שמרגישים גם אחרי ההתקנה</h2>
          </div>

          <div className="reviewScroller" aria-label="ביקורות לקוחות">
            {testimonials.map((item) => (
              <figure
                className="testimonial reveal"
                key={`${item.name}-${item.date}`}
              >
                <div className="reviewTop">
                  <StarRating rating={item.rating} />
                  <span>{item.date}</span>
                </div>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.type}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────── */}
      <section className="finalCta pageSection" id="contact">
        <div className="container finalInner reveal">
          <p className="sectionKicker">מתכננים מערכת חדשה או משדרגים קיימת?</p>
          <h2>
            רוצים מערכת שעובדת
            <br />
            כמו שצריך מהיום הראשון?
          </h2>
          <a
            href="https://wa.me/972522521715"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary large"
          >
            דברו איתנו
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
