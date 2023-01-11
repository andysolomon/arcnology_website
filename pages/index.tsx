import Head from 'next/head'
import Image from 'next/image'
import NavBarSection from '../components/navbar-section'
import HeroSection from '../components/hero-section'
import ListSection from '../components/list-section'
import FeaturesSection from '../components/features-section'
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
                <HeroSection />
                <ListSection />
                <FeaturesSection />
                {/* 
                        <SocialProof />
                    */}
                <PricingTable />
                <ContactSection />
            </main>
            <Footer />
            <a
                href="javascript:void(0)"
                className="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
            >
                <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
            </a>
        </>
    )
}
