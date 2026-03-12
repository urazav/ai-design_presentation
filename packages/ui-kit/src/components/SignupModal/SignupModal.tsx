import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Badge } from '../Badge/Badge';
import {
  Backdrop,
  ModalRoot,
  BrandPanel,
  GlowCircle,
  BrandMark,
  BrandHeadline,
  BrandDescription,
  AccentLine,
  BenefitList,
  BenefitItem,
  BenefitDot,
  SocialProof,
  SocialSeparator,
  AvatarRow,
  AvatarStack,
  Avatar,
  SocialText,
  FormPanel,
  StepRow,
  StepConnector,
  FormTitle,
  FormSubtitle,
  FieldGroup,
  TermsRow,
  Checkbox,
  TermsText,
  ActionStack,
  PanelDivider,
} from './SignupModal.styles';

export interface SignupModalProps {
  /** Whether the modal is visible */
  open?: boolean;
  /** Called when the user requests to close the modal */
  onClose?: () => void;
  /** Called when the primary CTA is submitted */
  onSubmit?: (values: { fullName: string; email: string; password: string }) => void;
  /** Called when "Sign in" is clicked */
  onSignIn?: () => void;
}

const BENEFITS: Array<{ dot: 'green' | 'violet'; label: string }> = [
  { dot: 'green',  label: 'Free global transfers'  },
  { dot: 'violet', label: 'Shared team accounts'   },
  { dot: 'green',  label: 'Real-time collaboration' },
  { dot: 'green',  label: 'FSCS protected'          },
];

const AVATAR_COLORS = ['#6b52ff', '#00d180', '#5100c0'];

export const SignupModal: React.FC<SignupModalProps> = ({
  open = true,
  onClose,
  onSubmit,
  onSignIn,
}) => {
  const [fullName, setFullName]   = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [agreed, setAgreed]       = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ fullName, email, password });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <Backdrop onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="signup-title">
      <ModalRoot>

        {/* ── Left panel: branding ─────────────────────────────────────── */}
        <BrandPanel>
          {/* Decorative glow circles */}
          <GlowCircle $size={260} $bottom={-80}  $right={-80}  $color="#6b52ff" $opacity={0.18} $blur={40} />
          <GlowCircle $size={160} $bottom={-60}  $left={-40}   $color="#00d180" $opacity={0.14} $blur={32} />
          <GlowCircle $size={80}  $top={-20}     $right={-20}  $color="#6b52ff" $opacity={0.20} $blur={20} />

          <BrandMark>Magnetiq Bank</BrandMark>

          <BrandHeadline>
            Power in<br />Collaboration
          </BrandHeadline>

          <BrandDescription>
            Your next-generation banking partner for individuals and teams.
          </BrandDescription>

          <AccentLine />

          <BenefitList>
            {BENEFITS.map((b) => (
              <BenefitItem key={b.label}>
                <BenefitDot $color={b.dot} />
                {b.label}
              </BenefitItem>
            ))}
          </BenefitList>

          <SocialProof>
            <SocialSeparator />
            <AvatarRow>
              <AvatarStack>
                {AVATAR_COLORS.map((color, i) => (
                  <Avatar key={color} $color={color} $offset={i === 0 ? 0 : -8} />
                ))}
              </AvatarStack>
              <SocialText>Trusted by 50,000+<br />customers worldwide</SocialText>
            </AvatarRow>
          </SocialProof>
        </BrandPanel>

        {/* ── Panel divider ────────────────────────────────────────────── */}
        <PanelDivider />

        {/* ── Right panel: form ────────────────────────────────────────── */}
        <FormPanel>
          {/* Step indicator using DS Kit Badge */}
          <StepRow>
            <Badge category="status" variant="active">Personal</Badge>
            <StepConnector />
            <Badge category="tag" variant="grey">Security</Badge>
            <StepConnector />
            <Badge category="tag" variant="grey">Verify</Badge>
          </StepRow>

          <FormTitle id="signup-title">Create your account</FormTitle>
          <FormSubtitle>Step 1 of 3 — Tell us about yourself</FormSubtitle>

          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {/* DS Kit Input components */}
              <Input
                type="text"
                label="Full name"
                placeholder="e.g. Alex Morgan"
                helperText="Your legal name as shown on your ID"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                fullWidth
                required
              />
              <Input
                type="email"
                label="Email address"
                placeholder="e.g. alex@magnetiq.bank"
                helperText="We'll send your account confirmation here"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                required
              />
              <Input
                type="password"
                label="Password"
                placeholder="Min. 8 characters"
                helperText="Min. 8 characters including one number"
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                required
              />
            </FieldGroup>

            <TermsRow>
              <Checkbox
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                required
              />
              <TermsText>
                I agree to the{' '}
                <a href="#terms" onClick={e => e.preventDefault()}>Terms of Service</a>
                {' '}and{' '}
                <a href="#privacy" onClick={e => e.preventDefault()}>Privacy Policy</a>
              </TermsText>
            </TermsRow>

            <ActionStack>
              {/* DS Kit Button components */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                type="submit"
                disabled={!agreed}
              >
                Continue to Security →
              </Button>
              <Button
                variant="ghost"
                size="lg"
                fullWidth
                type="button"
                onClick={onSignIn}
              >
                Already have an account? Sign in
              </Button>
            </ActionStack>
          </form>
        </FormPanel>

      </ModalRoot>
    </Backdrop>
  );
};

SignupModal.displayName = 'SignupModal';
