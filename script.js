function clearInput() {
  document.getElementById("input").value = null;
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("modal").innerHTML = "";
  document.getElementById("persen").innerHTML = "";
  document.getElementById("selection").selectedIndex = 0;
  document.getElementById("alert").classList.add("d-none");
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) { 
    event.preventDefault();
    clearInput(); 
  }
});

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
    var hasil = Math.trunc(komponen);
    var modal = (hasil * 0.55).toFixed(2);

    console.log(komponen);
    console.log(persen);
    console.log(hasil);
    console.log(modal);

    document.getElementById("persen").innerHTML = "Persentase: " + persen + "%";
    document.getElementById("hasil").innerHTML =  "Komponen: " + hasil;
    document.getElementById("modal").innerHTML = "Harga komponen: $" + modal;
    document.getElementById("alert").classList.remove("d-none");
  }
}

document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) { 
    event.preventDefault(); 
    update(); 
  }
});

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
    case "Health 1.000 (Kendaraan tanpa upgrade mesin)":
      calculateValues(selection, 1000, 2);
      break;
    default:
      Swal.fire({
        icon: 'warning',
        title: 'Pilih jenis kendaraan!',
    });
      break;
  }
}
