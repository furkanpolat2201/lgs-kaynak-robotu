const LGS_KAYNAKLAR = {
  "TÜRKÇE": {
    "Kolay": ["Zeka Küpü", "Limit Yayınları", "Simya", "Koray Varol", "İşleyen Zeka"],
    "Orta": ["Ben Korkmam", "Tonguç", "Bilfen", "Nartest Mavi", "Bilfen Protest", "Paragraf Nartest Mavi", "Paragrafın Ritmi Arı", "Paragraf Karekök", "Paraf IQ", "Zoom*", "Çanta Yayınları", "Güçlendiren Türkçe Ankara Y."],
    "Zor": ["Sinan Kuzucu*", "Okyanus Master Paragraf", "Hız*", "Fenomen", "Bilfen ProBil", "Nartest Kırmızı", "Paragraf Fenomen"]
  },
  "MATEMATİK": {
    "Kolay": ["Matematix", "Fenomen Matematik Fasikülleri*", "Arı Matematik", "Nartest İlk Adım", "Antrenmanlarla Matematik", "Yanıt Yayınları", "Mozaik", "Bumerang Matematik"],
    "Orta": ["Okyanus Check Et", "Paraf IQ", "Strateji Bam Bam", "Zoom*", "Prova Akademi Sorular Konuşuyor", "Tudem Kod-32", "Hız Yayınları*", "Güçlendiren Matematik Ankara Yayıncılık", "Tonguç", "Çanta Yayınları", "Fenomen A", "Paraf"],
    "Zor": ["Tudem", "Newton All Star", "Bilfen-ProBil", "Muba Mutlak Başarı", "Okyanus Master", "Fenomen B", "Sinan Kuzucu", "Kafadengi Challenger", "Fenomen Geometri Tabanlı"]
  },
  "FEN BİLİMLERİ": {
    "Kolay": ["Süper A Akademi Nitelik Y.", "Bilfen Yayınları"],
    "Orta": ["Paraf IQ", "Okyanus Check Et", "Mozaik", "Zoom", "Nitelik B", "Tudem Kod-32", "Hız Yayınları*", "Palme Plus", "Kafadengi Fen Bilimleri Kafası", "Nartest Mavi", "Fenomen", "Güçlendiren Fen Bilimleri Ankara Y."],
    "Zor": ["Newton Allstar", "Okyanus Master-Update", "Çanta Yayınları", "Kafadengi Challenger"]
  },
  "T.C. İNKILAP TARİHİ VE ATATÜRKÇÜLÜK": {
    "Kolay": ["Tonguç Akademi", "Puan Yayınları", "Okyanus Classmate", "Nartest Yeşil", "Av Akıllı Versiyon Yayınları"],
    "Orta": ["Ulti", "Palme", "Limit Yayınları", "İnkılap Kafası Kafadengi", "Nartest Mavi", "Hız Yayınları", "Fenomen", "Güçlendiren İnkılap Ankara Y.", "Zoom", "Paraf"],
    "Zor": ["Sinan Kuzucu"]
  },
  "DİN KÜLTÜRÜ VE AHLAK BİLGİSİ": {
    "Kolay": ["Okyanus Yayınları CLASSMATE Soru Bankası", "Tonguç Yayınları Taktikli Soru Bankası"],
    "Orta": ["Tonguç Yayınları Dinamo Soru Bankası",
    "Palme Yayıncılık Konu Anlatımlı",
    "Tudem Yayınları – Din Kültürü HBA",
    "Nartest Yayınları – Altın Nokta Mavi Seri Bankası",
    "Nitelik Yayınları – Süper Soru Kitabı",
    "Hız Yayınları Soru Bankası"],
    "Zor": ["Bilfen Yayınları –Pro Test Yeni Nesil Soru Bankası","Palme Yayınları – Plus Serisi Yeni Nesil Soru Kitabı"]
  },
  "İNGİLİZCE": {
    "Kolay": ["Tonguç Dinamo"],
    "Orta": ["İngilizce Kafası Kafadengi", "Palme Plus", "More and More", "Ahead With English", "Joyfull", "Shall We", "Hız Yayınları", "Fenomen", "Güçlendiren İngilizce Ankara Y.", "Zoom", "Paraf"],
    "Zor": ["YDS Publishing", "Team Elt", "Masterclass", "Yanıt Yayınları"]
  }
};

// --- HTML Elementlerini Seçme ---
const dersSecim = document.getElementById('ders-secim');
const seviyeSecim = document.getElementById('seviye-secim');
const seviyeEtiketi = document.getElementById('seviye-etiketi');
const kaynakListesi = document.getElementById('kaynak-listesi');

// --- Başlangıç: Ders Seçim Alanını Doldurma ---
function dersleriDoldur() {
    const dersler = Object.keys(YKS_KAYNAKLAR); 
    
    dersler.forEach(ders => {
        const option = document.createElement('option');
        option.value = ders;
        option.textContent = ders;
        dersSecim.appendChild(option);
    });
}

// --- Olay Dinleyicileri (Events) ---

// 1. Ders seçildiğinde çalışacak fonksiyon
dersSecim.addEventListener('change', (event) => {
    const secilenDers = event.target.value;
    
    // Seviye menüsünü ve etiketi temizle/gizle
    seviyeSecim.innerHTML = '<option value="">-- Seviye Seçiniz --</option>';
    kaynakListesi.innerHTML = '';
    seviyeSecim.style.display = 'none';
    seviyeEtiketi.style.display = 'none';
    
    if (secilenDers) {
        const seviyeler = Object.keys(YKS_KAYNAKLAR[secilenDers]);

        // Seviye menüsünü doldur
        seviyeler.forEach(seviye => {
            const option = document.createElement('option');
            option.value = seviye;
            option.textContent = seviye;
            seviyeSecim.appendChild(option);
        });

        // Seviye menüsünü ve etiketi görünür yap
        seviyeSecim.style.display = 'block';
        seviyeEtiketi.style.display = 'block';
    }
});

// 2. Seviye seçildiğinde çalışacak fonksiyon
seviyeSecim.addEventListener('change', (event) => {
    const secilenDers = dersSecim.value;
    const secilenSeviye = event.target.value;
    kaynakListesi.innerHTML = ''; 

    if (secilenDers && secilenSeviye) {
        const kaynaklar = YKS_KAYNAKLAR[secilenDers][secilenSeviye];
        
        // Seçilen seviyeye göre CSS sınıfı adı ve ikon belirleniyor
        let className = '';
        let emoji = '';
        
        if (secilenSeviye === "TEMEL DÜZEY") {
            className = "kolay-kaynak"; // style.css'deki yeşil renk
            emoji = "🟢"; 
        } else if (secilenSeviye === "ORTA DÜZEY") {
            className = "orta-kaynak"; // style.css'deki mavi renk
            emoji = "🔵"; 
        } else if (secilenSeviye === "İLERİ DÜZEY") {
            className = "zor-kaynak"; // style.css'deki kırmızı renk
            emoji = "🔴"; 
        }

        kaynaklar.forEach(kaynak => {
            const listItem = document.createElement('li');
            
            // Emoji'yi kaynak adının önüne ekle
            listItem.innerHTML = `<span class="list-emoji">${emoji}</span> ${kaynak}`;
            
            // Oluşturulan CSS sınıfını <li> öğesine ekle
            listItem.classList.add(className); 
            
            kaynakListesi.appendChild(listItem);
        });
    }
});

// Uygulama yüklendiğinde dersleri doldur

dersleriDoldur();
