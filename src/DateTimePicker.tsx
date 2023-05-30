import { FC, SyntheticEvent } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import Header from './Header';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Button } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import DatePickerStyles from './datepicker-styles';


interface DateTimePickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  calendarType?: string;
  onChange: (date: Date | [Date, Date] | null, event: SyntheticEvent<HTMLElement> | undefined) => void;
}

const DateTimePicker: FC<DateTimePickerProps> = ({ calendarType = "default", onChange, ...props }) => {
  let customProps = {};

  switch (calendarType) {
    case 'default':
      customProps = {
        selected: props.selected,
        dateFormat: 'MM/dd/yyyy',
      };
      break;
    case 'dateTime':
      customProps = {
        selected: props.selected,
        showTimeSelect: true,
        timeFormat: 'HH:mm',
        timeIntervals: 15,
        dateFormat: 'MM/dd/yyyy h:mm aa',
      };
      break;
    case 'dateRange':
      customProps = {
        selected: props.startDate,
        startDate: props.startDate,
        endDate: props.endDate,
        selectsRange: true,
        dateFormat: 'MM/dd/yyyy',
      };
      break;
    case 'dateTimeRange':
      customProps = {
        selected: props.startDate,
        startDate: props.startDate,
        endDate: props.endDate,
        selectsRange: true,
        showTimeSelect: true,
        timeFormat: 'HH:mm',
        timeIntervals: 15,
        dateFormat: 'MM/dd/yyyy h:mm aa',
      };
      break;
    default:
      break;
  }

  return (
    <Box>
      <Global styles={DatePickerStyles()} />
      <DatePicker
        onChange={onChange}
        renderCustomHeader={Header}
        customInput={<Button>Choose Date/Time</Button>}
        {...customProps}
        {...props}
      />
    </Box>
  );
};

export default DateTimePicker;
