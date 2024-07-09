import { Flex } from "@chakra-ui/react";
import WarningCard from "./component/WarningCard";
import { PropTypes } from "prop-types";

function WarningCont({ rules }) {
  return (
    <Flex wrap={"wrap"} gap={5}>
      {Object.values(rules).map(({ id, desc, validated }) => {
        if (validated !== null) {
          return (
            <WarningCard
              key={id}
              number={id}
              desc={desc}
              isValidated={validated}
            />
          );
        }
      })}
    </Flex>
  );
}

export default WarningCont;

WarningCard.propTypes = {
  rules: PropTypes.object,
};
