import * as React from 'react'
import Image from 'next/image'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
]

type INavigationList = {
    name: string
    href: string
}

const navigationList: React.FC<INavigationList> = ({ name, href }) => (
    <li className="group relative">
        <a
            href={href}
            className="ud-menu-scroll mx-8 flex py-2 text-white group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:group-hover:text-dark lg:group-hover:opacity-70"
        >
            {name}
        </a>
    </li>
)

const pagesNavigation = []
const pagesList: React.FC = () => {
    return (
        <>
            <li className="submenu-item group relative">
                <a
                    href="javascript:void(0)"
                    className="relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-black lg:group-hover:text-dark lg:after:right-0 lg:group-hover:opacity-70 xl:ml-12"
                >
                    Pages
                </a>
                <div className="submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                    <a
                        href="about.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                    >
                        About Page
                    </a>
                    <a
                        href="pricing.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                    >
                        Pricing Page
                    </a>
                    <a
                        href="contact.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                    >
                        Contact Page
                    </a>
                    <a
                        href="blog-grids.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                    >
                        Blog Grid Page
                    </a>
                    <a
                        href="blog-details.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                    >
                        Blog Details Page
                    </a>
                    <a
                        href="404.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                    >
                        404 Page
                    </a>
                </div>
            </li>
        </>
    )
}

const NavBarSection = () => {
    return (
        <div className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <a
                            href="index.html"
                            className="navbar-logo block w-full py-5"
                        >
                            <Image
                                src="/assets/images/logo/ArcnologyWebLogo.png"
                                alt="logo"
                                width={500}
                                height={500}
                            />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                id="navbarToggler"
                                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
                            >
                                <ul className="blcok lg:flex">
                                    {navigation.map(
                                        (item: INavigationList) => {
                                            return navigationList(item)
                                        }
                                    )}
                                    {/*submenu-item group relative*/}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarSection
