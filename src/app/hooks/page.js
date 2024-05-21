"use client";

import React, { useCallback, useState } from "react";
import {
  useClickOutside,
  useColorScheme,
  useDisclosure,
  useElementSize,
  useEventListener,
} from "@mantine/hooks";
import { Badge, Button, Modal, Paper, rem } from "@mantine/core";
import Link from "next/link";
import LoginPage from "../components/Login";
import RegisterPage from "../components/Register";

const MantineHooks = () => {
  //   const [opened, setOpened] = useState();

  //   const ref1 = useClickOutside(() => setOpened(false));

  //   const colorScheme = useColorScheme();

  //   const { ref, width, height } = useElementSize();

  //   const [count, setCount] = useState(0);
  //   const increment = useCallback(() => setCount((c) => c + 1), []);
  //   const decrement = useCallback(() => setCount((c) => (c > 0 ? c - 1 : c)), []);
  //   const ref3 = useEventListener("click", increment);
  //   const ref4 = useEventListener("click", decrement);

  const [loginOpened, { open: openLogin, close: closeLogin }] = useDisclosure(false);
  const [registerOpened, { open: openRegister, close: closeRegister }] = useDisclosure(false);

  return (
    <div>
      <div style={{ display: "flex", justifyItems: "center", gap: rem(20) }}>
        <Button component={Link} href={`/login`}>
          Loging
        </Button>
        <Button component={Link} href={`/register`}>
          Register
        </Button>
      </div>

      <div>
        {/* <Button onClick={() => setOpened(true)}>Open Dropdown</Button>
        {opened && (
          <Paper ref={ref1} shadow="sm">
            <span>Click outside to close</span>
          </Paper>
        )} */}
      </div>

      <div>
        {/* <Badge color={colorScheme === "dark" ? "gray" : "dark"}>
          <span>Your system color scheme is {colorScheme}</span>
        </Badge> */}
      </div>

      <div>
        {/* <textarea  ref={ref} style={{ width: rem(400), height: rem(120), border: "1px" }} />
        <div>
          Width: {width}, height: {height}
        </div> */}
      </div>

      <div>
        {/* <Button ref={ref3}>Increment</Button>
        <Button ref={ref4}>Decrement</Button>
        <span>Count is {count}</span> */}
      </div>

      <div className="flex justify-center gap-3">
        <div>
          <Modal opened={loginOpened} onClose={closeLogin} title="Authentication">
            <LoginPage />
          </Modal>
          <Button h={60} size="20px" my={30} px={10} py={4} onClick={openLogin}>
            Open Login Modal
          </Button>
        </div>

        <div>
          <Modal opened={registerOpened} onClose={closeRegister} title="Authentication">
            <RegisterPage />
          </Modal>
          <Button h={60} size="20px" my={30} px={10} py={4} onClick={openRegister}>
            Open Register Modal
          </Button>
        </div>
      </div>

      <div></div>

      <div></div>

      <div></div>
    </div>
  );
};

export default MantineHooks;
