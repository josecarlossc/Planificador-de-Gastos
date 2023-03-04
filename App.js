import React, { useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';

const App = () => {

  const [isValidPresupuesto, setIsValidPresupuesto ] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)

  const handleNuevoPresupuesto = (presupuesto) => {
    if(Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'El Presupuesto no puede ser 0 o menor',
      [ {text: 'Ok'},
    ]);
    }
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        
        {isValidPresupuesto ? (
          <ControlPresupuesto
            presupuesto={presupuesto}
            gastos={gastos}
          />
        ) : (
          <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            handleNuevoPresupuesto={handleNuevoPresupuesto}
          />
        )}        
      </View>
      {modal && (
        <Modal
          animationType='slide'
          visible={modal} 
        >
          <FormularioGasto

          />
        </Modal>
      )}
      
      {isValidPresupuesto && (
        <Pressable
          onPress={() => setModal(!modal)}
        >
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1 
  },
  header: {
    backgroundColor: '#3B82F6',
  },
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 120,
    right: 20
  }
});

export default App;
