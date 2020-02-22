function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function generateSentence(career) {
  const careerName = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  if (career === undefined || careerName[career] === undefined) {
    return '請選擇一種職業'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code '],
    designer: ['畫一張圖', '改個 logo ', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business pmodel ', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const sentence = '身為一個' + careerName[career] + getRandomItem(task[career]) + getRandomItem(phrase)

  return sentence
}

module.exports = generateSentence
