/**
 * Design System Showcase Page
 *
 * Visual documentation of the design system components and tokens
 */

import React from 'react';
import styled from 'styled-components';
import {
    colors,
    typography,
    spacing,
    shadows,
    borders,
    breakpoints,
} from '../design-system/tokens';
import { ButtonVariation } from '../design-system/components/Button/Button.styles';
import TrackedButton from '../components/TrackedButton';

const PageContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${spacing.xl} ${spacing.md};
    background: ${colors.cream.base};
    background-image: var(--grain-texture);
    background-blend-mode: overlay;
    min-height: 100vh;
`;

const Section = styled.section`
    margin-bottom: ${spacing.xxl};
`;

const SectionTitle = styled.h2`
    font-family: ${typography.fontFamily.display.join(', ')};
    font-size: ${typography.fontSize['4xl']};
    font-weight: ${typography.fontWeight.bold};
    color: ${colors.text.primary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.uppercase};
    margin-bottom: ${spacing.lg};
    padding-bottom: ${spacing.md};
    border-bottom: ${borders.width.medium} solid ${colors.primary.base};
`;

const SubsectionTitle = styled.h3`
    font-family: ${typography.fontFamily.display.join(', ')};
    font-size: ${typography.fontSize['2xl']};
    font-weight: ${typography.fontWeight.bold};
    color: ${colors.text.primary};
    margin-top: ${spacing.xl};
    margin-bottom: ${spacing.md};
`;

const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: ${spacing.md};
    margin-bottom: ${spacing.lg};
`;

const ColorCard = styled.div<{ bgColor: string; textColor?: string }>`
    background: ${({ bgColor }) => bgColor};
    color: ${({ textColor }) => textColor || colors.text.primary};
    padding: ${spacing.md};
    border-radius: ${borders.radius.md};
    border: ${borders.width.base} solid ${colors.text.primary};
    box-shadow: ${shadows.md};
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ColorName = styled.div`
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.base};
    margin-bottom: ${spacing.xs};
`;

const ColorValue = styled.div`
    font-size: ${typography.fontSize.sm};
    font-family: monospace;
    opacity: 0.8;
`;

const TypographyExample = styled.div`
    margin-bottom: ${spacing.md};
    padding: ${spacing.md};
    background: ${colors.white};
    border-radius: ${borders.radius.md};
    border: ${borders.width.base} solid ${colors.text.primary};
    box-shadow: ${shadows.sm};
`;

const DisplayFontExample = styled(TypographyExample)`
    font-family: ${typography.fontFamily.display.join(', ')};
`;

const BodyFontExample = styled(TypographyExample)`
    font-family: ${typography.fontFamily.body.join(', ')};
`;

const Heading1Example = styled.h1`
    ${typography.textStyles.h1}
`;

const Heading2Example = styled.h2`
    ${typography.textStyles.h2}
`;

const Heading3Example = styled.h3`
    ${typography.textStyles.h3}
`;

const BodyTextExample = styled.p`
    ${typography.textStyles.body}
`;

const BodyLargeExample = styled.p`
    ${typography.textStyles.bodyLarge}
`;

const BodySmallExample = styled.p`
    ${typography.textStyles.bodySmall}
`;

const SpacingRow = styled.div`
    margin-bottom: ${spacing.md};
    display: flex;
    align-items: center;
`;

const SpacingLabel = styled.div`
    strong {
        font-weight: ${typography.fontWeight.bold};
    }
`;

const ShadowContainer = styled.div`
    margin-bottom: ${spacing.md};

    &:not(:first-of-type) {
        margin-top: ${spacing.xl};
    }
`;

const ShadowLabel = styled.div`
    margin-bottom: ${spacing.md};
    font-weight: ${typography.fontWeight.bold};
`;

const BorderRadiusGrid = styled.div`
    display: flex;
    gap: ${spacing.md};
    flex-wrap: wrap;
    margin-bottom: ${spacing.lg};
