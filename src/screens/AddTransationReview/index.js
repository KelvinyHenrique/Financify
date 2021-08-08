import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import styles from './styles';
import Backspace from '../../assets/Images/tag.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import BoxCategoriesRounded from '../../components/boxCategoriesrRounded';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export default function AddTransactionReview() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [displayValue, setDisplayValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [flexbox, setFlexbox] = useState('flex');
  const route = useRoute();

  const {amount} = route.params;

  useEffect(() => {
    setDisplayValue(amount);
    const nowDate = Date.now();
    const agora = formatDate(nowDate);
    setSelectedDate(agora);
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  function formatDate(date) {
    const formattedDate = format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
      locale: pt,
    });
    return formattedDate;
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let formatedDate = formatDate(currentDate);
    setDate(currentDate);
    setSelectedDate(formatedDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const _keyboardDidShow = () => {
    setFlexbox('none');
  };

  const _keyboardDidHide = () => {
    setFlexbox('flex');
  };

  const handleSendData = async () => {
    await fetch('https://devsnotes.herokuapp.com/api/notes')
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => console.log('Error: ', e));
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <StatusBar barStyle="light-content" backgroundColor={'#FF5400'} />
      <View style={styles.boxTransaction}>
        <View style={styles.headerBoxContainer}>
          <View style={styles.boxHeaderTop}>
            <View style={styles.headerAddTransaction}>
              <Text style={styles.TextAddTransaction}>Adicionar Transação</Text>
              <Text style={styles.TextAddDespense}>Despesa</Text>
            </View>
            <TouchableOpacity style={styles.headerBoxCancelButtom}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxValueKey}>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingTop: 22}}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>R$</Text>
              </View>
              <View style={{marginLeft: 8}}>
                <Text style={styles.ValueTextAmmount}>
                  {parseFloat(displayValue)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.keyboard}>
        <View style={styles.keyboardBox}>
          <View style={styles.categoriesValues}>
            <View style={{width: '100%'}}>
              <Text style={{color: '#CECECE', fontSize: 16}}>
                Data da transação
              </Text>
              <View style={styles.BoxTransactionDate}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                  onPress={showMode}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    {date.toISOString().substring(0, 10)}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 160,
                    marginTop: 20,
                    display: flexbox,
                  }}>
                  <Text style={{color: '#CECECE', fontSize: 16}}>
                    Categorias
                  </Text>
                  <ScrollView
                    horizontal={true}
                    contentContainerStyle={{alignItems: 'center'}}
                    showsHorizontalScrollIndicator={false}>
                    <BoxCategoriesRounded
                      description="Transporte"
                      bgColor="#2541b2"
                    />
                    <BoxCategoriesRounded
                      description="Alimentação"
                      bgColor="#f2bb05"
                    />
                    <BoxCategoriesRounded
                      description="Viagem"
                      bgColor="#17c10a"
                    />
                    <BoxCategoriesRounded
                      description="Saúde"
                      bgColor="#ff5714"
                    />
                    <BoxCategoriesRounded
                      description="Lazer"
                      bgColor="#ab3428"
                    />
                    <BoxCategoriesRounded
                      description="Educação"
                      bgColor="#59cd90"
                    />
                  </ScrollView>
                </View>
                <View>
                  <Text
                    style={{color: '#CECECE', fontSize: 16, marginBottom: 10}}>
                    Descrição
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: '#f7f7ff',
                      height: 50,
                      borderRadius: 5,
                    }}
                    onSubmitEditing={Keyboard.dismiss}
                  />
                </View>
              </View>
            </View>
          </View>
          <TouchableHighlight
            style={styles.nextButton}
            onPress={handleSendData}>
            <Text style={styles.nextButtomText}>Adicionar Transação</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
