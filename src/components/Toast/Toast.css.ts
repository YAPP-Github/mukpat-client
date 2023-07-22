import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { space, color, borderRadius, zIndices } = themeTokens;

const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${space['lg']} ${space['2xl']}`,
  backgroundColor: color.grey600,
  gap: space['md'],
  borderRadius: borderRadius.lg,
  width: 'max-content',

  // toast position
  position: 'fixed',
  bottom: sizeProp('112px'),
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: zIndices.toast,
});

export { wrapper };
