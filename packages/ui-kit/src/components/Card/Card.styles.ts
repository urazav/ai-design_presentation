import styled, { css } from 'styled-components';

type Elevation = 'none' | 'sm' | 'md' | 'lg';

const elevationStyles: Record<Elevation, ReturnType<typeof css>> = {
  none: css`box-shadow: none;`,
  sm:   css`box-shadow: var(--shadow-sm);`,
  md:   css`box-shadow: var(--shadow-md);`,
  lg:   css`box-shadow: var(--shadow-lg);`,
};

// ─── Default Card ─────────────────────────────────────────────────────────────
export const DefaultCardRoot = styled.div<{ $elevation: Elevation }>`
  background-color: var(--surface-primary);
  border:           1px solid var(--border-subtle);
  border-radius:    var(--radius-standard);
  padding:          var(--space-6);
  display:          flex;
  flex-direction:   column;
  gap:              var(--space-3);
  transition:       box-shadow 200ms ease;

  ${({ $elevation }) => elevationStyles[$elevation]}

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

// ─── Magnetiq-Divide Card ─────────────────────────────────────────────────────
export const DivideCardRoot = styled.div<{ $elevation: Elevation }>`
  display:          flex;
  border-radius:    var(--radius-standard);
  overflow:         hidden;
  transition:       box-shadow 200ms ease;

  ${({ $elevation }) => elevationStyles[$elevation]}

  /* Responsive: stack on mobile */
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const DivideLeft = styled.div`
  flex:             1;
  background:       var(--gradient-magnetic-dark);
  background-color: var(--color-violet-deep);
  padding:          var(--space-7);
  display:          flex;
  flex-direction:   column;
  justify-content:  flex-end;
  gap:              var(--space-3);
  min-height:       240px;
  color:            #ffffff;
`;

export const DivideRight = styled.div`
  flex:             1;
  background-color: var(--surface-primary);
  padding:          var(--space-7);
  display:          flex;
  flex-direction:   column;
  gap:              var(--space-4);
`;
