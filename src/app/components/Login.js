"use client";
import { Box, Button, Grid, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value ? null : "Password is required"),
    },
  });
  return (
    <Box w={400} style={{ backgroundColor: "#242424", color:"#C9C9BF", padding: "10px 20px", borderRadius:"5px", alignSelf:"center" }}>
      <Title  order={2} style={{ textAlign: "center" }}>Loging</Title>
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            label="Emali"
            placeholder="Email"
            {...form.getInputProps("email")}
            required
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
            required
          />
        </Grid.Col>
        <Grid.Col span={12}  style={{width: "100%"}}  >
            <span style={{display:"flex" , justifyContent:"space-between", alignItems:"center"}}>
                <Text component={Link} href={`/register`} className="mt-3">Have not account? Register</Text>
                <Button  type="submit" mt="md">Submit</Button>
            </span>
          </Grid.Col>
      </Grid>
    </Box>
  );
};

export default LoginPage;
