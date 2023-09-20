import React, { useEffect } from 'react';
import InventoryTable from './InventoryTable';
import { Page } from '@patternfly/react-core';

const InventoryPage = () => {


  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      {/* <PageHeader>
        <PageHeaderTitle title="Inventory" />
        <p>Description here</p>
      </PageHeader> */}
      <Page>
        <InventoryTable></InventoryTable>
      </Page>
    </React.Fragment>
  );
};

export default InventoryPage;
