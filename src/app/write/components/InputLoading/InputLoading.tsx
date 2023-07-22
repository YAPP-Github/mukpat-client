import { Skeleton } from '@/components';
import { row, section, wrapper } from './InputLoading.css';

const InputLoading = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={section}>
        <Skeleton width="324px" height="42px" />
        <div className={wrapper}>
          <Skeleton width="140px" height="28px" mb="20px" />
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div className={row} key={index}>
                <Skeleton width="64px" height="24px" />
                <Skeleton width="505px" height="56px" />
              </div>
            ))}
        </div>
        <div className={wrapper}>
          <Skeleton width="140px" height="28px" mb="20px" />
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div className={row} key={index}>
                <Skeleton width="64px" height="24px" />
                <Skeleton width="505px" height="56px" />
              </div>
            ))}
        </div>
        <div className={wrapper}>
          <Skeleton width="140px" height="28px" mb="20px" />
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div className={row} key={index}>
                <Skeleton width="64px" height="24px" />
                <Skeleton width="505px" height="56px" />
              </div>
            ))}
        </div>
      </div>
      <div>
        <Skeleton mt="64px" width="674px" height="54px" radius="md" />
      </div>
    </div>
  );
};

export default InputLoading;
