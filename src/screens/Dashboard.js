import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DefaultPage from "../components/DefaultPage";


export default function Dashboard() {
    const [data, setData] = useState([]);
    // // useEffect(() => {
    // //     const loadData = async () => {
    // //         try {
    // //             const courseData = await loadCourses();
    // //             setData(courseData);
    // //         } catch (error) {
    // //             console.error('Erro ao buscar dados:', error);
    // //         }
    // //     };
    // //     loadData();
    // // }, []);

    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.body}</Text>
        </View>
    );

    return (
        <DefaultPage>
            {/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            /> */}
        </DefaultPage>
    );
}

const styles = StyleSheet.create({});
