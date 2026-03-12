# Magnetiq Bank — DS Kit

> **Power in Collaboration** — UI Kit built from the Figma design system.

[![Figma](https://img.shields.io/badge/Figma-DS%20Kit-5100C0?logo=figma&logoColor=white)](https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit)

## Structure

```
packages/
└── ui-kit/
    ├── src/
    │   ├── tokens/              # Design tokens (colours, typography, radius, spacing)
    │   ├── foundations/         # CSS reset, variables, global type styles
    │   └── components/
    │       ├── Button/          # Primary · Secondary · Ghost — 3 sizes · 3 states
    │       ├── Input/           # Text · Password · Search — 6 states
    │       ├── Badge/           # Status (4) + Tag (4) variants
    │       └── Card/            # Default + Magnetiq-Divide
    ├── .storybook/              # Storybook 8 config + Magnetiq theme
    ├── package.json
    └── tsconfig.json
```

## Token System

| Layer | File | Maps to Figma |
|---|---|---|
| Primitives | `tokens/colors.ts` | Collection: Primitives |
| Semantic (Light/Dark) | `tokens/colors.ts` + `foundations/variables.css` | Collection: Semantic Tokens |
| Geometry | `tokens/radius.ts` | Collection: Geometry |
| Typography | `tokens/typography.ts` | Text Styles |

CSS custom properties in `foundations/variables.css` mirror the Figma variable names exactly — `--action-primary`, `--surface-primary`, `--border-subtle`, etc. — and switch via `[data-theme="dark"]`.

## Components

All components accept a `variant` prop that maps 1:1 to the **Figma component set variant property**.

| Component | Figma node | Variants |
|---|---|---|
| `Button` | `1:508` | `primary / secondary / ghost` × `default / hover / disabled` |
| `Input` | `1:572` | `text / password / search` × `default / focus / filled / error / success / disabled` |
| `Badge` | `1:596` | `status / tag` × `active / pending / verified / error / violet / green / grey / outline` |
| `Card` | `1:620` | `default / magnetiq-divide` |

## Getting started

```bash
# Install
npm install

# Start Storybook
npm run storybook

# Typecheck
npm run typecheck
```

## Usage

```tsx
import '@magnetiq/ui-kit/foundations/variables.css';
import { Button, Input, Badge, Card } from '@magnetiq/ui-kit';

// Tokens are also exported
import { primitives, semantic, radius } from '@magnetiq/ui-kit';

function Example() {
  return (
    <Card variant="default">
      <Badge category="status" variant="active">Active</Badge>
      <Input type="text" label="Account name" placeholder="Enter name" />
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

## Dark mode

Set `data-theme="dark"` on `<html>` or any container. Semantic CSS variables swap automatically — matching the Figma Semantic Tokens **Dark** mode.

```ts
document.documentElement.setAttribute('data-theme', 'dark');
```
