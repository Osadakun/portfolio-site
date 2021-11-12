import React, { useCallback, VFC } from 'react';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon, Icon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/hooks';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import { useHistory } from 'react-router';
import { HeaderDrawer } from '../molecules/HeaderDrawer';

export const Header: VFC = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => {
    history.push('/');
    onClose();
  }, []);

  const onClickInformations = useCallback(() => {
    history.push('/informations');
    onClose();
  }, []);

  const onClickWorks = useCallback(() => {
    history.push('/works');
    onClose();
  }, []);

  const onClickContact = useCallback(() => {
    history.push('/contact');
    onClose();
  }, []);

  return (
    <>
      <Flex
        as='nav'
        bg='teal.400'
        color='gray.50'
        align='center'
        justify='space-between'
        padding={{ base: 3, md: 4 }}
        boxShadow='xl'
        position='fixed'
        w='100%'
      >
        <Flex as='a' _hover={{ cursor: 'pointer', opacity: '0.9' }} ml={10} onClick={onClickHome}>
          <Heading as='h1' fontSize={{ base: 'xl', md: 25 }}>
            MYSITE
          </Heading>
        </Flex>
        <Flex align='center' fontSize={{ base: 20, md: 25 }} display={{ base: 'none', md: 'flex' }} mr={10}>
        <Link
            w={12}
            h={12}
            cursor='pointer'
            href='https://github.com/Osadakun'
            isExternal
            _hover={{ opacity: '0.8' }}
            _focus={{ outline: 'none' }}
          >
            <Icon as={GitHubIcon} />
          </Link>
          <Link
            w={12}
            h={12}
            cursor='pointer'
            href='https://www.instagram.com/pstone_79'
            isExternal
            _hover={{ opacity: '0.8' }}
            _focus={{ outline: 'none' }}
          >
            <Icon as={InstagramIcon} />
          </Link>
          <Link
            pr={4}
            w={12}
            h={12}
            cursor='pointer'
            href='https://twitter.com/pstone_000'
            isExternal
            _hover={{ opacity: '0.8' }}
            _focus={{ outline: 'none' }}
          >
            <Icon as={TwitterIcon} />
          </Link>
          <Link
            pr={4}
            w={12}
            h={12}
            cursor='pointer'
            href='mailto:b1915053@planet.kanazawa-it.ac.jp'
            isExternal
            _hover={{ opacity: '0.8' }}
            _focus={{ outline: 'none' }}
          >
            <Icon as={EmailIcon} />
          </Link>
          <Link
            pr={4}
            w={12}
            h={12}
            cursor='pointer'
            href='https://hackmd.io/@Teon'
            isExternal
            _hover={{ opacity: '0.8' }}
            _focus={{ outline: 'none' }}
          >
            <Icon as={LibraryBooksOutlinedIcon} />
          </Link>
          <Box
            pr={4}
            _hover={{ cursor: 'pointer', opacity: '0.7' }}
            _focus={{ outline: 'none' }}
            fontSize='md'
          >
            <Text onClick={onClickHome}>HOME</Text>
          </Box>
          <Box pr={4} _hover={{ cursor: 'pointer', opacity: '0.7' }} fontSize='md'>
            <Text onClick={onClickInformations}>INFORMATIONS</Text>
          </Box>
          <Box pr={4} _hover={{ cursor: 'pointer', opacity: '0.7' }} fontSize='md'>
            <Text onClick={onClickWorks}>WORKS</Text>
          </Box>
        </Flex>
        <IconButton
          aria-label='メニューボタン'
          icon={<HamburgerIcon />}
          size='sm'
          variant='outline'
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      <HeaderDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickInformations={onClickInformations}
        onClickWorks={onClickWorks}
        onClickContact={onClickContact}
      />
    </>
  );
};
