import React from 'react';
import style from './field.module.scss';
import { StickmanHandler } from '../stickman-handler';
import { Castle } from '../castle'
import { FieldProvider } from './field-context';
  
export function Field() {

  return (
    <div className={style.field}>
      <FieldProvider>
        <Castle />
        <StickmanHandler />
      </FieldProvider>
    </div>
  );
}