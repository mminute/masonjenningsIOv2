import React, { useState } from 'react';
import { Box, IconButton, TapArea } from 'gestalt';
import Image from '../Image';
import { BOARD_GAME, VIDEO_GAME, RECOMMEND } from '../../DATA/games';

function VRIcon() {
  return (
    <Box height={28} width={28} marginStart={1}>
      <Image fileName="VR-Icon.png" alt="Virtual reality game" />
    </Box>
  );
}

function HeartIcon() {
  return (
    <Box height={24} width={24} marginStart={1}>
      <Image fileName="HeartIcon.png" alt="Recommended" />
    </Box>
  );
}

function BoardGameIcon() {
  return (
    <Box height={26} width={26}>
      <Image fileName="Knight.png" alt="Board game" />
    </Box>
  );
}

function VideoGameIcon() {
  return (
    <Box height={26} width={36}>
      <Image fileName="Controller.png" alt="Video game" />
    </Box>
  );
}

function PsuedoCheckbox({ text, onTap }) {
  return (
    <Box marginEnd={4}>
      <TapArea onTap={onTap}>
        <Box display="flex" direction="row" alignItems="center">
          <Box height={24} width={24}>
            <Image fileName="CheckboxIcon.png" alt={text} />
          </Box>
          <Box marginStart={2}>
            <i>{text}</i>
          </Box>
        </Box>
      </TapArea>
    </Box>
  );
}

const typeToIcon = {
  [BOARD_GAME]: BoardGameIcon,
  [VIDEO_GAME]: VideoGameIcon,
};

function Game({ data, onAddTag }) {
  const {
    completed,
    link,
    notes,
    owned,
    platform,
    played,
    recommended,
    title,
    type,
    vr,
  } = data;
  const [expanded, setExpanded] = useState(false);
  const Icon = typeToIcon[type];
  return (
    <Box width="100%">
      <Box display="flex" direction="row" alignItems="center" marginStart={5}>
        <IconButton
          accessibilityLabel={expanded ? 'Show less' : 'Show More'}
          icon={expanded ? 'arrow-up' : 'arrow-down'}
          onClick={() => setExpanded(current => !current)}
          size="sm"
        />

        <Box
          width={100}
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <TapArea onTap={() => onAddTag(type)}>
              <Icon />
            </TapArea>
          </Box>
          {vr && (
            <Box>
              <TapArea onTap={() => onAddTag('vr')}>
                <VRIcon />
              </TapArea>
            </Box>
          )}
          {recommended === RECOMMEND.yes && (
            <Box>
              <TapArea onTap={() => onAddTag('recommended')}>
                <HeartIcon />
              </TapArea>
            </Box>
          )}
        </Box>

        <Box marginStart={4}>
          <a href={link || ''} target="blank">
            {title}
          </a>
        </Box>
      </Box>

      {expanded && (
        <Box
          display="flex"
          direction="column"
          dangerouslySetInlineStyle={{ __style: { marginLeft: '170px' } }}
        >
          {notes && <Box marginBottom={2}>{notes}</Box>}
          {type === VIDEO_GAME && (
            <Box marginBottom={2}>
              <TapArea onTap={() => onAddTag(platform)}>
                <i>{platform}</i>
              </TapArea>
            </Box>
          )}
          <Box display="flex" direction="row">
            {owned && <PsuedoCheckbox text="Owned" onTap={() => onAddTag('owned')} />}
            {played && <PsuedoCheckbox text="Played"onTap={() => onAddTag('played')} />}
            {completed && <PsuedoCheckbox text="Completed" onTap={() => onAddTag('completed')} />}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Game;
