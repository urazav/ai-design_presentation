import type { Meta, StoryObj } from '@storybook/react';
import { SignupModal } from './SignupModal';

const meta: Meta<typeof SignupModal> = {
  title:     'Molecules/SignupModal',
  component: SignupModal,
  tags:      ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url:  'https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=13-253',
    },
    docs: {
      description: {
        component: `
**Signup Modal — Step 1 of 3 (Personal details)**

A full-screen modal built entirely from DS Kit primitives:
- \`Badge\` → step indicator (Status/Active + Tag/Grey)
- \`Input\` → form fields with labels and helper text (text, email, password types)
- \`Button\` → CTA (primary, full-width) and sign-in link (ghost, full-width)

All colours reference CSS custom properties from \`foundations/variables.css\`
(\`--action-primary\`, \`--surface-primary\`, \`--border-subtle\`, etc.)
so the modal responds automatically to light/dark theme switching.
        `,
      },
    },
  },
  argTypes: {
    open:     { control: 'boolean' },
    onClose:  { action: 'onClose'  },
    onSubmit: { action: 'onSubmit' },
    onSignIn: { action: 'onSignIn' },
  },
};

export default meta;
type Story = StoryObj<typeof SignupModal>;

export const Default: Story = {
  name: 'Step 1 — Personal',
  args: { open: true },
};

export const Closed: Story = {
  name: 'Closed',
  args: { open: false },
};

export const WithHandlers: Story = {
  name: 'With Action Handlers',
  args: { open: true },
  parameters: {
    docs: {
      description: {
        story: 'Open the Actions panel to see `onSubmit`, `onClose`, and `onSignIn` events fire.',
      },
    },
  },
};
