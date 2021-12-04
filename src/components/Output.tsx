import {
  Stack,
  Flex,
  Spacer,
  Image,
  Heading,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useStore } from "effector-react";
import { $store } from "../Store";
import QRCode from "qrcode";
//import QRCode from "react-qr-code";

export const Output = () => {
  const store = useStore($store);
  const {
    orgUnit: { label: orgUnitName },
    dueDate,
  } = store;
  let history = useHistory();

  let canvas;
  const data = [store.Ewi7FUfcHAD, store.YvnFn4IjKzx];
  canvas = document.createElement("canvas");
  QRCode.toCanvas(canvas, data);
  const qr = canvas.toDataURL();

  return (
    <Box w="100%">
      <Button
        ml={4}
        mt={2}
        onClick={() => history.push("/")}
        colorScheme="blue"
      >
        Back
      </Button>
      <Heading
        as="h1"
        size="lg"
        py={4}
        color="gray.600"
        flex={1}
        style={{
          textTransform: "uppercase",
          fontSize: "24px",
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Times-Bold",
        }}
      >
        Covid-19 Vaccination Booking Confirmation
      </Heading>
      <Stack
        direction="column"
        w="100%"
        color="gray.600"
        backgroundColor="gray.50"
        pl="20px"
        pr="20px"
        style={{
          fontWeight: "bold",
          fontFamily: "Times-Bold",
          fontSize: "16px",
        }}
      >
        <Flex>
          <Box>
            <Text fontSize="xl">Client name:</Text>
          </Box>
          <Spacer />
          <Box>{store.sB1IHYu2xQT}</Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontSize="xl">NIN / Alternative ID Number:</Text>
          </Box>
          <Spacer />
          <Box>
            {store.Ewi7FUfcHAD ? (
              <Text>{store.Ewi7FUfcHAD}</Text>
            ) : (
              <Text>{store.YvnFn4IjKzx}</Text>
            )}
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontSize="xl">Client Category:</Text>
          </Box>
          <Spacer />
          <Box>{store.pCnbIVhxv4j}</Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontSize="xl">Priority Group:</Text>
          </Box>
          <Spacer />
          <Box>{store.CFbojfdkIIj}</Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontSize="xl">Phone Number:</Text>
          </Box>
          <Spacer />
          <Box>{store.ciCR6BBvIT4}</Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontSize="xl">Preferred Vaccination Date:</Text>
          </Box>
          <Spacer />
          <Box>{dueDate.format("YYYY-MM-DD")}</Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontSize="xl">Preferred Vaccination site:</Text>
          </Box>
          <Spacer />
          <Box>{orgUnitName}</Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontSize="xl">Main Occupation:</Text>
          </Box>
          <Spacer />
          <Box>{store.pK0K4T2Cq2f}</Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontSize="xl">School Level:</Text>
          </Box>
          <Spacer />
          <Box>{store.ZpvNoELGUnJ}</Box>
        </Flex>
      </Stack>
      <Stack align={"center"}>
        {/* <QRCode value={store.YvnFn4IjKzx} /> */}
        <Image src={qr} style={{ width: 300, height: 300 }} />
      </Stack>
    </Box>
  );
};
