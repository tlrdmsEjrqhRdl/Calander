import React from 'react'
import * as S from '../styles/calandar';

const today = new Date();
const year = today.getFullYear();

function BeforeYear(year: any){
  console.log(year);
}
function calandar() {
  return (
    <>
        <S.Background>
          <S.CalandarContainer>
            <S.CalandarHeader>
              <S.backyear onClick={BeforeYear}>⟨</S.backyear>
              <S.CalandarYear>{year}</S.CalandarYear>
              <S.nextyear>⟩</S.nextyear>
            </S.CalandarHeader> 

          </S.CalandarContainer>
        </S.Background>
    </>
  )
}

export default calandar