import React from 'react';
import { Box } from 'gestalt';

function ShadedRow({ children, idx }) {
  return (
    <Box
      alignItems="center"
      color={idx % 2 ? 'lightGray' : 'white'}
      display="flex"
      minHeight={56}
      padding={3}
      rounding={6}
    >
      {children}
    </Box>
  );
}

export default ShadedRow;
