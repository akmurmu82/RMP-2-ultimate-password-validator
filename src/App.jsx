import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Input, Text } from "@chakra-ui/react";
import WarningCont from "./WarningCont";

function App() {
  const [password, setPassword] = useState("");
  // const [warning, setWarning] = useState("");
  const [rules, setRules] = useState({
    r1: null,
    r2: null,
    r3: null,
    r4: null,
    r5: null,
  });
  function handleChange(e) {
    setPassword(e.target.value);
  }
  useEffect(() => {
    validate(password);
  }, [password]);

  function validate(password) {
    if (password.length < 5) {
      setRules({ ...rules, r1: false });
    } else if(password.split("").some(char=> char)) {
    }
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
