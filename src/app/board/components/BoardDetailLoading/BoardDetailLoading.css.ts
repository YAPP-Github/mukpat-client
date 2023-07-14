import { sizeProp } from '@/utils/sizeProp';
import { style } from '@vanilla-extract/css';
import { wrapper as wrapperStyle } from '@/app/board/components/BoardDetail/BoardDetail.css';
import {
  infoBanner as infoBannerStyle,
  footer as footerStyle,
  footerText as footerTextStyle,
  footerButtons as footerButtonsStyle,
} from '@/app/board/components/ContentSection/ContentSection.css';
import { screenMQ, themeTokens } from '@/styles/theme.css';

const { space, borderRadius } = themeTokens;

export const menuButton = style({
  display: 'none',

  '@media': {
    [screenMQ.m]: {
      display: 'block',
      width: 'max-content',
      marginLeft: 'auto',
      marginBottom: space.sm,
    },
  },
});

export const flexAlignCenter = style({
  display: 'flex',
  alignItems: 'center',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const wrapper = style([
  wrapperStyle,
  {
    gap: space['3xl'],
  },
]);

export const title = style({
  position: 'relative',
  width: sizeProp('396px'),
  height: sizeProp('42px'),
  marginBottom: sizeProp('36px'),
  '@media': {
    [screenMQ.m]: {
      width: sizeProp('200px'),
      height: sizeProp('28px'),
      marginBottom: space['3xl'],
    },
  },
});

export const infoBanner = style([
  infoBannerStyle,
  {
    marginBottom: '14rem',
    '@media': {
      [screenMQ.m]: {
        marginBottom: space['3xl'],
      },
    },
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

export const mobileListSection = style({
  display: 'none',
  '@media': {
    [screenMQ.m]: {
      display: 'block',
    },
  },
});

export const listItem = style([
  flexAlignCenter,
  {
    gap: space.md,
  },
]);

export const asideSection = style({
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});

export const mobileBottomButton = style({
  display: 'none',
  '@media': {
    [screenMQ.m]: {
      width: '100%',
      height: '54px',
      borderRadius: borderRadius.lg,
      overflow: 'hidden',
      marginTop: 'auto',
      display: 'block',
      position: 'fixed',
      left: space.none,
      bottom: space.xl,
      right: space.none,
      padding: `${space.none} ${space.xl} ${space.xl}`,
    },
  },
});
