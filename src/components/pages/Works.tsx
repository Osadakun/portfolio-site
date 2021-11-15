import React, { useCallback, useEffect, useState, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import { WorksModal } from '../molecules/WorksModal';
import { Modal_Bad } from '../modalItem/Modal_Bad'

export const Works: VFC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickPortfolio = useCallback(() => {
    history.push('/');
  }, []);

  return (
    <div>
      <Modal_Bad onClose={onClose} isOpen={isOpen}/>
      {/* <WorksModal onClose={onClose} isOpen={isOpen} /> */}
    </div>
  );
};
