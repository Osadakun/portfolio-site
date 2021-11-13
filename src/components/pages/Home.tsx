import React, { VFC } from 'react';
import { Box, Center, Text } from '@chakra-ui/layout';

export const Home: VFC = () => {
  return (
    <>
      <Box
        bgImage='url("https://img.freepik.com/free-photo/vibrant-night-sky-with-stars-and-nebula-and-galaxy_146671-19196.jpg?size=626&ext=jpg")'
        bgRepeat='no-repeat'
        bgPosition='center'
        bgSize='cover'
      >
        <Box height='100vh'>
          <Center as='h1' height='100%' >
            <Text letterSpacing={5} fontSize='3xl' textAlign='center'>WELCOME TO MY PAGE!!</Text>
          </Center>
        </Box>
      </Box>
    </>
  );
};
