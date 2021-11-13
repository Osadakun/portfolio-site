import React, { VFC } from 'react';
import { Text, Heading, HStack } from '@chakra-ui/layout';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
} from '@chakra-ui/react';
import { ListItem } from '@material-ui/core';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const WorksModal: VFC<Props> = (props) => {
  const { onClose, isOpen } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader>家族の現在の状況を可視化するLINEBot</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text pb='10px'>
            生活拠点がバラバラな家族の現在の状況を簡単に可視化するLINEBotです．家族4人のとりうる行動は大体決まっていることに注目し，事前にその人に合わせた行動をリスト化し，ボタンとして再現することで扱いやすいUIになっています．
          </Text>
          <Heading fontSize='md'>使用言語・技術等</Heading>
          <UnorderedList>
            <HStack>
              <ListItem>Python</ListItem>
              <ListItem>Heroku</ListItem>
              <ListItem>LINEMessagingAPI</ListItem>
              <ListItem>PostgreSQl</ListItem>
            </HStack>
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
