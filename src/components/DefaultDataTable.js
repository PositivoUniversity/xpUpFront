import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { getRoleLabel } from '../../utils/string-utils';

export default function DefaultDataTable({
    columnNames,
    data,
    styleDataTable,
    styleHeader,
    actions,
    textStyle,
    cellData,
    textAction,
}) {

    const renderCellContent = (columnName, cellValue) => {
        if (columnName === 'Regra') {
            return getRoleLabel(cellValue);
        } else {
            return cellValue;
        }
    };

    const rows = data.map((item, index) => (
        <DataTable.Row key={index}>
            {columnNames.map((columnName, columnIndex) => (
                <DataTable.Cell key={columnIndex} textStyle={textStyle}>
                    {renderCellContent(columnName, item[cellData[columnName]])}
                </DataTable.Cell>
            ))}
            {actions && (
                <DataTable.Cell>
                    <TouchableOpacity onPress={() => console.log('cliquei')}>
                        <Feather name="edit" size={24} color="white" />
                    </TouchableOpacity>
                </DataTable.Cell>
            )}
        </DataTable.Row>
    ));

    return (
        <View>
            <DataTable style={styleDataTable}>
                <DataTable.Header style={styleHeader}>
                    {columnNames.map((columnName, index) => (
                        <DataTable.Title key={index} textStyle={textStyle}>
                            {columnName}
                        </DataTable.Title>
                    ))}
                    {actions && <DataTable.Title textStyle={textStyle}>{textAction}</DataTable.Title>}
                </DataTable.Header>
                {rows}
            </DataTable>
        </View>
    );
}
