function manufacture (gifts, materials) {
  // Code here
  const finalGifts = gifts.filter(gift => {
    for (const char of gift) {
      if (!materials.includes(char)) { return false }
    }
    return true
  })

  return finalGifts
}

manufacture(['tren', 'oso', 'pelota'], 'tronesa')
