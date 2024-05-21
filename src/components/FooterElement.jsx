import heroImg from '/assets/shared/desktop/image-best-gear.jpg'

function FooterElement() {
  return (
    <div className="mb-48 mt-48 max-container">
        <div className='flex items-center justify-between'>
            <div className='w-[445px]'>
                <h1 className='uppercase font-bold text-4xl mb-8'>
                    Bringing you the <span className='text-orange-600'>best</span> audio gear
                </h1>
                <p className="text-base text-black opacity-50">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <div>
                <img src={heroImg} alt="" className='w-[540px] h-[588px] rounded'/>
            </div>
        </div>
    </div>
  )
}

export default FooterElement