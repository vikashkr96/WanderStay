const sampleListings = [
  {
    title: "Luxury Beach Villa",
    description: "Beautiful private villa near the beach with pool.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 5000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    description: "Stylish apartment in the heart of the city.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 1500,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Mountain Wooden Cabin",
    description: "Cozy wooden house surrounded by mountains.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    price: 1200,
    location: "Manali",
    country: "India"
  },
  {
    title: "Heritage Haveli Stay",
    description: "Royal traditional haveli with courtyard.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9b63985",
    price: 2500,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Lake View House",
    description: "Peaceful house with stunning lake view.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    price: 1800,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Penthouse Suite",
    description: "Luxury penthouse with skyline view.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 6000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Forest Villa",
    description: "Private villa surrounded by greenery.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    price: 2200,
    location: "Coorg",
    country: "India"
  },
  {
    title: "Modern Studio Apartment",
    description: "Perfect studio apartment for solo travelers.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 900,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Cliffside Cottage",
    description: "Beautiful house with valley views.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 2100,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Luxury Farmhouse",
    description: "Big farmhouse perfect for weekend getaway.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 3000,
    location: "Lonavala",
    country: "India"
  },

  {
    title: "Minimalist Apartment",
    description: "Clean and modern apartment interior.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 1400,
    location: "Pune",
    country: "India"
  },
  {
    title: "Beach House",
    description: "Beautiful house just steps from the sea.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 3500,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Luxury Hill Villa",
    description: "Premium villa with mountain view.",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    price: 4200,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Riverside Cottage",
    description: "Cute cottage near peaceful river.",
    image: "https://images.unsplash.com/photo-1475856034135-9f5e52b8f2a6",
    price: 1600,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Luxury Duplex Apartment",
    description: "Spacious duplex with balcony.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    price: 2600,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "Garden Villa",
    description: "Villa with private garden.",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
    price: 2800,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Modern Smart Home",
    description: "Tech-enabled smart luxury house.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 4500,
    location: "Chandigarh",
    country: "India"
  },
  {
    title: "Urban Budget Apartment",
    description: "Affordable apartment in city center.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    price: 700,
    location: "Chennai",
    country: "India"
  },
  {
    title: "Luxury Palace Suite",
    description: "Stay like royalty in palace-style home.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: 8000,
    location: "Jodhpur",
    country: "India"
  },
  {
    title: "Eco-Friendly House",
    description: "Sustainable wooden eco home.",
    image: "https://images.unsplash.com/photo-1499696010181-89d1e23d9dbe",
    price: 1500,
    location: "Kerala",
    country: "India"
  },

  {
    title: "Lakefront Villa",
    description: "Luxury villa with private lake access.",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    price: 4800,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Compact Studio Flat",
    description: "Small but beautiful modern flat.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 850,
    location: "Noida",
    country: "India"
  },
  {
    title: "Seaside Villa",
    description: "Premium villa with ocean view.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 5200,
    location: "Goa",
    country: "India"
  },
  {
    title: "Luxury Duplex House",
    description: "Modern duplex perfect for families.",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e",
    price: 2300,
    location: "Ahmedabad",
    country: "India"
  },
  {
    title: "Hilltop House",
    description: "Amazing hilltop home with sunrise view.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 2700,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Luxury Farm Villa",
    description: "Big farm villa with private lawn.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 3100,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Designer Apartment",
    description: "High-end interior designed apartment.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 2000,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "Forest Cabin Villa",
    description: "Beautiful wooden cabin villa.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    price: 1900,
    location: "Coorg",
    country: "India"
  },
  {
    title: "Modern Glass House",
    description: "Unique glass house with nature view.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 5500,
    location: "Kasauli",
    country: "India"
  }
];

module.exports = { data: sampleListings };