"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import { MotionProps, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { useState, useEffect } from 'react';

interface IAnimateImageProps extends MotionProps {
    className: string;
    src: string;
    width: number;
    height: number;
    alt: string;
}

const AnimatedImage = motion(Image);

export default function SectionHero(): JSX.Element {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [avatarSrc, setAvatarSrc] = useState(assets.home.hero.avatarSmile);

    // Step 2: Use useEffect to update image source after 2 seconds
    useEffect(() => {
      const timeout = setTimeout(() => {
        setAvatarSrc(assets.home.hero.avatar);
      }, 1700);
  
      return () => clearTimeout(timeout);
    }, []); // Empty dependency array ensures that the effect runs only once on mount
  

    const animatedImages: IAnimateImageProps[] = [
        {
            className: 'w-[140px] h-auto lg:w-[150px] lg:h-[auto] absolute top-3 -left-16 z-[1]',
            src: assets.home.hero.infinity,
            width: 180,
            height: 120,
            alt: '',
            initial: { opacity: 0, x: -100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            transition: { delay: 0.4, duration: 0.8 },
        },
        {
            className: 'w-[80px] h-auto lg:w-[250px] lg:h-[auto] absolute top-6 -right-12 z-[1]',
            src: assets.home.hero.pokeball,
            width: 100,
            height: 202,
            alt: '',
            initial: { opacity: 0, x: 100, rotate: 0 }, // set initial rotation to 0 degrees
            animate: inView ? { opacity: 1, x: 0, rotate: 1800 } : {}, // rotate 360 degrees when in view
            transition: { delay: 0.2, duration: 0.8 }, // loop the animation indefinitely
          }
,          
{
    className: 'w-[110px] h-auto lg:w-[150px] lg:h-[150px] absolute bottom-8 -right-12 z-[1]',
    src: assets.home.hero.music,
    width: 150,
    height: 140,
    alt: '',
    initial: { opacity: 0, x: 100 },
    animate: inView
      ? { opacity: 1, x: 0, y: [0, -20, 0], transition: { yoyo: Infinity, duration: 0.8 } }
      : {},
    transition: { delay: 0.2, duration: 0.8 },
  }        
,        
        {
            className: 'w-[130px] h-auto lg:w-[170px] lg:h-[170px] absolute bottom-6 -left-14 z-[1]',
            src: assets.home.hero.starbucks,
            width: 170,
            height: 170,
            alt: '',
            initial: { opacity: 0, x: -100, rotate: -45 }, // Initial rotation angle
            animate: inView ? { opacity: 1, x: 0, rotate: 30 } : { rotate: 0 }, // Rotate by 45 degrees when in view
            transition: { delay: 0.8, duration: 0.8 },
          }
          
    ];

    return (
        <section ref={ref} id="Hero" className='safe-x-padding mt-10 mb-[172px]' aria-label='Hero Section'>
            <div className='grid grid-flow-row gap-10 xl:grid-cols-2 xl:grid-flow-col xl:gap-0'>
                {/* first */}
                <div className='flex flex-col items-center justify-center order-2 xl:items-start xl:order-1'>
                    <motion.p
                        className='font-montserrat font-bold text-2xl md:text-[28px] lg:text-[32px] mb-3 text-center xl:text-left'
                        aria-label="Welcome to Gm_Abhishek's Portfolio"
                    >
                        Welcome to Gm_Abhishek&apos;s Portfolio
                    </motion.p>
                    <motion.h2
                        className='font-montserrat font-extrabold text-5xl md:text-[64px] md:leading-[56px] lg:text-[66px] lg:leading-[88px] gradient-text mb-6 text-center xl:text-left'
                        aria-label="Full Stack Web Developer"
                    >
                        Flutter Developer
                    </motion.h2>
                    <motion.p
                        className='text-base font-medium text-center md:text-xl lg:text-2xl xl:text-left'
                        aria-label="  I'm Gm_Abhishek, A passionate Flutter Developer based in Tamil Nadu, India."
                    >
                        I&apos;m Gm_Abhishek, A passionate Flutter Developer based in Tamil Nadu, India.
                    </motion.p>
                    <div className="flex items-center justify-center rounded-lg gradient-bg mt-4">
    <a
        href="/"
        className="flex-1 py-4 safe-x-padding"
        download="Gm_Abhishek's Resume"
    >
        <div className="flex items-center justify-between">
            <span className='text-2xl font-semibold'>Resume</span>
            <span className='text-4xl ml-4'>
                <BsFileEarmarkPerson />
            </span>
        </div>
    </a>
</div>

                </div>
                {/* second */}
                <div className='xl:order-2'>
                    <div className='relative flex items-center justify-center order-1 xl:justify-end'>
                        <div className='relative'>
                            <motion.div
                                className='relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] bg-gray rounded-3xl overflow-clip'
                            >
                                <AnimatedImage
                                    className='w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] absolute top-0 bottom-0 left-0 right-0'
                                    src={avatarSrc}
                                    width={480}
                                    height={480}
                                    alt=''
                                    priority
                                    initial={{ opacity: 0.5, y: 500 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2, duration: 1 }}
                                    aria-label="Gm's Avatar"
                                />
                            </motion.div>
                            {animatedImages.map(({ className, src, width, height, alt, initial, animate, transition }, index) => (
                                <AnimatedImage
                                    key={index}
                                    className={className}
                                    src={src}
                                    width={width}
                                    height={height}
                                    alt={alt}
                                    initial={initial}
                                    animate={animate}
                                    transition={transition}
                                    aria-hidden={!inView}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
