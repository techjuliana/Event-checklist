import {useState} from 'react';
import {Text,FlatList, View, TextInput, TouchableOpacity, Alert} from 'react-native';

import { Participant } from '../../components/participant';

import {styles} from './style';

export default function Home(){
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
      if(participants.includes(participantName)){
        return Alert.alert('Participante já existe!')
      }

      setParticipants(prevState => [...prevState, participantName]);
      setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Atenção', `Deseja remover ${name}?`,[
           {
            text:'Sim',
            onPress:() => setParticipants(prevState => prevState.filter(participant => participant !== name))
           },
           
           {
            text:'Não',
            style: 'cancel'
           } 
        ]);
    }
    return(
        <View style={styles.container}>
        <Text style={styles.eventName}>
        Check List Evento
        </Text>

        <Text style={styles.eventDate}>
       Participantes 
        </Text>

        <View style={styles.form}>
        <TextInput 
         style={styles.input}
         placeholder="Nome do participante"
         placeholderTextColor="#6B6B6B"
         onChangeText={setParticipantName}
         value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
        </View>

        <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione participantes a lista de presença.
          </Text>
        )}
        />
        </View>
    );
}