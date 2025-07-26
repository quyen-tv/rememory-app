import useScrollAndMobile from '@/hooks/useScrollAndMobile'
import LandingHeader from '@/pages/landing/LandingHeader'
import LandingHero from '@/pages/landing/LandingHero'
import LandingFooter from '@/pages/landing/LandingFooter'

const LandingPage = () => {
  const { isScrolled, isMobile } = useScrollAndMobile()

  return (
    <>
      <div className='min-h-screen flex flex-col font-sans bg-[var(--background)]'>
        <LandingHeader isScrolled={isScrolled} isMobile={isMobile} />
        <LandingHero />
      </div>
      <LandingFooter />
    </>
  )
}

export default LandingPage
