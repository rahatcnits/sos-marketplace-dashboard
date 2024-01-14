let productView = document.querySelector(".product_details_main_view img");
let productViewBtns = document.querySelectorAll(".product_details_tab_view");

productViewBtns.forEach((productViewBtn) => {
  productViewBtn.addEventListener("click", () => {
    productViewBtns.forEach((productViewBtn) =>
      productViewBtn.classList.remove("active")
    );
    productViewBtn.classList.add("active");

    let productImg = productViewBtn.children[0].getAttribute("src");
    productView.setAttribute("src", productImg);
  });
});
