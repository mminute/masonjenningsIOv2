import React from 'react';
import { Box, IconButton } from 'gestalt';

export default function Pill({ icon, id, onClick, text }) {
  return (
    <Box
      color="darkWash"
      direction="row"
      display="flex"
      padding={2}
      rounding="pill"
      marginEnd={1}
    >
      <i>{text}</i>

      {onClick && icon && (
        <IconButton
          accessibilityLabel={`Remove ${text}`}
          icon={icon}
          size="xs"
          onClick={() => onClick(id)}
        />
      )}
    </Box>
  );
}
