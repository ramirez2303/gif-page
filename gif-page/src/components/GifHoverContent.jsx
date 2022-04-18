import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { MdTagFaces } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function GifHoverContent({ mouseEnter, gif, index, handleMouseLeave }) {
  const [copyed, setCopyed] = useState(false);

  const handleLinkCopyed = (index) => {
    setCopyed(index);
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
    >
      {copyed === index ? (
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
      ) : (
        <CopyToClipboard text={gif.url}>
          <Button
            onClick={() => handleLinkCopyed(index)}
            colorScheme="blue"
            rightIcon={<CopyIcon />}
          >
            Copiar Link
          </Button>
        </CopyToClipboard>
      )}
      {gif.source === "" ? (
        ""
      ) : (
        <Button colorScheme="white" variant="solid">
          <Link href={gif.source} color="white" target="_blank">
            Ir al origen <ExternalLinkIcon mx="1px" />
          </Link>
        </Button>
      )}
    </Stack>
  );
}

export default GifHoverContent;
