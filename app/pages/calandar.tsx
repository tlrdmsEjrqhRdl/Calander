import React from 'react'
import * as S from '../styles/calandar';

const year = 2025;

function calandar() {
  return (
    <>
        <S.Background>
          <S.CalandarContainer>
            <S.CalandarYear>{year}</S.CalandarYear>
          </S.CalandarContainer>
        </S.Background>
    </>
  )
}

export default calandar