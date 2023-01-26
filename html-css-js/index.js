const [
  form,
  seller,
  amount,
  date,
  cardsContainer,
  salesAverage,
  coords,
  currentDate,
] = [
  'form',
  'seller',
  'amount',
  'date',
  'cards-container',
  'sales-average',
  'coords',
  'currentDate',
].map(item => document.getElementById(item))

window.addEventListener('load', () => {
  date.max = new Date().toLocaleDateString('en-ca')
  renderSalesCards()
  getLocation()
  getCurrentDate()
})

function renderSalesCards() {
  const sales = getSales()
  const average = sales.reduce((prev, cur) => prev + cur.amount, 0) / sales.length
  const cards = sales.map(item =>
    `<div class="card">
    <h4>${item.seller}</h4>
    <div class="card-values">
      <span>${formatCurrency(item.amount)}</span>
      <span>${item.date}</span>
    </div>
    <button class="delete-button" onclick="deleteSale(${item.id})">excluir</button>
  </div>`
  )
  cardsContainer.innerHTML = cards.join('\n')
  salesAverage.innerHTML = formatCurrency(Math.round(average))
}

function getSales() {
  return JSON.parse(localStorage.getItem('sales')) ?? []
}

function formatDate(date) {
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}

function handleAddSale(e) {
  e.preventDefault()

  const sale = {
    seller: seller.value.trim(),
    amount: Number(amount.value * 100),
    date: formatDate(date.value),
    id: Date.now(),
  }
  const isValid = validateFields(sale.seller, sale.amount)
  if (!isValid) return

  const oldValue = getSales()

  localStorage.setItem('sales', JSON.stringify([...oldValue, sale]))
  renderSalesCards()
  seller.value = ''
  amount.value = ''
  date.value = ''
}

function deleteSale(id) {
  const sales = getSales()
  const saleToDelete = sales.find(item => item.id === id)
  if (saleToDelete) {
    sales.splice(sales.indexOf(saleToDelete), 1)
    localStorage.setItem('sales', JSON.stringify(sales))
    renderSalesCards()
  }
}

function clearSales() {
  if (!getSales().length) {
    alert('Não há vendas na lista!')
    return
  }

  if (confirm('Deseja mesmo limpar todas as vendas?')) {
    localStorage.removeItem('sales')
    renderSalesCards()
  }
}

function formatCurrency(value) {
  return Number(value / 100 || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    coords.innerHTML = null
  }
}

function showPosition(position) {
  const html = `
    As coordenadas da Localização atual é: <br>
    Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}
  `
  coords.innerHTML = html
}

function getCurrentDate() {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = today.getMonth() + 1
  const dd = today.getDate()

  currentDate.innerHTML = `Hoje é: ${('0' + dd).slice(-2)}/${('0' + mm).slice(-2)}/${yyyy}`
}

function validateFields(seller, amount) {
  const errors = []
  const isValidSeller = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(seller)
  const isValidAmount = /^[0-9]+$/.test(amount)

  if (!isValidSeller) {
    errors.push('Vendedor')
  }

  if (!isValidAmount) {
    errors.push('Total vendido')
  }

  if (errors.length) {
    alert(`Há erros no(s) seguinte(s) campo(s): ${errors.join(', ')}`)
    return false
  }

  return true
}