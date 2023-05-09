import { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
const products = [{
  id: 1,
  name: 'Organic Apples',
  description: 'Freshly picked organic apples from our farm',
  price: '$2.99/lb',
  image: require('../assets/apples.jpg')
}, {
  id: 2,
  name: 'Farm Fresh Eggs',
  description: 'Free-range eggs from our happy chickens',
  price: '$4.99/dozen',
  image: require('../assets/eggs.jpg')
}, {
  id: 3,
  name: 'Organic Carrots',
  description: 'Sweet and crunchy organic carrots',
  price: '$1.99/lb',
  image: require('../assets/carrots.jpg')
}, {
  id: 4,
  name: 'Homemade Jam',
  description: 'Delicious homemade jam made with fresh fruit',
  price: '$5.99/jar',
  image: require('../assets/jam.jpg')
}, {
  id: 5,
  name: 'Fresh Bread',
  description: 'Warm and crusty bread baked daily',
  price: '$3.99/loaf',
  image: require('../assets/bread.jpg')
}];

const FarmStandScreen = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  return <View style={styles.container}>
      <ScrollView>
        {products.map(product => <View key={product.id} style={styles.productContainer}>
            <Image source={require("./apples.jpeg")} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(product)}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>)}
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  productDetails: {
    flex: 1,
    marginLeft: 20
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default FarmStandScreen;