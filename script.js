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
    const dersler = Object.keys(LGS_KAYNAKLAR); 
    
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
    
    seviyeSecim.innerHTML = '<option value="">-- Seviye Seçiniz --</option>';
    kaynakListesi.innerHTML = '';
    seviyeSecim.style.display = 'none';
    seviyeEtiketi.style.display = 'none';
    
    if (secilenDers) {
        const seviyeler = Object.keys(LGS_KAYNAKLAR[secilenDers]);

        seviyeler.forEach(seviye => {
            const option = document.createElement('option');
            option.value = seviye;
            option.textContent = seviye;
            seviyeSecim.appendChild(option);
        });

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
        const kaynaklar = LGS_KAYNAKLAR[secilenDers][secilenSeviye];
        
        // Renk atama mantığı
        let className = 'orta-kaynak';
        let emoji = '🔵'; 
        
        if (secilenSeviye === "Kolay") {
            className = "kolay-kaynak";
            emoji = "🟢"; 
        } else if (secilenSeviye === "Zor") {
            className = "zor-kaynak";
            emoji = "🔴"; 
        } else if (secilenSeviye === "Tek Seviye") { // Din Kültürü gibi tek seviyeli dersler için (Önceki kodunuzda yoktu, bu yüzden ekledik)
            className = "orta-kaynak";
            emoji = "🔵"; 
        }

        kaynaklar.forEach(kaynak => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="list-emoji">${emoji}</span> ${kaynak}`;
            listItem.classList.
