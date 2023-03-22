import * as React from 'react';
import styles from './index.less';
import Prompt from '@/components/Prompt';
import { NavBar } from 'antd-mobile';
import { useHistory } from 'umi';

type Props = {
  title: string;
  promptText?: string;
};

const TopNavBar: React.FC<Props> = (props) => {
  const { title, promptText } = props;
  const history = useHistory();

  return (
    <>
      <NavBar
        className={styles.navBar}
        onBack={() => {
          history.goBack();
        }}
        right={
          <div className={styles.navRight}>
            <Prompt />
          </div>
        }
      >
        {title}
      </NavBar>
    </>
  );
};

export default TopNavBar;