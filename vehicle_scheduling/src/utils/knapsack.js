function solveKnapsack(tasks, capacity) {
  const n = tasks.length;
  // Use Int32Array for better performance
  const dp = Array.from({ length: n + 1 }, () => new Int32Array(capacity + 1));

  for (let i = 1; i <= n; i++) {
    const { Duration, Impact } = tasks[i - 1];
    for (let w = 0; w <= capacity; w++) {
      if (Duration <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - Duration] + Impact);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Backtrack to find selected tasks
  let res = dp[n][capacity];
  let w = capacity;
  const selectedTasks = [];

  for (let i = n; i > 0 && res > 0; i--) {
    if (res === dp[i - 1][w]) {
      continue; // Not included
    } else {
      // Included
      selectedTasks.push(tasks[i - 1]);
      res -= tasks[i - 1].Impact;
      w -= tasks[i - 1].Duration;
    }
  }

  return {
    maxImpact: dp[n][capacity],
    selectedTasks
  };
}

module.exports = { solveKnapsack };
