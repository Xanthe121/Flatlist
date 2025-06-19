import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image} from 'react-native';


var FAKE_DATA = [
  {
    id: '1',
    note: 'Momo',
    date: '2025/01/01',
    imagePath: require('../../src/img/images (1).jpg')
  },
  {
    id: '2',
    note: 'Doudou',
    date: '2025/01/02',
    imagePath: require('../../src/img/images (2).jpg')
    
  },
  {
    id: '3',
    note: 'ToFu',
    date: '2025/01/03',
    imagePath: require('../../src/img/images (3).jpg')
  },
  {
    id: '4',
    note: 'Kuro',
    date: '2025/01/04',
    imagePath: require('../../src/img/images.jpg')
  },
  {
    id: '5',
    note: 'Baga',
    date: '2025/01/02',
    imagePath: require('../../src/img/下載 (1).jpg')
  },
  {
    id: '6',
    note: 'Gniongnion',
    date: '2025/01/03',
    imagePath: require('../../src/img/下載.jpg')
  },
];

export default function HomeScreen({ navigation }) {
  const [dataSource, setDataSource] = useState([]);

  const showNoticeDetail = (cases) => {
    navigation.push('HelloScreen', {passProps: cases});
  }

  const getStatusButtonStyle = (status) => {
    switch(status) {
      case '準備中':
        return styles.preparingButton;
      case '已取消':
        return styles.cancelledButton;
      case '領養':
        return styles.completedButton;
      default:
        return styles.defaultButton;
    }
  }

  const renderBook = (cases) => {
    return(
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          {/* Left side - Image and main info */}
          <View style={styles.leftSection}>
            <Image 
             source={cases.imagePath} // Use the image path from data
               style={styles.PetImage}
                />
            <View style={styles.textSection}>
              <Text style={styles.restaurantName} numberOfLines={1}>
                {cases.note}
              </Text>
              
              <Text style={styles.dateText}>
                {cases.date} • {cases.status}
              </Text>
              
            </View>
          </View>

          {/* Right side - Action button */}
          <View style={styles.rightSection}>
            <TouchableOpacity 
              style={getStatusButtonStyle(cases.status)}
              onPress={() => showNoticeDetail(cases)}
            >
              <Text style={styles.buttonText}>
                {cases.status === '準備中' ? '取消' : '明細'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  useEffect(() => {
    setDataSource(FAKE_DATA);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={cases => renderBook(cases.item)}
        keyExtractor={cases => cases.id}
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  flatListStyle: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardContent: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  PetImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },

  textSection: {
    flex: 1,
  },

  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },

  orderInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },

  dateText: {
    fontSize: 12,
    color: '#999',
  },

  rightSection: {
    marginLeft: 10,
  },

  preparingButton: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },

  cancelledButton: {
    backgroundColor: '#999',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },

  completedButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },

  defaultButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

