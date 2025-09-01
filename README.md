Soal 1
log/info/debug                  ---->cetak biasa.

console.log()	Menampilkan pesan biasa ke konsol.
console.info()	Sama seperti log(), tapi secara semantik menunjukkan informasi umum.
console.debug()	Digunakan untuk debugging, bisa disembunyikan di beberapa browser kecuali mode debug aktif.

warn/error                      ---->tandai masalah.

console.warn()	Menampilkan peringatan, biasanya berwarna kuning di browser console.
console.error()	Menampilkan kesalahan/masalah serius, biasanya berwarna merah.

table/dir/dirxml                ---->tampilkan data dengan format rapi.

console.table(obj)	Menampilkan array atau objek dalam bentuk tabel.
console.dir(obj)	Menampilkan properti objek sebagai list yang dapat dikembangkan.
console.dirxml(node)	Menampilkan representasi XML dari node DOM.

group/groupCollapsed/groupEnd   ---->bikin output berkelompok.

group() → tampil terbuka.
groupCollapsed() → tampil tertutup, bisa dibuka klik panah.
groupEnd() → menutup grup.

count/countReset                ---->hitung jumlah panggilan.

time/timeLog/timeEnd/timeStamp  ---->ukur performa.

console.time(label)	Mulai stopwatch.
console.timeLog(label)	Menunjukkan waktu berjalan sementara.
console.timeEnd(label)	Mengakhiri stopwatch dan tampilkan waktu total.
console.timeStamp(label)	Menambahkan penanda waktu di performance timeline (jarang dipakai langsung).

assert/trace                    ---->cek kondisi & jejak fungsi.

console.assert(condition, message)	Jika kondisi false, tampilkan pesan.
console.trace()	Tampilkan jejak (stack trace) pemanggilan fungsi.


document.getElementById         ---->untuk mengambil element HTML berdasarkan Id

innerHTML                       ---->Digunakan untuk mengubah atau mengambil isi HTML dari elemen.
