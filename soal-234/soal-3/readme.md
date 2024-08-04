## SOAL NO 3
## Fungsi `cetakSegitiga`

Fungsi `cetakSegitiga` digunakan untuk mencetak pola segitiga bintang ke konsol. Segitiga ini memiliki tinggi yang ditentukan oleh parameter fungsi dan akan dicetak dengan bintang (`*`) dalam format yang teratur.

## Deskripsi

Fungsi ini menerima satu parameter:

- `tinggi` (number): Tinggi dari segitiga yang akan dicetak.

Fungsi ini akan mencetak pola segitiga ke konsol. Setiap baris dari segitiga berisi bintang yang jumlahnya sesuai dengan nomor baris tersebut.

## Contoh Penggunaan

```typescript
function cetakSegitiga(tinggi: number): void {
    for (let i = 1; i <= tinggi; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}

cetakSegitiga(20);

## HASIL
Jika Anda menjalankan kode di atas dengan cetakSegitiga(20), hasil yang dicetak ke konsol adalah segitiga bintang dengan tinggi 20 baris, seperti berikut:

*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * * * *
* * * * * * * *
* * * * * * * * *
* * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * * *
* * * * * * * * * * * * *
* * * * * * * * * * * * * *
* * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * *