/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import megoNapulEth from '@assets/megoNapulEth.svg'
import { useTranslation } from "react-i18next";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { PiCircleDashed  } from "react-icons/pi";
import { TbCalendarTime } from "react-icons/tb";


function Phases() {
    const { t, i18n } = useTranslation();
    return (
        <section className="w-full flex flex-col items-center justify-start pt-24 lg:pt-40">
            <h5 className=" text-black w-8/12 lg:w-fit text-4xl mb-6 SemiBold leading-normal text-center">
                {t('phasesTitle')}
            </h5>
            <VerticalTimeline lineColor="#eddb55">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#E38B84', color: '#fff', borderRadius: "0px" }}
                    contentArrowStyle={{ borderRight: '12px solid #eddb55' }}
                    date={"10 - 16 " + t('feb')}
                    dateClassName=" text-[#FF4646] "
                    iconStyle={{ background: '#E38B84', color: '#fff', boxShadow: "0 0 0 4px #eddb55, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)" }}
                    icon={<IoCheckmarkDoneSharp color="#FFFFFF" size={30} />}
                >
                    <h3 className=" text-white text-xl whitespace-nowrap Bold">Innovators {"("+t('soldout')+")"}</h3>
                    <h4 className="text-white text-sm whitespace-nowrap Medium">{t('pahse2')}</h4>
                    <p className='text-lg Medium text-white w-10/12'>
                        {t('innoPara')}.
                    </p>
                    <p className='text-lg Medium text-white w-10/12'>
                        {t('sold150')}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#91CE35', color: '#fff', borderRadius: "0px" }}
                    date={"26/02 - 03/03"} 
                    dateClassName=" text-white"
                    contentArrowStyle={{ borderRight: '12px solid #eddb55' }}
                    iconStyle={{ background: '#91CE35', color: '#fff', boxShadow: "0 0 0 4px #eddb55, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)" }}
                    icon={<PiCircleDashed  color="#FFFFFF" size={30} />}
                >
                    <h3 className=" text-white text-xl whitespace-nowrap Bold">Early Adopters {"("+t('coming')+")"}</h3>
                    <h4 className="text-white text-sm whitespace-nowrap Medium">
                        {t('pahse2')}
                    </h4>
                    <p className='text-lg Medium text-white w-10/12'>
                        {t('earlyPara')}.
                    </p>
                    <p className='text-lg Medium text-white w-10/12'>
                    {t('earlyPara2')}
                    </p>
                    <Link href={'https://napuleth.mego.tickets/'} target='_blank' className=" relative z-50 p-0 w-full flex flex-row items-center justify-center h-fit">
                        <div className="min-w-[70vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-10/12 h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#FFFFFF] border-4 border-[#eddb55] mt-8">


                            <h5 className=" text-black Medium text-xl">
                                {t('gettickets')} (8€)
                            </h5>
                        </div>
                    </Link>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: '#D9DEE8', color: '#fff', boxShadow: "0 0 0 4px #eddb55, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)" }}
                    icon={<TbCalendarTime color="#252525" size={30} />}
                    contentStyle={{border: "none"}}
                />
            </VerticalTimeline>


        </section>
    )
}

export default Phases