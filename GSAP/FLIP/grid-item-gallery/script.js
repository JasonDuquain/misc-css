const items = gsap.utils.toArray(".item");

// all of these are at the end of the HTML
const details = document.querySelector('.detail');
const detailContent = document.querySelector('.content');
const detailImage = document.querySelector('.detail img');
const detailTitle = document.querySelector('.detail .title');
const detailSecondary = document.querySelector('.detail .secondary');
const detailDescription = document.querySelector('.detail .description');

let activeItem; // keeps track of which item is open (details)



function showDetails(item) {


  let onLoad = () => {

  }

  const data = item.dataset;
	detailImage.addEventListener("load", onLoad);
	detailImage.src = item.querySelector('img').src;
	detailTitle.innerText = data.title;
	detailSecondary.innerText = data.secondary;
	detailDescription.innerText = data.text;
	
}

function hideDetails() {
	
}

// Add click listeners