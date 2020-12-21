function makeDataRequest(url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resolve(this.responseText);
        } else {
          reject("Couldn't load the template");
        }
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}

let reviewsData;
let isReviewDataLoaded;
let reviewPage = 0;

const profileImg = document.getElementById("person-img");
const personName = document.getElementById("person-name");
const personJob = document.getElementById("person-job");
const personReview = document.getElementById("person-review");

function renderPage(reviewPage) {
  const reviewData = reviewsData.reviews[reviewPage];

  profileImg.src = reviewData.img
  personName.innerHTML = reviewData.name
  personJob.innerHTML = reviewData.job
  personReview.innerHTML = reviewData.text
}

//load reviews data
async function loadReviews() {
  const response = await makeDataRequest("/reviews/reviews.json");
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(response));
    } catch (err) {
      reject(err);
    }
  });
}

loadReviews()
  .then((data) => {
    reviewsData = data;
    isReviewDataLoaded = true;
    renderPage(0);
  })
  .catch((errMessage) => {
    alert(errMessage);
  });

//renderPage(0)
document.getElementById("next-btn").addEventListener("click", () => {
  if (isReviewDataLoaded) {
    if (reviewPage < reviewsData.reviews.length - 1) {
      reviewPage++;
      renderPage(reviewPage);
    }
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (isReviewDataLoaded) {
    if (reviewPage > 0) {
      reviewPage--;
      renderPage(reviewPage);
    }
  }
});
