import { Item } from "../store";
import pokemon from "../../media/images/pokemon-t-shirt.jpg";
import skirt from "../../media/images/black-skirt.jpg";
import airTavas from "../../media/images/black-air-tavas.png";
import blueSweater from "../../media/images/blue-sweater.jpg";
import redPullover from "../../media/images/red-pullover.jpg";
import airMax90 from "../../media/images/air-max-90.jpg";

interface storeState {
  store: Item[];
}

export interface Action {
  type: string;
  payload: any;
  size?: string;
}

const initState: storeState = {
  store: [
    {
      id: 0,
      type: "t-shirt",
      name: "Pikachu t-shirt",
      description: "blba lbalbalb blab lalbaak sdfh gbkjs hgjks dksh lblabl",
      size: ["S", "M", "L", "XL"],
      gender: ["M", "F"],
      price: 18.99,
      img: pokemon
    },
    {
      id: 1,
      type: "skirt",
      name: "Black skirt",
      description: "blbalbalbalb albalb labblabl",
      size: ["S", "M", "L", "XL"],
      gender: ["F"],
      price: 25.99,
      img: skirt
    },
    {
      id: 2,
      type: "sweater",
      name: "Blue sweater",
      description: "blbalbalbalbalbalblabl albalGHSRIO[G lbalblabalblabl",
      size: ["S", "M", "L", "XL"],
      gender: ["M"],
      price: 20.99,
      img: blueSweater
    },
    {
      id: 4,
      type: "sweater",
      name: "Red sweater",
      description: "blbalbalbalb lbal blabl alba lGHS RIO[G lbalb laba lblabl",
      size: ["S", "M", "L", "XL"],
      gender: ["F"],
      price: 25.99,
      img: redPullover
    },
    {
      id: 3,
      type: "shoes",
      name: "Nike air max",
      description: "blbalbalb allbalb lallEF GSOIG HSROgh oblbaba lblabl",
      size: ["38", "39", "40", "41", "42", "43", "44", "45"],
      gender: ["M", "F"],
      price: 99.99,
      img: airTavas
    },
    {
      id: 5,
      type: "shoes",
      name: "Nike air 90",
      description: "blbalbalb allbalb lallEF GSOIG HSROgh oblbaba lblabl",
      size: ["32", "33", "34", "35", "36", "37", "38", "39"],
      gender: ["F"],
      price: 120.99,
      img: airMax90
    }
  ]
};

export default function storeReducer(state = initState) {
  return state;
}
