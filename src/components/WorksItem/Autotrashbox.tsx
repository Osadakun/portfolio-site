import React, { useCallback, useEffect, useState, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import { Center, Heading, Stack, Wrap, WrapItem, Text } from '@chakra-ui/layout';
import trashbox from '../../img/trashbox.png';
import { Button } from '@chakra-ui/button';

export const Autotrashbox: VFC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const history = useHistory();

    const onClickPortfolio = useCallback(() => {
      history.push('/');
    }, []);

    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }, [trashbox]);

    return (
        <WrapItem
            h='sm'
            borderRadius='10px'
            shadow='md'
            p={4}
            bgColor='white'
            justify='center'
            w={{ base: '100%', xs: '85%' }}
          >
            <Stack textAlign='center' spacing={4}>
              <Center borderWidth='1px' bg='white' h='235px'>
                <Text fontSize='2xl'>Coming soon</Text>
              </Center>
              <Heading as='h2' w='md'>Coming soon...</Heading>
              <Button colorScheme='teal' size='sm' _hover={{ cursor: 'default' }}>
                詳細
              </Button>
            </Stack>
          </WrapItem>
    );
};