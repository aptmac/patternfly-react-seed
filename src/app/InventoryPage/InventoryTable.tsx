import React, { useEffect } from 'react';
// import './inventory-page.scss';
import InventoryTableToolbar from './InventoryTableToolbar';
import { Table, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

// const fetchJvmInstances = async () => {
// return fetch(
//   'http://127.0.0.1:9087/api/runtimes-inventory-service/v1/instances/?hostname=fedora',
//   {
//     method: 'GET',
//     headers: {
//       'x-rh-identity':
//         'eyJpZGVudGl0eSI6eyJhY2NvdW50X251bWJlciI6ImFjY291bnRJZCIsIm9yZ19pZCI6Im9yZ0lkIiwidXNlciI6eyJ1c2VybmFtZSI6InVzZXIifSwidHlwZSI6IlVzZXIifX0=',
//     },
//   }
// )
//   .then((response) => {
//     if (!response.ok) {
//       throw new HttpError(response.status + ': ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     return console.log(data);
//   });
// };

const InventoryTable = () => {

  useEffect(() => {
  }, []);

  function getJvmInstanceIds() {
    const URL =
      'http://127.0.0.1:9087/api/runtimes-inventory-service/v1/instances/?hostname=fedora'; // this hits localhost
      // '/api/runtimes-inventory-service/v1/instance-ids/?hostname=fedora'; // this hits staging
    fetch(URL, {
      headers: {
        'x-rh-identity':
          'eyJpZGVudGl0eSI6eyJhY2NvdW50X251bWJlciI6ImFjY291bnRJZCIsIm9yZ19pZCI6Im9yZ0lkIiwidXNlciI6eyJ1c2VybmFtZSI6InVzZXIifSwidHlwZSI6IlVzZXIifX0=',
      },
    }).then(function(response) {
      console.log(response);
      return response.text();
    }).then(t => {
      console.log(t);
    })
  }

  return (
    <React.Fragment>
      <button onClick={getJvmInstanceIds}>Hi</button>
      <InventoryTableToolbar />
      <Table aria-label="Inventory table">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Name</Th>
            <Th>Product</Th>
            <Th>Last seen</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td
              select={{
                rowIndex: 0,
                onSelect: () => console.log('hi'),
                isSelected: false,
              }}
            />
            <Td>
              <a>test_EAP123</a>
            </Td>
            <Td>EAP 7.4.3</Td>
            <Td>2 hours ago</Td>
            <Td isActionCell>
              {/* <ActionsColumn /> */}
            </Td>
          </Tr>
          <Tr>
            <Td
              select={{
                rowIndex: 0,
                onSelect: () => console.log('hi'),
                isSelected: false,
              }}
            />
            <Td>
              <a>ebc-mgt</a>
            </Td>
            <Td>RHDG 8.2.1</Td>
            <Td>10 hours ago</Td>
            <Td isActionCell>
              {/* <ActionsColumn /> */}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </React.Fragment>
  );
};

export default InventoryTable;
