// HTML Elements
const catFactsList = document.getElementById("list");
const loadPhotosBtn = document.getElementById("cats-photos-btn");
const loadFactsBtn = document.getElementById("form-btn");
const photosForm = document.getElementById("catphotos");
const showLoader = document.getElementById("loading");
const searchError = document.getElementById("err");
const imagesContainer = document.getElementById("images-container");
const catsFactsForm = document.getElementById("cats");

// getting cat facts
async function getCatFacts(e) {
  e.preventDefault();
  showLoader.classList.add("active");
  searchError.classList.remove("show");
  catFactsList.innerHTML = "";

  let count = Math.min(50, Math.max(1, Number(catsFactsForm.value) || 1));

  try {
    const response = await axios.get(`https://meowfacts.herokuapp.com/?count=${count}`);
    response.data.data.forEach(fact => {
      const li = document.createElement("li");
      li.textContent = fact;
      catFactsList.appendChild(li);
    });
  } catch {
    searchError.classList.add("show");
  } finally {
  showLoader.classList.remove("active");
}
}
// getting cat photos
async function getCatPhotos(e) {
  e.preventDefault();
  showLoader.classList.add("active");
  searchError.classList.remove("show");
  imagesContainer.innerHTML = "";

  let imagesLimit = Math.min(10, Math.max(1, Number(catsFactsForm.value) || 1));

  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${imagesLimit}`);
    response.data.forEach(cat => {
      const wrap_Images = document.createElement("div");
      wrap_Images.className = "wrap-images";
      const img = document.createElement("img");
      img.src = cat.url;
      wrap_Images.appendChild(img)
      imagesContainer.appendChild(wrap_Images)
    });
  } catch {
    searchError.classList.add("show");
  } finally {
  showLoader.classList.remove("active");
}
}
loadFactsBtn.addEventListener("click", getCatFacts);
loadPhotosBtn.addEventListener("click", getCatPhotos);
