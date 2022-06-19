const checkIsGeneratedIdForUnique = (id, idList) => {
  for (let i = 0; i < idList.length; i++) {
    if (idList[i] === id) {
      return false
    }
  }
  return true
}

export const generateId = (idList) => {
  const tempIdList = [...idList]
  const id = Math.random() * 1000000

  if (checkIsGeneratedIdForUnique(id, tempIdList)) {
    return Math.floor(id)
  } else {
    generateId(tempIdList)
  }
}
