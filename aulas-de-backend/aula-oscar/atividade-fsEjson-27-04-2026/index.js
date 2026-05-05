import fs from "fs/promises";
//inical
const initialData = [
  { id: 1, nome: "Maçã", cor: "Vermelha", preco: 3.5 },
  { id: 2, nome: "Banana", cor: "Amarela", preco: 2.0 },
  { id: 3, nome: "Uva", cor: "Roxa", preco: 4.0 }
];

//base
async function readFruits() {
  const data = await fs.readFile("./fruits.json", "utf-8");
  return JSON.parse(data);
}

async function writeFruits(fruits) {
  const data = JSON.stringify(fruits, null, 2);
  await fs.writeFile("./fruits.json", data, "utf-8");
}

//getall
async function getAllFruits() {
  const fruits = await readFruits();
  console.log(" Lista de frutas:");
  console.log(fruits);
}

//getbyid
async function getFruitById(id) {
  const fruits = await readFruits();
  const fruit = fruits.find(f => f.id === Number(id));

  if (!fruit) {
    console.log(" Fruta não encontrada!");
    return;
  }

  console.log(" Fruta encontrada:");
  console.log(fruit);
}


//getbyname
async function getFruitByName(nome) {
  const fruits = await readFruits();

  const results = fruits.filter(f =>
    f.nome.toLowerCase().includes(nome.toLowerCase())
  );

  if (results.length === 0) {
    console.log(" Nenhuma fruta encontrada com esse nome.");
    return;
  }

  console.log(" Resultados da busca:");
  console.log(results);
}

//criar sem duplicados
async function createFruit(nome, cor, preco) {
  const fruits = await readFruits();

  const exists = fruits.some(
    f => f.nome.toLowerCase() === nome.toLowerCase()
  );

  if (exists) {
    console.log(" Essa fruta já existe!");
    return;
  }

  const newFruit = {
    id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
    nome,
    cor,
    preco
  };

  fruits.push(newFruit);
  await writeFruits(fruits);

  console.log(" Fruta criada com sucesso:");
  console.log(newFruit);
}

//att
async function updateFruit(id, nome, cor, preco) {
  const fruits = await readFruits();
  const index = fruits.findIndex(f => f.id === Number(id));

  if (index === -1) {
    console.log(" Fruta não encontrada!");
    return;
  }

  fruits[index] = { ...fruits[index], nome, cor, preco };

  await writeFruits(fruits);

  console.log(" Fruta atualizada:");
  console.log(fruits[index]);
}

//delete
async function deleteFruit(id) {
  const fruits = await readFruits();
  const index = fruits.findIndex(f => f.id === Number(id));

  if (index === -1) {
    console.log(" Fruta não encontrada!");
    return;
  }

  const removed = fruits.splice(index, 1);
  await writeFruits(fruits);

  console.log(" Fruta removida:");
  console.log(removed[0]);
}

//resetar json
async function resetFruits() {
  await writeFruits(initialData);
  console.log(" Arquivo resetado com sucesso!");
}

//testando as funções

await getAllFruits();

await createFruit("Melancia", "Verde", 7.5);
await createFruit("Maçã", "Vermelha", 3.5); // duplicado

await getFruitById(1);
await getFruitByName("ma");

await updateFruit(1, "Maçã Gala", "Vermelha", 4.0);

await deleteFruit(2);

await getAllFruits();