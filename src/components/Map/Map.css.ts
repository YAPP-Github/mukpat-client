import { style, globalStyle } from '@vanilla-extract/css';
import { fontVariant } from '@/styles/variant.css';
import { themeTokens } from '@/styles/theme.css';

const { color, borderRadius, space, zIndices } = themeTokens;

export const mapContainer = style({
  position: 'absolute',
  top: space.none,
  left: space.none,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 280px',
});
export const loadingWrapper = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: color.black,
  opacity: '0.3',
  zIndex: zIndices.tooltip,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const backgroundWrapper = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: color.black,
  opacity: '0.3',
});
export const mapSearchContainer = style({
  position: 'relative',
  width: '100%',
  height: '640px',
  display: 'flex',
  minWidth: '292px',
  maxWidth: '880px',
  background: color.white,
  boxShadow: '0px 14px 28px -7px rgba(0, 0, 0, 0.04)',
  borderRadius: borderRadius.xl,
});
export const searchWrapper = style({
  width: '292px',
  minWidth: '230px',
});
export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  margin: '0 12px',
});
globalStyle(`${buttonWrapper} > button`, {
  margin: '16px 0 20px',
});
export const mapWrapper = style({
  width: '67%',
  height: '100%',
  borderRadius: '0 20px 20px 0',
  minWidth: '150px',
});

export const searchformWrapper = style({
  position: 'relative',
});
export const searchButton = style({
  position: 'absolute',
  top: '10px',
  right: '10px',
});
export const inputText = style({
  ...fontVariant.body2,
  width: '260px',
  border: 'none',
  color: color.primary,
  height: '56px',
  borderRadius: borderRadius.lg,
  background: color.grey100,
  paddingLeft: '16px',
  paddingRight: '50px',
  selectors: {
    '&:focus': {
      outline: 'none',
      border: '1px solid #5568F9',
    },
    '&:not(:focus)': {
      border: 'transparent',
    },
  },
});
globalStyle(`${searchformWrapper} > form`, {
  position: 'relative',
  margin: '12px 16px',
  display: 'flex',
});

export const searchinfoWrapper = style({
  height: '480px',
  overflowY: 'auto',
  borderBottom: '1px solid #E5E8EB',
});
export const noSearchInfoWrapper = style({
  ...fontVariant.body2,
  height: '480px',
  color: color.hint,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  borderBottom: '1px solid #E5E8EB',
  textAlign: 'center',
});
globalStyle(`${noSearchInfoWrapper} > div`, {
  marginTop: '16px',
});

export const searchList = style({
  listStyleType: 'none',
  padding: '8px 20px',
  flexDirection: 'column',
  height: '78px',
  selectors: {
    '&:active': {
      background: 'rgba(28, 26, 66, 0.1)',
    },
    '&:focus': {
      background: 'rgba(28, 26, 66, 0.1)',
    },
  },
});

globalStyle(`${searchList} > div`, {
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});
globalStyle(`${searchList} > :nth-child(1)`, {
  ...fontVariant.label3,
  color: color.primary,
  marginBottom: space['2xs'],
});
globalStyle(`${searchList} > :nth-child(2)`, {
  ...fontVariant.body5,
  color: color.primary,
  marginBottom: space['3xs'],
});
globalStyle(`${searchList} > :nth-child(3)`, {
  ...fontVariant.body5,
  color: color.grey400,
});
