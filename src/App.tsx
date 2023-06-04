import { Heading, Text, Box, Tab, TabList, TabPanel, TabPanels, Tabs, Flex } from '@chakra-ui/react'
import DateTimePicker from './DateTimePicker'
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';


function App() {

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | [Date, Date] | null) => {
    if (Array.isArray(date)) {
      setStartDate(date[0]);
      setEndDate(date[1]);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const calendarTypes = [
    { type: 'default', description: 'This is a simple date picker.' },
    { type: 'dateTime', description: 'This date picker allows you to select both date and time.' },
    { type: 'dateRange', description: 'This date picker allows you to select a range of dates.' },
    { type: 'dateTimeRange', description: 'This date picker allows you to select a range of dates and times.' },
  ];


  return (
    <Box
      paddingX={{ base: '2rem', md: '4rem', lg: '6rem' }}
      paddingY={{ base: '64px', md: '96px' }}
      minHeight={'600px'}
      alignItems="flex-start"
    > 
      <Text color="green" fontSize="1rem" fontWeight={500}>Demo</Text>
      <Heading mb={4}>Chakra UI React Datepicker</Heading>
      <Text mb={2}>An implementation of the react date picker package with the elegance and simplicity of Chakra UI!</Text>

      <Box width="100%" mt={16}>
        <Tabs variant="soft-rounded" colorScheme="green" isLazy>
          <Flex width="100%" direction={{ base: 'column', md: 'row' }} gap={{ base: 0, md: 16 }}>
            <TabList width={{base: "100%", md: "250px"}}>
              <Flex width="100%" direction={{ base: 'column' }}>
                <Tab justifyContent="flex-start" borderRadius={4}>Date</Tab>
                <Tab justifyContent="flex-start" borderRadius={4}>Date Time</Tab>
                <Tab justifyContent="flex-start" borderRadius={4}>Date Range</Tab>
                <Tab justifyContent="flex-start" borderRadius={4}>Date Time Range</Tab>
              </Flex>
            </TabList>
            <TabPanels>
              {calendarTypes.map(({ type, description }) => (
                <TabPanel key={type} borderLeft={{ base: 0, md: "1px" }} borderColor={{ base: "none", md: "gray.200" }} paddingLeft={{ base: 0, md: 16 }} paddingRight={0} paddingY={{ base: 8, md: 0 }}>
                  <Text fontSize="lg" fontWeight="bold" textTransform="capitalize">{type}</Text>
                  <Text mb={4}>{description}</Text>
                  {startDate && (
                    <Text mt={4}>
                      Selected Start Date: {startDate.toLocaleDateString()} {type !== 'default' && startDate.toLocaleTimeString()}
                    </Text>
                  )}
                  {endDate && (
                    <Text mt={1} mb={4}>
                      Selected End Date: {endDate.toLocaleDateString()} {type !== 'dateRange' && endDate.toLocaleTimeString()}
                    </Text>
                  )}
                  <DateTimePicker
                    onChange={handleDateChange}
                    calendarType={type}
                    selected={type === 'default' || type === 'dateTime' ? startDate : undefined}
                    startDate={type === 'dateRange' || type === 'dateTimeRange' ? startDate : undefined}
                    endDate={type === 'dateRange' || type === 'dateTimeRange' ? endDate : undefined}
                  />
                </TabPanel>
              ))}
          </TabPanels>
          </Flex>
        </Tabs>
      </Box>
    </Box>
  )
}

export default App
