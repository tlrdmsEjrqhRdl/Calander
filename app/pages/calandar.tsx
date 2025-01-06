import React from 'react'
import * as S from '../styles/calandar';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

function BeforeMonth(year: number, month: number): { year: number; month: number } {  //연도 & 달 감소소
  if (month === 1) {
    return { year: year - 1, month: 12 }; // 1월달이면 그전달은 12월이고 연도는 감소
  } else {
    return { year, month: month - 1 }; // 월만 감소하게
  }
}

function afterMonth(month: any){

}
function calandar() {
  return (
    <>
        <S.Background>
          <S.CalandarContainer>
            <S.CalandarHeader>
              <S.backyear onClick={BeforeMonth}>⟨</S.backyear>
              <S.CalandarYear>{year}.{month}</S.CalandarYear>
              <S.nextyear onClick={afterMonth}>⟩</S.nextyear>
            </S.CalandarHeader> 

          </S.CalandarContainer>
        </S.Background>
    </>
  ) 
}

export default calandar