import { Heading, Text, Box, Tab, TabList, TabPanel, TabPanels, Tabs, Flex, Input, Button } from '@chakra-ui/react'
import DateTimePicker from './DateTimePicker'
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';


interface FormValues {
  datePicker: Date | [Date, Date] | null;
}

interface SyntheticEvent {
  target: {
    name: string;
    value: Date | [Date, Date];
  };
}


function App() {

  const [startDate, setStartDate] = useState<Date | null>(new Date());
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    alert(data.datePicker);
  };

  const calendarTypes = [
    { type: 'default', description: 'This is a simple date picker.' },
    { type: 'dateTime', description: 'This date picker allows you to select both date and time.' },
    { type: 'dateRange', description: 'This date picker allows you to select a range of dates.' },
    { type: 'dateTimeRange', description: 'This date picker allows you to select a range of dates and times.' },
    { type: 'button', description: 'This date picker is rendered on button press.' }, 
    { type: 'timeOnly', description: 'This calendar allows you to select only the time without the date.' },
    { type: 'hookForm', description: 'This calendar allows you to integrate the react hook form with the calendar' }
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
                {calendarTypes.map(({ type }) => (
                  <Tab key={type} justifyContent="flex-start" borderRadius={4}>{type}</Tab>
                ))}
              </Flex>
            </TabList>
            <TabPanels>
            {calendarTypes.map(({ type, description }) => (
                <TabPanel key={type} borderLeft={{ base: 0, md: "1px" }} borderColor={{ base: "none", md: "gray.200" }} paddingLeft={{ base: 0, md: 16 }} paddingRight={0} paddingY={{ base: 8, md: 0 }}>
                  <Text fontSize="lg" fontWeight="bold" textTransform="capitalize">{type}</Text>
                  <Text mb={4}>{description}</Text>
                  {type === 'hookForm' ? (
                    <>
                      {startDate && type !== "hookForm" && (
                        <Text mt={4}>Selected Start Date: {startDate.toLocaleDateString()}</Text>
                      )}
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <DateTimePicker 
                          {...register("datePicker", { 
                            required: "This input is required", 
                            validate: {
                              validDate: (value: Date | [Date, Date] | null) => {
                                if (value === null) {
                                  return "Date is required";
                                }
                                const selectedDate = value instanceof Date ? value : value[0];
                                const now = new Date();
                                const diffTime = Math.abs(selectedDate.getTime() - now.getTime()); 
                                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                                return diffDays <= 90 || "Date can’t be more than 90 days in the future";
                              },
                              validRange: (value: Date | [Date, Date] | null) => {
                                if (value === null) {
                                  return "Date range is required";
                                }
                                if (Array.isArray(value)) {
                                  const selectedDate = value[0];
                                  const now = value[1];
                                  const diffTime = Math.abs(+selectedDate - +now);
                                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                                  return diffDays <= 7 || "Date range can't be more than 7 days";
                                }
                                return true;
                              }
                            } 
                          })}
                          onChange={(date) => {
                            if (date !== null) {
                              const syntheticEvent: SyntheticEvent = {
                                target: { name: "datePicker", value: date },
                              };
                              register("datePicker").onChange(syntheticEvent as SyntheticEvent);
                              handleDateChange(date);
                            }
                          }}
                        />

                        {errors.datePicker && <Text color="red" mt={4}>{errors.datePicker.message}</Text>}
                        <Box mt={2} w={200}>
                          <Button 
                            type="submit" 
                            colorScheme='teal'
                          >
                            Submit Date
                          </Button>
                        </Box>
                        
                      </form>
                    </>
                  ) : (
                    <>
                      {startDate && type !== "timeOnly" && (
                        <Text mt={4}>Selected Start Date: {startDate.toLocaleDateString()}</Text>
                      )}
                      {type !== 'default' && type !== 'dateRange' && (
                        <Text mb={4}>Time: {startDate?.toLocaleTimeString()}</Text>
                      )}
                      {endDate && (
                        <Text>
                          Selected End Date: {endDate.toLocaleDateString()} {type !== 'dateRange' && endDate.toLocaleTimeString()}
                        </Text>
                      )}
                      <Box mb={4}>
                        <DateTimePicker
                          onChange={handleDateChange}
                          calendarType={type}
                          inline={type !== 'button'}
                          selected={type === 'default' || type === 'dateTime' ? startDate : undefined}
                          startDate={type === 'dateRange' || type === 'dateTimeRange' ? startDate : undefined}
                          endDate={type === 'dateRange' || type === 'dateTimeRange' ? endDate : undefined}
                          months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
                        />
                      </Box>
                    </>
                  )}
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
