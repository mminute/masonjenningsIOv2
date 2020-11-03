import React from 'react';
import { Box, Row, TapArea } from 'gestalt';

export default function Tags({ title, tagKey, tags, onTap }) {
  return (
    <Row>
      {title}:
      <Box marginStart={1}>
        {tags.map((t, idx) => (
          <Box key={`${tagKey}-${t}`} display="inlineBlock" marginEnd={2}>
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

