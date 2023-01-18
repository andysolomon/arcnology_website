/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Circles from '../../components/images/circles'

type IHeroProps = {
    title: string
    subtitle?: string
    primaryButton?: React.FC<HTMLButtonElement>
    secondaryButton?: React.FC<HTMLButtonElement>
}

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const HeroSection: React.FC<IHeroProps> = ({
    title,
    subtitle,
    primaryButton,
    secondaryButton,
}) => {
    const circleOne = <Circles styles={'absolute bottom-0 -left-9 z-[-1]'} />
    const circleTwo = <Circles styles={'absolute -top-6 -right-6 z-[-1]'} />

    return (
        <div
            id="home"
            className="relative overflow-hidden bg-dark pt-[120px] md:pt-[130px] lg:pt-[160px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <div
                            className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                            data-wow-delay=".2s"
                        >
                            <h1 className="mb-8 text-5xl font-bold leading-snug text-white sm:text-7xl sm:leading-snug md:leading-snug">
                                {title}
                            </h1>
                            <p className="mx-auto mb-10 max-w-[600px] text-lg text-white sm:text-lg sm:leading-relaxed md:leading-relaxed">
                                {subtitle}
                            </p>

                            {primaryButton && (
                                <div className="flex justify-center pt-8 pb-24">
                                    {primaryButton()}
                                    {secondaryButton()}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
