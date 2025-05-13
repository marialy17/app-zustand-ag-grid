'use client';
 
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useMemo, useState } from 'react';
import type { ColDef, RowSelectionOptions } from 'ag-grid-community';
import { AllCommunityModule, colorSchemeDarkBlue, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { IOlympicData } from '@/type/IOlympicData';
import { useFetchJson } from '@/components/useFetchJson';
 
ModuleRegistry.registerModules([
    AllCommunityModule,
]);
 
export default function GridComponent() {
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        {
            field: 'athlete',
            filter: 'agTextColumnFilter',
            editable: true,
            onCellValueChanged: (event) => {
                console.log(event.data);
                // Handle the cell value change event
                // Here, you can update the data in the server or perform any other action
            },
        },
        { field: 'age', filter: true },
        { field: 'country' },
        { field: 'year' },
        { field: 'date', resizable: false, filter: 'agDateColumnFilter' },
        { field: 'sport', filter: true },
        { field: 'gold', filter: true },
        { field: 'silver', filter: true },
        { field: 'bronze', filter: true },
        { field: 'total', filter: true },
    ]);
 
    const { rowData, loading } = useFetchJson<IOlympicData>(
        "https://www.ag-grid.com/example-assets/olympic-winners.json",
    );
 
    const rowSelection = useMemo(() => {
        return {
            mode: 'multiRow',
        };
    }, []);
 
    const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);
 
    return (
        <div style={{ width: '100%', height: '70vh' }}>
            <AgGridReact
                theme={themeDarkBlue}
                //rowData={rowData}
                rowData={rowData}
                loading={loading}
                columnDefs={columnDefs}
                rowSelection={rowSelection as RowSelectionOptions}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 20, 50, 100]}
            />
        </div>
 
    );
};