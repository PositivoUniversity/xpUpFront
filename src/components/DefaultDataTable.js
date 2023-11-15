import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { getRoleLabel } from '../../utils/string-utils';
import { StyleSheet } from 'react-native';


export default function DefaultDataTable({
    columnNames,
    data,
    styleDataTable,
    styleHeader,
    textStyle,
    cellData,
    textedit,
    textDelete,
    onpressEdit,
    onpressDelete,
    isHeader
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
            {textedit && (
                <DataTable.Cell>
                    <TouchableOpacity onPress={() => onpressEdit(item)}>
                        <Feather name="edit" size={24} color="white" />
                    </TouchableOpacity>
                </DataTable.Cell>
            )}
            {textDelete && (
                <DataTable.Cell>
                    <TouchableOpacity onPress={() => onpressDelete(item)}>
                        <Feather name="delete" size={24} color="white" />
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
                        <DataTable.Title key={index} textStyle={textStyle} style={isHeader ? styles : styles.header} >
                            {columnName}
                        </DataTable.Title>
                    ))}
                    {textedit && <DataTable.Title textStyle={textStyle}>{textedit}</DataTable.Title>}
                    {textDelete && <DataTable.Title textStyle={textStyle}>{textDelete}</DataTable.Title>}
                </DataTable.Header>
                {rows}
            </DataTable>
        </View >
    );
}
const styles = StyleSheet.create({
    header: {
        display: 'none'
    },
});
