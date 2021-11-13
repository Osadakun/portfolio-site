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
        <ModalHeader>自動開閉式ゴミ箱</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text pb='10px'>
          </Text>
            100均のゴミ箱を改良して，自動開閉式のゴミ箱を作成しました．お腹の部分に距離センサを組み込んで，サーボモータで制御しています．
          <Heading fontSize='md'>使用言語・技術等</Heading>
          <UnorderedList>
            <HStack>
              <ListItem>Arduino</ListItem>
              <ListItem>距離センサ</ListItem>
              <ListItem>サーボモータ</ListItem>
            </HStack>
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
