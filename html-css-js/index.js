const [
  seller,
  amount,
  date,
  cardsContainer,
  salesAverage,
] = ['seller', 'amount', 'date', 'cards-container', 'sales-average'].map(item => document.getElementById(item))

window.addEventListener('load', () => {
  renderSalesCards()
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

function handleAddSale() {
  const sale = {
    seller: seller.value.trim(),
    amount: Number(amount.value * 100),
    date: formatDate(date.value),
    id: Date.now(),
  }
  const oldValue = getSales()

  localStorage.setItem('sales', JSON.stringify([...oldValue, sale]))
  renderSalesCards()
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