import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

export const ModalRoot = styled.div`
  display: flex;
  width: 880px;
  max-width: 100%;
  height: 640px;
  border-radius: var(--radius-standard, 8px);
  overflow: hidden;
  box-shadow: 0 24px 64px -8px rgba(16, 0, 40, 0.22);
  animation: ${fadeIn} 0.22s ease-out;
  background: var(--surface-primary);
`;

/* ── Left panel ─────────────────────────────────────────────────────────── */

export const BrandPanel = styled.div`
  position: relative;
  width: 320px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #280068 0%, #5100c0 100%);
  padding: 48px 36px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const GlowCircle = styled.div<{
  $size: number;
  $top?: number;
  $bottom?: number;
  $left?: number;
  $right?: number;
  $color: string;
  $opacity: number;
  $blur: number;
}>`
  position: absolute;
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  border-radius: 50%;
  background: ${p => p.$color};
  opacity: ${p => p.$opacity};
  filter: blur(${p => p.$blur}px);
  pointer-events: none;
  ${p => p.$top    !== undefined ? `top: ${p.$top}px;`       : ''}
  ${p => p.$bottom !== undefined ? `bottom: ${p.$bottom}px;` : ''}
  ${p => p.$left   !== undefined ? `left: ${p.$left}px;`     : ''}
  ${p => p.$right  !== undefined ? `right: ${p.$right}px;`   : ''}
`;

export const BrandMark = styled.span`
  font-family: var(--font-label);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--action-success);
  position: relative;
`;

export const BrandHeadline = styled.h2`
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  margin: 28px 0 14px;
  position: relative;
`;

export const BrandDescription = styled.p`
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.6;
  color: var(--brand-grey-light, #d1dde8);
  margin: 0;
  position: relative;
`;

export const AccentLine = styled.div`
  width: 48px;
  height: 2px;
  background: var(--action-success);
  margin: 24px 0;
  position: relative;
`;

export const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.5;
  color: #ffffff;
`;

export const BenefitDot = styled.span<{ $color: 'green' | 'violet' }>`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${p => p.$color === 'green'
    ? 'var(--action-success)'
    : 'var(--action-primary)'};
`;

export const SocialProof = styled.div`
  margin-top: auto;
  position: relative;
`;

export const SocialSeparator = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  margin-bottom: 16px;
`;

export const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AvatarStack = styled.div`
  display: flex;
`;

export const Avatar = styled.div<{ $color: string; $offset: number }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${p => p.$color};
  border: 2px solid #280068;
  margin-left: ${p => p.$offset}px;
  flex-shrink: 0;
`;

export const SocialText = styled.span`
  font-family: var(--font-body);
  font-size: 12px;
  line-height: 1.4;
  color: var(--brand-grey-light, #d1dde8);
`;

/* ── Right panel ────────────────────────────────────────────────────────── */

export const FormPanel = styled.div`
  flex: 1;
  background: var(--surface-primary);
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const StepRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const StepConnector = styled.div`
  width: 16px;
  height: 1px;
  background: var(--border-subtle);
`;

export const FormTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 4px;
`;

export const FormSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-body);
  margin: 0 0 24px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;
`;

export const TermsRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-top: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  accent-color: var(--action-primary);
  cursor: pointer;
`;

export const TermsText = styled.span`
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-body);
  line-height: 1.5;

  a {
    color: var(--action-primary);
    text-decoration: underline;
  }
`;

export const ActionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PanelDivider = styled.div`
  width: 1px;
  background: var(--border-subtle);
  flex-shrink: 0;
`;
