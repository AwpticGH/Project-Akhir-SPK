const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//bobot
let dataKaryawan = [];
const bobot = {
  kedisiplinan: 0.2,
  hasilKerja: 0.25,
  pengetahuan: 0.2,
  sikap: 0.2,
  kerjaSama: 0.2,
};

//pembagi
function calculatePembagi(data) {
  const keys = Object.keys(data[0]);
  const pembagi = {};

  for (const key of keys) {
    if (key !== 'nama') {
      const squaredSum = data.reduce((sum, karyawan) => sum + (karyawan[key] ** 2), 0);
      pembagi[key] = Math.sqrt(squaredSum);
    }
  }

  return pembagi;
}

//matriks keputusan
function normalisasiMatriksKeputusan(data, pembagi) {
  const keys = Object.keys(data[0]);
  const matriks = [];

  for (const karyawan of data) {
    const hasil = {};
    for (const key of keys) {
      if (key !== 'nama') {
        hasil[key] = karyawan[key] / pembagi[key];
      }
    }
    matriks.push(hasil);
  }

  return matriks;
}

//matriks ternormalisasi terbobot
function hitungMatriksTernormalisasiTerbobot(ternormalisasi, bobot) {
  const keys = Object.keys(ternormalisasi[0]);
  const matriks = [];

  for (const karyawan of ternormalisasi) {
    const hasil = {};
    for (const key of keys) {
      if (key !== 'nama') {
        hasil[key] = karyawan[key] * bobot[key];
      }
    }
    matriks.push(hasil);
  }

  return matriks;
}

//A+ A-
function cariSolusiIdeal(matriksTernormalisasiTerbobot) {
  const keys = Object.keys(matriksTernormalisasiTerbobot[0]);
  const aPlus = {};
  const aMinus = {};

  for (const key of keys) {
    const max = Math.max(...matriksTernormalisasiTerbobot.map((row) => row[key]));
    const min = Math.min(...matriksTernormalisasiTerbobot.map((row) => row[key]));

    aPlus[key] = max;
    aMinus[key] = min;
  }

  return { aPlus, aMinus };
}

//D+ D- Euclidan
function hitungJarakEuclidean(ternormalisasiTerbobot, aPlus, aMinus) {
  const keys = Object.keys(ternormalisasiTerbobot[0]);
  const dPlus = [];
  const dMinus = [];

  for (const karyawan of ternormalisasiTerbobot) {
    let sumDPlus = 0;
    let sumDMinus = 0;
    for (const key of keys) {
      sumDPlus += (karyawan[key] - aPlus[key]) ** 2;
      sumDMinus += (karyawan[key] - aMinus[key]) ** 2;
    }
    dPlus.push(Math.sqrt(sumDPlus));
    dMinus.push(Math.sqrt(sumDMinus));
  }

  return { dPlus, dMinus };
}

//preferensi(v)
function hitungNilaiPreferensi(dPlus, dMinus) {
  const nilaiPreferensi = [];
  for (let i = 0; i < dPlus.length; i++) {
    const value = dMinus[i] / (dPlus[i] + dMinus[i]);
    nilaiPreferensi.push(value);
  }
  return nilaiPreferensi;
}

//rangking
function perangkingan(dataKaryawan, nilaiPreferensi) {
  const perangkingan = dataKaryawan.map((karyawan, index) => ({
    nama: karyawan.nama,
    nilaiPreferensi: nilaiPreferensi[index],
  }));

  
  perangkingan.sort((a, b) => b.nilaiPreferensi - a.nilaiPreferensi);

  return perangkingan;
}

//function (console)
function tambahDataKaryawan() {
  rl.question("Masukkan nama karyawan: ", (nama) => {
    rl.question("Masukkan nilai kedisiplinan (1-4): ", (kedisiplinan) => {
      rl.question("Masukkan nilai hasil kerja (1-4): ", (hasilKerja) => {
        rl.question("Masukkan nilai pengetahuan (1-4): ", (pengetahuan) => {
          rl.question("Masukkan nilai sikap (1-4): ", (sikap) => {
            rl.question("Masukkan nilai kerja sama (1-4): ", (kerjaSama) => {
              dataKaryawan.push({
                nama,
                kedisiplinan: parseInt(kedisiplinan),
                hasilKerja: parseInt(hasilKerja),
                pengetahuan: parseInt(pengetahuan),
                sikap: parseInt(sikap),
                kerjaSama: parseInt(kerjaSama),
              });

              rl.question("Tambah data karyawan lain? (yes/no): ", (jawaban) => {
                if (jawaban.toLowerCase() === 'yes') {
                  tambahDataKaryawan(); 
                } else {
                  rl.close();
                  // Topsis Calculation
                  const pembagi = calculatePembagi(dataKaryawan);
                  const matriksTernormalisasi = normalisasiMatriksKeputusan(dataKaryawan, pembagi);
                  const matriksTernormalisasiTerbobot = hitungMatriksTernormalisasiTerbobot(matriksTernormalisasi, bobot);
                  const { aPlus, aMinus } = cariSolusiIdeal(matriksTernormalisasiTerbobot);
                  const { dPlus, dMinus } = hitungJarakEuclidean(matriksTernormalisasiTerbobot, aPlus, aMinus);
                  const nilaiPreferensi = hitungNilaiPreferensi(dPlus, dMinus);
                  const hasilPerangkingan = perangkingan(dataKaryawan, nilaiPreferensi);

                  //Tampilkan Tabel Matriks Keputusan
                  console.log("Tabel Matriks Keputusan:");
                  console.table(dataKaryawan);

                  //  Tampilkan Tabel Pembagi
                  console.log("Tabel Pembagi:");
                  console.table(pembagi);

                  // Tampilkan Tabel Matriks Ternormalisasi
                  console.log("Tabel Matriks Ternormalisasi:");
                  console.table(matriksTernormalisasi);

                  //Tampilkan Tabel Matriks Ternormalisasi Terbobot
                  console.log("Tabel Matriks Ternormalisasi Terbobot:");
                  console.table(matriksTernormalisasiTerbobot);

                  //Tampilkan Tabel A+ dan A-
                  console.log("Tabel A+ (Solusi Ideal Positif):");
                  console.table(aPlus);
                  console.log("Tabel A- (Solusi Ideal Negatif):");
                  console.table(aMinus);

                  //Tampilkan Tabel D+ dan D-
                  console.log("Tabel D+ (Jarak Euclidean ke A+):");
                  console.table(dPlus);
                  console.log("Tabel D- (Jarak Euclidean ke A-):");
                  console.table(dMinus);

                  //Tampilkan Tabel Preferensi (v)
                  console.log("Tabel Nilai Preferensi (Closeness Coefficient):");
                  console.table(nilaiPreferensi);

                  // Tampilkan Tabel Perangkingan
                  console.log("Tabel Perangkingan Karyawan Berdasarkan Metode TOPSIS:");
                  console.table(hasilPerangkingan);
                }
              });
            });
          });
        });
      });
    });
  });
}

tambahDataKaryawan();
