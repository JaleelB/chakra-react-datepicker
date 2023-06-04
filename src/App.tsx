import { Heading, Text, Box, Tab, TabList, TabPanel, TabPanels, Tabs, Flex } from '@chakra-ui/react'
import DateTimePicker from './DateTimePicker'
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';


function App() {

  const [selectedDate, setSelectedDate] = useState<Date | [Date, Date] | null>(null);

  const handleDateChange = (date: Date | [Date, Date] | null) => {
    setSelectedDate(date);
  };

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
              <TabPanel borderLeft={{ base: 0, md: "1px" }} borderColor={{ base: "none", md: "gray.200" }} paddingLeft={{ base: 0, md: 16 }} paddingRight={0} paddingY={{ base: 8, md: 0 }}>
                <DateTimePicker
                  onChange={handleDateChange}
                  calendarType='default'
                />
              </TabPanel>
              <TabPanel borderLeft={{ base: 0, md: "1px" }} borderColor={{ base: "none", md: "gray.200" }} paddingLeft={{ base: 0, md: 16 }} paddingRight={0} paddingY={{ base: 8, md: 0 }}>
                <DateTimePicker
                  onChange={handleDateChange}
                  calendarType='dateTime'
                />
              </TabPanel>
              <TabPanel borderLeft={{ base: 0, md: "1px" }} borderColor={{ base: "none", md: "gray.200" }} paddingLeft={{ base: 0, md: 16 }} paddingRight={0} paddingY={{ base: 8, md: 0 }}>
                <DateTimePicker
                  onChange={handleDateChange}
                  calendarType='dateRange'
                />
              </TabPanel>
              <TabPanel borderLeft={{ base: 0, md: "1px" }} borderColor={{ base: "none", md: "gray.200" }} paddingLeft={{ base: 0, md: 16 }} paddingRight={0} paddingY={{ base: 8, md: 0 }}>
                <DateTimePicker
                  onChange={handleDateChange}
                  calendarType='dateTimeRange'
                />
              </TabPanel>
            </TabPanels>
          </Flex>
        </Tabs>
      </Box>
    </Box>
  )
}

export default App
