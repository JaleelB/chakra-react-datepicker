/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@chakra-ui/react';

const DatePickerStyles = () => {
  const theme = useTheme();

  return css`

    .react-datepicker {
    font-family: 'Arial', sans-serif;
    background-color: white;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    display: inline-block;
    position: relative;
  }

  .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, 
  .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
    width: 0;
    height: 0;
    border: none;
    border-bottom-color: none;
    top: 0;
    background: transparent;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: #fff;
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
    border-radius: 50%;
  }

  .react-datepicker__week{
    display: grid;
    gap: .2rem;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: .2rem;
  }

  .react-datepicker__day--keyboard-selected, .react-datepicker__day--in-range{
    background-color: ${theme.colors.green[300]};
  }

  .react-datepicker__day--selected {
    background-color: ${theme.colors.green[300]};
    border-radius: 0.375rem;
  }

  .react-datepicker__time-list-item--selected, .react-datepicker__time-list-item--selected:hover {
    background-color: ${theme.colors.green[300]} !important;
    color: #000;
  }

  .react-datepicker__day--selected:hover {
    background-color: ${theme.colors.green[300]};
  }

  .react-datepicker__day--disabled {
    color: #ccc;
  }

  //date navigation buttons
  .css-1t77wn0 .css-i857na{
    background: transparent !important;;
  }

  `;
}

export default DatePickerStyles;
