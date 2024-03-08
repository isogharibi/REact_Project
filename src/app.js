const Url = "https://fakestoreapi.com/products?limit=5";

const OutPut = document.querySelector(`.output`);

async function FetchData() {
  const responce = await fetch(Url);
  const products = await responce.json();

  let fetchData = products.map((object) => {
    const {
      price,
      title,
      description,
      image
    } = object;

    const PriceFinal = Math.floor(price);

    return ` 
   <div id="Image">
       <img src="${image}"/>,
       <h1>${title.replace(/(.{10})..+/, "$1")}</h1>,
       <p>${description.replace(/(.{30})..+/, "$1")}</p>,
       <span>price :${PriceFinal}</span>,
   <div/>`;
  }).join(' ');
  OutPut.innerHTML = fetchData;
}

FetchData();