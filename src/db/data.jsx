import { FaStar } from "react-icons/fa";

const data = [
  {
    id: 1,
    img:"./src/db/shoepics/nikeairmonrachIV.png",
    title: "Nike Air Monarch IV",
    star: <FaStar className="rating-star"/>,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 200,
    company: "Nike",
    color: "white",
    category: "sneakers",
    sizes: [40, 42, 43, 44],
  },
  {
    id: 2,
    img: "./src/db/shoepics/nikeairvapormax+.png",
    title: "Nike Air Vapormax Plus",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 200,
    company: "Nike",
    color: "red",
    category: "sneakers",
    sizes: [42, 43, 44],
  },
  {
    id: 3,
    img: "./src/db/shoepics/nikedunklowWB.png",
    title: "Nike Dunk Low Panda",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 50,
    company: "Nike",
    color: "black",
    category: "sandals",
    sizes: [40, 42, 43, 44],
  },

  {
    id: 4,
    img: "./src/db/shoepics/vanscasualSeldanBlue.png",
    title: "Vans SeldanBlue",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 100,
    company: "Vans",
    color: "blue",
    category: "sandals",
    sizes: [40, 43, 44],
  },
  {
    id: 5,
    img: "./src/db/shoepics/pumasuedeXI.png",
    title: "PUMA Suede XI",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 150,
    company: "Puma",
    color: "white",
    category: "sneakers",
    sizes: [40, 42, 43, 44],
  },
  {
    id: 6,
    img: "./src/db/shoepics/pumapacerfuture.png",
    title: "PUMA Pacer Future",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 150,
    company: "Puma",
    color: "black",
    category: "sneakers",
    sizes: [40, 42, 44],
  },

  {
    id: 7,
    img: "./src/db/shoepics/pumagolfFusion.png",
    title: "PUMA Fusion Golf",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 100,
    company: "Puma",
    color: "green",
    category: "sneakers",
    sizes: [40, 42, 43, 44],
  },
  
  {
    id: 8,
    img: "./src/db/shoepics/nikefreak.png",
    title: "Nike Zoom Freak 2",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 200,
    company: "Nike",
    color: "green",
    category: "sneakers",
    sizes: [40, 42, 43, 44],
  },

  {
    id: 9,
    img: "./src/db/shoepics/nikezoomX.png",
    title: "Nike ZoomX",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 200,
    company: "Nike",
    color: "blue",
    category: "sneakers",
    sizes: [40, 42, 43],
  },

  {
    id: 10,
    img: "./src/db/shoepics/pumaslipstream.png",
    title: "PUMA SlipStream",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 150,
    company: "Puma",
    color: "green",
    category: "sneakers",
    sizes: [39, 40, 42],
  },
  {
    id: 11,
    img: "./src/db/shoepics/pumasuede.png",
    title: "PUMA Suede",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 150,
    company: "Puma",
    color: "red",
    category: "sneakers",
    sizes: [39, 42, 43, 44],
  },
  {
    id: 12,
    img: "./src/db/shoepics/pumaspeedcatOG.png",
    title: "PUMA Speedcat OG",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 150,
    company: "Puma",
    color: "black",
    category: "sneakers",
    sizes: [40, 42, 43, 44],
  },
  {
    id: 13,
    img: "./src/db/shoepics/nikewaffleone.png",
    title: "Nike Waffle One Sneaker",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 200,
    company: "Nike",
    color: "green",
    category: "sneakers",
    sizes: [43, 44],
  },
  {
    id: 14,
    img: "./src/db/shoepics/nikemarathon.png",
    title: "Nike Marathon",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "black",
    category: "sneakers",
    sizes: [40, 42, 43, 44],
  },
  {
    id: 15,
    img: "./src/db/shoepics/balletflat.png",
    title: "Ballet Flats Slip On",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 200,
    company: "Vans",
    color: "green",
    category: "flats",
    sizes: [36, 38, 39, 40],
  },
  {
    id: 16,
    img: "./src/db/shoepics/knitballetflat.png",
    title: "Knitted Ballet Flats",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 50,
    company: "Adidas",
    color: "black",
    category: "flats",
    sizes: [36, 37, 38],
  },

  {
    id: 17,
    img: "./src/db/shoepics/loaferflat.png",
    title: "Loafer Flats",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 50,
    company: "Vans",
    color: "white",
    category: "flats",
    sizes: [35, 36, 37, 38],
  },
  {
    id: 18,
    img: "./src/db/shoepics/vansrainbowcheckerboard.png",
    title: "Vans Rainbow Chex Skate",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 100,
    company: "Vans",
    color: "red",
    category: "flats",
    sizes: [38, 40, 42],
  },
  {
    id: 19,
    img: "./src/db/shoepics/vansclassicslipon.png",
    title: "Vans slip on True White",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 100,
    company: "Vans",
    color: "white",
    category: "sandals",
    sizes: [38, 40, 42, 44],
  },
  {
    id: 20,
    img: "./src/db/shoepics/chunkyhighheels.png",
    title: "Chunky High Heels",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 50,
    company: "Vans",
    color: "black",
    category: "heels",
    sizes: [36, 37, 38, 39],
  },
  {
    id: 21,
    img: "./src/db/shoepics/stilettohighheels.png",
    title: "Slip On Stiletto Heel",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 100,
    company: "puma",
    color: "black",
    category: "heels",
    sizes: [36, 37, 38, 39],
  },
  {
    id: 22,
    img: "./src/db/shoepics/vegansuedeheels.png",
    title: "Dark Red Suede Heels",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 150,
    company: "Nike",
    color: "red",
    category: "heels",
    sizes: [36, 37, 38],
  },

  {
    id: 23,
    img: "./src/db/shoepics/suederoundtoeheels.png",
    title: "Suede Round Toe Heels",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 200,
    company: "PUMA",
    color: "blue",
    category: "heels",
    sizes: [36, 37, 38, 39],
  },
  {
    id: 24,
    img: "./src/db/shoepics/chunkymaryjamesheels.png",
    title: "Chunky Mary James Heels",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 50,
    company: "Adidas",
    color: "green",
    category: "heels",
    sizes: [36, 37, 38],
  },
  {
    id: 25,
    img: "./src/db/shoepics/pointedtoehighheels.png",
    title: "Pointed-toe High Heels",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 150,
    company: "Adidas",
    color: "white",
    category: "heels",
    sizes: [36, 37, 38, 39],
  },
  {
    id: 26,
    img: "./src/db/shoepics/dressbootieheels.png",
    title: "Dress Bootie Heels",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 50,
    company: "Adidas",
    color: "white",
    category: "heels",
    sizes: [36, 37, 38],
  },
  {
    id: 27,
    img: "./src/db/shoepics/toesilettoemptymidheels.png",
    title: "Toe Siletto Heels",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 50,
    company: "Adidas",
    color: "black",
    category: "heels",
    sizes: [36, 37, 38, 39],
  },
  {
    id: 28,
    img: "./src/db/shoepics/redtoesilettoemptymidheels.png",
    title: "Red Toe Siletto Heels",
    star: <FaStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: 80,
    company: "Adidas",
    color: "red",
    category: "heels",
    sizes: [34, 36, 37, 38],
  }
];

export default data;