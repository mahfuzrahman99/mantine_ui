"use client";
import { Box, Button, Grid, SimpleGrid, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      firstName: (value) => (value ? null : "First name is required"),
      lastName: (value) => (value ? null : "Last name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email is required"),
      password: (value) =>
        value.length >= 6
          ? null
          : "Password must be at least 6 characters long",
      confirmPassword: (value, values) =>
        value === values.password ? null : "Passwords do not match",
    },
  });

  return (
    <Box w={400} style={{ backgroundColor: "#242424", color:"#C9C9BF", padding: "10px 20px", borderRadius:"5px", alignSelf:"center" }}>
      <Title order={2} style={{ textAlign: "center" }}>
        Register
      </Title>
      <form>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="First Name"
              placeholder="First Name"
              {...form.getInputProps("firstName")}
              required
              style={(theme)=>({
                input:{
                    backgroundColor:"#2E2E2E",
                },
                placeholder:{
                    color:"#828282",
                }
              })}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Last Name"
              placeholder="Last Name"
              {...form.getInputProps("lastName")}
              required
              sx={{
                input:{
                    backgroundColor:"#2E2E2E",
                },
                '::placeholder': {
                    color: '#828282',
                  },
              }}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput
              label="Email"
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
          <Grid.Col span={12}>
            <TextInput
              label="Confirm Password"
              placeholder="Confirm Password"
              {...form.getInputProps("confirmPassword")}
              required
            />
          </Grid.Col>
          <Grid.Col span={12}  style={{width: "100%"}}  >
            <span style={{display:"flex" , justifyContent:"space-between", alignItems:"center"}}>
                <Text component={Link} href={`/login`} className="mt-3">Have an account? Login</Text>
                <Button  type="submit" mt="md">Submit</Button>
            </span>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
};

export default RegisterPage;
