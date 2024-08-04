## SOAL NO 4
## Program Perhitungan Nilai dan Grade

## Deskripsi
Program ini adalah skrip TypeScript yang menghitung rata-rata nilai dari beberapa mata pelajaran dan menentukan grade berdasarkan rata-rata tersebut. Skrip ini mencakup dua fungsi utama:
- `getGrade(score: number): string` untuk menentukan grade berdasarkan nilai.
- `calculateAverageAndGrade(webProgramming: number, computerProgramming: number, statistics: number, databaseSystems: number): { average: number; grade: string }` untuk menghitung rata-rata nilai dan menentukan grade berdasarkan rata-rata.

## Fungsi

### `getGrade(score: number): string`

Fungsi ini menentukan grade berdasarkan nilai yang diberikan.

#### Parameter
- `score`: Nilai numerik dari 0 hingga 100.

#### Output
- Mengembalikan grade dalam bentuk string ('A', 'B', 'C', 'D', atau 'E').

### `calculateAverageAndGrade(webProgramming: number, computerProgramming: number, statistics: number, databaseSystems: number): { average: number; grade: string }`

Fungsi ini menghitung rata-rata nilai dari empat mata pelajaran dan menentukan grade berdasarkan rata-rata tersebut.

#### Parameter
- `webProgramming`: Nilai untuk mata pelajaran Pemrograman Web.
- `computerProgramming`: Nilai untuk mata pelajaran Pemrograman Komputer.
- `statistics`: Nilai untuk mata pelajaran Statistik.
- `databaseSystems`: Nilai untuk mata pelajaran Sistem Basis Data.

#### Output
- Mengembalikan objek yang berisi rata-rata nilai (`average`) dan grade (`grade`).

## Contoh Penggunaan

```typescript
try {
    const webProgramming = 85;
    const computerProgramming = 90;
    const statistics = 78;
    const databaseSystems = 88;

    const result = calculateAverageAndGrade(webProgramming, computerProgramming, statistics, databaseSystems);
    console.log(`Average: ${result.average.toFixed(2)}`);
    console.log(`Grade: ${result.grade}`);
} catch (error) {
    console.error((error as Error).message);
}


## OUTPUT
Average: 85.25
Grade: B
