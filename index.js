const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};


const storeEl = document.getElementsByClassName("item-list store--item-list")[0]
const cartEl = document.getElementsByClassName("item-list cart--item-list")[0]

for(let i = 0; i < state.items.length; i++) {

  state.items[i].bought = 0

  const liElStore = document.createElement("li")
  
  const divElStore = document.createElement("div")

  divElStore.className = "store--item-icon"

  const imgElStore = document.createElement("img")

  imgElStore.src = `assets/icons/${state.items[i].id}.svg`
  imgElStore.alt = state.items[i].name
  const buttonELStore = document.createElement("button")
  buttonELStore.id = i
  buttonELStore.innerHTML = "Add to cart"
  buttonELStore.addEventListener("click", function() {
    addItemToCart(i)
  });

  divElStore.appendChild(imgElStore)
  liElStore.appendChild(divElStore)
  liElStore.appendChild(buttonELStore)

  storeEl.appendChild(liElStore)

}





function addItemToCart(id) {
  for (let i = 0; i < cartEl.children.length; i++) {
    console.log(cartEl.children[i].id === `liEl${id}`)
    if(cartEl.children[i].id === `liEl${id}`) {
      state.items[id].bought += 1
      const span = document.getElementById(`spanEl${id}`)
      span.innerHTML = state.items[id].bought
      return
    }

  }



  const liEl = document.createElement("li")

  liEl.id = "liEl" + id

  const imgEl = document.createElement("img")

  const pEl = document.createElement("p")

  const buttonEl = document.createElement("button")

  const spanEl = document.createElement("span")

  const buttonEl2 = document.createElement("button")

  imgEl.className = "cart--item-icon"
  imgEl.alt = state.items[id].name
  imgEl.src = `assets/icons/${state.items[id].id}.svg`

  console.log(imgEl.src)

  pEl.innerHTML = state.items[id].name

  buttonEl.className = "quantity-btn remove-btn center"
  buttonEl.innerHTML = "-"

  buttonEl.addEventListener("click", function() {
    const spanEl = document.getElementById(`spanEl${id}`)
    if(state.items[id].bought === 0) {
      cartEl.removeChild(liEl)
      return
    }
    state.items[id].bought -= 1
    const span = document.getElementById(`spanEl${id}`)
    span.innerHTML = state.items[id].bought
  });

  spanEl.className = "quantity-text center"
  spanEl.innerHTML = state.items[id].bought
  spanEl.id = `spanEl${id}`

  buttonEl2.className = "quantity-btn add-btn center"
  buttonEl2.innerHTML = "+"

  buttonEl2.addEventListener("click", function() {
    const spanEl = document.getElementById(`spanEl${id}`)

    state.items[id].bought += 1
    const span = document.getElementById(`spanEl${id}`)
    span.innerHTML = state.items[id].bought
  });

  liEl.appendChild(imgEl)
  liEl.appendChild(pEl)
  liEl.appendChild(buttonEl)
  liEl.appendChild(spanEl)
  liEl.appendChild(buttonEl2)

  cartEl.appendChild(liEl)

  console.log(cartEl.children[0].id)
  console.log(`liEl${id}`)
}

