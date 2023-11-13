import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Logo from '../components/Logo';
import DefaultButton from '../components/DefaultButton';
import DefaultPage from '../components/DefaultPage';
import DefaultInput from '../components/DefaultInput';
import { loadCourses, updateCourse, deleteCourse, addCourse } from '../../api/courses-api'; 

export default function EditDeleteCourse({ route, navigation }) {
  const { course } = route.params;
  const [name, setName] = useState(course.name);
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    const loadCoursesData = async () => {
      try {
        const coursesData = await loadCourses();
        setCoursesList(coursesData);
      } catch (error) {
        console.error('Erro ao buscar dados de cursos:', error);
      }
    };

    loadCoursesData();
  }, []);

  const goToHome = () => {
    navigation.navigate('menu');
  };

  const handleEditCourse = async () => {
    if (!name) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se o nome foi alterado
    if (name !== course.name) {
      // Verifica se o novo nome já existe entre os cursos
      const isNameExists = coursesList.some((existingCourse) => existingCourse.name === name);

      if (isNameExists) {
        alert('Já existe um curso com esse nome. Por favor, escolha outro nome.');
        return;
      }
    }

    try {
      await updateCourse(course.id, { name });
      goToHome();
    } catch (error) {
      console.error('Erro ao editar o curso:', error);
    }
  };

  const handleDeleteCourse = async () => {
    try {
      await deleteCourse(course.id);
      goToHome();
    } catch (error) {
      console.error('Erro ao excluir o curso:', error);
    }
  };

  const handleAddCourse = async () => {
    if (!name) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      await addCourse({ name });
      goToHome();
    } catch (error) {
      console.error('Erro ao adicionar o curso:', error);
    }
  };

  const customActions = () => (
    <TouchableOpacity onPress={() => console.log(`Clicou`)}>
      <Text style={styles.styleText}>Aqui</Text>
    </TouchableOpacity>
  );

  return (
    <DefaultPage>
      <View style={styles.container}>
        <Logo />

        <View style={styles.containerInput}>
          <Text style={styles.title}>Edição de Curso</Text>

          {/* Botão para concluir edição */}
          <DefaultButton
            text="Concluir Edição"
            onPress={handleEditCourse}
            styleButton={styles.btn}
            styleText={styles.btnText}
          />

          {/* Botão para excluir curso */}
          <DefaultButton
            text="Excluir Curso"
            onPress={handleDeleteCourse}
            styleButton={styles.btnDelete}
            styleText={styles.btnText}
          />

          {/* Botão para adicionar novo curso */}
          <DefaultButton
            text="Adicionar Curso"
            onPress={handleAddCourse}
            styleButton={styles.btnAdd}
            styleText={styles.btnText}
          />

        </View>
      </View>
    </DefaultPage>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  containerInput: {
    height: 300,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    color: '#d5d5d5',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#A101FE',
    height: 45,
    width: '60%',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDelete: {
    backgroundColor: 'red',
    height: 45,
    width: '60%',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAdd: {
    backgroundColor: 'green',
    height: 45,
    width: '60%',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  styleText: {
    color: 'white',
  },
});
