import * as React from 'react'

// Brands that Arcnology has worked with
const Brands = () => {
    return (
        <div className="flex flex-wrap">
            <div className="mx-4 w-full">
                <div className="wow fadeInUp" data-wow-delay=".2s">
                    <div className="ud-title mb-8">
                        <h6 className="relative inline-flex items-center text-xs font-normal text-body-color">
                            Some Of Our Clients
                            <span className="ml-4 inline-block h-[1px] w-8 bg-[#afb2b5]"></span>
                        </h6>
                    </div>
                    <div className="ud-brands-logo flex flex-wrap items-center">
                        <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                            <a
                                href="https://tailgrids.com"
                                target="_blank"
                                rel="nofollow noopner"
                            >
                                <img
                                    src="assets/images/brands/tailgrids.svg"
                                    alt="tailgrids"
                                    className="grayscale duration-300 hover:filter-none"
                                />
                            </a>
                        </div>
                        <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                            <a
                                href="https://ayroui.com"
                                target="_blank"
                                rel="nofollow noopner"
                            >
                                <img
                                    src="assets/images/brands/ayroui.svg"
                                    alt="ayroui"
                                    className="grayscale duration-300 hover:filter-none"
                                />
                            </a>
                        </div>
                        <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                            <a
                                href="https://uideck.com"
                                target="_blank"
                                rel="nofollow noopner"
                            >
                                <img
                                    src="assets/images/brands/uideck.svg"
                                    alt="uideck"
                                    className="grayscale duration-300 hover:filter-none"
                                />
                            </a>
                        </div>
                        <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                            <a
                                href="https://graygrids.com"
                                target="_blank"
                                rel="nofollow noopner"
                            >
                                <img
                                    src="assets/images/brands/graygrids.svg"
                                    alt="graygrids"
                                    className="grayscale duration-300 hover:filter-none"
                                />
                            </a>
                        </div>
                        <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                            <a
                                href="https://lineicons.com"
                                target="_blank"
                                rel="nofollow noopner"
                            >
                                <img
                                    src="assets/images/brands/lineicons.svg"
                                    alt="lineicons"
                                    className="grayscale duration-300 hover:filter-none"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
