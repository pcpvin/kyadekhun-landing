import { MotionConfig } from 'motion/react'
import { useSmoothScroll } from './lib'
import { Features, Hero, Marquee, Nav } from './sections1'
import { Compare, Cta, Faq, Footer, Quotes, Routes } from './sections2'
import { Archive, Intro, Mood, Partners, Platforms, Steps, Why } from './sections3'

export default function App() {
  useSmoothScroll()
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Why />
        <Steps />
        <Mood />
        <Features />
        <Platforms />
        <Partners />
        <Archive />
        <Compare />
        <Routes />
        <Quotes />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </MotionConfig>
  )
}
