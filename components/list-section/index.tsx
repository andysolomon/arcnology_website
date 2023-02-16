import {
    BoltIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    ScaleIcon,
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Web Design and Development',
        description:
            'We specialize in creating visually stunning websites that are optimized for performance, security, and search engine optimization.',
        icon: GlobeAltIcon,
    },
    {
        name: 'E-commerce Solutions',
        description:
            'Our e-commerce solutions are designed to increase your online sales and make your business more profitable. We offer integration with popular platforms like Shopify, and SnipCart.',

        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            "We understand that digital marketing is more than just driving traffic to a website. That's why we offer a range of digital marketing services that are specifically tailored to your business.",
        icon: BoltIcon,
    },
    {
        name: 'Maintenance and Support',
        description:
            "We understand that your website is a vital part of your business. That's why we offer maintenance and support services to keep your website running smoothly;",
        icon: DevicePhoneMobileIcon,
    },
]

const ListSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-blue-800">
                        Services
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Arcnology Services
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Lorem ipsum dolor sit amet consect adipisicing elit.
                        Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white sm:shrink-0">
                                    <feature.icon
                                        className="h-8 w-8"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-lg font-semibold leading-8 text-gray-900">
                                        {feature.name}
                                    </p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListSection
