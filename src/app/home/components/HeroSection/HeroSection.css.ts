import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space, borderRadius } = themeTokens;

export const section = style({
  width: '100%',
  height: '39.25rem', // 628px
  paddingTop: '11.25rem', // 180px
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #A3B4FF -99.27%, #FFFFFF 44.33%)',
});

export const title = style({
  textAlign: 'center',
  marginBottom: space['2xl'],
});

export const subTitle = style({
  textAlign: 'center',
  marginBottom: space['7xl'],
});

export const button = style({
  width: 'max-content !important',
  padding: `${space.lg} ${space.xl}`,
  borderRadius: borderRadius.lg,
});
