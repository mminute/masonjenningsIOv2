import React from 'react';
import { Box } from 'gestalt';

function Chapter({ children, idx, title }) {
  return (
    <Box>
      <h4>
        Chapter {idx}: {title}
      </h4>

      <Box marginStart={8}>{children}</Box>
    </Box>
  );
}

export default Chapter;
