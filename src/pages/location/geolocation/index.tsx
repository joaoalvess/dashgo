import React from 'react';

import { Heading } from '@chakra-ui/react';

import Text from '@/Atoms/text';

const geolocation: React.FC = () => {
  return (
    <>
      <Heading textAlign={'center'} fontSize={'2xl'}>
        Olá! <br /> Que bom que você está aqui
      </Heading>
    </>
  );
};

export default geolocation;
