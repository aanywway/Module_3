// Решето Эратосфена

function findPrimes(start, end) { 
  const startTime = Date.now(); 
  const sieve = [];
  let counter = 0;
  const sqrtEnd = Math.sqrt(end);
  
  for (let i = start + 1; i <= end; i++) {
    if (!sieve[i]) {
      counter++;
      
      if (i <= sqrtEnd) {
        for (let j = i * i; j <= end; j += i) {
          sieve[j] = 1; 
        }
      }
    }
    
      if (i % 10000000 === 0) {
        const progress = Math.floor(i / end * 100);
        console.log(`Прогресс - ${progress}%. Найдено ${counter} простых чисел.`);
      }
  }
  
  return `Количество простых чисел - ${counter}. Затрачено время - ${Date.now() - startTime} мс.`;
}

findPrimes(1, 100000000)

// Асинхронно

function isPrime(num) {
  if (num <= 1) return false; 
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  return true;
}

async function findPrimes(start, end, chunk = 100) {
  const startTime = Date.now();
  const totalChunks = end / chunk;
  const batch = 1000;
  let totalCounter = 0;
  let totalProgress = 0;
  
  for (let i = 0; i < totalChunks; i += batch) {
    const promises = [];
    for (let j = i; j < i + batch && j < totalChunks; j++) {
      const promise = new Promise((resolve) => {
        let counter = 0;
        const startChunk = start + j * chunk;
        const endChunk = startChunk + chunk - 1;
          for (let k = startChunk; k <= endChunk; k++) {
            if (isPrime(k)) {
              counter++
            }
          }
        resolve(counter);
      })
      promises.push(promise);
    }  
    const result = await Promise.all(promises);
    totalCounter += result.reduce((sum, num) => sum + num, 0);
    const progress = (i + batch) / 10000;
    if (progress >= totalProgress + 10) {
      totalProgress = progress;
      console.log(`Прогресс - ${progress}%. Количество простых чисел - ${totalCounter}`);
    }
  }
  
  console.log(`Количество простых чисел ${totalCounter}. Затрачено время - ${Date.now() - startTime} мс.`);
}

findPrimes(1, 100000000)
