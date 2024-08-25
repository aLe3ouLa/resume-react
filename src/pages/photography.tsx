import React from 'react';
import Landscape from './landscape';
import Wrapper from '../components/fragments/wrapper';
import { ColoredSpan } from '../components/fragments/hero/hero.style';

export default function Photography() {
    return (
        <Wrapper>
            <h2>
                Landscape <ColoredSpan>.</ColoredSpan>
            </h2>
            <Landscape />
        </Wrapper>
    );
}
