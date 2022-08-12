import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import * as S from './styles';

interface Props {
  changeMonth: (month: string) => void;
}

export const MonthCarousel: React.FC = ({ changeMonth }: Props) => {
  const [actualMonth, setActualMont] = React.useState(
    dayjs().format('YYYY-MM'),
  );
  function addMonth() {
    const newMonth = dayjs(actualMonth).add(1, 'month');
    setActualMont(newMonth.format('YYYY-MM'));
  }
  function subtractMonth() {
    const newMonth = dayjs(actualMonth).subtract(1, 'month');
    setActualMont(newMonth.format('YYYY-MM'));
  }
  useEffect(() => {
    changeMonth(actualMonth);
  }, [actualMonth]);

  return (
    <S.Container>
      <S.ButtonChangeMonth onPress={subtractMonth}>
        <S.Icon color="#757575" name="chevron-left" />
      </S.ButtonChangeMonth>
      <S.TextMonth>{dayjs(actualMonth).format('MMM YYYY')}</S.TextMonth>
      <S.ButtonChangeMonth onPress={addMonth}>
        <S.Icon color="#757575" name="chevron-right" />
      </S.ButtonChangeMonth>
    </S.Container>
  );
};
