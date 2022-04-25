import { Stack, Tag, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import TagGifs from "./TagGifs";

const Categorys = () => {
  const categorys = [
    "funny",
    "sad",
    "angry",
    "laught",
    "confusion",
    "futbol",
    "sport",
    "hollywood",
    "love",
    "beach",
    "space",
    "happy",
  ];
  return (
    <Stack direction="row" spacing={4} justifyContent="space-around">
      {categorys.map((category, i) => (
        <TagGifs key={i} keyword={category} i={i} />
      ))}
    </Stack>
  );
};

export default function LazyCategory() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);
  return <Stack ref={elementRef}>{show ? <Categorys /> : null}</Stack>;
}
