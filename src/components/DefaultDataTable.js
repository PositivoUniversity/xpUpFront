import React from 'react';
import { View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

export default function DefaultDataTable({
    columnNames,
    data,
    styleDataTable,
    styleHeader,
    actions,
    textStyle,
    cellData,
    textAction
}) {
    const rows = data.map((item, index) => (
        <DataTable.Row key={index}>
            {columnNames.map((columnName, columnIndex) => (<DataTable.Cell key={columnIndex} textStyle={textStyle}>{item[cellData[columnName]]}</DataTable.Cell>
            ))}
            {actions && (
                <DataTable.Cell>
                    <View>
                        <Feather name="edit" size={24} color="white" onPress={console.log('cliquei')} />
                    </View>
                </DataTable.Cell>
            )}
        </DataTable.Row>
    ));
    return (
        <View>
            <DataTable style={styleDataTable}>
                <DataTable.Header style={styleHeader}>
                    {columnNames.map((columnName, index) => (<DataTable.Title key={index} textStyle={textStyle}>{columnName}</DataTable.Title>
                    ))}
                    {actions && (
                        <DataTable.Title textStyle={textStyle}>{textAction}</DataTable.Title>
                    )}
                </DataTable.Header>
                {rows}
            </DataTable>
        </View>
    );
}
