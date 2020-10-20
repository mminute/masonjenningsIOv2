import React from 'react';
import { Box, Row, TapArea } from 'gestalt';

export default function Tags({ bookTagKey, tags, onTap }) {
  return (
    <Row>
      tags:
      <Box marginStart={1}>
        {tags.map((t, idx) => (
          <Box key={`${bookTagKey}-${t}`} display="inlineBlock" marginEnd={2}>
            <Row>
              <TapArea onTap={() => onTap(t)}>
                <i>{t}</i>
              </TapArea>
              {tags.length > 1 && idx !== tags.length - 1 && ','}
            </Row>
          </Box>
        ))}
      </Box>
    </Row>
  );
}

