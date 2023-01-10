import * as React from 'react'

const CasesSection = () => {
    return (
        <>
            <h3>Cases</h3>
            <section
                id="get-started-today"
                className="relative overflow-hidden bg-blue-600 py-32"
            >
                <img
                    alt=""
                    src="/_next/static/media/background-call-to-action.6a5a5672.jpg"
                    width="2347"
                    height="1244"
                    decoding="async"
                    data-nimg="1"
                    className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                    loading="lazy"
                />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                            Get started today
                        </h2>
                        <p className="mt-4 text-lg tracking-tight text-white">
                            It’s time to take control of your books. Buy our
                            software so you can feel like you’re doing
                            something productive.
                        </p>
                        <a
                            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                            href="/register"
                        >
                            Get 6 months free
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CasesSection
