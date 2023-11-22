import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const prodcuts = [
    {
      _id: 4001,
      title: "White tshirt",
      price: 30,
      previousPrice: 55,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "accessories",
      image: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
      isNew: true,
      brand: "Unknown",
    },
    {
      _id: 4002,
      title: "Valve Hat",
      price: 60,
      previousPrice: 62,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "hat",
      image: "https://i.ibb.co/GxPKfj2/pic-hat.png",
      isNew: true,
      brand: "Unknown",
    },
    {
      _id: 4003,
      title: "Big Mug",
      price: 10,
      previousPrice: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "mug",
      image: "https://i.ibb.co/4N3rKPK/pic-mug.png",
      isNew: true,
      brand: "Artistic",
    },
    {
      _id: 4004,
      title: "Hand Bag",
      price: 25,
      previousPrice: 45,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "bag",
      image: "https://i.ibb.co/mD9Hxc1/pic-bag.png",
      isNew: true,
      brand: "Unknown",
    },
    {
      _id: 4005,
      title: "Picture Canvas",
      price: 5,
      previousPrice: 7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "canva",
      image: "https://i.ibb.co/DgV906c/pic-canvas.png",
      isNew: true,
      brand: "Unknown",
    },
    {
      _id: 4006,
      title: "White Hoodie",
      price: 250,
      previousPrice: 275,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "hoodie",
      image: "https://i.ibb.co/SvcZ4bv/pic-hoodie.png",
      isNew: true,
      brand: "Stylish",
    },
    {
      _id: 4007,
      title: "Long Joggers",
      price: 70,
      previousPrice: 85,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "jogger",
      image: "https://i.ibb.co/ZGcwgXh/pic-joggers.png",
      isNew: false,
      brand: "Unknown",
    },
    {
      _id: 4008,
      title: "Beanie Hat",
      price: 35,
      previousPrice: 75,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "beanie",
      image: "https://i.ibb.co/TrqbPXR/pic-beanie.png",
      isNew: false,
      brand: "Unknown",
    },
    {
      _id: 4009,
      title: "Baby Shirt",
      price: 50,
      previousPrice: 55,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "shirt",
      image: "https://i.ibb.co/BTB4sVL/pic-baby.png",
      isNew: false,
      brand: "Unknown",
    },
  ];

  if (req.query.search) {
    const filteredProduct =  prodcuts.filter((prodcuts) => prodcuts.category.includes(req.query.search));
    console.log(filteredProduct);
    res.send(filteredProduct)
    return
  }

  setTimeout(() => {
    res.send(prodcuts);
  }, 3000);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
