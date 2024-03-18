let slideIndex = 1;   //Initialisierung des Index des Bildes
showSlides(slideIndex); // Aufruf der Funktion

// Vor-/Zurück Controls
function plusSlides(n) {
  showSlides(slideIndex += n); //Vor und zurückschalten durch Erhöhung des Indexes des Bildes
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Hauptfunktion zur Kontrolle der Bildanzeige, Überprüfung von Bedingungen, damit der Index im korrekten Wertebereich bleibt
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //Indexierung bei 0, aber slideindex bei 1
  dots[slideIndex-1].className += " active"; //Rückgabe welches Bild ist gerade aktiv
}



