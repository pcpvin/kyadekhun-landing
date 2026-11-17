import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { ArrowUp, ArrowUpRight, Check, Drama, Heart, Plus, Play, Target, Tv, X, Zap } from 'lucide-react'
import { FAQ, HUB_LINKS, LEGAL_LINKS, NAV_LINKS, PLAY_URL, QUOTES, ROUTES, SOCIAL } from './content'
import { EASE, Reveal, Spotlight, SplitText } from './lib'

/* ───────────── COMPARE ───────────── */
export function Compare() {
  return (
    <section className="sec" id="compare">
      <div className="wrap">
        <SplitText
          text="Because Your Taste Should Never Be Dictated by Corporate Quotas"
          className="title"
          accent={['Never', 'Corporate', 'Quotas']}
        />
        <Reveal delay={0.1}>
          <p className="lead">
            Most streaming rows exist to push new licensing deals and big ad budgets. KyaDekhun works differently,
            pairing real curation with honest movie recommendations built around storytelling craft.
          </p>
        </Reveal>
        <div className="vs">
          <Reveal>
            <div className="vs-card">
              <span className="badge off">
                <X size={14} /> Standard Streaming Feeds
              </span>
              <p>
                Driven by licensing quotas and paid promotion, standard feeds trap you in forty minutes of endless
                scrolling inside a walled garden, ending in tired eyes and cold dinners.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="vs-card us">
              <span className="badge on">
                <Check size={14} /> The KyaDekhun Discovery Engine
              </span>
              <p>
                Built around genuine taste and narrative quality, KyaDekhun gives you three accurate choices in thirty
                seconds across major Indian OTT platforms for instant playback and calm evenings.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ───────────── ROUTES ───────────── */
const ICONS = [Zap, Drama, Tv, Target]

export function Routes() {
  return (
    <section className="sec" id="picker">
      <div className="wrap">
        <SplitText text="Explore Every Tool Inside KyaDekhun" className="title" accent={['Every', 'Tool']} />
        <div className="cards two">
          {ROUTES.map((e, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={e.t} delay={(i % 2) * 0.1}>
                <Spotlight className="card link">
                  <span className="ico">
                    <Icon size={22} />
                  </span>
                  <h3>{e.t}</h3>
                  <p>{e.d}</p>
                  <a className="more" href={e.h}>
                    Explore <ArrowUpRight size={16} />
                  </a>
                </Spotlight>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────── QUOTES ───────────── */
export function Quotes() {
  return (
    <section className="sec">
      <div className="wrap">
        <SplitText
          text="Trusted by Film Lovers Who Refuse to Waste Their Time"
          className="title"
          accent={['Refuse', 'Waste', 'Time']}
        />
        <div className="cards three">
          {QUOTES.map((q, i) => (
            <Reveal key={q.a} delay={i * 0.1}>
              <Spotlight className="card quote">
                <span className="qm" aria-hidden>“</span>
                <blockquote>{q.q}</blockquote>
                <cite>
                  <b>{q.a}</b>
                  <span>{q.p}</span>
                </cite>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── FAQ ───────────── */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="sec" id="faq">
      <div className="wrap faq">
        <div>
          <SplitText text="Frequently Asked Questions" className="title" accent={['Asked', 'Questions']} />
        </div>
        <div className="acc">
          {FAQ.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.05} y={20}>
                <div className={`item ${isOpen ? 'open' : ''}`}>
                  <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>{f.q}</span>
                    <motion.i animate={{ rotate: isOpen ? 135 : 0 }} transition={{ duration: 0.35, ease: EASE }}>
                      <Plus size={20} />
                    </motion.i>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────── CTA + FOOTER ───────────── */
export function Cta() {
  return (
    <section className="sec cta-sec" id="download">
      <div className="wrap">
        <Reveal y={60}>
          <div className="cta">
            <div className="orb o3" />
            <motion.img
              src="/img/logo.webp"
              alt="KyaDekhun app icon"
              className="cta-logo"
              width={96}
              height={96}
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="title">
              Ready to <span className="grad-text">Stop Scrolling</span> and Start Watching?
            </h2>
            <p className="lead">
              Cinema was made to stay with you long after the credits roll, not trap you in an endless wall of
              thumbnails. Trust your taste, pick your mood, and open the movie recommendation app built for people who
              genuinely love films.
            </p>
            <div className="cta-actions">
              <a className="btn lg" href="#mood">
                Launch the Movie Recommendation App
              </a>
              <a className="btn lg ghost" href={PLAY_URL} target="_blank" rel="noreferrer">
                <Play size={18} fill="currentColor" /> Download Free App
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="f-brand">
            <a className="f-logo" href="#top" aria-label="KyaDekhun home">
              <img src="/img/logo.webp" alt="" width={52} height={52} />
              <span>
                <b>
                  Kya<i>Dekhun</i>
                </b>
                <small>Know what to watch.</small>
              </span>
            </a>
            <p>
              KyaDekhun helps movie lovers and casual viewers cut through streaming clutter with instant mood and
              vibe-based recommendations.
            </p>
            <div className="social">
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="KyaDekhun on Instagram">
                <img src="/logos/instagram.png" alt="" width={20} height={20} />
              </a>
            </div>
          </div>

          <nav className="f-col" aria-label="Navigation">
            <h4>Navigation</h4>
            {NAV_LINKS.map(([l, h]) => (
              <a key={l} href={h}>
                {l}
              </a>
            ))}
            <a className="hl" href={PLAY_URL} target="_blank" rel="noreferrer">
              Google Play Store App
            </a>
          </nav>

          <nav className="f-col" aria-label="Streaming hub">
            <h4>Streaming Hub</h4>
            {HUB_LINKS.map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer">
                {l}
              </a>
            ))}
          </nav>

          <nav className="f-col" aria-label="Legal and support">
            <h4>Legal &amp; Support</h4>
            {LEGAL_LINKS.map(([l, h]) => (
              <a key={l} href={h}>
                {l}
              </a>
            ))}
            <p className="f-note">OTT platform names and logos are property of their respective owners.</p>
          </nav>
        </div>

        <p className="attrib">
          Streaming data by{' '}
          <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" aria-label="TMDB">
            <img src="/logos/tmdb.png" alt="TMDB" height={24} />
          </a>
          . Availability changes; links go to the streaming service.
        </p>

        <div className="f-bottom">
          <span>
            © 2026 <b>KyaDekhun</b>. All rights reserved.
          </span>
          <span className="made">
            Made with <Heart size={14} fill="currentColor" /> for movie lovers everywhere by
            <em>Techviora</em>
          </span>
          <a className="to-top" href="#top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
