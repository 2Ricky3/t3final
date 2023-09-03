$(document).ready(function () {
  let selectedTrip = localStorage.getItem("selectedTrip");
  selectedTrip = JSON.parse(selectedTrip);
  console.log(selectedTrip);

  const newRow = `

<tr>
  <td>${selectedTrip.title}</td>
  <td>${selectedTrip.description}</td>
  <td>${selectedTrip.price}</td>
  <td> <button class="remove">Remove</button>
</td>
</tr>
`;
  $("#selected-trips-table tbody").append(newRow);

  $(".remove").click(function (e) {
    localStorage.clear();
    window.location.href = "checkout.html";
  });
});
