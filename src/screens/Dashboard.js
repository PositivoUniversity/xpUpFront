import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { loadNews } from '../../api/news-api';
import DefaultPage from "../components/DefaultPage";
import NewsCard from '../components/NewsCard';

export default function Dashboard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadNewsData = async () => {
            try {
                const newData = await loadNews();
                setData(newData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        loadNewsData();
    }, []); 

    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }}>{item.title}</Text>
            <Text>{item.body}</Text>
        </View>
    );

    return (
        <DefaultPage>
            {data.map((data) => NewsCard(data) )}
        </DefaultPage>
    );
}

const styles = StyleSheet.create({});
