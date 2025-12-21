/**
 * Design System - Button Component Documentation
 * 
 * Buttons follow the retro aesthetic with:
 * - Pill-shaped (border-radius: 9999px)
 * - Chunky borders (3px)
 * - Vintage layered shadows
 * - Tactile hover/active states
 */

import React from 'react';
import { ButtonVariation } from '../../components/fragments/Button/Button.styles';
import TrackedButton from '../../components/TrackedButton';

export const ButtonExamples = () => (
  <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <h2>Button Variants</h2>
    
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
    </div>
    
    <h3>Button States</h3>
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <button style={{
        padding: '12px 24px',
        borderRadius: '9999px',
        border: '3px solid #00A8A8',
        backgroundColor: '#00A8A8',
        color: 'white',
        fontWeight: 600,
        fontSize: '1.4rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        cursor: 'pointer',
        boxShadow: '0 4px 0 #008A8A, 0 6px 12px rgba(0, 168, 168, 0.25)',
      }}>
        Default
      </button>
      <button style={{
        padding: '12px 24px',
        borderRadius: '9999px',
        border: '3px solid #008A8A',
        backgroundColor: '#008A8A',
        color: 'white',
        fontWeight: 600,
        fontSize: '1.4rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        cursor: 'pointer',
        transform: 'translateY(2px)',
        boxShadow: '0 2px 0 #008A8A, 0 4px 8px rgba(0, 168, 168, 0.3)',
      }}>
        Hover
      </button>
      <button style={{
        padding: '12px 24px',
        borderRadius: '9999px',
        border: '3px solid #008A8A',
        backgroundColor: '#008A8A',
        color: 'white',
        fontWeight: 600,
        fontSize: '1.4rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        cursor: 'pointer',
        transform: 'translateY(4px)',
        boxShadow: '0 0 0 #008A8A, 0 2px 4px rgba(0, 168, 168, 0.2)',
      }}>
        Active
      </button>
    </div>
  </div>
);

/**
 * Button Usage Guidelines:
 * 
 * 1. Use PRIMARY for main actions (Download Resume, Submit)
 * 2. Use SECONDARY for secondary actions (Cancel, Back)
 * 3. Always include tracking props for analytics
 * 4. Buttons should have clear labels (avoid generic "Click here")
 * 5. Maintain consistent spacing between buttons (16px gap)
 * 
 * Button Styles:
 * - Border: 3px solid
 * - Border-radius: 9999px (pill shape)
 * - Font: Fredoka/Comfortaa, 600 weight
 * - Text: Uppercase, 0.5px letter-spacing
 * - Shadow: Layered vintage style with color-matched base
 * - Transition: All 0.2s cubic-bezier(0.4, 0, 0.2, 1)
 */
