import Head from 'next/head'
import Image from 'next/image'
import NavBarSection from '../components/navbar-section'
import HeroSection from '../components/hero-section'
import ListSection from '../components/list-section'
import AboutSection from '../components/about-section'
import StorySection from '../components/story-section'
import ContactSection from '../components/contact-section'
import SocialProof from '../components/social-proof'
import PricingTable from '../components/pricing-table'
import Footer from '../components/footer'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Arcnology</title>
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
                    title={'Maximize Your Online Potential with Arcnology'}
                    subtitle={
                        'Experience the difference with Arcnologys Web Development and Design services'
                    }
                />
                <ListSection />
                <AboutSection />
                {/* 
                        <SocialProof />
                    */}
                <PricingTable />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
