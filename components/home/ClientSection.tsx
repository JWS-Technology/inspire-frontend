import React from 'react'
import ClientMarquee from './ClientSMarquee'

const ClientSection = () => {
    return (
        <div className='bg-white'>
            <header className="w-full py-10">
                <div className="max-w-4xl mx-auto text-center px-4">
                    {/* pill badge */}
                    <div className="inline-block mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-amber-700 bg-amber-100 border border-amber-200">
                            Trusted Partnerships
                        </span>
                    </div>

                    {/* heading */}
                    <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        <span className="block">
                            Our Partners &{" "}
                            <span className="text-amber-500">Clients</span>
                        </span>
                    </h1>

                    {/* decorative underline / accent */}
                    <div className="mt-4 flex justify-center">
                        <span className="w-20 h-1 rounded-full bg-amber-200" />
                    </div>

                    {/* subtitle */}
                    <p className="mt-5 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto">
                        Collaborating with leading organizations across corporate, government, and educational sectors
                    </p>
                </div>
            </header>
            <ClientMarquee />
        </div>
    )
}

export default ClientSection