import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

function WarningCard({ number, desc, isValidated }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: false }}
    >
      <VStack
        align={"left"}
        overflow={"hidden"}
        borderRadius={"10px"}
        border={isValidated ? "1px solid #168000" : "1px solid #ff6f61"}
        gap={0}
      >
        <Flex
          fontSize={"large"}
          align={"center"}
          p={2}
          bg={isValidated ? "#25d366" : "#ffdddd"}
        >
          <Icon as={isValidated ? IoMdCheckmark : RxCross1} mr={5} />
          <Text>Rule {number}</Text>
        </Flex>
        <Text p={2} fontSize={"large"} pr={15}>
          {desc}
        </Text>
      </VStack>
    </motion.div>
  );
}

export default WarningCard;
WarningCard.propTypes = {
  number: PropTypes.number,
  desc: PropTypes.string,
  isValidated: PropTypes.bool,
};
