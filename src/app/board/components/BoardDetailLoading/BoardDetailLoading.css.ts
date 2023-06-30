import { style } from '@vanilla-extract/css';
import { wrapper as wrapperStyle } from '@/app/board/components/BoardDetail/BoardDetail.css';
import {
  infoBanner as infoBannerStyle,
  footer as footerStyle,
  footerText as footerTextStyle,
  footerButtons as footerButtonsStyle,
} from '@/app/board/components/ContentSection/ContentSection.css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const flexAlignCenter = style({
  display: 'flex',
  alignItems: 'center',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const wrapper = style([wrapperStyle]);

export const infoBanner = style([
  infoBannerStyle,
  {
    marginBottom: '14rem',
  },
]);

export const footer = style([
  footerStyle,
  {
    marginTop: 0,
  },
]);

export const footerText = style([footerTextStyle]);

export const footerButtons = style([footerButtonsStyle]);

export const list = style([
  flexColumn,
  {
    gap: '1.75rem',
    marginTop: space.xl,
    marginBottom: space['3xl'],
  },
]);

export const listItem = style([
  flexAlignCenter,
  {
    gap: space.md,
  },
]);
