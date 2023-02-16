import * as React from 'react'
import Team from './team'

const TeamSection = () => {
    return (
        <section
            id="team"
            className="relative z-20 overflow-hidden bg-white py-20 lg:py-[120px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-secondary">
                                Our Team
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Meet Our Team
                            </h2>
                            <p className="text-lg leading-relaxed text-dark sm:text-xl sm:leading-relaxed">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                    <Team />
                </div>
            </div>
        </section>
    )
}

export default TeamSection
