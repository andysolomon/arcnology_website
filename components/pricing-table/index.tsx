import * as React from 'react'
import axios from 'axios'
import { CheckIcon } from '@heroicons/react/24/outline'

type PricingToggleProps = {
    billingInterval: string
    setBillingInterval: (x: any) => void
    content: Object
}
type BillingInterval = 'custom' | 'support'


const PricingTiers = (props: any) => {
    const { basicContent, premiumContent } = props
    const tiersList = [basicContent, premiumContent]

    return (
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
            {tiersList.map((tier) => (
                <div
                    key={tier.id}
                    className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
                >
                    <div className="p-8 sm:p-10">
                        <h3
                            className="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
                            id={tier.Header}
                        >
                            {tier.Header}
                        </h3>
                        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                            ${tier.Pricing}
                            <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                                /mo
                            </span>
                        </div>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            {tier.Description}
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col p-2">
                        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                            <ul role="list" className="space-y-6">
                                {tier.Services.map((feature, idx) => (
                                    <li key={feature.id} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <CheckIcon
                                                className="h-6 w-6 text-indigo-600"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p className="ml-3 text-sm leading-6 text-gray-600">
                                            {feature.Service}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <a
                                    href={tier.href}
                                    className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                                    aria-describedby={tier.id}
                                >
                                    {tier.Button.Label}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const PricingHeader = ( props: any ) => {
    const { pricingHeaderContent: content } = props

    return (
        <div className="px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-xl font-semibold leading-6 text-white">
                    {props.content.Title}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {props.content.Subtitle}
                </p>
                <p className="mx-auto mt-3 max-w-4xl text-xl text-white sm:mt-5 sm:text-2xl">
                    {props.content.Description}
                </p>
            </div>
        </div>
    )
}



const PricingToggle: React.FC<PricingToggleProps> = ({
    billingInterval,
    setBillingInterval,
}) => {

    return (
        <div className="relative mt-12 flex justify-center sm:mt-16 mb-8">
            <div className="flex rounded-lg bg-blue-800 p-0.5">
                <button
                    type="button"
                    data-name="custom"
                    onClick={() => setBillingInterval('custom')}
                    className={`${
                        billingInterval === 'custom'
                            ? 'relative whitespace-nowrap rounded-md border-indigo-700 bg-white py-2 px-6 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700'
                            : 'relative ml-0.5 whitespace-nowrap rounded-md border border-transparent py-2 px-6 text-sm font-medium text-indigo-200 hover:bg-indigo-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700'
                    }`}
                >
                    Custom
                </button>
                <button
                    onClick={() => setBillingInterval('support')}
                    data-name="support"
                    type="button"
                    className={`${
                        billingInterval === 'support'
                            ? 'relative whitespace-nowrap rounded-md border-indigo-700 bg-white py-2 px-6 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700'
                            : 'relative ml-0.5 whitespace-nowrap rounded-md border border-transparent py-2 px-6 text-sm font-medium text-indigo-200 hover:bg-indigo-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700'
                    }`}
                >
                    Support
                </button>
            </div>
        </div>
    )
}
const PricingCustomWebsite = (props: any) => {
    const { pricingCustomMain, pricingCustomSecondary } = props

    return (
        <>
            <div className="pb-16 mt-12 xl:flex xl:items-center xl:justify-between">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        <span className="text-white">
                            {props.mainContent.Title}
                        </span>
                        <span className="text-blue-800"></span>
                    </h1>
                    <p className="mt-5 text-xl text-white">
                        {props.mainContent.Description}
                    </p>
                </div>
                <a
                    href="#"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
                >
                    {props.mainContent.Button.Label}
                </a>
            </div>
            <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
                <div>
                    <h2 className="text-lg font-semibold text-white">
                        {props.secondaryContent.Title}
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white">
                        {props.secondaryContent.Subtitle}
                    </p>
                    <p className="mt-4 text-lg text-white">
                        {props.secondaryContent.Description}
                    </p>
                </div>
                <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:col-span-2 xl:mt-0">
                    <ul role="list" className="divide-y divide-gray-200">
                        {props.secondaryContent.Services.slice(0, 5).map((feature, featureIdx) =>
                            featureIdx === 0 ? (
                                <li
                                    key={feature.id}
                                    className="flex py-4 md:py-0 md:pb-4"
                                >
                                    <CheckIcon
                                        className="h-6 w-6 flex-shrink-0 text-green-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3 text-base text-white">
                                        {feature.Service}
                                    </span>
                                </li>
                            ) : (
                                <li key={feature.id} className="flex py-4">
                                    <CheckIcon
                                        className="h-6 w-6 flex-shrink-0 text-green-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3 text-base text-white">
                                        {feature.Service}
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                    <ul
                        role="list"
                        className="divide-y divide-gray-200 border-t border-gray-200 md:border-t-0"
                    >
                        {props.secondaryContent.Services.slice(5).map((feature, featureIdx) =>
                            featureIdx === 0 ? (
                                <li
                                    key={feature.id}
                                    className="flex py-4 md:border-t-0 md:py-0 md:pb-4"
                                >
                                    <CheckIcon
                                        className="h-6 w-6 flex-shrink-0 text-green-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3 text-base text-white">
                                        {feature.Service}
                                    </span>
                                </li>
                            ) : (
                                <li key={feature.id} className="flex py-4">
                                    <CheckIcon
                                        className="h-6 w-6 flex-shrink-0 text-green-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3 text-base text-white">
                                        {feature.Service}
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

const PricingTable = ({ content }: any) => {
    // Top Level State
    const [billingInterval, setBillingInterval] =
        React.useState<BillingInterval>('custom')

    const handleBillingClick = (evt: any) => {
        const billingName = evt.target.dataset.name
        if (billingName === 'support') {
        }
    }
    const [features, setFeatures] = React.useState<any>([])

    const pricingHeaderContent = content.Header.data.attributes.Header
    const pricingCustomMainContent = content.CustomMain.data.attributes.CustomMain
    const pricingCustomSecondaryContent = content.CustomSecondary.data.attributes.CustomSecondary
    const pricingBasicContent = content.BasicTier.data.attributes.BasicTier
    const pricingPremiumContent = content.PremiumTier.data.attributes.PremiumTier

    return (
        <section className="bg-gray-900 py-16 sm:py-24">
            <div className="container">
                <PricingHeader content={pricingHeaderContent} />
                <PricingToggle
                    billingInterval={billingInterval}
                    setBillingInterval={setBillingInterval}
                    content={{}}
                />
                {billingInterval === 'custom' ? (
                    <PricingCustomWebsite mainContent={pricingCustomMainContent} secondaryContent={pricingCustomSecondaryContent} />
                ) : (
                    <PricingTiers basicContent={pricingBasicContent} premiumContent={pricingPremiumContent}  />
                )}
            </div>
        </section>
    )
}

export default PricingTable
