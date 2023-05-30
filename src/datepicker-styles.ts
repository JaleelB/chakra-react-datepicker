/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@chakra-ui/react';

const DatePickerStyles = () => {
  const theme = useTheme();

  return css`

    /* .react-datepicker__input-container {
      display: flex; 
      flex-direction: column-reverse;
      
    }

    .react-datepicker__input-container button {
      margin-bottom: 1rem; 
      width: min-content;
    }

    .react-datepicker-popper{
    }

    .react-datepicker {
      font-family: ${theme.fonts.body};
      display: flex;
    }
    
    .react-datepicker__header .react-datepicker__day-names{
      display: flex; justify-content: space-between;
    }
    .react-datepicker__current-month {
      color: ${theme.colors.gray[500]};
      margin-bottom: ${theme.space[6]};
      text-align: center;
    }

    .react-datepicker__day-name{
      color: ${theme.colors.gray[500]};
      padding-bottom: ${theme.space[2]};
    }
    .react-datepicker__day {
      color: ${theme.colors.black};
      border-radius: ${theme.radii.md};
      border: 1px solid ${theme.colors.gray[300]};
      cursor: pointer;
      font-size: ${theme.fontSizes.sm};
      display: grid;
      place-items: center;
      width: 100%;
      padding: ${theme.space[2]};
    }
    .react-datepicker__day--selected {
      background-color: ${theme.colors.teal[600]};
      color: ${theme.colors.white};
    }
    .react-datepicker__input-container input {
      border: 1px solid ${theme.colors.gray[300]};
      border-radius: ${theme.radii.md};
      padding: ${theme.space[2]} ${theme.space[4]};
      color: ${theme.colors.gray[700]};
      font-size: ${theme.fontSizes.md};
    }
    .react-datepicker__month{}
    .react-datepicker__week{
      display: grid;
      gap: .2rem;
      grid-template-columns: repeat(7, 1fr);
      margin-bottom: .2rem;
    }
    .react-datepicker__triangle {
    }
    .react-datepicker__month-container {
    }

    .react-datepicker__time{
      border-left: 1px solid #aeaeae;
    }

    .react-datepicker__time-container .react-datepicker__time {
      position: absolute;
      width: auto;
      right: 0;
    } */
    .react-datepicker {
    font-family: 'Arial', sans-serif;
    background-color: white;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    display: inline-block;
    position: relative;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem 0;
    position: relative;
  }

  .react-datepicker__current-month {
    margin-top: 0;
    color: #000;
    font-weight: bold;
    font-size: 0.944rem;
  }

  .react-datepicker__header .react-datepicker__day-names{
    display: grid;
    gap: .2rem;
    grid-template-columns: repeat(7, 1fr);
    /* margin-bottom: .2rem; */
  }

  .react-datepicker__day-name{
    color: ${theme.colors.gray[500]};
    padding-bottom: ${theme.space[2]};
    width: 100%;
    text-align: center;
  }

  .react-datepicker__day {
    color: ${theme.colors.black};
    border-radius: ${theme.radii.md};
    cursor: pointer;
    font-size: ${theme.fontSizes.sm};
    display: grid;
    place-items: center;
    width: 100%;
    line-height: 1.7rem;
    text-align: center;
  }
  .react-datepicker__day--selected {
    background-color: ${theme.colors.teal[600]};
    color: ${theme.colors.white};
    border-radius: 50%;
  }

  .react-datepicker__week{
    display: grid;
    gap: .2rem;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: .2rem;
  }

  .react-datepicker__day--selected {
    background-color: #000;
    color: #fff;
  }

  .react-datepicker__day--disabled {
    color: #ccc;
  }
  `;
}

export default DatePickerStyles;
