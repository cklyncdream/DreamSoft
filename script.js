function goToSection(id) {
  // Tüm ekranları gizle
  document.querySelectorAll(".screen").forEach(sec => {
    sec.classList.remove("active");
  });

  // İstediğimiz ekranı göster
  document.getElementById(id).classList.add("active");
}

// İlk açılışta giriş ekranını aktif et
document.getElementById("giris").classList.add("active");
