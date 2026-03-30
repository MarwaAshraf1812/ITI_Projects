const fs = require("fs");

const filePath = "./products_data.json";


const readDataFromFile = () => {
  if (!fs.existsSync(filePath)) return [];

  const fileContent = fs.readFileSync(filePath, "utf-8");

  if (!fileContent.trim()) return [];

  try {
    return JSON.parse(fileContent);
  } catch (err) {
    console.log("Invalid JSON file, resetting...");
    return [];
  }
};

const writeDataInFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const addProduct = (args) => {
  if (!args[1] || !args[2]) {
    console.log("data required!");
    return;
  }

  const productsData = readDataFromFile();

  const newProduct = {
    id: productsData.length + 1,
    productName: args[1],
    price: parseFloat(args[2]),
  };

  productsData.push(newProduct);
  writeDataInFile(productsData);

  console.log("New product added:", newProduct);
};

const listProducts = () => {
  const products = readDataFromFile();
  console.log("Products:");
  console.table(products);
};

const deleteProduct = (args) => {
  const product_id = parseInt(args[1]);

  let productsData = readDataFromFile();

  productsData = productsData.filter((p) => p.id !== product_id);

  writeDataInFile(productsData);

  console.log("Product deleted");
};

const updateProduct = (args) => {
  const product_id = Number(args[1]);

  const productsData = readDataFromFile();

  const product = productsData.find((p) => p.id === product_id);

  if (!product) {
    console.log("Product not found");
    return;
  }

  const nameIndex = args.indexOf("--name");
  const priceIndex = args.indexOf("--price");

  if (nameIndex !== -1) {
    product.productName = args[nameIndex + 1];
  }

  if (priceIndex !== -1) {
    product.price = parseFloat(args[priceIndex + 1]);
  }

  if (nameIndex === -1 && priceIndex === -1) {
    product.productName = args[2];
  }

  writeDataInFile(productsData);

  console.log("Product updated");
};


const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "add":
    addProduct(args);
    break;

  case "list":
    listProducts();
    break;

  case "delete":
    deleteProduct(args);
    break;

  case "update":
    updateProduct(args);
    break;

  default:
    console.log(`
Unknown command

Commands:
node script.js add "name" price
node script.js list
node script.js delete id
node script.js update id "new name"
node script.js update id --name "new name" --price 400
`);
}