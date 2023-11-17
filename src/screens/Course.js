import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, } from "react-native";
import { useNavigation } from '@react-navigation/native';
import DefaultPage from "../components/DefaultPage";
import DefaultDataTable from "../components/DefaultDataTable";
import { loadCourses } from "../../api/courses-api";

export default function Course() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const coursesData = await loadCourses();
        setData(coursesData);
      } catch (error) {
        console.error('Erro ao buscar dados de cursos:', error);
      }
    };

    loadData();
  }, []);

  const columns = ['ID', 'Nome', 'Criado em', 'Atualizado em'];
  const cellData = {
    ID: 'id',
    Nome: 'name',
    'Criado em': 'createdAt',
    'Atualizado em': 'updatedAt',
  };

  const customActions = (Course) => {
    return (
      <TouchableOpacity onPress={() => navigateToCourseEdit(Course)}>
        <Text style={styles.styleText}>Edit</Text>
      </TouchableOpacity>
    );
  };



  return (
    <DefaultPage>
      {data && data.length > 0 ? (
        <DefaultDataTable
          actions={customActions}
          textAction={'Ações'}
          cellData={cellData}
          columnNames={columns}
          data={data}
          textStyle={styles.styleText}
        />
      ) : (
        <Text>Carregando dados...</Text>
      )}
    </DefaultPage>
  );
}

const styles = StyleSheet.create({
  styleText: {
    color: 'white',
  },
});
