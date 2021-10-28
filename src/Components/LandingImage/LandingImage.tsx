import React, { useMemo } from 'react';
import { AppState } from '../../Redux/Models';
import { useSelector } from 'react-redux';
import { Flex } from '../Flex';
import { Landing } from '../../Assets';
import { WindowSizes } from '../../Redux/Models/Utility/WIndowSizes';
import { ReusableStaticImage } from '../ReusableStaticImage';

export const LandingImage = () => {
    const appSize = useSelector((s: AppState) => s.utility.appWindowSize)

    const landingImageSize = useMemo(() => {
        switch (appSize) {
            case WindowSizes.large: return 40
            case WindowSizes.mobile: return 29
            case WindowSizes.smallMobile: return 24
            case WindowSizes.tinyMobile: return 18
            default: return 40
        }
    }, [appSize])

    return (
        <Flex center>
            <ReusableStaticImage image={Landing} width={landingImageSize} />
        </Flex>
    )
}
