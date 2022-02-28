import React from 'react';
import { Box, Column, Mask } from 'gestalt';
import PropTypes from 'prop-types';
import Image from '../../Image';

export default function Project({
  altText, description, fileName, url, imageStyle,
}) {
  return (
    <Box display="flex" direction="row" marginBottom={8}>
      <Column span={4}>
        <Box alignItems="center" justifyContent="center">
          <a href={url} target="_blank" rel="noreferrer">
            <Box maxWidth={200}>
              <Mask rounding={8}>
                <Image alt={altText} fileName={fileName} style={imageStyle} />
              </Mask>
            </Box>
          </a>
        </Box>
      </Column>
      <Column span={8}>
        {description}
      </Column>
    </Box>
  );
}

Project.propTypes = {
  altText: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  fileName: PropTypes.string.isRequired,
  imageStyle: PropTypes.shape({ maxWidth: PropTypes.string, maxHeight: PropTypes.string }),
  url: PropTypes.string.isRequired,
};

Project.defaultProps = {
  imageStyle: {},
};
