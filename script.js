
  // Function to handle "Buy Now" button click
  function buyProduct(productName, stock) {
    if (stock > 0) {
      // If in stock, open the purchase modal or perform other actions
      $("#product-info").val("Product: " + productName);
      $("#buyModal").modal("show");
    } else {
      // If out of stock, display "Out of Stock" message and redirect to the home page
      alert("Out of Stock");
      window.location.href = "index.html"; // Change "home.html" to your actual home page URL
    }
  }

// JavaScript to open WhatsApp chat on icon click

/*document.querySelector('.whatsapp-container.support .whatsapp-icon').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://wa.me/your-support-phonenumber', '_blank');
});*/

document.querySelector('.whatsapp-container.buy .whatsapp-icon').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://wa.me/8449238838', '_blank');
});

