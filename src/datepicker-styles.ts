/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@chakra-ui/react';

const DatePickerStyles = () => {
  const theme = useTheme();

  return css`
    .react-datepicker {
      font-family: ${theme.fonts.body};
    }
    .react-datepicker__header {
      background-color: ${theme.colors.teal[500]};
      color: ${theme.colors.white};
    }
    .react-datepicker__current-month {
      color: ${theme.colors.gray[500]};
    }
    .react-datepicker__day-name, .react-datepicker__day {
      color: ${theme.colors.black};
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
  `;
}

export default DatePickerStyles;
