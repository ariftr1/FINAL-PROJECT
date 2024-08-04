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