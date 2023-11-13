import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação
import DefaultPage from "../components/DefaultPage";
import DefaultDataTable from "../components/DefaultDataTable";
import { loadCourses } from "../../api/courses-api";

export default function Admin() {
  const [data, setData] = useState([]);
  const navigation = useNavigation(); // Obtenha a referência à navegação

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

  const navigateToCourseEdit = (Course) => {
    // Navegue para a página CourseEdit.js e passe o curso como parâmetro
    navigation.navigate('CourseEdit', { Course });
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
