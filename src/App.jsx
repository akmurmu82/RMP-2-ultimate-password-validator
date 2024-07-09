import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Input, Text } from "@chakra-ui/react";
import WarningCont from "./WarningCont";
// import { number } from "prop-types";

function App() {
  const [password, setPassword] = useState("");
  // const [warning, setWarning] = useState("");
  const [rules, setRules] = useState([
    {
      id: 1,
      validated: null,
      desc: "Your password must be at least 5 characters.",
    },
    {
      id: 2,
      validated: null,
      desc: "Your password must have at least one capital letter.",
    },
    {
      id: 3,
      validated: null,
      desc: "Your password must have at least one digit.",
    },
    {
      id: 4,
      validated: null,
      desc: "Your password must have at least a special character.",
    },
    {
      id: 5,
      validated: null,
      desc: "All the digits in your password must add to 25",
    },
  ]);
  function handleChange(e) {
    setPassword(e.target.value);
  }
  useEffect(() => {
    if (password === "") {
      setRules(rules.map((rule) => ({ ...rule, validated: null })));
    } else {
      validate(password);
    }
    console.log(rules)
  }, [password]);

  function validate(password) {
    // Method 1
    /*
    const hasValidLength = password.length >= 5;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[@#$&]/.test(password);
    const digitSumsTo25 =
      password
        .split("")
        .filter(Number)
        .map(Number)
        .reduce((acc, char) => acc + parseInt(char), 0) == 25;
    setRules((rules) => [
      { ...rules[0], validated: hasValidLength },
      { ...rules[1], validated: hasCapitalLetter },
      { ...rules[2], validated: hasDigit },
      { ...rules[3], validated: hasSpecialChar },
      { ...rules[4], validated: digitSumsTo25 },
    ]);
    */

    // Method 2
    /*

    let currentValidationIndex = rules.findIndex(
      (rule) => rule.validated === null
    );

    if (currentValidationIndex !== -1) {
      switch (currentValidationIndex) {
        case 0:
          setRules((rules) => ({
            ...rules,
            [currentValidationIndex]: {
              ...rules[currentValidationIndex],
              validated: password.length >= 5,
            },
          }));
          break;
        case 1:
          setRules((rules) => ({
            ...rules,
            [currentValidationIndex]: {
              ...rules[currentValidationIndex],
              validated: /[A-Z]/.test(password),
            },
          }));
          break;
        case 2:
          setRules((rules) => ({
            ...rules,
            [currentValidationIndex]: {
              ...rules[currentValidationIndex],
              validated: /[0-9]/.test(password),
            },
          }));
          break;
        case 3:
          setRules((rules) => ({
            ...rules,
            [currentValidationIndex]: {
              ...rules[currentValidationIndex],
              validated: /[@#$&]/.test(password),
            },
          }));
          break;
        case 4:
          setRules((rules) => ({
            ...rules,
            [currentValidationIndex]: {
              ...rules[currentValidationIndex],
              validated:
                password
                  .split("")
                  .filter(Number)
                  .map(Number)
                  .reduce((acc, char) => acc + parseInt(char), 0) === 25,
            },
          }));
          break;
        default:
          break;
      }
    }
    */

    // Method 3
    const updatedRules = [...rules]; // Create a copy of rules array

    updatedRules.forEach((rule, index) => {
      if (rule.validated === null) {
        switch (index) {
          case 0:
            rule.validated = password.length >= 5;
            break;
          case 1:
            rule.validated = /[A-Z]/.test(password);
            break;
          case 2:
            rule.validated = /[0-9]/.test(password);
            break;
          case 3:
            rule.validated = /[@#$&]/.test(password);
            break;
          case 4:
            rule.validated =
              password
                .split("")
                .filter(Number)
                .map(Number)
                .reduce((acc, char) => acc + parseInt(char), 0) === 25;
            break;
          default:
            break;
        }
      }
    });

    setRules(updatedRules); // Update state with the modified rules array
  }

  return (
    <Box>
      <Text fontSize={20}>Please choose a password</Text>
      <Input
        placeholder="Enter password"
        value={password}
        w={"fit-content"}
        fontSize={20}
        p={15}
        mb={5}
        onChange={handleChange}
      ></Input>
      {/* <Text>{warning}</Text> */}
      <WarningCont rules={rules} />
    </Box>
  );
}

export default App;
