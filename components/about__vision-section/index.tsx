import * as React from 'react'

const VisionSection = () => {
    return (
        <section
            id="founder"
            className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mb-12 lg:mb-20">
                            <div className="md:flex gap-12 justify-between">
                                <div className="w-full mb-4 md:w-1/3">
                                    <img
                                        className="w-full rounded-3xl"
                                        src="https://placekitten.com/500/600"
                                    />
                                </div>
                                <div className="w-full mb-4 md:w-2/3">
                                    <span className="mb-2 block text-lg font-semibold text-primary">
                                        Our Vision
                                    </span>
                                    <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                                        Visionnairaires are apart of our DNA
                                    </h2>
                                    <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                                        Here at Arcnology, we pride ourselves
                                        on being able to provide a wide range
                                        of services to our clients. From web
                                        design and development, to e-commerce
                                        integration, and digital marketing, we
                                        have the skills and experience to help
                                        your business succeed online.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionSection
