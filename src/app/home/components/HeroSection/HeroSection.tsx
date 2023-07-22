'use client';

import Link from 'next/link';
import { useProfile } from '@/api/user';
import { Button, SvgIcon, Typography } from '@/components';
import { GradientText } from '@/app/home/components';
import clsx from 'clsx';
import { animate } from '@/styles/theme.css';
import * as styles from './HeroSection.css';

const HeroSection = () => {
  const { data: profile } = useProfile();

  const isLogin = Boolean(profile);

  return (
    <section
      className={clsx(
        styles.section({
          isLogin,
        }),
        animate,
      )}
    >
      {isLogin ? null : (
        <>
          <div className={styles.samsungLogo}>
            <SvgIcon id="samsung" width="100%" height="100%" />
          </div>
          <Typography variant="display2" as="h1" className={styles.title}>
            <GradientText color="pinkBlue" text="삼성전자 번개 점심팟 구하기" />
          </Typography>
          <Typography variant="heading3" as="h1" className={styles.mobileTitle}>
            <GradientText color="bluePink" text="삼성전자" />
            <br />
            <GradientText color="bluePink" text="번개 점심팟 구하기" />
          </Typography>
          <h2 className={styles.subTitle}>다양한 부서의 동료들과 네트워킹해 보세요!</h2>
          <Link href={'/login'}>
            <Button color="primary" className={styles.button}>
              <Typography color="white" variant="title2">
                먹팟 만들기
              </Typography>
            </Button>
          </Link>
        </>
      )}
    </section>
  );
};

export default HeroSection;
