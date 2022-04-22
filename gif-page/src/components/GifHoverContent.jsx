import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { MdTagFaces } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function GifHoverContent({ mouseEnter, gif, index, handleMouseLeave }) {
  const [copyed, setCopyed] = useState(false);

  const handleLinkCopyed = (index) => {
    setCopyed(index);
    setTimeout(() => {
      setCopyed(null);
    }, 3000);
  };

  return (
    <Stack
      key={index}
      id={gif.id}
      display={mouseEnter === index ? "flex" : "none"}
      position="absolute"
      zIndex="999"
      w="300px"
      h="250px"
      bgColor="rgba(0,0,0,0.7)"
      justifyContent="center"
      alignItems="center"
      onMouseLeave={handleMouseLeave}
      spacing={6}
    >
      <Stack
        key={index + 12}
        h="auto"
        display={gif.title === "" ? "none" : "flex"}
        justifyContent="center"
      >
        <Text
          key={index + 10}
          fontSize="sm"
          fontWeight="700"
          textAlign="center"
          w="270px"
          margin="auto"
          color="#ccc"
        >
          {gif.title}
        </Text>
      </Stack>
      {/* copiado y conSource | copiado y sinSource | sinCopiar y sinSource | sinCopiar y conSource */}
      <Stack>
        {copyed === index && gif.source !== "" ? (
          <>
            <Stack
              direction="row"
              paddingX={3}
              paddingY="8px"
              borderRadius="lg"
              bgColor="green.300"
              fontWeight="700"
              alignItems="center"
              spacing="1"
              color="#000"
            >
              <Text>Link Copiado</Text>
              <MdTagFaces size="20px" />
            </Stack>
            <Button colorScheme="white" variant="solid">
              <Link href={gif.source} color="white" target="_blank">
                Ir al origen <ExternalLinkIcon mx="1px" />
              </Link>
            </Button>
          </>
        ) : copyed === index && gif.source === "" ? (
          <Stack
            direction="row"
            paddingX={3}
            paddingY="8px"
            borderRadius="lg"
            bgColor="green.300"
            fontWeight="700"
            alignItems="center"
            spacing="1"
            color="#000"
          >
            <Text>Link Copiado</Text>
            <MdTagFaces size="20px" />
          </Stack>
        ) : copyed !== index && gif.source === "" ? (
          <>
            <CopyToClipboard text={gif.url}>
              <Button
                onClick={() => handleLinkCopyed(index)}
                colorScheme="blue"
                rightIcon={<CopyIcon />}
              >
                Copiar Link
              </Button>
            </CopyToClipboard>
          </>
        ) : copyed !== index && gif.source !== "" ? (
          <>
            <CopyToClipboard text={gif.url}>
              <Button
                onClick={() => handleLinkCopyed(index)}
                colorScheme="blue"
                rightIcon={<CopyIcon />}
              >
                Copiar Link
              </Button>
            </CopyToClipboard>
            <Button colorScheme="white" variant="solid">
              <Link href={gif.source} color="white" target="_blank">
                Ir al origen <ExternalLinkIcon mx="1px" />
              </Link>
            </Button>
          </>
        ) : (
          ""
        )}
      </Stack>
    </Stack>
  );
}

export default GifHoverContent;
