## SOAL NO 2B
## Lirik Lagu: Little Piece of Heaven

## Deskripsi
Ini adalah sebuah proyek yang menyimpan lirik lagu "Little Piece of Heaven" oleh Avenged Sevenfold dalam format JSON dan JavaScript. Proyek ini mencakup data lirik lagu dan skrip untuk mencari lirik tertentu dari array lirik.

## Struktur Data

Data lagu disimpan dalam format JSON yang mencakup:
- **artist**: Nama artis.
- **songTitle**: Judul lagu.
- **songLyrics**: Lirik lengkap lagu dalam format string.
- **songLyricsArr**: Array dari setiap baris lirik lagu.

### Contoh Data JSON

```json
{
  "status": true,
  "data": {
    "artist": "Avenged Sevenfold",
    "songTitle": "Little Piece of Heaven",
    "songLyrics": "Before the story begins, is it such a sin\nFor me to take what's mine, until the end of time?\nWe were more than friends, before the story ends\nAnd I will take what's mine, create what God would never design\nOur love had been so strong for far too long",
    "songLyricsArr": [
      "Before the story begins, is it such a sin",
      "For me to take what's mine, until the end of time?",
      "We were more than friends, before the story ends",
      "And I will take what's mine, create what God would never design",
      "Our love had been so strong for far too long",
      "I was weak with fear that somethin' would go wrong",
      ...
    ]
  }
}


## SKRIP JAVASKRIPT
const lirik_lagu = {
  "status": true,
  "data": {
    "artist": "Avenged Sevenfold",
    "songTitle": "Little Piece of Heaven",
    "songLyrics": "Before the story begins, is it such a sin\nFor me to take what's mine, until the end of time?\nWe were more than friends, before the story ends\nAnd I will take what's mine, create what God would never design\nOur love had been so strong for far too long",
    "songLyricsArr": [
      "Before the story begins, is it such a sin",
      "For me to take what's mine, until the end of time?",
      "We were more than friends, before the story ends",
      ...
    ]
  }
};

const songLyricsArr = lirik_lagu.data.songLyricsArr;
const targetLyric = "For me to take what's mine, until the end of time?";
const foundLyric = songLyricsArr.find(lyric => lyric === targetLyric);

console.log(foundLyric);


## CARA MENJALANKAN
1.Simpan data JSON di file data.json.
2.Simpan skrip JavaScript di file script.js.
3.Jalankan script.js menggunakan Node.js dengan perintah: node script.js
