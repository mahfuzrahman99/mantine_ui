"use client";
import React, { useState } from "react";
import {
  Anchor,
  AspectRatio,
  Box,
  Button,
  Center,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  Fieldset,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  Tooltip,
  FileInput,
  FileInputProps,
  Pill,
  em,
  rem,
} from "@mantine/core";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import Link from "next/link";

const AboutPage = () => {
  const [checked, setChecked] = useState();
  const [value, onChange] = useState("#fff" || "rgba(47, 119, 150, 0.7)");

  const ValueComponent = ({ value }) => {
    if (value === null) {
      return null;
    }

    if (Array.isArray(value)) {
      return (
        <Pill.Group>
          {value.map((file, index) => (
            <Pill key={index}>{file.name}</Pill>
          ))}
        </Pill.Group>
      );
    }

    return <Pill>{value.name}</Pill>;
  };

  return (
    <div>
      <Text>This is About Us Page</Text>
      <Button component={Link} href={`/hooks`}>Go to hooks page</Button>
      {/* <AspectRatio ratio={1920 / 1080}>
        <img src={`/bg-5.png`} alt="demo"></img>
      </AspectRatio> */}
      {/* <AspectRatio ratio={19 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
          title="Google map"
          style={{ border: 0 }}
        />
      </AspectRatio> */}
      {/* <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.youtube.com/embed/mzJ4vCjSt28"
          title="YouTube video player"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio> */}
      {/* <Anchor href="https://portfolio-of-mahfuz-99.surge.sh" target="_blank">
        <Center inline>
          <IconArrowLeft
            style={{ width: rem(50), height: rem(20), fontSize: rem(30) }}
          />
          <Box ml={5}>Back to Mahfuzs website</Box>
        </Center>
      </Anchor> */}
      <Flex
        mih={50}
        miw={100}
        gap="md"
        justify={{
          base: "space-between",
          sm: "center",
          md: "start",
          lg: "right",
        }}
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Button color="lime">Home</Button>
        <Button bg={"gray"}>About</Button>
        <Button>All</Button>
      </Flex>

      {/* <Grid>
        <Grid.Col>1</Grid.Col>
        <Grid.Col>2</Grid.Col>
        <Grid.Col>3</Grid.Col>
        <Grid.Col>4</Grid.Col>
      </Grid> */}

      <div>
        <SimpleGrid
          cols={{ base: 1, sm: 3, lg: 5 }}
          spacing={{ base: "sm", lg: "lg" }}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </SimpleGrid>
      </div>

      <Group justify="center" gap="lg">
        <Button>HOME</Button>
        <Button>about</Button>
        <Button>section</Button>
      </Group>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text>First text</Text>
        <Space w="lg" />
        <Text>Second text</Text>
        <Space h="lg" />
        <Text>Third text</Text>
      </div>

      <div>
        <Stack
          h={200}
          bg="#123df"
          mx={40}
          align="inherit"
          justify="center"
          gap="md"
        >
          <Button variant="gradient">1</Button>
          <Button variant="filled">2</Button>
          <Button variant="default">3</Button>
        </Stack>
      </div>

      <div>
        <Checkbox
          iconColor="#fff"
          size="20px"
          labelPosition="left"
          defaultChecked
          description="ADEFAOIEFHAIUWEYFANSDCJKAHEFUIHAFNASDKFJAIUHFALSJHDF"
          label="ekhane check koro"
          radius="20"
        />
      </div>

      <div>
        <Chip defaultChecked size="lg">
          Owesome cheep
        </Chip>
        <Tooltip label="Chip Tooltip" refProp="rootRef">
          <Chip
            checked={checked}
            onChange={() => setChecked((v) => !v)}
            icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
            color="violet"
          >
            Forbidden
          </Chip>
        </Tooltip>
      </div>

      <div>
        <ColorInput
          label="Color Picker"
          format="hexa"
          size="md"
          radius="sm"
          description="Click the icon and pick the color"
          placeholder="Yor picked color hax code is showen here"
        />
      </div>

      <div>
        <ColorPicker onChange={onChange} format="hexa" value={value} />
        <Text>{value}</Text>
      </div>

      <div>
        <Fieldset legend="Personal information" disabled={false}>
          <TextInput
            label="First Name"
            size="sm"
            placeholder="Enter your First name"
          />
          <TextInput
            label="Last Name"
            size="sm"
            placeholder="Enter your Last name"
          />

          <Group justify="flex-end" mt="md">
            <Button>Submit</Button>
          </Group>
        </Fieldset>
      </div>

      <div>
        <FileInput
          label="Upload files"
          placeholder="Upload files"
          multiple
          valueComponent={ValueComponent}
        />
      </div>
    </div>
  );
};

export default AboutPage;
