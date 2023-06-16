'use client';

import clsx from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { inputWrapper, inputBase, Type, inputError } from './Input.css';

import InputErrorMessage from './InputErrorMessage';
import ClearButton from './InputClearButton';
import SvgIcon from '../SvgIcon/SvgIcon';

/**
 * @property {string} name - Input을 구분짓는 고유한 이름입니다. 한 폼안에는 오직 하나의 이름만이 존재해야 합니다.
 * @property {Type} type - Input의 type입니다. 리턴받을 정보가 무엇인지에 따라 전달해 사용하면 됩니다. 기본값은 text이며 현재 "textArea" | "date" | "email" | "title"을 사용할 수 있습니다.
 * @property {string} placeholder - Input창에 미리 보여줄 텍스트를 설정합니다.
 * @property {boolean} showError - 유효성검사에서 해당 Input이 invalid할 경우 error message의 표시 여부를 설정합니다. 기본값은 true입니다.
 */

type InputProps = {
  name: string;
  type?: Type;
  showError?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { type, name, placeholder, showError, ...rest } = props;
  const { formState } = useFormContext();

  const errorMessage = formState.errors[name]?.message as string;

  return (
    <div style={{ width: 'inherit', gridAutoFlow: 'column' }}>
      <div className={inputWrapper} aria-describedby={`${name}-input-wrapper`} id={`${name}_input`}>
        {type === 'search' && (
          <SvgIcon style={{ height: '100%', left: '12px', position: 'absolute', top: 0 }} id={'search'} />
        )}
        <input
          name={name}
          className={clsx(inputBase({ type }), errorMessage && inputError)}
          placeholder={placeholder}
          ref={ref}
          type={type}
          aria-describedby={`${name}-input-field`}
          {...rest}
        ></input>
        <ClearButton name={name} />
      </div>
      <InputErrorMessage name={name} showError={showError} />
    </div>
  );
});

export default Input;
