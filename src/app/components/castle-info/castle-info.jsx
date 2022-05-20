import React from 'react'
import style from './castle-info.module.scss'
import MiniCastle from '../../../public/assets/castlepixelart.png'

export function CastleInfo () {
  return (
    <div className={style['castle-info']}>
      <img src={MiniCastle} alt='' />
      <p>Health: 1000</p>
    </div>
  )
}
