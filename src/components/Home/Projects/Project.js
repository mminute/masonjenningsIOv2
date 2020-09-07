import React from 'react';
import Image from '../../Image';
import { Box, Column, Mask } from 'gestalt';

export default function Project({ description, fileName, url  }) {
  return (
    <Box display="flex" direction="row">
      <Column span={4}>
        <a href={url} target="_blank">
          <Box maxWidth={200}>
            <Mask rounding={8}>
              <Image fileName={fileName} />
            </Mask>
          </Box>
        </a>
      </Column>
      <Column span={8}>
        {description}
      </Column>
    </Box>
  );
}