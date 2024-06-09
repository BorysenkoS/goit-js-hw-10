const startTime = Date.now();

// Твій код, виконуваний упродовж деякого часу
for (let i = 0; i <= 100; i += 1) {
  console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);
