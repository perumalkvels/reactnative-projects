import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //Initial State Declaration
  foodList: [
    {
      foodId: 1,
      foodTitle: 'Bucket for Two',
      foodDes:
        'When it comes to pizza, the Neapolitan has to be the first featured, especially given that it was the first type of pizza created',
      foodImg:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000892.jpg?ver=20.96',
      foodPrice: '599',
      foodBrand: 'KFC',
      foodType: 'Hot & Spicy',
    },
    {
      foodId: 2,
      foodTitle: 'All Chicken Box',
      foodDes:
        'When it comes to pizza, the Neapolitan has to be the first featured, especially given that it was the first type of pizza created',
      foodImg:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000892.jpg?ver=20.94',
      foodPrice: '399',
      foodBrand: 'KFC',
      foodType: 'Hot & Spicy',
    },
    {
      foodId: 3,
      foodTitle: 'Peri 10 Leg pc& 4 Dips',
      foodDes: 'Leg before any wicket! Save 27% on 10 Spicy Peri Peri Leg',
      foodImg:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K445.jpg?ver=20.96',
      foodPrice: '924',
      foodBrand: 'KFC',
      foodType: 'Pieces & 4 Dips',
    },
    {
      foodId: 4,
      foodTitle: 'Eeri 10 Leg pc & 4 Dips',
      foodDes: 'Leg before any wicket! Save 27% on 10 Spicy Peri Peri Leg',
      foodImg:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000638.jpg?ver=20.96',
      foodPrice: '1224',
      foodBrand: 'KFC',
      foodType: '5pc Smoky Red Chicken',
    },

    {
      foodId: 5,
      foodTitle: 'AMERICAN CHEESE SUPREME CHICKEN BURGER',
      foodDes: ' Leg before any wicket! Save 27% on 10 Spicy Peri Peri Leg ',
      foodImg:
        'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?k=20&m=1309352410&s=612x612&w=0&h=BZOn2siM0Y21WW6FDMLYY3dChb0SkuhDSJ20N2jZe-A=',
      foodPrice: '1224',
      foodBrand: 'McDonald',
      foodType: '5pc Smoky Red Chicken',
    },
    {
      foodId: 6,
      foodTitle: 'GREEN CHILLI KABAB NAAN',
      foodDes: 'Leg before any wicket! Save 27% on 10 Spicy Peri Peri Leg',
      foodImg:
        'https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
      foodPrice: '1224',
      foodBrand: 'McDonald',
      foodType: '5pc Smoky Red Chicken',
    },
    {
      foodId: 7,
      foodTitle: 'SALSA CHICKEN BURGER',
      foodDes: 'Leg before any wicket! Save 27% on 10 Spicy Peri Peri Leg',
      foodImg:
        'https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=1&w=640',
      foodPrice: '1224',
      foodBrand: 'McDonald',
      foodType: '5pc Smoky Red Chicken',
    },
    {
      foodId: 8,
      foodTitle: 'HASHBROWN WITH WHOLE WHEAT BUN',
      foodDes: 'Leg before any wicket! Save 27% on 10 Spicy Peri Peri Leg',
      foodImg:
        'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
      foodPrice: '1224',
      foodBrand: 'McDonald',
      foodType: '5pc Smoky Red Chicken',
    },
    {
      foodId: 9,
      foodTitle: 'HASHBROWN WITH WHOLE WHEAT BUN',
      foodDes: 'Uncover the chemistry behind the delicious taste of pizza',
      foodImg:
        'https://townsquare.media/site/696/files/2019/03/Pizza.jpg?w=980&q=75',
      foodPrice: '1224',
      foodBrand: 'PizzaHut',
      foodType: '5pc Smoky Red Chicken',
    },
    {
      foodId: 10,
      foodTitle: 'HASHBROWN WITH WHOLE WHEAT BUN',
      foodDes: 'Uncover the chemistry behind the delicious taste of pizza',
      foodImg:
        'https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg',
      foodPrice: '1224',
      foodBrand: 'PizzaHut',
      foodType: '5pc Smoky Red Chicken',
    },
    {
      foodId: 11,
      foodTitle: 'HASHBROWN WITH WHOLE WHEAT BUN',
      foodDes: 'Uncover the chemistry behind the delicious taste of pizza',
      foodImg:
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80',
      foodPrice: '1224',
      foodBrand: 'PizzaHut',
      foodType: '5pc Smoky Red Chicken',
    },
    {
      foodId: 12,
      foodTitle: 'Chad Montano',
      foodDes: 'Uncover the chemistry behind the delicious taste of pizza',
      foodImg:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      foodPrice: '1224',
      foodBrand: 'PizzaHut',
      foodType: '5pc Smoky Red Chicken',
    },
  ],
};

export const foodlistSlice = createSlice({
  name: 'foods',
  initialState,

  // Functions That may associate with Changing The Initial State
  reducers: {
    setFoodList: (state, action) => {
      state.foodList = action.payload;
    },
    setFoodBrand: (state, action) => {
      state.foodBrand = action.payload;
    },
  },
});

// export const addFoodItem = foodItem => dispatch => {
//   let localfoodList = JSON.parse(localStorage.getItem('food-list'));
//   let newFoodList = [...localfoodList, foodItem];
//   localStorage.setItem('food-list', JSON.stringify(newFoodList));
// };

export const {setFoodList, setFoodBrand} = foodlistSlice.actions;

export default foodlistSlice.reducer;
