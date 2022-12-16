// products...
import furnitures from '../../assets/images/products images/furniture_full.png';
import gadgets from '../../assets/images/products images/gadgets_full.png';
import books from '../../assets/images/products images/books_full.png';
import wears from '../../assets/images/products images/wears_full.png';
import decorationItems from '../../assets/images/products images/decoration_items_full.png';
import foodItems from '../../assets/images/products images/food-items_full.png';
import electronics from '../../assets/images/products images/electronics_full.png';
import food from '../../assets/images/products images/food_full.png';
import sportsEquipment from '../../assets/images/products images/sports_equipments_full.png'

// services...
import gadgetsRepair from '../../assets/images/services images/gadgets_repair.png';
import fashion from '../../assets/images/services images/fashion_design.png';
import facial from '../../assets/images/services images/facial_makeup.png';
import barbing from '../../assets/images/services images/barbing.png';
import decoration from '../../assets/images/services images/decoration.png';
import laundry from '../../assets/images/services images/laundry.png';
import electronicsRepair from '../../assets/images/services images/electronics_repair.png';
import gym from '../../assets/images/services images/gym.png';
import hair from '../../assets/images/services images/hair_style.png'

const initialState = {
  products: [
    { id: 1, img: gadgets, name: 'Gadgets' },
    { id: 2, img: wears, name: 'Wears' },
    { id: 3, img: food, name: 'Food' },
    { id: 4, img: books, name: 'Books' },
    { id: 5, img: furnitures, name: 'Furniture' },
    { id: 6, img: foodItems, name: 'Food Items' },
    { id: 7, img: electronics, name: 'Electronics' },
    { id: 8, img: decorationItems, name: 'Decoration Items' },
    { id: 9, img: sportsEquipment, name: 'Sports Equipments' },
  ],
  services: [
    { id: 10, img: gadgetsRepair, name: 'Gadgets repair' },
    { id: 11, img: fashion, name: 'Fashion Designing' },
    { id: 12, img: facial, name: 'Facial Make-up' },
    { id: 13, img: hair, name: 'Hair styling' },
    { id: 14, img: barbing, name: 'Barbing' },
    { id: 15, img: laundry, name: 'Laundry' },
    { id: 16, img: electronicsRepair, name: 'Electronics repair' },
    { id: 17, img: decoration, name: 'Decoration' },
    { id: 18, img: gym, name: 'Gym' },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer
