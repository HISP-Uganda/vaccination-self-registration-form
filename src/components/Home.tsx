import { Stack, Heading, Button, Box, Text } from "@chakra-ui/react"


export const Home = () => {
  return (
    <Box mx="20%" >
      <Button colorScheme="blue" mt={2}>Back</Button>
      <Heading as="h1" size="lg" py={4} color="gray.600"
        flex={1} style={{ textTransform: 'uppercase', fontSize: '24px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Times-Bold' }}
      >
        Covid-19 Vaccination Booking Confirmation
      </Heading>
      <></>
      <Stack direction="row" backgroundColor='gray.50' >
        <Stack pl="20px">
          <Text fontSize="xl" color="gray.600">Client name:</Text>
          <Text fontSize="xl" color="gray.600">National Identification Number / Alternative ID Number:</Text>
          <Text fontSize="xl" color="gray.600">Client Category:</Text>
          <Text fontSize="xl" color="gray.600">Priority Group:</Text>
          <Text fontSize="xl" color="gray.600">Phone Number:</Text>
          <Text fontSize="xl" color="gray.600">Preferred Vaccination Date:</Text>
          <Text fontSize="xl" color="gray.600">Preferred Vaccination site:</Text>
        </Stack>
        <Stack textAlign="right" flex={["none", "none", 1]} pr="20px">
          <Text fontSize="xl" color="gray.500">1kjdslfksdlk</Text>
          <Text fontSize="xl" color="gray.500">2kshshfdufhiudsfhisufhi</Text>
          <Text fontSize="xl" color="gray.500">2kshshfdufhiudsfhisufhi</Text>
          <Text fontSize="xl" color="gray.500">2kshshfdufhiudsfhisufhi</Text>
          <Text fontSize="xl" color="gray.500">2kshshfdufhiudsfhisufhi</Text>
          <Text fontSize="xl" color="gray.500">2kshshfdufhiudsfhisufhi</Text>
          <Text fontSize="xl" color="gray.500">2kshshfdufhiudsfhisufhi</Text>
        </Stack>
      </Stack>
      <Stack></Stack>
    </Box>
  )
}