`;

const BorderRadiusExample = styled.div<{ radius: string }>`
    width: 100px;
    height: 100px;
    background: ${colors.primary.base};
    border-radius: ${({ radius }) => radius};
    border: ${borders.width.base} solid ${colors.text.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    font-size: ${typography.fontSize.xs};
    text-align: center;
`;

const SpacingExample = styled.div<{ size: string }>`
    background: ${colors.primary.base};
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: ${borders.radius.sm};
    margin-right: ${spacing.md};
    display: inline-block;
`;

const ShadowExample = styled.div<{ shadow: string }>`
    width: 150px;
    height: 150px;
    background: ${colors.white};
    border-radius: ${borders.radius.md};
    border: ${borders.width.base} solid ${colors.text.primary};
    box-shadow: ${({ shadow }) => shadow};
    display: inline-block;
    margin-right: ${spacing.md};
    margin-bottom: ${spacing.md};
`;

const ButtonGrid = styled.div`
    display: flex;
    gap: ${spacing.md};
    flex-wrap: wrap;
    margin-bottom: ${spacing.lg};
`;

const CodeBlock = styled.pre`
    background: ${colors.text.primary};
    color: ${colors.white};
    padding: ${spacing.md};
    border-radius: ${borders.radius.md};
    overflow-x: auto;
    font-size: ${typography.fontSize.sm};
    font-family: monospace;
    margin: ${spacing.md} 0;
`;

const IntroText = styled.p`
    font-size: ${typography.fontSize.lg};
    line-height: ${typography.lineHeight.relaxed};
`;

const WhiteColorCard = styled(ColorCard)`
    border: ${borders.width.base} solid ${colors.text.primary};
`;

const DesignSystemPage: React.FC = () => {
    return (
        <PageContainer>
            <Section>
                <SectionTitle>Design System</SectionTitle>
                <IntroText>
                    A comprehensive design system for the retro-themed resume
                    website, inspired by 1950s-1970s product design.
                </IntroText>
            </Section>

            {/* Colors */}
            <Section>
                <SectionTitle>Colors</SectionTitle>

                <SubsectionTitle>Primary Colors</SubsectionTitle>
                <ColorGrid>
                    <ColorCard
                        bgColor={colors.primary.base}
                        textColor={colors.white}
                    >
                        <ColorName>Primary</ColorName>
                        <ColorValue>{colors.primary.base}</ColorValue>
                    </ColorCard>
                    <ColorCard
                        bgColor={colors.primary.hover}
                        textColor={colors.white}
                    >
                        <ColorName>Primary Hover</ColorName>
                        <ColorValue>{colors.primary.hover}</ColorValue>
                    </ColorCard>
                    <ColorCard
                        bgColor={colors.primary.light}
                        textColor={colors.text.primary}
                    >
                        <ColorName>Primary Light</ColorName>
                        <ColorValue>{colors.primary.light}</ColorValue>
                    </ColorCard>
                    <ColorCard
                        bgColor={colors.primary.dark}
                        textColor={colors.white}
                    >
                        <ColorName>Primary Dark</ColorName>
                        <ColorValue>{colors.primary.dark}</ColorValue>
                    </ColorCard>
                </ColorGrid>

                <SubsectionTitle>Secondary Colors</SubsectionTitle>
                <ColorGrid>
                    <ColorCard
                        bgColor={colors.secondary.base}
                        textColor={colors.white}
                    >
                        <ColorName>Secondary</ColorName>
                        <ColorValue>{colors.secondary.base}</ColorValue>
                    </ColorCard>
                    <ColorCard
                        bgColor={colors.tertiary.base}
                        textColor={colors.text.primary}
                    >
                        <ColorName>Tertiary</ColorName>
                        <ColorValue>{colors.tertiary.base}</ColorValue>
                    </ColorCard>
                    <ColorCard
                        bgColor={colors.accent.base}
                        textColor={colors.text.primary}
                    >
                        <ColorName>Accent</ColorName>
                        <ColorValue>{colors.accent.base}</ColorValue>
                    </ColorCard>
                    <ColorCard
                        bgColor={colors.coral.base}
                        textColor={colors.white}
                    >
                        <ColorName>Coral</ColorName>
                        <ColorValue>{colors.coral.base}</ColorValue>
                    </ColorCard>
                </ColorGrid>

                <SubsectionTitle>Neutral Colors</SubsectionTitle>
                <ColorGrid>
                    <ColorCard
                        bgColor={colors.cream.base}
                        textColor={colors.text.primary}
                    >
                        <ColorName>Cream</ColorName>
                        <ColorValue>{colors.cream.base}</ColorValue>
                    </ColorCard>
                    <ColorCard
                        bgColor={colors.text.primary}
                        textColor={colors.white}
                    >
                        <ColorName>Text Primary</ColorName>
                        <ColorValue>{colors.text.primary}</ColorValue>
                    </ColorCard>
                    <ColorCard
                        bgColor={colors.text.secondary}
                        textColor={colors.white}
                    >
                        <ColorName>Text Secondary</ColorName>
                        <ColorValue>{colors.text.secondary}</ColorValue>
                    </ColorCard>
                    <WhiteColorCard
                        bgColor={colors.white}
                        textColor={colors.text.primary}
                    >
                        <ColorName>White</ColorName>
                        <ColorValue>{colors.white}</ColorValue>
                    </WhiteColorCard>
                </ColorGrid>
            </Section>

            {/* Typography */}
            <Section>
                <SectionTitle>Typography</SectionTitle>

                <SubsectionTitle>Font Families</SubsectionTitle>
                <DisplayFontExample>
                    Display Font (Fredoka) - Used for headings and large text
                </DisplayFontExample>
                <BodyFontExample>
                    Body Font (Comfortaa) - Used for body text and readable
                    content
                </BodyFontExample>

                <SubsectionTitle>Headings</SubsectionTitle>
                <TypographyExample>
                    <Heading1Example>Heading 1</Heading1Example>
                </TypographyExample>
                <TypographyExample>
                    <Heading2Example>Heading 2</Heading2Example>
                </TypographyExample>
                <TypographyExample>
                    <Heading3Example>Heading 3</Heading3Example>
                </TypographyExample>

                <SubsectionTitle>Body Text</SubsectionTitle>
                <TypographyExample>
                    <BodyTextExample>
                        Body text - Used for paragraphs and main content.
                        Comfortaa font provides excellent readability.
                    </BodyTextExample>
                </TypographyExample>
                <TypographyExample>
                    <BodyLargeExample>
                        Large body text - For emphasis or important content.
                    </BodyLargeExample>
                </TypographyExample>
                <TypographyExample>
                    <BodySmallExample>
                        Small body text - For captions, labels, or secondary
                        information.
                    </BodySmallExample>
                </TypographyExample>
            </Section>

            {/* Spacing */}
            <Section>
                <SectionTitle>Spacing</SectionTitle>
                <div>
                    {Object.entries(spacing).map(([key, value]) => (
                        <SpacingRow key={key}>
                            <SpacingExample size={value} />
                            <SpacingLabel>
                                <strong>{key}:</strong> {value}
                            </SpacingLabel>
                        </SpacingRow>
                    ))}
                </div>
            </Section>

            {/* Shadows */}
            <Section>
                <SectionTitle>Shadows</SectionTitle>
                <ShadowContainer>
                    <ShadowLabel>Standard Shadows:</ShadowLabel>
                    <ShadowExample shadow={shadows.sm} />
                    <ShadowExample shadow={shadows.md} />
                    <ShadowExample shadow={shadows.lg} />
                    <ShadowExample shadow={shadows.xl} />
                </ShadowContainer>
                <ShadowContainer>
                    <ShadowLabel>Primary Color Shadows:</ShadowLabel>
                    <ShadowExample shadow={shadows.primary.sm} />
                    <ShadowExample shadow={shadows.primary.md} />
                    <ShadowExample shadow={shadows.primary.lg} />
                    <ShadowExample shadow={shadows.primary.xl} />
                </ShadowContainer>
            </Section>

            {/* Buttons */}
            <Section>
                <SectionTitle>Buttons</SectionTitle>
                <SubsectionTitle>Variants</SubsectionTitle>
                <ButtonGrid>
                    <TrackedButton
                        variation={ButtonVariation.PRIMARY}
                        label="Primary Button"
                        trackingName="Primary Button"
                        trackingLocation="design-system"
                    />
                    <TrackedButton
                        variation={ButtonVariation.SECONDARY}
                        label="Secondary Button"
                        trackingName="Secondary Button"
                        trackingLocation="design-system"
                    />
                </ButtonGrid>
            </Section>

            {/* Borders */}
            <Section>
                <SectionTitle>Borders</SectionTitle>
                <SubsectionTitle>Border Radius</SubsectionTitle>
                <BorderRadiusGrid>
                    {Object.entries(borders.radius)
                        .slice(0, 8)
                        .map(([key, value]) => (
                            <BorderRadiusExample key={key} radius={value}>
                                {key}
                            </BorderRadiusExample>
                        ))}
                </BorderRadiusGrid>
            </Section>

            {/* Breakpoints */}
            <Section>
                <SectionTitle>Breakpoints</SectionTitle>
                <CodeBlock>
                    {`Mobile: 0px
Tablet: ${breakpoints.tablet}
Desktop: ${breakpoints.desktop}
Large: ${breakpoints.large}
XLarge: ${breakpoints.xlarge}`}
                </CodeBlock>
            </Section>
        </PageContainer>
    );
};

export default DesignSystemPage;
