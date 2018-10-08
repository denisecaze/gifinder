$(document).ready(function() {

});


function getGiphys() {
  return fetch(`http://api.giphy.com/v1/gifs/trending?api_key=YQShmk5mnVfgNJu4blUN8w5Msug5UQSq&limit=30`)
  .then(results => results.json())
  .then(response => response.data)
  .then(data => data.forEach((giphy, index) => {
    const container = document.getElementsByClassName("container")[0]
    const element = document.createElement("img")
    element.setAttribute("src", `${giphy.images.fixed_width_small.url}`)
    element.setAttribute("data-key", index)
    element.setAttribute("class", "gif")
    element.setAttribute("height", "300px")
    element.setAttribute("width", "300px")
    container.append(element);
    console.log(container)
    const oi = document.querySelector(`[data-key="${index}"]`)
    console.log(oi)
    const mc = new Hammer(oi);
    mc.on("swiperight", function(ev) {
      oi.classList.add("love")
        // window.location = "favorite.html?userId=" + userId;
    })
    mc.on("swipeleft", function(ev) {
      oi.classList.add("remove") 
    })
  }))
}

getGiphys()




