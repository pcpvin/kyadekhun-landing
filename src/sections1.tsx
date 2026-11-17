import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { ArrowRight, Menu, Mic, Play, X } from 'lucide-react'
import { FEATURES, PLATFORMS, PLATFORM_LOGOS, PLAY_URL } from './content'
import { EASE, Phone, SplitText } from './lib'

/* ───────────── NAV ───────────── */
const LINKS = [
  ['Mood Finder', '#mood'],
  ['OTT Hub', '#platforms'],
  ['Taste Match', '#compare'],
  ['Quick Picker', '#picker'],
] as const

export function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 24))
  return (
    <>
      <motion.header
        className={`nav ${solid || open ? 'solid' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        <div className="wrap nav-in">
          <a className="logo" href="#top" aria-label="KyaDekhun home">
            <img src="/img/logo.webp" alt="" width={38} height={38} />
            <span>
              Kya<b>Dekhun</b>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map(([l, h]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </nav>
          <a className="btn sm" href="#download">
            Get the app
          </a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={() => setOpen(false)}
          >
            {[...LINKS, ['Download', '#download'] as const].map(([l, h], i) => (
              <motion.a
                key={h}
                href={h}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5, ease: EASE }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ───────────── HERO ───────────── */
const CHIPS = [
  { t: 'Weekend comfort watch', cls: 'c1' },
  { t: 'Dark & intense thrillers', cls: 'c2' },
  { t: 'Family movie night', cls: 'c3' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yL = useTransform(scrollYProgress, [0, 1], [0, -90])
  const yC = useTransform(scrollYProgress, [0, 1], [0, 60])
  const yR = useTransform(scrollYProgress, [0, 1], [0, -150])
  const orb = useTransform(scrollYProgress, [0, 1], [0, 180])
  return (
    <section className="hero" ref={ref} id="top">
      <motion.div className="orb o1" style={{ y: orb }} />
      <div className="orb o2" />
      <div className="grid-bg" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <SplitText
            as="h1"
            text={"Stop the Scroll.\nThe Movie Recommendation App Built for How You Actually Feel"}
            accent={['Actually', 'Feel']}
            className="h1"
            delay={0.25}
          />
          <motion.div
            className="cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          >
            <a className="btn" href="#mood">
              Launch the Movie Recommendation App <ArrowRight size={16} />
            </a>
            <a className="btn ghost" href={PLAY_URL} target="_blank" rel="noreferrer">
              <Play size={16} fill="currentColor" /> Download Free App
            </a>
          </motion.div>
        </div>

        <div className="stage" aria-hidden={false}>
          <motion.div className="p-side left" style={{ y: yL }}>
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -14 }}
              animate={{ opacity: 1, x: 0, rotate: -7 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
            >
              <Phone src="/img/screen2.webp" alt="KyaDekhun score screen for a movie" />
            </motion.div>
          </motion.div>
          <motion.div className="p-mid" style={{ y: yC }}>
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                <Phone src="/img/screen1.webp" alt="KyaDekhun mood search screen" />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="p-side right" style={{ y: yR }}>
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 14 }}
              animate={{ opacity: 1, x: 0, rotate: 7 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.65 }}
            >
              <Phone src="/img/screen4.webp" alt="KyaDekhun personalised picks screen" />
            </motion.div>
          </motion.div>
          {CHIPS.map((c, i) => (
            <motion.span
              key={c.t}
              className={`float-chip ${c.cls}`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, y: [0, i % 2 ? 10 : -10, 0] }}
              transition={{
                opacity: { delay: 1.2 + i * 0.15, duration: 0.6 },
                scale: { delay: 1.2 + i * 0.15, duration: 0.6, ease: EASE },
                y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <Mic size={13} /> {c.t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── MARQUEE ───────────── */
export function Marquee() {
  const items = [...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS]
  return (
    <div className="marquee" aria-label="Supported streaming platforms">
      <div className="track">
        {[...items, ...items].map((p, i) => {
          const l = PLATFORM_LOGOS[p]
          return (
            <span key={i} className="plat">
              {l && <img src={l.src} alt={l.icon ? '' : p} className={l.icon ? 'ico-logo' : 'wm-logo'} loading="lazy" />}
              {(!l || l.icon) && p}
              <em>✦</em>
            </span>
          )
        })}
      </div>
    </div>
  )
}

/* ───────────── FEATURES (pinned horizontal scroll) ───────────── */
export function Features() {
  const ref = useRef<HTMLElement>(null)
  const N = FEATURES.length
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  // Each panel "dwells" for most of its scroll slot, then slides to the next one.
  const inputs: number[] = []
  const outputs: number[] = []
  for (let k = 0; k < N; k++) {
    inputs.push(k / N)
    outputs.push(-k * 100)
    inputs.push(k === N - 1 ? 1 : k / N + 0.78 / N)
    outputs.push(-k * 100)
  }
  const target = useTransform(scrollYProgress, inputs, outputs)
  const spring = useSpring(target, { stiffness: 120, damping: 24, mass: 0.6 })
  const x = useTransform(spring, (v) => `${v}vw`)
  const [active, setActive] = useState(0)
  useMotionValueEvent(target, 'change', (v) => setActive(Math.min(N - 1, Math.max(0, Math.round(-v / 100)))))
  return (
    <section className="features" id="features" ref={ref} style={{ height: `${N * 90 + 20}vh` }}>
      <div className="pin">
        <div className="bar">
          <span>
            <b>{String(active + 1).padStart(2, '0')}</b> / {String(N).padStart(2, '0')}
          </span>
          <div className="dots">
            {FEATURES.map((f, k) => (
              <i key={f.t} className={k === active ? 'on' : ''} />
            ))}
          </div>
        </div>
        <motion.div className="rail" style={{ x }}>
          {FEATURES.map((f, k) => (
            <div className="panel" key={f.t}>
              <motion.div
                className="p-text"
                animate={{ opacity: active === k ? 1 : 0.25, x: active === k ? 0 : -24 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <span className="eyebrow">{f.tag}</span>
                <h2 className="title">{f.t}</h2>
                <p className="lead">{f.d}</p>
              </motion.div>
              <motion.div
                className="p-phone"
                animate={{ scale: active === k ? 1 : 0.88, opacity: active === k ? 1 : 0.5, rotate: active === k ? 0 : 3 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <div className="glow-ring sm" />
                <Phone src={f.img} alt={f.t} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

