import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel'; 
import {
  View, 
  Dimensions,
  StyleSheet, 
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {  
    illustration: 'https://png.pngtree.com/png-vector/20200319/ourlarge/pngtree-cryptocurrency-mining-concept-with-people-working-mining-bitcoins-digital-currency-investment-png-image_2157968.jpg',
  }, 
  {  
    illustration: 'https://thumbs.dreamstime.com/b/print-213886566.jpg',
  },
  {  
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {  
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        /> 
      </View>
    );
  };

  return ( 
      <Carousel 
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={150}
        itemWidth={screenWidth - 30}
        data={entries} 
        loop={true}
        renderItem={renderItem}
        hasParallaxImages={true}
      /> 
  );
};

export default MyCarousel;

const styles = StyleSheet.create({ 
  item: {
    width: screenWidth - 30,
    height: 150,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    borderRadius: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
