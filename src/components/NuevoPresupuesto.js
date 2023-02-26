import React, {useState} from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

const NuevoPresupuesto = ({handleNuevoPresupuesto}) => {
    const [presupuesto, setPresupuesto] = useState(0)

  return (
    <View style={styles.contenedor}>
        <Text style={styles.label}>Definir Presupuesto</Text>
        
        <TextInput
            keyboardType='numeric'
            placeholder='Agrega tu presupuesto: Ej. 300'
            style={styles.input}
            value={ presupuesto.toString() }
            onChangeText={setPresupuesto}
        />

        <Pressable 
            style={styles.boton}
            onPress={() => handleNuevoPresupuesto(presupuesto)}            
        >
            <Text style={styles.botonTexto}
            >Agregar Presupuesto</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
        transform: [{ translateY: 50 }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        color: '#3B82F6',
    },
    input: {
        borderColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30
    },
    boton: {
        marginTop: 30,
        backgroundColor: '#1048A4',
        padding: 10,
        borderRadius: 10
    },
    botonTexto: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default NuevoPresupuesto
