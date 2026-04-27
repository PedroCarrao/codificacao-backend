import fs from "fs/promises";

// Ler frutas
async function readFruits() {
  const data = await fs.readFile("./fruits.json", "utf-8");
  return JSON.parse(data);
}

// Salvar frutas
async function writeFruits(fruits) {
  const data = JSON.stringify(fruits, null, 2);
  await fs.writeFile("./fruits.json", data, "utf-8");
}

// Listar todas
async function getAllFruits() {
  return await readFruits();
}

// Buscar por ID
async function getFruitById(id) {
  const fruits = await readFruits();
  return fruits.find(f => f.id === Number(id));
}

// Criar fruta
async function createFruit(nome) {
  const fruits = await readFruits();

  const newFruit = {
    id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
    nome
  };

  fruits.push(newFruit);
  await writeFruits(fruits);

  return newFruit;
}

// Atualizar fruta
async function updateFruit(id, novoNome) {
  const fruits = await readFruits();
  const index = fruits.findIndex(f => f.id === Number(id));

  if (index === -1) return null;

  fruits[index].nome = novoNome;
  await writeFruits(fruits);

  return fruits[index];
}

// Deletar fruta
async function deleteFruit(id) {
  const fruits = await readFruits();
  const index = fruits.findIndex(f => f.id === Number(id));

  if (index === -1) return false;

  fruits.splice(index, 1);
  await writeFruits(fruits);

  return true;
}


//testando as funções


console.log(" Todas as frutas:");
console.log(await getAllFruits());

console.log("\n Buscar ID 1:");
console.log(await getFruitById(1));

console.log("\n Criar fruta:");
console.log(await createFruit("Melancia"));

console.log("\n Atualizar fruta ID 1:");
console.log(await updateFruit(1, "Maçã Verde"));

console.log("\n Deletar fruta ID 2:");
console.log(await deleteFruit(2));

console.log("\n Lista final:");
console.log(await getAllFruits());