// main.js
function clearInput() {
  document.getElementById("input").value = null;
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("modal").innerHTML = "";
  document.getElementById("untung").innerHTML = "";
  document.getElementById("persen").innerHTML = "";
  document.getElementById("selection").selectedIndex = 0;
}

function calculateValues(selection, maxHealth, componentDivider) {
  var health = parseFloat(document.getElementById("input").value);
  var maxHealthValue = maxHealth;
  var dl = maxHealthValue - health;

  if (health > maxHealthValue || health < 1 || isNaN(health)) {
    Swal.fire({
      icon: 'warning',
      title: 'Health hanya diperbolehkan antara 1 - '+maxHealthValue+'!',
    }); 
    clearInput();
  } else {
    var komponen = dl / componentDivider;
    var persen = Math.round((health / maxHealthValue) * 100);
    var hasil = Math.round(komponen);
    var modal = (Math.round(komponen) * 0.55).toFixed(2);
    var untung = `${(komponen * 0.55 + 10).toFixed(2)} - $${(komponen * 0.55 + 20).toFixed(2)}`;

    document.getElementById("persen").innerHTML = persen + "%";
    document.getElementById("hasil").innerHTML = hasil + " Component";
    document.getElementById("modal").innerHTML = "Modal: $" + modal;
    document.getElementById("untung").innerHTML = "Rekomendasi: $" + untung;
  }
}

function update() {
  var selection = document.getElementById("selection").value;

  switch (selection) {
    case "Health 2.000 (Mobil/Truk)":
      calculateValues(selection, 2000, 4);
      break;
    case "Health 1.500 (Motor)":
      calculateValues(selection, 1500, 3);
      break;
    case "Health 3.000 (Ambulance)":
      calculateValues(selection, 3000, 6);
      break;
    default:
      Swal.fire({
        icon: 'warning',
        title: 'Pilih jenis kendaraan!',
    });
      break;
  }
}