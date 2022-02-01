

import React, { useState } from 'react'
import { render } from 'react-dom'

import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const GridExample = () => {
    const [gridApi, setGridApi] = useState(null)
    const [gridColumnApi, setGridColumnApi] = useState(null)
    const [rowData, setRowData] = useState(null)

    const onGridReady = (params) => {
        setGridApi(params.api)
        setGridColumnApi(params.columnApi)

        const updateData = (data) => params.api.setRowData(data)

        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => updateData(data))
    }

    const onSelectionChanged = () => {
        const selectedRows = gridApi.getSelectedRows()
        document.querySelector('#selectedRows').innerHTML =
            selectedRows.length === 1 ? selectedRows[0].athlete : ''
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="example-wrapper">
                <div className="example-header">
                    Selection:
                    <span id="selectedRows"></span>
                </div>
                <div
                    id="myGrid"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    className="ag-theme-alpine"
                >
                    <AgGridReact
                        defaultColDef={{
                            flex: 1,
                            minWidth: 100,
                        }}
                        rowSelection={'single'}
                        onGridReady={onGridReady}
                        onSelectionChanged={onSelectionChanged}
                        rowData={rowData}
                    >
                        <AgGridColumn field="athlete" minWidth={150} />
                        <AgGridColumn field="age" maxWidth={90} />
                        <AgGridColumn field="country" minWidth={150} />
                        <AgGridColumn field="year" maxWidth={90} />
                        <AgGridColumn field="date" minWidth={150} />
                        <AgGridColumn field="sport" minWidth={150} />
                        <AgGridColumn field="gold" />
                        <AgGridColumn field="silver" />
                        <AgGridColumn field="bronze" />
                        <AgGridColumn field="total" />
                    </AgGridReact>
                </div>
            </div>
        </div>
    )
}

export default GridExample
