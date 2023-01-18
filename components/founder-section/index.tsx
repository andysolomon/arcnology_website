import * as React from 'react'

const FounderSection = () => {
    return (
        <section
            id="founder"
            className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full">
                        <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-16">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                About Arcnology
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Our Founder
                            </h2>
                            <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-12 prose max-w-none gap-x-10 columns-2 text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-blue-700 first-letter:pt-4">
                    <p className="mb-6">
                        Quam venenatis gravida et urna molestie leo adipiscing
                        dolore leo euismod quam. Aenean porta curabitur
                        convallis pellentesque velit platea at neque phasellus.
                        Aliquet pellentesque senectus velit magna ultrices
                        iaculis justo habitasse vitae neque ornare nullam leo.
                        Est facilisis mauris purus senectus nunc convallis
                        praesent pharetra dictum dui molestie iaculis.
                    </p>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet quis at praesent erat.
                        Egestas justo ut tempus elementum aenean luctus{' '}
                        <a
                            className="hover:text-blue-500 transition-colors duration-200 ease-in"
                            href="#"
                        >
                            an awesome link
                        </a>{' '}
                        fusce curabitur at malesuada.
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="pl-2 my-3">
                            Urna magna mauris hendrerit molestie rhoncus enim
                            magna tempor nisi.
                        </li>
                        <li className="pl-2 my-3">
                            Lorem ipsum dolor sit amet tempus bibendum dolore
                            ida.
                        </li>
                        <li className="pl-2 my-3">
                            Eget consectetur orci sodales purus ac egestas
                            consequat erat mattis mi sapien adipiscing hac.
                        </li>
                    </ul>
                    <p className="my-6">
                        Lorem ipsum dolor sit amet netus viverra neque quisque
                        nisi mattis dapibus dictumst. Erat venenatis iaculis a
                        tellus a auctor cursus morbi neque molestie incididunt
                        faucibus.
                    </p>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet lobortis risus nisi lacus
                        quisque porttitor fermentum arcu adipiscing.
                    </p>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet <strong>bold text</strong>{' '}
                        quam luctus praesent id.Gravida donec morbi incididunt
                        enim sed sollicitudin malesuada tempus. Lorem ipsum
                        dolor sit amet lectus quisque mauris scelerisque orci.
                        Vulputate leo dolore leo tristique viverra posuere diam
                        pellentesque nec sapien.
                    </p>
                    <blockquote className="mb-8 pl-4">
                        <p>
                            Lorem ipsum dolor sit pretium nullam diam facilisi.
                            Lacus volutpat malesuada fusce quis est integer
                            euismod cras est suspendisse facilisi morbi.{' '}
                        </p>
                    </blockquote>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet quis at praesent erat.
                        Egestas justo ut tempus elementum aenean luctus{' '}
                        <a
                            className="hover:text-blue-500 transition-colors duration-200 ease-in"
                            href="#"
                        >
                            another awesome link
                        </a>{' '}
                        fusce curabitur at malesuada.
                    </p>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet fermentum eget porta. Semper
                        auctor tellus laoreet ut vulputate ullamcorper
                        fringilla gravida dictum. Malesuada arcu aliquet cras
                        molestie viverra vulputate netus dolore aliquam dictum
                        ornare ullamcorper. Erat pretium bibendum dolore quis
                        dictum vivamus libero curabitur consequat donec. Netus
                        rhoncus adipiscing netus non urna egestas mattis mollis
                        nullam odio diam dolore aenean.
                    </p>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet quis habitasse rhoncus ac
                        lobortis sapien. Mattis donec posuere facilisis do
                        faucibus laoreet tellus interdum ultricies vulputate a
                        fringilla senectus consequat.
                    </p>
                </div>

                <div className="w-full px-4">
                    <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                        <div className="h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full">
                            <img
                                src="https://placekitten.com/400/400"
                                alt="image"
                                className="w-full rounded-full"
                            />
                            <span className="absolute top-0 left-0 z-[-1]"></span>
                            <span className="absolute right-0 bottom-0"></span>
                        </div>
                        <div className="text-center">
                            <h4 className="mb-2 text-lg font-medium text-dark">
                                Andrew Solomon
                            </h4>
                            <p className="mb-5 text-sm font-medium text-body-color">
                                Founder
                            </p>
                            <div className="flex items-center justify-center">
                                <a
                                    href="javascript:void(0)"
                                    className="mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary"
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary"
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary"
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderSection
