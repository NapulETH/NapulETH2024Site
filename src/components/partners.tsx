/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Marquee from "react-fast-marquee";

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'

import spaghett from '@assets/spaghetteth.png'
import wehub from '@assets/wehub.svg'
import mego from '@assets/mego.svg'
import mood from '@assets/mood.svg'
import gate from '@assets/gate.svg'
import canal from '@assets/canal.svg'
import nexlabs from '@assets/nexlabs.webp'
import hg from '@assets/hg.png'
import evLabs from '@assets/ev labs.webp'
import niftyz from '@/assets/Niftyz.webp'

function Partners() {
    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Partners
            </h5>
            <div className="hidden lg:block w-full h-fit relative my-4">
                <Marquee direction="right" className=" overflow-hidden">
                    
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20 scale-150" alt="degate" src={spaghett}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={wehub}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" invert w-auto h-20" alt="degate" src={mego}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={mood}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={gate}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" invert scale-[2.5] w-auto h-20" alt="degate" src={canal}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={nexlabs}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={hg}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" invert w-auto h-20" alt="degate" src={evLabs}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={niftyz}></Image>
                        </div>
                    </Link>



                </Marquee>
            </div>
            
            <Carousel className="w-full h-fit block lg:hidden" showIndicators={false} swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50} interval={3000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="p-0 w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">
                                <div className="w-28 scale-150 h-20 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${spaghett.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://wehub.it/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className="w-auto h-20" alt="degate" src={wehub}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://mego.tickets/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" invert w-auto h-20" alt="degate" src={mego}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'http://moodglobalservices.com/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" w-auto h-20" alt="degate" src={mood}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://thecryptogateway.it/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className="w-auto h-20" alt="degate" src={gate}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.cryptocanal.org/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" invert w-auto h-20 scale-150" alt="degate" src={canal}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.nexlabs.io/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">
                                    <div className="w-20 aspect-square bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${nexlabs.src}')`
                                    }}></div>
                                    
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://hgvis.io/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className="w-auto h-20" alt="degate" src={hg}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.3vlabs.io/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" invert w-auto h-20" alt="degate" src={evLabs}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.niftyz.io/'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className="w-auto h-20" alt="degate" src={niftyz}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

            </Carousel>
        </section>
    )
}

export default Partners