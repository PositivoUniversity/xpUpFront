import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View, } from "react-native";
import DefaultPage from "../components/DefaultPage";
import DefaultDataTable from "../components/DefaultDataTable";
import { createCourses, loadCourses } from "../../api/courses-api";
import { ActivityIndicator, FAB } from "react-native-paper";
import DefaultModal from '../components/DefaultModal';
import DefaultInput from '../components/DefaultInput';

export default function Course() {
  const [data, setData] = useState([]);
  const [isFABOpen, setFABOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
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
  const handleCreateCourse = () => {
    setModalVisible((value) => !value);
  }


  const removeUser = () => {
    console.log('remover')
  }

  const columns = ['Nome',];
  const cellData = {
    Nome: 'name',
  };
  const sendCourseData = async () => {
    try {
      const urlParams = {
        name: name,
      };
      await createCourses(urlParams);
    } catch (error) {
      Alert.alert('Erro ao criar Curso:', error);
    } finally {
      loadData();
    }
  };


  return (

    <DefaultPage>
      {data && data.length > 0 ? (
        <View>
          <DefaultDataTable
            isHeader={true}
            cellData={cellData}
            columnNames={columns}
            textDelete={'Excluir'}
            data={data}
            textStyle={styles.styleText}
            onpressDelete={(user) => removeUser(user)}

          />
          <DefaultModal isVisible={modalVisible} onClose={() => { setModalVisible(!modalVisible); }} sendData={console.log('criou?')} >
            <Text>Cadastrar um Curso</Text>
            <DefaultInput label="Nome do curso"
              hasStileColor={'black'}
              hasStile={true}
              stylesLabel={styles.input}
              value={name}
              onChangeText={setName}
            />

          </DefaultModal>
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="purple" />
          <Text style={styles.loadingText}>Carregando Cursos...</Text>
        </View>
      )}
      <FAB.Group
        open={isFABOpen}
        icon={data && data.length > 0 ? 'plus' : 'account'}
        actions={[
          { icon: 'plus', label: 'Criar Novo Curso', onPress: () => handleCreateCourse(), labelStyle: { color: 'white' } },
        ]}
        onStateChange={({ open }) => setFABOpen(open)}
        theme={{ colors: { background: 'transparent' } }}
      />
    </DefaultPage>
  );
}

const styles = StyleSheet.create({
  styleText: {
    color: 'black',
  },
  pickerContainer: {
    marginTop: 10,
  },
  picker: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  loadingText: {
    color: 'white',
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#d5d5d5',
    borderWidth: 2,
    color: 'black',
    paddingLeft: 5,
    textAlign: 'center',
    marginBottom: 10,
  }
});
