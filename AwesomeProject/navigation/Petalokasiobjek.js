import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import WebView from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Listdata from '../callapi';


const Tab = createBottomTabNavigator();

// const webMap = require('../peta/map.html');

const forminput = 'https://adzrhm.github.io/pgpbl-12-kiya/';

const webMap = 'https://adzrhm.github.io/pgpbl-12-kiya/map.html';


function HomeScreen() {
  return (
      <ScrollView>
          <View>
              <Text style={styles.title}>Dropbox Sampah B3 Rumah Tangga </Text>
              <View style={styles.container}>
                <Text style={styles.text}>
                  Bahan Berbahaya dan Beracun atau sering disingkat dengan B3 adalah zat, energi, dan/atau komponen lain yang karena sifat,
                  konsentrasi dan/atau jumlahnya baik secara langsung maupun tidak langsung dapat mencemarkan dan/atau merusak lingkungan hidup,
                  membahayakan lingkungan hidup, kesehatan serta kelangsungan hidup manusia dan makhluk hidup lain. Definisi ini tercantum dalam Undang
                  – Undang RI Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup dan peraturan – peraturan lain di bawahnya.
                  Sampah dan limbah B3 skala rumah tangga bisa ditampung sementara di drop box yang tersebar di 17 lokasi berbeda.
                </Text>

                <Image source={require('../peta/Dropbox.jpg')} style={styles.image} />

                <Text style={styles.text}>
                  Sampah yang terkumpul akan diambil secara periodik,
                  diangkut dan diolah oleh pihak ketiga yang memiliki kompetensi
                  sehingga tidak mencemari lingkungan atau membahayakan kesehatan masyarakat.
                  Dengan penyediaan drop box tersebut diharapkan dapat meningkatkan kesadaran
                  masyarakat untuk melakukan pemilahan, pengumpulan, dan pembuangan limbah
                  atau sampah. Selama ini masih banyak yang mencampur sampah kategori B3
                  dengan sampah rrumah tangga lainnya.
                </Text>

              </View>
          </View>

         
      </ScrollView>
  );
}


function MapsScreen() {
  return <WebView source={{uri: webMap}} />;
}

function AddDataScript() {
  return <WebView source={{uri: forminput}} />;
}

function DataScreen() {
  return (
    <View style={styles.container}>

      <Listdata/>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}



function MyTabs() {
  return (
    <NavigationContainer style={styles.navigator}>
      <Tab.Navigator screenOptions={{headerShown: false}}>

      <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />


        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Add Data"
          component={AddDataScript}
          options={{
            tabBarLabel: 'Add Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="plus-square" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Data"
          component={DataScreen}
          options={{
            tabBarLabel: 'Data',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user" color={color} size={size} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  listitems: {
    alignItems: 'center',
    backgroundColor: '#ECF4D6',
    borderBottomWidth: 1,
    borderBottomColor: '#ECF4D6',
    padding: 20,
  },
  image: {
    width: 350,
    height: 550,
    resizeMode: 'stretch',
  },
  text: {
    fontSize: 13,
    textAlign: 'justify'
    // fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#F1F0E8',
  },
  navigator: {
    backgroundColor: '#9AD0C2'
  }
});
