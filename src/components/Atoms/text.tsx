import React from 'react';

import { Text as SimpleText } from '@chakra-ui/react';

import { TypeText } from '@/types/components/text';

const Text = ({ font, text, line, weight, align }: TypeText) => {
  return <SimpleText
  fontSize={font}
  fontWeight={weight}
  lineHeight={line}
  textAlign={align}
  >{text}</SimpleText>;
};

export default Text;
