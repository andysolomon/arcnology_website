import {
    BoltIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    ScaleIcon,
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: DevicePhoneMobileIcon,
    },
]

export default function AboutSection() {
    return (
        <section
            id="about"
            className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
        >
            <div className="container">
                <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="items-center justify-between overflow-hidden border lg:flex">
                                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                                    <span className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white">
                                        About Us
                                    </span>
                                    <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                                        Unleashing innovation through
                                        technology and design
                                    </h2>
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        Our team is made up of experienced
                                        developers and designers who work
                                        together to bring your vision to life.
                                        We pride ourselves on our ability to
                                        turn complex ideas into simple, elegant
                                        solutions.
                                    </p>
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        We are a dedicated team of
                                        professionals who work closely with our
                                        clients to understand their unique
                                        needs and deliver personalized
                                        solutions. We pride ourselves on our
                                        ability to collaborate effectively and
                                        deliver results that exceed
                                        expectations.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                                    >
                                        Learn More
                                    </a>
                                </div>
                                <div className="text-center">
                                    <div className="relative z-10 inline-block">
                                        <img
                                            src="assets/images/about/about-image.svg"
                                            alt="image"
                                            className="mx-auto lg:ml-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
