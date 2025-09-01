// // //Soal 1
// log/info/debug //cetak biasa.

// warn/error //tandai masalah.

// table/dir/dirxml //tampilkan data dengan format rapi.

// group/groupCollapsed/groupEnd //bikin output berkelompok.

// count/countReset //hitung jumlah panggilan.

// time/timeLog/timeEnd/timeStamp //ukur performa.

// assert/trace //cek kondisi & jejak fungsi.

// document.getElementById //untuk mengambil ID

// innerHTML //untuk menampilkan kata dalam tag


//Level 1
//1
console.log("Halo JavaScript!");

//2
console.log(100 - 50);
console.log(10 * 5);

//3
console.log("nama saya Muhammad Rizqi Setiawan");
console.log("saya berusia 19 tahun");

//4
alert("Selamat datang!");

//5
alert(15 + 20);

//6
let buahFavorit = prompt('Apa buah favorit anda?')

//7
let asalKota = prompt('Berasal dari kota manakah anda?')
alert('Anda berasal dari kota ' + asalKota)

//8
document.getElementById('pesan').innerHTML = "Ini adalah paragraf dari JavaScript.";

//9
document.getElementById('judul').innerHTML = "Tugas selesai!";

//10
document.getElementById('hasil-hitung').innerHTML =(20 / 5 + 10);

//Level 2
//1
let namaSaya = ('Muhammad Rizqi Setiawan')
console.log('nama anda adalah ' + namaSaya)

//2
let hargaBarang1 =(5000)
let hargaBarang2 =(10000)
console.log('Total harga barang ' + (hargaBarang1 + hargaBarang2))

//3
let nomer = prompt('masukkan angka keberuntungan anda')
console.log(nomer * 2)

//4
let kata = prompt('masukkan kata kata hari ini')
alert(kata)

//5
let persetujuan = confirm("Apakah anda setuju dengan kebijakan kami?");
console.log(persetujuan);

//6
let nama = prompt('masukkan nama anda?')
console.log('Informasi pengguna: ' + nama)

//7
let nomer1 = prompt('masukkan angka pertama anda')
let nomer2 = prompt('masukkan angka kedua anda')
document.getElementById('hasil-kali').innerHTML =(nomer1 * nomer2)

//8
console.warn('Peringatan! Website ini sedang dalam perbaikan')

//9
function kirimData() {
console.error('Terjadi kesalahan pada data!');
}

//10
let salam = "selamat";
let waktu = "pagi";
console.log(salam + " " + waktu);

//Level 3
//1
let angkaLagi = prompt('Masukkan angka ganjil atau genap')
if (angkaLagi %2 === 0){
    console.log('genap')
} else {
    console.log('ganjil')
}

//2
let nilai = prompt('Masukkan nilai ujian anda')
if (nilai <= 70){
    console.warn('nilai ujianmu hanya ' + nilai)
} else {
    console.info(nilai)
}

//3
let pertanyaan = prompt('Siapa pencipta JavaScript?')
if (pertanyaan === "Brendan Eich" ){
    alert('jawaban anda benar!')
} else {
    alert("jawaban anda salah, coba lagi");
}

//4
console.group("Data User");
console.log("Nama: M.Rizqi");
console.log("Umur: 19");
console.log("Pekerjaan: Programmer");
console.groupEnd();

//5
let P1 = Number(prompt("Bandingkan nomer pertama"));
let P2 = Number(prompt("Bandingkan nomer kedua"));

if (P1 > P2) {
  console.table([{ hasil: "Angka1 lebih besar dari angka2" }]);
} else if (P1 === P2) {
  console.table([{ hasil: "Kedua angka sama besar" }]);
} else {
  console.table([{ hasil: "Angka1 lebih kecil dari angka2" }]);
}

//6
let batasUsia = prompt("Masukkan usia Anda:");

if (batasUsia >= 13) {
  alert("Anda seorang remaja.");
} else {
  alert("Anda bukan remaja.");
}

//7
let totalBelanja = prompt("Masukkan jumlah total belanja Anda:")

if (totalBelanja > 100000) {
  alert("Selamat! Anda mendapatkan diskon 10%");
} else {
  alert("Belanja lagi untuk mendapatkan diskon");
}

//8
let lanjut = confirm("Apakah Anda ingin melanjutkan?")

if (lanjut) {
  document.getElementById("status").innerHTML = "Anda melanjutkan.";
} else {
  document.getElementById("status").innerHTML = "Anda membatalkan.";
}

//9
console.time("Looping 1 sampai 1000");

for(let i = 0; i <=1000; i++){
}

console.timeEnd("Looping 1 sampai 1000");

//10
let Nama = prompt("Masukkan nama Anda:");
let tahunLahir = prompt("Masukkan tahun lahir Anda:");

let tahunIni = new Date().getFullYear();
let umur = tahunIni - tahunLahir;

console.log("Halo " + Nama + ", usia Anda adalah " + umur + " tahun.");