import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {useRoute} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';

export default function HomeScreen({navigation: {navigate}}) {
  // const {params} = useRoute();
  // const {brand_data: data} = params;
  const brand_data = useSelector(state => state.brandList.brandList);
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  // console.log('From Home Screen');
  const renderCarousel = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={carousel.carouselItem}>
          <Image resizeMode="cover" style={carousel.image} source={item.img} />
          <View style={carousel.contentContainer}>
            <Text style={carousel.title}>{item.title}</Text>
            <Text style={carousel.description}>{item.desc}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <>
      <ScrollView>
        <View style={carousel.carouselContainer}>
          <Carousel
            ref={isCarousel}
            layout="default"
            data={brand_data}
            sliderWidth={400}
            itemWidth={330}
            renderItem={renderCarousel}
            onSnapToItem={index => setIndex(index)}
          />
        </View>

        <View style={carousel.paginationContainer}>
          <Pagination
            dotsLength={brand_data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={carousel.activeDots}
            tappableDots={true}
            inactiveDotStyle={carousel.inActiveDots}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>

        {/* Brand Container Block */}
        <View style={brands.brandContainer}>
          <View style={brands.brandHeader}>
            <View style={brands.brandNotes}>
              <Text style={brands.brandTitleS1}>Our Top Brands</Text>
              <Text style={brands.brandDescS1}>
                Click Below to Select Your Food From Your Favorite Brand
              </Text>
            </View>
          </View>
          <View style={brands.logoContainer}>
            {brand_data.map(brand => {
              return (
                <TouchableOpacity
                  onPress={() => navigate('Product', brand.brandName)}>
                  <Image source={brand.logoImg} style={brands.brandlogo} />
                </TouchableOpacity>
              );
            })}
          </View>

          <View>
            <Text style={brands.brandTextS1}>
              Most Wanted Chicken Styles to Eat in Above Brands
            </Text>
            <Text style={brands.textDescrptionS1}>
              When it comes to the best type of food to order at a restaurant,
              it does not get much better than pizza. Pizza is a universal
              favorite across the world, and it is easy to see why.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const carousel = StyleSheet.create({
  carouselContainer: {
    height: 330,
    backgroundColor: '#601111',
  },
  carouselItem: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    top: 220,
    backgroundColor: '#a61900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: 270,
    left: 135,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    color: 'white',
    fontSize: 9,
  },
  activeDots: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  inActiveDots: {
    backgroundColor: 'white',
  },
});

const brands = StyleSheet.create({
  brandHeader: {
    padding: 12,
    backgroundColor: '#303234',
  },
  brandNotes: {
    padding: 10,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#252525',
    // borderTopColor: 'white',
    // borderWidth: 3,
  },
  brandTitleS1: {
    color: 'white',
    fontSize: 20,
  },
  brandDescS1: {
    marginTop: 5,
    color: 'gray',
    fontSize: 13,
  },
  logoContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  brandlogo: {
    borderRadius: 80,
    backgroundColor: 'red',
    width: 80,
    height: 80,
  },
  brandTextS1: {
    padding: 30,
    paddingVertical: 20,
    lineHeight: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#601111',
  },
  textDescrptionS1: {
    padding: 10,
    paddingVertical: 0,
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
  },
});
