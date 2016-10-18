var results = data.results;


//console.log(data);

function renderItem (item) {
  return `
    
   <div class="box1">
   <a href="${item.url}">
   <img src="${item.Images[0].url_170x135}"">
   <div class="underBox">
   <p class="titleoverlap">${item.title}</p>

   <div class="bottomSmall">
<p class="shopName">${item.Shop.shop_name}</p>
   <p class="itemPrice">$${item.price}</p>
   </div>
   </div>
   </a>
   </div>
  `;
}

function whiskeyGrid () {

 for (var i = 0; i < results.length -1; i++){

    var itemHtml = renderItem(results[i]);
 	$("#grid").append(itemHtml);
 };

}

whiskeyGrid();