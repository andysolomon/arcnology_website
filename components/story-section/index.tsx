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

export default function StorySection() {
    return (
        <section
            id="story"
            className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Our Story
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Our Founder
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="items-center justify-between overflow-hidden border lg:flex">
                                <div className="w-full py-6 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        At Arcnology, we understand the unique
                                        challenges that small business owners
                                        and black business owners face when it
                                        comes to building and maintaining a
                                        strong online presence. That's why
                                        we're proud to be led by a founder with
                                        a wealth of experience in the industry,
                                        Andrew Solomon.
                                    </p>
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        Andrew fell in love with web
                                        development while attending Albany
                                        State University, a Historically Black
                                        College and University (HBCU). He was
                                        able to develop his skills and passion
                                        by leading the team that built the
                                        university's website, and creating
                                        great relationships with his professors
                                        and faculty.
                                    </p>
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        With over 15 years of experience in the
                                        industry, Andrew brings a diverse
                                        background in working with clients of
                                        all sizes, from small businesses with
                                        just a few employees, to some of the
                                        largest enterprises in the world. He
                                        has a wealth of expertise to offer,
                                        from his early days as a lead engineer
                                        in building the Albany State University
                                        website, to his more recent work with
                                        companies such as Alternative Apparel,
                                        National Geographic, and Salesforce.
                                    </p>
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        But Andrew's experience isn't just
                                        limited to big names - he's also
                                        passionate about working with small
                                        business owners and black business
                                        owners to help them achieve their goals
                                        online. He's built a wide range of
                                        websites and applications, on platforms
                                        including mobile, web, virtual kiosks,
                                        and experience in Set-Top Box
                                        Development like AppleTV and Roku
                                        devices. Andrew also has industry
                                        experience in delivering scalable
                                        systems leveraging web technologies
                                        such as AWS, Heroku, and Vercel.
                                    </p>
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        At Arcnology, we're committed to using
                                        our expertise to help small business
                                        owners and black business owners
                                        succeed online. Whether you're looking
                                        to build a new website, redesign an
                                        existing one, or just need some expert
                                        advice, we're here to help you achieve
                                        your goals and grow your business.
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
