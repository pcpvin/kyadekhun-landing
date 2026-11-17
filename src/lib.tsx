import { animate, motion, useInView } from 'motion/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import Lenis from 'lenis'

export const EASE = [0.22, 1, 0.36, 1] as const

/** Lenis smooth scrolling + smooth in-page anchor links. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    let id = 0
    const raf = (t: number) => {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    const onClick = (e: globalThis.MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]')
      const href = a?.getAttribute('href')
      if (!href || href.length < 2) return
      const el = document.querySelector<HTMLElement>(href)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: href === '#features' ? 0 : -64, duration: 1.6 })
      }
    }
    document.addEventListener('click', onClick)
    return () => {
      cancelAnimationFrame(id)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])
}

export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  style,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Word-by-word masked reveal. Words listed in `accent` get the brand gradient. */
export function SplitText({
  text,
  className,
  accent = [],
  delay = 0,
  as: Tag = 'h2',
}: {
  text: string
  className?: string
  accent?: string[]
  delay?: number
  as?: 'h1' | 'h2' | 'h3'
}) {
  const lines = text.split('\n')
  const M = motion[Tag]
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: 0.055, delayChildren: delay }}
      aria-label={text.replace('\n', ' ')}
    >
      {lines.map((line, li) => {
        const words = line.split(' ')
        return (
          <span className={`ln ln${li}`} key={li}>
            {words.map((w, i) => (
              <Fragment key={i}>
                <span className="mask" aria-hidden>
                  <motion.span
                    className={accent.some((a) => a.replace(/[^\w’']/g, '') === w.replace(/[^\w’']/g, '')) ? 'grad-text' : undefined}
                    style={{ display: 'inline-block' }}
                    variants={{ hidden: { y: '115%', rotate: 4 }, show: { y: '0%', rotate: 0 } }}
                    transition={{ duration: 0.85, ease: EASE }}
                  >
                    {w}
                  </motion.span>
                </span>
                {i < words.length - 1 ? ' ' : ''}
              </Fragment>
            ))}
          </span>
        )
      })}
    </M>
  )
}

export function Counter({ to, suffix = '', duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, ease: EASE, onUpdate: (n) => setV(Math.round(n)) })
    return () => c.stop()
  }, [inView, to, duration])
  return (
    <span ref={ref}>
      {v.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export function Phone({
  src,
  alt,
  className = '',
  style,
}: {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div className={`phone ${className}`} style={style}>
      <img src={src} alt={alt} loading="lazy" draggable={false} />
    </div>
  )
}

/** Card with a cursor-following spotlight. */
export function Spotlight({ children, className = '' }: { children: ReactNode; className?: string }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div className={`spot ${className}`} onMouseMove={onMove}>
      {children}
    </div>
  )
}
