'use client';
import { MouseEvent, useState } from 'react';
import { BottomButton, Button } from '@/components';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { signupSchema } from '../../constants/schema';
import { profile, button, category, requiredFields, inputMargin } from './ProfileSetupSignUp.css';
import { useSignupContext } from '../../contexts/SignupContext';
import { SelectedDropDownValue } from '../../types/profile';
import { postSignup } from '../../api';
import { usePostApi, useCommonForm } from '../../hooks';
import { jobType, birthType } from '../../constants/dropdown';
import { GenderSelector, InputField, InputArea, Title, CommonDropDown } from '../../components';
import { wrapper } from '../../styles/common.css';
import { SignupRequest, SignupResponse } from '../../types/signup';
import clsx from 'classnames';

const ProfileSetupSignUp = () => {
  const { userInfo } = useSignupContext();
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<SelectedDropDownValue>({
    job: null,
    birth: null,
  });
  const [genderValue, setGenderValue] = useState('MEN');
  const successSignup = () => {
    router.replace('/welcome');
  };
  const { postData, errorMsg } = usePostApi<SignupRequest, SignupResponse>({
    apiFunction: postSignup,
    onSuccess: successSignup,
  });
  const { method } = useCommonForm({ schema: signupSchema, checkMode: 'onSubmit' });

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    postData({
      email: `${userInfo?.email}@samsung.com`,
      password: userInfo?.password,
      nickname: data?.nickname,
      jobGroupMain: selectedValue?.job,
      jobGroupSub: data?.job,
      gender: genderValue,
      yearOfBirth: selectedValue?.birth,
    });
  };
  const onClickSelectedJob = (e: MouseEvent<HTMLLIElement>) => {
    setSelectedValue({ ...selectedValue, job: e.currentTarget.innerText });
  };
  const onClickSelectedBirth = (e: MouseEvent<HTMLLIElement>) => {
    setSelectedValue({ ...selectedValue, birth: e.currentTarget.innerText });
  };

  return (
    <div className={clsx(wrapper, profile)}>
      <Title>프로필 등록</Title>
      <InputField method={method} onSubmit={onSubmit}>
        <InputArea label="닉네임" name="nickname" placeholder="닉네임" required={true} method={method} />
        <div className={category}>
          <CommonDropDown
            label="직군 대분류"
            placeholder="직군 대분류"
            selectedValue={selectedValue.job}
            onClick={onClickSelectedJob}
            selections={jobType}
          />
          <InputArea
            label="직군 소분류"
            name="job"
            placeholder="ex) uiux디자이너"
            required={false}
            method={method}
            className={inputMargin}
          />
        </div>
        <div className={category}>
          <GenderSelector genderValue={genderValue} setGenderValue={setGenderValue} />
          <CommonDropDown
            label="출생 연도"
            placeholder="출생 연도"
            selectedValue={selectedValue.birth}
            onClick={onClickSelectedBirth}
            selections={birthType}
          />
        </div>
        <Button size="large" type="submit" className={button}>
          저장하기
        </Button>
        <div className={requiredFields}>{errorMsg}</div>
        <BottomButton type="submit" errorMsg={errorMsg}>
          저장하기
        </BottomButton>
      </InputField>
    </div>
  );
};

export default ProfileSetupSignUp;
