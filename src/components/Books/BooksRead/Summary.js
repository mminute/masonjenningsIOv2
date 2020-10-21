import React, { useRef, useState } from 'react';
import Pill from '../Pill';
import { summarize } from '../dataUtils';
import {
  Box,
  Button,
  CompositeZIndex,
  Divider,
  FixedZIndex,
  Layer,
  Modal,
  Row,
  Table,
  TapArea,
} from 'gestalt';

function Section({ children, title, subTitle }) {
  return (
    <Box>
      <Row gap={2}>
        <h3>{title}</h3>
        {subTitle}
      </Row>

      <Box marginTop={-2} marginBottom={4}>
        <Divider />
      </Box>

      {children}
    </Box>
  );
}

function Expander({ contractedText, expandedText, expanded, onClick }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginTop={1}
      dangerouslySetInlineStyle={{
        __style: {
          textDecoration: 'underline',
        },
      }}
    >
      <TapArea fullWidth={false} onTap={onClick}>
        {expanded ? expandedText : contractedText}
      </TapArea>
    </Box>
  );
}

function Authors({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section title="Authors">
      <Box display="flex" direction="row" wrap>
        {data.slice(0, expanded ? data.length : 3).map(author => (
          <Box key={`author-${author[0]}`} marginEnd={2} marginBottom={1}>
            <Pill text={`${author[0]} (${author[1]})`} />
          </Box>
        ))}
      </Box>

      <Expander
        contractedText="Show more authors"
        expandedText="Show fewer authors"
        expanded={expanded}
        onClick={() => setExpanded(current => !current)}
      />
    </Section>
  );
}

function Dates({ data }) {
  const [expanded, setExpanded] = useState(false);

  const years = Object.keys(data).reverse();
  const total = years.reduce((acc, current) => {
    const yearTotal = data[current].reduce((yrAcc, month) => {
      return yrAcc + month;
    });

    return acc + yearTotal;
  }, 0);

  return (
    <Section
      title="Timeline"
      subTitle={`- Avg books per year: ${(total / years.length).toFixed(2)}`}
    >
      <Box paddingX={12}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell># Books read</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {years.slice(0, expanded ? years.length : 2).map(year => {
              return (
                <Table.Row key={`tableRow-${year}`}>
                  <Table.Cell>{year}</Table.Cell>

                  <Table.Cell>
                    {data[year].reduce((acc, current) => (acc += current))}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Box>

      <Expander
        contractedText="Show more years"
        expandedText="Show fewer years"
        expanded={expanded}
        onClick={() => setExpanded(current => !current)}
      />
    </Section>
  );
}

function Tags({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section title="Tags">
      <Box display="flex" direction="row" wrap>
        {data.slice(0, expanded ? data.length : 4).map(tag => (
          <Box key={`tag-${tag[0]}`} marginEnd={2} marginBottom={1}>
            <Pill text={`${tag[0]} (${tag[1]})`} />
          </Box>
        ))}
      </Box>

      <Expander
        contractedText="Show more tag"
        expandedText="Show fewer tags"
        expanded={expanded}
        onClick={() => setExpanded(current => !current)}
      />
    </Section>
  );
}

export default function Summary({ data, onDismiss }) {
  // The sticky header gets a zIndex of 1 in Header.css
  const HEADER_ZINDEX = new FixedZIndex(1);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  const summarizedData = summarize(data);

  return (
    <Layer zIndex={zIndex}>
      <Modal
        accessibilityModalLabel="Summary of all the books that I've read"
        heading="A summary of the books that I've read"
        onDismiss={onDismiss}
        size="lg"
        footer={
          <Box display="flex" justifyContent="end">
            <Button inline onClick={onDismiss} text="Close" />
          </Box>
        }
      >
        <div className="inconsolata gray textHeight-regular">
          <Box paddingX={10}>
            <Tags data={summarizedData.tags} />

            <Box marginTop={4}>
              <Authors data={summarizedData.authors} />
            </Box>

            <Box marginTop={4}>
              <Dates data={summarizedData.dates} />
            </Box>
          </Box>
        </div>
      </Modal>
    </Layer>
  );
}
