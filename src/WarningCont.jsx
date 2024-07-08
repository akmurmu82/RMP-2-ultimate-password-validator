import { Flex } from "@chakra-ui/react";
import WarningCard from "./component/WarningCard";
import { PropTypes } from "prop-types";

function WarningCont({ rules }) {
  console.log(rules);
  console.log(Object.values(rules));
  return (
    <Flex wrap={"wrap"} gap={5}>
      {Object.values(rules).map((rule) => {
        if (rule !== null) {
          return (
            <WarningCard
              key={rule}
              number={1}
              desc="Your password must be at least 5 characters."
              isValidated={false}
            />
          );
        }
      })}
      {/* <WarningCard
        number={1}
        desc="Your password must be at least 5 characters."
        isValidated={false}
      />
      <WarningCard
        number={2}
        desc="Your password must be at least 5 characters."
        isValidated={true}
      /> */}
    </Flex>
  );
}

export default WarningCont;

WarningCard.propTypes = {
  rules: PropTypes.object,
};
