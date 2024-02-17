const Author = () => {
    return (
        <section id="contact" className="pb-5 pt-16 lg:pt-8">
        <div className="container mx-auto text-center">
            <div className="flex flex-wrap">
                <div className="w-full justify-center self-center text-center lg:text-left lg:w-1/2">
                    <h1 className="block mx-10 font-bold text-primary text-4xl mb-5">Meet the Creator!</h1>
                    <p className="font-medium mx-10 text-justify mb-4 leading-relaxed text-lg text">Meet <span className="font-bold">Rendy Christian</span>, the visionary mind behind AirSense. Fueled by passion of environmental sustainability and armed with expertise of <span className="font-bold">Electrical Engineering at Universitas Indonesia</span>, Rendy embarked on a mission to create a platform that empowers individuals with real-time insights into air pollutant indices and seeks to bridge the gap between data and public awareness. </p>
                </div>
              
                <div className="w-full pt-6 self-end px-4 lg:w-1/2">
                    <div className="mx-auto">
                        <img src="/assets/RendyC.png" alt="" className="max-w-[100vw] mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Author;