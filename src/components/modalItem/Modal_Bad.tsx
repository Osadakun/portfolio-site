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
        <ModalHeader>保護者の方との対応から監督の通知までを自動化するLINEBot</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text pb='10px'>
            コーチを務めているバドミントンクラブで，練習毎の保護者の方からの欠席・遅刻の連絡対応を行い，監督へ通知を行います．クロネコヤマトの公式アカウントからインスピレーションを受け，作成を行いました．
          </Text>
          <Heading fontSize='md'>使用言語・技術等</Heading>
          <UnorderedList>
            <HStack>
              <ListItem>Python</ListItem>
              <ListItem>Heroku</ListItem>
              <ListItem>LINEMessagingAPI</ListItem>
              <ListItem>Webhook</ListItem>
              <ListItem>GoogleSpreadSheet</ListItem>
            </HStack>
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
