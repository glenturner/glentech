import React, { useEffect, useState, ChangeEvent, useRef } from 'react';
import { Flex } from '../../Flex';
import { gsap } from 'gsap';
import SR from 'scrollreveal';
import { useInterval } from 'usehooks-ts'
import { quotes } from '../../../Constants/Content';
import { ReusableStaticImage } from '../../ReusableStaticImage';
import style from './style.module.scss';

export const Author = (props: any) => {
    const [index, setIndex] = useState(0)
    const [delay, setDelay] = useState<number>(6000)
    const [isPlaying, setPlaying] = useState<boolean>(false)

    let quoteRef = useRef(null);

    const quoteInterval = null;

    const setQuoteInterval = () => {
        // let quoteRef: any = null
        setInterval(() => {
            gsap.to(quoteRef, { duration: 0.3, opacity: 0, x: 100 })
            setIndex(index < quotes.length - 1 ? index + 1 : 0)
            return () => gsap.fromTo(quoteRef, { duration: 0.3, opacity: 0, x: -100 }, { opacity: 1, x: 0 })
        }, 6000
        );
    }

    // const setQuoteInterval = () => {
    //     // let quoteRef: any = null
    //     useInterval(() => {
    //         gsap.to(quoteRef, { duration: 0.3, opacity: 0, x: 100 })
    //         setIndex(index < quotes.length - 1 ? index + 1 : 0)
    //         return () => gsap.fromTo(quoteRef, { duration: 0.3, opacity: 0, x: -100 }, { opacity: 1, x: 0 })
    //     },    // Delay in milliseconds or null to stop it
    //         isPlaying ? delay : null,
    //     );
    // }

    const onSelectOption = (id: any) => {
        gsap.to(quoteRef.current,
            { duration: 0.1, x: 100, opacity: 0 })
        setIndex(id)
        gsap.fromTo(quoteRef.current,
            { duration: 0.1, x: -100, opacity: 0 }, { opacity: 1, x: 0 })
    }

    useEffect(() => {
        SR().reveal('#quotes', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
    }, [])

    return (
        <Flex id="quotes" column center className={style.wrapper}>
            <Flex center column>
                <div ref={quoteRef}>
                    <Flex center column className={style.quote_wrapper}>
                        <img draggable="false" alt="testimonial" className={style.author_img} src={quotes[index].image} />
                        <span className={style.quote}>{quotes[index].quote}</span>
                    </Flex>
                    <Flex column center className={style.author_wrapper}>
                        <Flex center column className={style.signature}>
                            <span style={{ fontSize: '28px' }} className={style.author}>{quotes[index].author}</span>
                            <div className={style.customDash}></div>
                        </Flex>
                        <span style={{ fontSize: '16px', color: '#516f90' }}>{quotes[index].title}</span>
                    </Flex>
                </div>
            </Flex>
            <Flex className={style.dots}>
                {
                    quotes.map((item, key) => {
                        return (
                            <div key={key} onClick={() => onSelectOption(key)} className={`${style.singleDot} ${index === key ? style.white : style.grey}`}></div>
                        )
                    })
                }
            </Flex>
        </Flex>
    );
};
