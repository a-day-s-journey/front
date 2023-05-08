import * as A from '@components/atoms';
import * as M from '@components/molecules';

import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);
function Main2() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={cx('main-container')}>
      <M.Header
        title="title"
        // leftButtonRender={() => {
        //   return <div>left button</div>;
        // }}
        rightButtonRender={() => {
          return <div>right button</div>;
        }}
      />
      <button>잘사니 메인2 페이지입니다.</button>
      <br />
      <A.Input
        placeholder="placeholder"
        type="text"
        onChange={(value) => {
          setInputValue(value);
        }}
        value={inputValue}
        error=""
        isNumeric
      />
      <A.Textarea
        placeholder="placeholder"
        type="text"
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
          setInputValue(e.currentTarget.value);
        }}
        value={inputValue}
        error=""
        // isNumeric
      />
    </div>
  );
}
export default Main2;
export const path = '/main2';
