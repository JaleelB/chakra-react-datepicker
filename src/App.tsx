import { Heading, StackDivider, VStack, Text, Link } from '@chakra-ui/react'
import DateTimePicker from './DateTimePicker'

function App() {

  return (
    <VStack
      paddingX={{ base: '2rem', md: '8rem' }}
      paddingY={{ base: '1rem', md: '4rem' }}
      spacing={4}
      minHeight={'600px'}
      alignItems="flex-start"
      divider={<StackDivider />}
    >
      <Heading>Chakra UI React Datepicker</Heading>
        <Link
          href="https://github.com/JaleelB/chakra-react-datepicker/blob/main/src/datepicker-styles.ts"
          textUnderlineOffset="0.2rem"
        >
          🔗 Source code for date picker component chakra styling
        </Link>
      <Text>An implementation of the react date picker package with the elegance and simplicity of Chakra UI!</Text>
      <DateTimePicker/>
    </VStack>
  )
}

export default App
