import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking, FlatList } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';


export default function DeliveryList() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      endereco: 'Av. Prof. João Rodrigues, 1501 - Jardim Esperanca, Guaratinguetá - SP',
      produto: ' Estojo infantil / 00W23R',
      periodo: '22/8/2020',
      status: '01',
      checklist:{
        model:'00W23R',
        color: 'azul',
        amount: '1',
        period:'10/05/2020',
      },
    },
    {
      id: '2',
      endereco: 'R. Afonso Giannico, 350 - Pedregulho, Guaratinguetá - SP ',
      produto: ' Estojo juvenil / 11R34B',
      periodo: '22/10/2020',
      status: '01',
      checklist:{
        model:'',
        color: '',
        amount: '',
        period:'',
      },
    },
    {
      id: '3',
      endereco: 'Av. Juscelino Kubitscheck de Oliveira, 957 - Campo do Galvão, Guaratinguetá - SP',
      produto: ' Estojo infantil barbie / 69S22W',
      periodo: '22/12/2020',
      status: '01',
      checklist:{
        model:'',
        color: '',
        amount: '',
        period:'',
      },
    },
  ];
  function navigateToDetail(delivery) {
    navigation.navigate('DetailDelivery', { delivery });
  }


  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg}  style={styles.headerLogo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>3 encomendas.</Text>
        </Text>
      </View>

     
      <Text style={styles.description}>Veja abaixo suas encomendas para realizar a entrega. </Text>

      <FlatList
        data={DATA}
        style={styles.deliveryList}
        keyExtractor={delivery => String(delivery.id)}
        renderItem={({ item: delivery }) => (
          <View style={styles.delivery}>
            <Text style={styles.deliveryProperty}>Endereço da entrega:</Text>
            <Text style={styles.deliveryValue}>{delivery.endereco}</Text>

            <Text style={styles.deliveryProperty}>Produto:</Text>
            <Text style={styles.deliveryValue}>{delivery.produto}</Text>

            

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(delivery)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={20} color="#29C759" />
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}