document.getElementById('no').addEventListener('mouseover', function(event) {
  var newX = event.clientX - 50; // Adjust X position (increased speed and distance)
  var newY = event.clientY - 50; // Adjust Y position (increased speed and distance)
  this.style.position = 'absolute';
  this.style.left = newX + 'px';
  this.style.top = newY + 'px';
});

document.getElementById('yes').addEventListener('click', function() {
  window.open('https://www.facebook.com/ABD.037/', '_blank'); // Replace 'your-profile' with your Facebook profile URL
});
