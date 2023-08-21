$(document).ready(function () {
  function prependCard(imageSrc, title, text) {
    var newCard = `
        <div class="col-md-6">
          <div class="card">
            <img src="${imageSrc}" class="card-img-top" alt="..." style="height: 300px;" />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${text}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      `;
    $("#cardContainer").prepend(newCard);
  }

  prependCard(
    "/Assets/New Card Image.jpeg",
    "New Card Title",
    "This is a newly added card."
  );
});

$(document).ready(function () {
  // Function to filter and sort cards
  function filterAndSortCards() {
    var selectedFilter = $("input[name='filterRadio']:checked").val();
    var selectedSort = $("input[name='sortRadio']:checked").val();
    var selectedPrice = $("input[name='priceRadio']:checked").val();

    $(".card").hide();

    // Filter cards based on the selected filter
    if (selectedFilter === "short") {
      $(".card:contains('A cheap and quick arctic cruise')").show();
    } else if (selectedFilter === "long") {
      $(".card:contains('A fun month cruise.')").show();
    } else {
      $(".card").show();
    }

    // Filter cards based on the selected price range
    if (selectedPrice) {
      $(".card").each(function () {
        var cardPrice = parseInt($(this).data("price"));
        if (selectedPrice === "low" && cardPrice >= 500) {
          $(this).hide();
        } else if (selectedPrice === "high" && cardPrice < 500) {
          $(this).hide();
        }
      });
    }

    // Sort cards based on the selected sort option
    if (selectedSort === "date added") {
      $(".card-container").prepend($(".card"));
    } else if (selectedSort === "low to high") {
      var cards = $(".card").toArray();
      cards.sort(function (a, b) {
        var dateA = new Date($(a).find(".card-title").text().split(" ")[0]);
        var dateB = new Date($(b).find(".card-title").text().split(" ")[0]);
        return dateA - dateB;
      });
      $(".card-container").empty().append(cards);
    }
  }

  // Initial filter and sort
  filterAndSortCards();

  // Event listener for filter, sort, and price changes
  $("input[name='filterRadio']").change(filterAndSortCards);
  $("input[name='sortRadio']").change(filterAndSortCards);
  $("input[name='priceRadio']").change(filterAndSortCards);
});
$(document).ready(function () {
  // Function to filter and sort cards
  function filterAndSortCards() {
    var selectedFilter = $("input[name='filterRadio']:checked").val();
    var selectedSort = $("input[name='sortRadio']:checked").val();
    var selectedPrice = $("input[name='priceRadio']:checked").val();

    $(".card").hide();

    // Filter cards based on the selected filter
    if (selectedFilter === "short") {
      $(".card:contains('A cheap and quick arctic cruise')").show();
    } else if (selectedFilter === "long") {
      $(".card:contains('A fun month cruise.')").show();
    } else {
      $(".card").show();
    }

    // Filter cards based on the selected price range
    if (selectedPrice) {
      $(".card").each(function () {
        var cardPrice = parseInt($(this).data("price"));
        if (selectedPrice === "low" && cardPrice >= 500) {
          $(this).hide();
        } else if (selectedPrice === "high" && cardPrice < 500) {
          $(this).hide();
        }
      });
    }

    // Sort cards based on the selected sort option
    if (selectedSort === "date added") {
      $(".card-container").prepend($(".card"));
    } else if (selectedSort === "low to high") {
      var cards = $(".card").toArray();
      cards.sort(function (a, b) {
        var dateA = new Date($(a).find(".card-title").text().split(" ")[0]);
        var dateB = new Date($(b).find(".card-title").text().split(" ")[0]);
        return dateA - dateB;
      });
      $(".card-container").empty().append(cards);
    }
  }

  // Initial filter and sort
  filterAndSortCards();

  // Event listener for filter, sort, and price changes
  $("input[name='filterRadio']").change(filterAndSortCards);
  $("input[name='sortRadio']").change(filterAndSortCards);
  $("input[name='priceRadio']").change(filterAndSortCards);
});

$(document).ready(function () {
  var apiKey = "YOUR_API_KEY";
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  var params = {
    lat: -90, // Latitude of the South Pole
    lon: 0, // Longitude of the South Pole
    appid: apiKey,
    units: "metric",
  };

  $.ajax({
    url: apiUrl,
    data: params,
    method: "GET",
    success: function (data) {
      displayWeather(data);
    },
    error: function () {
      $("#weather").text("Failed to retrieve weather data.");
    },
  });

  function displayWeather(data) {
    var weatherInfo = `
        <h2>Current Weather at the South Pole</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    $("#weather").html(weatherInfo);
  }
});
$(document).ready(function () {
  const apiKey = "042044f4ff39339adbdec7d3d8fde33c";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Antarctica&units=metric&appid=" +
    apiKey;

  // Function to update weather information
  function updateWeather() {
    $.get(apiUrl)
      .done(function (data) {
        const temperature = data.main.temp;
        const conditions = data.weather[0].description;

        // Update the weather information on the webpage
        $(".temperature").text(temperature + "°C");
        $(".conditions").text(conditions);
      })
      .fail(function (error) {
        console.error("Error fetching weather data:", error);
      });
  }

  updateWeather();
});
