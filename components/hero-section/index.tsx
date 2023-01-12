/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Circles from '../../components/images/circles'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function HeroSection() {
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
                                Maximize Your Online Potential with Arcnology
                            </h1>
                            <p className="mx-auto mb-10 max-w-[600px] text-lg text-white sm:text-lg sm:leading-relaxed md:leading-relaxed">
                                Experience the difference with Arcnology's Web
                                Development and Design services'
                            </p>
                            <div className="flex justify-center pt-8 pb-24">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 mr-12 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                                >
                                    Questionaire
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                                >
                                    Questionaire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
