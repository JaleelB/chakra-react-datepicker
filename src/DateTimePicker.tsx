import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Box, Button } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import DatePickerStyles from './datepicker-styles';

function DateTimePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box w="700px">
      <Global styles={DatePickerStyles()} />
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        customInput={<Button>Choose Date/Time</Button>}
      />
    </Box>
  );
}

export default DateTimePicker;
