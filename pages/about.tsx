import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import HeroSection from '../components/hero-section'
import NavBarSection from '../components/navbar-section'
import FounderSection from '../components/founder-section'
import VisionSection from '../components/about__vision-section'
import ValuesSection from '../components/about__values-section'
import TeamSection from '../components/about__team-section'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const primaryButton = () => {
    return (
        <button
            type="submit"
            className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 mr-12 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
        >
            Questionaire
        </button>
    )
}

const secondaryButton = () => {
    return (
        <button
            type="submit"
            className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
        >
            Questionaire
        </button>
    )
}

const About = () => {
    return (
        <>
            <Head>
                <title>Arcnology | About</title>
                <meta name="description" content="Arcnology Tech Company" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <NavBarSection />
                <HeroSection
                    title={'About'}
                    subtitle={'About Arcnology Founder and Team'}
                />
                <FounderSection />
                <ValuesSection />
                <VisionSection />
                <TeamSection />
            </main>
            <Footer />
        </>
    )
}

export default About
