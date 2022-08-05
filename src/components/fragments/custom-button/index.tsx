import React from 'react';

import PDF from '../../../assets/cv.pdf';
import { CustomBtnContainer } from './custom-button.style';

const CustomButton = ({ children }: React.PropsWithChildren) => {
    return (
        <CustomBtnContainer type="button" href={PDF} target="_blank">
            {children}
        </CustomBtnContainer>
    );
};

export default CustomButton;
