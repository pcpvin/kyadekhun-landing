import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { MOODS, PROBLEMS, STEPS } from './content'
import { Counter, EASE, Phone, Reveal, Spotlight, SplitText } from './lib'

/* ───────────── SECOND PAGE: story intro ───────────── */
export function Intro() {
  return (
    <section className="sec intro" id="intro">
      <div className="wrap">
        <div className="intro-stack">
          <Reveal y={40}>
            <p className="i-a">
              You sit down after a long day, open a streaming app, and somehow spend forty minutes watching trailers
              instead of an actual film.
            </p>
          </Reveal>
          <Reveal y={40} delay={0.12}>
            <p className="i-b">Wondering which movie should I watch shouldn’t feel like a second job.</p>
          </Reveal>
          <Reveal y={40} delay={0.24}>
            <p className="i-c">
              <span className="grad-text">
                KyaDekhun is a fast, distraction-free movie recommendation app that helps you find the right film
                across Netflix, Prime Video, and JioHotstar in under thirty seconds.
              </span>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <a className="btn lg" href="#mood">
            Launch the Movie Recommendation App <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────── PARADOX + PROBLEMS ───────────── */
export function Why() {
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <SplitText
          text="Because Ten Thousand Titles Shouldn’t Mean Zero Peace of Mind"
          className="title"
          accent={['Zero', 'Peace', 'of', 'Mind']}
        />
        <Reveal delay={0.1}>
          <p className="lead">
            Having every film ever made inside one screen sounds like a dream until it is 11 PM and your brain is
            tired. Psychologists call it overchoice. When you face too many uncurated doors at once, you freeze and fall
            back on an old sitcom rerun you have already seen ten times. Built as a calm, human-centered movie
            recommendation app, KyaDekhun clears out the noise and gives you back your evening.
          </p>
        </Reveal>

        <div className="sub-head">
          <SplitText
            text="We Have All Lost Entire Evenings to the Endless Feed"
            className="title sm"
            accent={['Endless', 'Feed']}
          />
        </div>
        <div className="cards">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <Spotlight className="card">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── STEPS ───────────── */
export function Steps() {
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <SplitText
          text="How to Decide What to Watch in Under Two Minutes"
          className="title"
          accent={['Under', 'Two', 'Minutes']}
        />
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.12} y={50}>
              <li>
                <motion.span
                  className="step-n"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.2 + i * 0.12 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ───────────── MOOD FINDER ───────────── */
export function Mood() {
  const [i, setI] = useState(0)
  const m = MOODS[i]
  return (
    <section className="sec mood" id="mood" style={{ ['--mc' as string]: m.c, ['--mc2' as string]: m.c2 }}>
      <div className="wrap mood-grid">
        <div>
          <SplitText text="Tell Us Your Mood. We Will Find Your Story." className="title" accent={['Mood.', 'Story.']} />
          <Reveal delay={0.1}>
            <p className="lead">
              A movie is only as good as the moment you watch it. Pick how you feel tonight to get live movie
              recommendations in real time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="moods" role="group" aria-label="Pick how you feel tonight">
              {MOODS.map((mo, k) => (
                <button key={mo.n} className="chip" aria-pressed={k === i} onClick={() => setI(k)}>
                  {k === i && (
                    <motion.span layoutId="chip-bg" className="chip-bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                  )}
                  <span>Something {mo.n}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <motion.article className="ticket" aria-live="polite" layout>
              <AnimatePresence mode="wait">
                <motion.div
                  key={m.n}
                  initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <h3>Something {m.n}</h3>
                  <p>{m.t}</p>
                </motion.div>
              </AnimatePresence>
            </motion.article>
          </Reveal>
        </div>
        <Reveal className="mood-phone" y={60}>
          <div className="glow-ring" />
          <motion.div whileHover={{ rotate: -2, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 18 }}>
            <Phone src="/img/vibes.webp" alt="KyaDekhun vibes screen: pick who you’re watching with and the mood" className="big" />
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────── OTT HUB ───────────── */
export function Platforms() {
  const stats: [number, string, string][] = [
    [10000, '+', 'films and shows in one search'],
    [5, '', 'OTT platforms, one catalog'],
    [30, 's', 'to your next watch'],
    [3, '', 'sharp picks, never 300'],
  ]
  return (
    <section className="sec" id="platforms">
      <div className="wrap">
        <SplitText
          text="One Unified Search. What to Watch on OTT Across Every Platform."
          className="title"
          accent={['One', 'Unified', 'Search.']}
        />
        <Reveal delay={0.1}>
          <p className="lead">
            Switching between five subscriptions just to see where a movie is streaming ruins the mood before the
            opening credits roll. Search over 10,000 films and shows across Netflix, Prime Video, and JioHotstar from
            one simple bar to see what to watch on OTT with direct play links.
          </p>
        </Reveal>
        <div className="stats">
          {stats.map(([n, s, l], k) => (
            <Reveal key={l} delay={k * 0.08}>
              <div className="stat">
                <strong>
                  <Counter to={n} suffix={s} />
                </strong>
                <span>{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── ARTIST JOURNEYS ───────────── */
export function Archive() {
  return (
    <section className="sec" id="archive">
      <div className="wrap">
        <Reveal y={50}>
          <div className="archive">
            <div>
              <SplitText
                text="Discover Every Chapter of an Artist’s Creative Journey"
                className="title"
                accent={['Every', 'Chapter']}
              />
              <p className="lead">
                Look past the usual trending banners. Follow an actor or director across their entire career, uncover
                overlooked indie films, and see which platform streams their earliest work.
              </p>
            </div>
            <div className="artist-stage">
              <div className="glow-ring sm" />
              <motion.div
                className="a-phone a1"
                initial={{ opacity: 0, x: 40, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -10, rotate: -3 }}
                transition={{ duration: 1, ease: EASE }}
              >
                <Phone src="/img/artist2.webp" alt="Actor profile: Shahid Kapoor with biography and known-for titles" className="tall" />
              </motion.div>
              <motion.div
                className="a-phone a2"
                initial={{ opacity: 0, x: 60, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -10, rotate: 2 }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              >
                <Phone src="/img/artist1.webp" alt="Actor profile: Tom Holland with biography and known-for titles" className="tall" />
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────── RATINGS & TICKETS ───────────── */
const RATINGS: { n: string; src: string; h: number; href?: string }[] = [
  { n: 'IMDb', src: '/logos/iMDb.svg', h: 44 },
  { n: 'TMDB', src: '/logos/tmdb.png', h: 40, href: 'https://www.themoviedb.org/' },
  { n: 'Rotten Tomatoes', src: '/logos/rotten_tomatoes.svg', h: 36 },
  { n: 'Metacritic', src: '/logos/metacritic.png', h: 52 },
]
const TICKETS = [
  { n: 'BookMyShow', src: '/logos/bookmyshow.png' },
  { n: 'District', src: '/logos/district.png' },
]

export function Partners() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [90, -90])
  const y3 = useTransform(scrollYProgress, [0, 1], [30, -30])
  return (
    <section className="sec" id="partners" ref={ref}>
      <div className="wrap partners">
        <div className="p-col">
          <Reveal y={50}>
            <div className="pbox">
              <h3>External ratings, for reference</h3>
              <p>Alongside the KyaDekhun Score, see what the big rating sites say.</p>
              <div className="logos">
                {RATINGS.map((r, i) => (
                  <motion.div
                    key={r.n}
                    className="logo-tile"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  >
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noreferrer" aria-label={`${r.n} website`}>
                        <img src={r.src} alt={r.n} style={{ height: r.h }} loading="lazy" />
                      </a>
                    ) : (
                      <img src={r.src} alt={r.n} style={{ height: r.h }} loading="lazy" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal y={50} delay={0.1}>
            <div className="pbox">
              <h3>Now in theatres</h3>
              <p>Book your tickets without leaving the app.</p>
              <div className="logos">
                {TICKETS.map((r, i) => (
                  <motion.div
                    key={r.n}
                    className="logo-tile"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  >
                    <img src={r.src} alt={r.n} style={{ height: 52, borderRadius: 12 }} loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="detail-stage">
          <div className="glow-ring sm" />
          <motion.div className="d-phone d1" style={{ y: y1 }}>
            <Phone src="/img/detail2.webp" alt="Series detail screen with KyaDekhun Score and Netflix availability" className="tall" />
          </motion.div>
          <motion.div className="d-phone d2" style={{ y: y2 }}>
            <Phone src="/img/detail1.webp" alt="Movie detail screen with KyaDekhun Score, IMDb, TMDB, Metacritic and ticket booking" className="tall" />
          </motion.div>
          <motion.div className="d-phone d3" style={{ y: y3 }}>
            <Phone src="/img/detail3.webp" alt="Movie detail screen with KyaDekhun Score and Prime Video availability" className="tall" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
