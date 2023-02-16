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
            className="relative overflow-hidden bg-gray-900 pt-10 md:pt-12 lg:pt-16"
        >
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                        <div className="lg:py-24">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                                <span className="block">A better way to</span>
                                <span className="block text-sky-400">
                                    ship web apps
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui Lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                        <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                            {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                            <img
                                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
