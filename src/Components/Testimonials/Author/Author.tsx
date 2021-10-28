import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Flex } from '../../Flex';
import { gsap } from 'gsap';
import SR from 'scrollreveal';
import { useInterval } from 'usehooks-ts'
import { quotes } from '../../../Constants/Content';
import { ReusableStaticImage } from '../../ReusableStaticImage';
import style from './style.module.scss';

export const Author = (props: any) => {
    const [index, setIndex] = useState(0)

    let quoteRef = useRef(null);

    const onSelectOption = (idx: number) => {
        setIndex(idx)
    }

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            setIndex(index !== quotes.length - 1 ? (index + 1) : 0)
        }, 6000
        ); return () => { clearInterval(quoteInterval) }
    }, [quoteRef.current, index])

    useEffect(() => {
        gsap.fromTo(quoteRef.current,
            { duration: 0.1, x: -100, opacity: 0 }, { opacity: 1, x: 0 })
    }, [index])

    return (
        <Flex id="author" column center className={style.wrapper}>
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
                            <div key={key} onClick={() => setIndex(key)} className={`${style.singleDot} ${index === key ? style.white : style.grey}`}></div>
                        )
                    })
                }
            </Flex>
        </Flex>
    );
};
