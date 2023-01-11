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
            className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <div
                            className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                            data-wow-delay=".2s"
                        >
                            <h1 className="mb-8 text-3xl font-bold leading-snug text-black sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
                                Welcome to Arcnology
                            </h1>
                            <p className="mx-auto mb-10 max-w-[600px] text-base text-black sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
                                Arcnology is a full-service technology company
                                that specializes in innovative, cutting-edge
                                solutions.
                            </p>
                        </div>
                    </div>

                    <div className="w-full px-4">
                        <div className="fadeInUp relative z-10 mx-auto max-w-[845px]">
                            <div className="mt-16">
                                <img
                                    src="https://images.ctfassets.net/32mw73wtpmew/3jtjvZO7ho0T4sDEUT4VzK/2175074f7653fe8708f3dabdda19d52e/cover3.jpg"
                                    alt="hero"
                                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
