import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export default function Home(){

    function handleParticipantAdd(){
      console.log("Clicou em adicionar");
    }
    return(
        <View style={styles.container}>

        <Text style={styles.eventName}>
         Nome do Evento
        </Text>

        <Text style={style.eventDate}>
       domingo, 15 de janeiro.
        </Text>

        <View style={style.form}>
        <TextInput 
        style={styles.input}
        placeholder="Participante"
        placeholderTextColor="#fff"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
        </View>
        </View>
    );
}