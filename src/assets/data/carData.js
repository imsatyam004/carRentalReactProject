import img01 from "../all-images/cars-img/img01.webp";
import img02 from "../all-images/cars-img/img02.webp";
import img03 from "../all-images/cars-img/img03.gif";
import img04 from "../all-images/cars-img/img04.webp";
import img05 from "../all-images/cars-img/img05.jpeg";
import img06 from "../all-images/cars-img/img06.webp";
import img07 from "../all-images/cars-img/img07.jpeg";
import img08 from "../all-images/cars-img/img08.webp";

const carData = [
  {
    id: 1,
    brand: "Maruti Suzuki",
    rating: 4.3,
    carName: "Swift",
    imgUrl: img01,
    model: "VXI",
    price: 2000.00,
    speed: "21.21 kmpl",
    gps: "GPS Navigation (optional)",
    seatType: "Fabric Upholstery",
    automatic: "Manual",
    description:
      "The Maruti Suzuki Swift is a popular hatchback in India known for its sporty looks and excellent performance. It has a peppy engine that delivers good power and fuel efficiency. The car comes with a range of features such as power windows, air conditioning, and a touchscreen infotainment system. It is also known for its comfortable ride and handling. Overall, the Maruti Suzuki Swift is a great choice for those looking for a reliable and affordable car for their daily commute or for road trips.",
  },
  {
    id: 2,
    brand: "Hyundai",
    rating: 4.5,
    carName: "Grand i10 Nios",
    imgUrl: img02,
    model: "Kappa Magna",
    price: 5500,
    speed: "20 kmpl",
    gps: "GPS Navigation",
    seatType: "Fabric Upholstery",
    automatic: "Manual",
    description:
      "The Hyundai Grand i10 Nios is a popular hatchback in India. It is known for its stylish looks, comfortable ride, and feature-packed cabin. The Grand i10 Nios comes with a spacious cabin, comfortable seats, and a range of features like air conditioning, power steering, power windows, and a music system. The car is powered by a 1.2-litre petrol engine that delivers a maximum power of 82 bhp and a peak torque of 113 Nm. The engine is mated to a 5-speed manual transmission. The Grand i10 Nios has a mileage of around 20 kmpl, making it a fuel-efficient car. Overall, the Hyundai Grand i10 Nios is a great choice for those looking for a reliable and comfortable hatchback for rental purposes in India.",
  },

  {
    id: 3,
    brand: "Maruti Suzuki",
    rating: 4.6,
    carName: "Dzire",
    imgUrl: img03,
    model: "VXI",
    price: 7500,
    speed: "23.26 kmpl",
    gps: "GPS Navigation",
    seatType: "Fabric Upholstery",
    automatic: "Manual",
    description:
      "The Maruti Suzuki Dzire is a popular compact sedan in India. It is known for its fuel efficiency, spacious interiors, and comfortable ride quality. The Dzire comes with a range of features like air conditioning, power steering, power windows, and a music system. The car is powered by a 1.2-litre petrol engine that delivers a maximum power of 89 bhp and a peak torque of 113 Nm. The engine is mated to a 5-speed manual transmission. The Dzire has a mileage of around 23.26 kmpl, making it one of the most fuel-efficient cars in its segment. Overall, the Maruti Suzuki Dzire is a great choice for those looking for a reliable and affordable sedan for rental purposes in India.",
  },
  {
    id: 4,
    brand: "Toyota",
    rating: 4.5,
    carName: "Innova Crysta",
    imgUrl: img04,
    model: "2.4 G Plus",
    price: 5600,
    speed: "13.68 kmpl",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    description:
      "The Toyota Innova Crysta is a premium MPV that offers a spacious and comfortable cabin, powerful engines, and a host of features. It is available in both petrol and diesel engine options, and comes with a choice of manual or automatic transmission. The top-end variant comes with features like touchscreen infotainment system, automatic climate control, leather seats, and more.",
  },
  {
    id: 5,
    brand: "Mahindra",
    rating: 4.3,
    carName: "Scorpio",
    imgUrl: img05,
    model: "S11",
    price: 6400,
    speed: "15.4 kmpl",
    gps: true,
    seatType: "Fabric",
    automatic: "Manual",
    description:
      "Mahindra Scorpio is a powerful and rugged SUV that is perfect for off-road adventures. It comes with a 2.2-litre mHawk diesel engine that produces 140 bhp and 320 Nm of torque. The car also comes with a 6-speed manual transmission or a 6-speed automatic transmission. The Scorpio has a spacious and comfortable cabin with features like automatic climate control, power windows, and a touchscreen infotainment system with Android Auto and Apple CarPlay. Safety features include dual airbags, ABS with EBD, and rear parking sensors.",
  },
  {
    id: 6,
    brand: "Tata",
    rating: 87,
    carName: "Indica",
    imgUrl: img06,
    model: "Vista",
    price: 3500,
    speed: "25kmpl",
    gps: "No GPS",
    seatType: "Cloth seats",
    automatic: "Manual",
    description:
      "The Tata Indica is a hatchback car produced by the Indian manufacturer Tata Motors from 1998 to 2018. It was the first passenger car from Tata Motors and is known for its fuel efficiency and affordability.",
  },
  {
    id: 7,
    brand: "Honda",
    rating: 4.5,
    carName: "City",
    imgUrl: img07,
    model: "VTVT E",
    price: 2200,
    speed: "17kmpl",
    gps: "GPS Navigation",
    seatType: "Fabric Seats",
    automatic: "CVT",
    description:
      "The Honda City is a popular mid-size sedan that offers a comfortable and spacious interior, refined driving experience, and impressive fuel efficiency. With features such as a touchscreen infotainment system, rearview camera, and automatic climate control, the City is a great choice for anyone in the market for a reliable and well-equipped sedan.",
  },
  {
    id: 8,
    brand: "Hyundai",
    rating: 4.3,
    carName: "Xcent",
    imgUrl: img08,
    model: "1.2 VTVT E",
    price: 6000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Fabric",
    automatic: "Manual",
    description:
      "The Hyundai Xcent is a stylish and practical compact sedan. It comes with a range of features such as a touchscreen infotainment system, rearview camera, and automatic climate control. The Xcent is powered by a 1.2-liter petrol engine that delivers good performance and fuel efficiency. With comfortable seating for five passengers and a spacious boot, the Xcent is a great choice for those looking for a comfortable and reliable family sedan.",
  },
];

export default carData;
