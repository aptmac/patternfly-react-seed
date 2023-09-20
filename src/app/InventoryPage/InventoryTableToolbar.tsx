import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  // DropdownToggle,
  // DropdownToggleCheckbox,
  Pagination,
  SearchInput,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';

class InventoryTableToolbar extends React.Component {
  onDummyAction: (isOpen: any) => void;
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      kebabIsOpen: false,
      resourceIsExpanded: false,
      resourceSelected: null,
      statusIsExpanded: false,
      statusSelected: null,
      splitButtonDropdownIsOpen: false,
      page: 1,
      perPage: 20,
    };

    this.onDummyAction = () => {};
  }

  render() {
    // const dropdownItems = [
    //   <DropdownItem key="link" tooltip="Tooltip for enabled link">
    //     Name
    //   </DropdownItem>,
    // ];

    const items = (
      <React.Fragment>
        <ToolbarItem variant="bulk-select">
          {/* <Dropdown
            onSelect={this.onDummyAction}
            toggle={
              <DropdownToggle
                id="stacked-example-toggle"
                splitButtonItems={[
                  <DropdownToggleCheckbox
                    id="example-checkbox-1"
                    key="split-checkbox"
                    aria-label="Select all"
                  />,
                ]}
                onToggle={this.onDummyAction}
              />
            }
          /> */}
        </ToolbarItem>

        <ToolbarGroup>
          <ToolbarItem id="dropdown-filter">
            {/* <Dropdown
              onSelect={this.onDummyAction}
              toggle={
                <DropdownToggle id="toggle-basic" onToggle={this.onDummyAction}>
                  <FilterIcon />
                  &nbsp;Name
                </DropdownToggle>
              }
              dropdownItems={dropdownItems}
            /> */}
          </ToolbarItem>

          <ToolbarItem variant="search-filter">
            <SearchInput
              aria-label="search input example"
              placeholder="Search by name"
            />
          </ToolbarItem>
        </ToolbarGroup>

        <ToolbarItem>
          <Button variant="secondary">Delete</Button>
        </ToolbarItem>

        <ToolbarItem variant="pagination">
          <Pagination
            itemCount={19}
            onSetPage={this.onDummyAction}
            widgetId="pagination-options-menu-top"
            onPerPageSelect={this.onDummyAction}
          />
        </ToolbarItem>
      </React.Fragment>
    );

    return (
      <Toolbar>
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );
  }
}

export default InventoryTableToolbar;
