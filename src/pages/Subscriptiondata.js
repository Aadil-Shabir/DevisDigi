import { useEffect, useState, useRef } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

const Subscriptiondata = () => {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
  const [gridOptions, setGridOptions] = useState();


    const columnDefs = [
        {
          headerName: "ID",
          field: "id",
          checkboxSelection:true,
          maxWidth: 50,
        },
        {
          headerName: "Operator",
          field: "operator_name",
          
        },
        {
          headerName: "Provider",
          field: "provider_name",
        },
        {
          headerName: "Optin",
          field: "optin",
        },
        {
            headerName: "Optout",
            field: "optout"
        }
      ];
      const defaultColumnDefs = {
        filter: "agTextColumnFilter",
        sortable: true,
        resizable: true,
    
      };
    
      const onGridReady = (params) => {
        params.api.sizeColumnsToFit();
        setGridOptions(params.api);
        window.addEventListener('resize', function () {
            setTimeout(function () {
              params.api.sizeColumnsToFit();
            });
          });
      
      
      };

//    useEffect(() => {
//        fetch('https://www.ag-grid.com/example-assets/row-data.json')
//            .then(result => result.json())
//            .then(rowData => setRowData(rowData))
//    }, []);

   useEffect(() => {

       axios.get(`https://dev.digitalizehub.com/api/admin/subscribers?query[start]=2022-08-02T00:00:00.0000Z&query[end]=2022-08-02T23:18:54.0000Z`)
       .then((res) => setRowData(res.data.payload))
   })

   const handleRowClick = () => {

   }

   return (
       <div className="ag-theme-alpine" style={{height: 300, width: 900}}>
           <AgGridReact
              rowHeight={40}
              style={{ width: "100%", height: "100%;" }}
             onGridReady={onGridReady}
             columnDefs={columnDefs}
             defaultColDef={defaultColumnDefs}
             animateRows={true}
              onRowClicked={handleRowClick}
              ref={gridRef}
              
              rowData={rowData}
              rowSelection="multiple"
              pagination={true}
              paginationPageSize={10}
              paginationNumberFormatter={function (params) {
                return '[' + params.value.toLocaleString() + ']';
              }}>
              <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
           </AgGridReact>
       </div>
  );
};


export default Subscriptiondata;


