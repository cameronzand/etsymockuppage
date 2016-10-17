var results = data.results;


//console.log(data);

function renderItem (item) {
  return `
    
   <div class="box1">
   <img src="${item.Images[0].url_170x135}">
   <p>${item.title}</p>
   <p>${item.price}</p>

   </div>
  `;
}

function whiskeyGrid () {
	// var image = results[0].Images[13];
	// var title = results[0].title;
	// var price = results[0].price;
	// var user  = results[0].who_made;

 for (var i = 0; i < results.length; i++){
 	//console.log(results[i]);

 	//`<div>${results[i].title}</div>`
// 	$("#grid").append(`<p> ${results[i].title}</p>`);
    var itemHtml = renderItem(results[i]);
 	$("#grid").append(itemHtml);
 };

}

whiskeyGrid();