import "./Menu.less";

// Kullanacağımız veri bu, üzerinde çalışın ama henüz hiçbir şeyi değiştirmeyin.
let menuElemanlari = [
  "Gündem",
  "Dünya",
  "Ekonomi",
  "Yazarlar",
  "Burç Yorumları",
  "Diğer",
];

/*
  Adım 1: Aşağıdaki etiketlee gibi bir menü oluşturmak için 'menuYapici' adlı bir bileşen yazın:

  <div class="menu">
    <ul>
      {tüm menü elemanları <li> içlerine}
    </ul>
  </div>

  'menuYapici' fonksiyonu tek argümanı olarak bir menü elemanları dizisini alır (birinci parametre).

  Adım 2: Fonksiyonun içinde, dizideki her öğe için bir liste <li> öğesi oluşturarak dizi üzerinde yineleme yapın.
  Tüm bu öğeleri <ul>'a ekleyin

  Adım 3: Hala fonksiyon içindeyiz, DOM'dan menü düğmesini seçin ('menu-button' sınıfına(class) sahip öğe).

  Adım 4: Menü butonuna bir `click` event dinleyicisi ekleyin. Butona her tıklanıldığında div.menu classına `menu--open`('menu' class'ına sahip olan div) ekleyip/silecek(toogle).
  
  İPUCU: Javascript'te toogle metotları bir öğeyi bir elemana ekleyip/çıkarmaya yarar. Örnek olarak bir öğeye tıklandığında bir class toogle'ı kullanıldığında, o öğreye tıklandığında eğer o class ismi öğede yoksa ekler, eğer o class ismi öğede varsa siler. Toogle - aç kapa manasına da gelir.

  Adım 5: Oluştrulan div.menu 'yü döndürmeyi unutmayın.

  Adım 6: 'menuYapici' fonksiyonunu ve 'menuElemanlari' dizisini kullanarak menüyü oluşturun, ve döndürülen menüyü header'e ekleyin.
*/

function menuYapici(menuList) {
  const bodyEl = document.getElementsByClassName("header")[0]; // html'den header elemanını seçiyoruz. Biz list döndüğünden 0'ncısı seçiyoruz
  const menuContainer = document.createElement("div"); // div tipinde bir element oluşturuyoruz <div></div>
  const elements = document.createElement("ul"); // ul tipinde bir element oluşturduk  <ul></ul>
  menuContainer.classList.add("menu"); // 60'ncı satırda oluşturduğumuz  <div class="menu"></div>
  menuContainer.appendChild(elements); // 62'dekini 60'a eleman  <div class="menu"><ul></ul></div>

  menuList.map((liItem) => {
    // fonksiyonda tanımladığımız parametre için, map dönüyoruz
    const menuItem = document.createElement("li"); // li elemanı oluşturuyoruz <li></li>
    menuItem.textContent = liItem; // 67'da oluşturduğumuz li içine "liItem"dan gelen metni <li>olalala</li>
    elements.appendChild(menuItem); // 61'deki elements elemanına li elemanını cocuk olarak veriyoruz.
    // <div class="menu"><ul><li>oallalalal</li></ul></div>
  });
  // <div class="menu"><ul><li>oallalalal</li><li>oallalalal</li></ul></div>
  // <div class="menu"><ul><li>oallalalal</li><li>oallalalal</li><li>oallalalal</li></ul></div>
  // <div class="menu"><ul><li>oallalalal</li><li>oallalalal</li><li>oallalalal</li><li>oallalalal</li></ul></div>
  // <div class="menu"><ul><li>oallalalal</li><li>oallalalal</li><li>oallalalal</li><li>oallalalal</li><li>oallalalal</li></ul></div>

  bodyEl.appendChild(menuContainer); // menüyü header içine ekliyor
  const button1 = document.querySelector(".menu-button"); // ekrandan menü butonunu seçiyor
  button1.addEventListener("click", () => {
    // buton1'e tıklanma durumunu dinlemeye başlıyoruz
    menuContainer.classList.toggle("menu--open"); // <div class="menu menu--open"></div>
  });
}

menuYapici(menuElemanlari); // fonksiyon ile, yukarıdaki data listesi ile çalıştırıyor.
