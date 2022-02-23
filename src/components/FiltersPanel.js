import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CompositeZIndex,
  Divider,
  FixedZIndex,
  Layer,
  SearchField,
  Sheet,
} from 'gestalt';

function Tag(props) {
  const { checked, onChange, text } = props;

  return (
    <Box display="inlineBlock" paddingY={2} width="50%">
      <Checkbox
        checked={checked}
        id={text}
        label={text}
        name={text}
        onChange={({ checked }) => {
          onChange(text, checked);
        }}
      />
    </Box>
  );
}

function PanelContents(props) {
  const {
    currentSearchFilter,
    currentSearchTerm,
    dataRef,
    searchFilterSelect,
    selectedTags,
    tags,
  } = props;

  const [searchFilter, setSearchFilter] = useState(currentSearchFilter);
  const [searchTerm, setSearchTerm] = useState(currentSearchTerm);
  const [localSelectedTags, setLocalSelectedTags] = useState(selectedTags);

  const handleChangeTag = (tag, checked) => {
    if (checked) {
      setLocalSelectedTags(current => [...current, tag]);
    } else {
      setLocalSelectedTags(current => current.filter(t => t !== tag));
    }
  };

  // Set any data to be submitted on props.contentsRef
  dataRef.current = { searchFilter, searchTerm, selectedTags: localSelectedTags };

  const SearchFilterSelect = searchFilterSelect;

  return (
    <Box>
      <Box direction="row" display="flex" justifyContent="end">
        <Box flex="grow">
          <SearchField
            accessibilityLabel="Search"
            id="filterPanelSearchField"
            onBlur={() => {}}
            onChange={({ value }) => setSearchTerm(value)}
            onFocus={() => {}}
            value={searchTerm}
          />
        </Box>

        {searchFilterSelect && (
          <SearchFilterSelect
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
        )}
      </Box>

      <Box marginTop={4}>
        <Divider />
      </Box>

      <Box display="flex" marginTop={4} wrap>
        {tags.map(tag => (
          <Tag
            key={tag}
            onChange={handleChangeTag}
            text={tag}
            checked={localSelectedTags.includes(tag)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function FiltersPanel(props) {
  const {
    currentSearchFilter,
    currentSearchTerm,
    onSubmit,
    searchFilterSelect,
    selectedTags,
    setShowSheet,
    tags,
  } = props;

  // Collects data from the PanelContents when the PanelContents state changes
  const dataRef = useRef();

  // The sticky header gets a zIndex of 1 in Header.css
  const HEADER_ZINDEX = new FixedZIndex(1);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  const handleDismiss = () => setShowSheet(false);

  return (
    <Layer zIndex={zIndex}>
      <Sheet
        accessibilityDismissButtonLabel="Close filters"
        accessibilitySheetLabel="Filters"
        heading="Filters"
        onDismiss={handleDismiss}
        footer={
          <Box display="flex" justifyContent="end">
            <ButtonGroup>
              <Button onClick={handleDismiss} text="Cancel" />

              <Button
                color="red"
                onClick={() => {
                  onSubmit(dataRef.current);
                  handleDismiss();
                }}
                text="Submit"
              />
            </ButtonGroup>
          </Box>
        }
      >
        <PanelContents
          currentSearchFilter={currentSearchFilter}
          currentSearchTerm={currentSearchTerm}
          dataRef={dataRef}
          onSubmit={onSubmit}
          searchFilterSelect={searchFilterSelect}
          selectedTags={selectedTags}
          tags={tags}
        />
      </Sheet>
    </Layer>
  );
}
