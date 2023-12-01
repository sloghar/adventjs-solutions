function findFirstRepeated (gifts) {
  const ids = {}

  for (const gift of gifts) {
    if (ids[gift]) { return gift }
    ids[gift] = 1
  }

  return -1
}

findFirstRepeated([2, 1, 3, 5, 3, 2])
