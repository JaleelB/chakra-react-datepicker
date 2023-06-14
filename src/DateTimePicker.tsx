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
  inline?: boolean;
}

const DateTimePicker: FC<DateTimePickerProps> = ({ 
  calendarType = "default", 
  onChange, 
  inline = false,
  ...props 
}) => {
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
        timeFormat: 'hh:mm aa', // 12-hour format with AM/PM
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
        timeFormat: 'hh:mm aa', // 12-hour format with AM/PM
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
        inline={inline}
        customInput={inline ? undefined : <Button>Choose Date/Time</Button>}
        {...customProps}
        {...props}
      />
    </Box>
  );
};

export default DateTimePicker;
