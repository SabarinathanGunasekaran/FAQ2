var questions = document.getElementsByClassName("question");
var searchInput = document.getElementById("searchInput");

for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", toggleAnswer);
}

searchInput.addEventListener("input", filterQuestions);

function toggleAnswer() {
  var answer = this.nextElementSibling;
  answer.classList.toggle("show");
  
  // Update click count
  var clickCount = parseInt(this.getAttribute("data-click-count")) || 0;
  clickCount++;
  this.setAttribute("data-click-count", clickCount);
}

function filterQuestions() {
  var searchValue = searchInput.value.toLowerCase();

  for (var i = 0; i < questions.length; i++) {
    var questionText = questions[i].innerText.toLowerCase();
    var answer = questions[i].nextElementSibling;

    if (questionText.includes(searchValue)) {
      questions[i].style.display = "block";
      answer.style.display = answer.classList.contains("show") ? "block" : "none";
    } else {
      questions[i].style.display = "none";
      answer.style.display = "none";
    }
  }
}

// Arrange questions based on click count (descending to ascending)
var faqContainer = document.querySelector(".faq-container");
var faqList = Array.from(document.querySelectorAll(".faq"));

faqList.sort(function(a, b) {
  var aClickCount = parseInt(a.querySelector(".question").getAttribute("data-click-count")) || 0;
  var bClickCount = parseInt(b.querySelector(".question").getAttribute("data-click-count")) || 0;
  return bClickCount - aClickCount;
});

faqList.forEach(function(faq) {
  faqContainer.appendChild(faq);
});
