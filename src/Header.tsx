import { Button, Select, Box, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface CustomHeaderProps {
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}


const Header: React.FC<CustomHeaderProps> = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  const years = [...Array(100)].map((_, i) => new Date().getFullYear() - i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center"
      padding=".5rem .125rem"
    >
      <Button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <ChevronLeftIcon/>
      </Button>
      <Flex>
        <Select
          value={months[date.getMonth()]}
          onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </Select>
        <Select
          value={date.getFullYear()}
          onChange={({ target: { value } }) => changeYear(Number(value))}
        >
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </Flex>
      <Button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      <ChevronRightIcon/>
      </Button>
    </Box>
  );
};

export default Header;