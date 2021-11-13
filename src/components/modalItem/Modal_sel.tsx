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
        <ModalHeader>行動履歴の自動入力</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text pb='10px'>
          </Text>
            1年次に毎週出される課題である行動履歴を自動入力しました．毎回ランダムで項目が選ばれるよう工夫しました．
          <Heading fontSize='md'>使用言語・技術等</Heading>
          <UnorderedList>
            <HStack>
              <ListItem>Python</ListItem>
              <ListItem>Selenium</ListItem>
              <ListItem>Chromdriver</ListItem>
            </HStack>
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
