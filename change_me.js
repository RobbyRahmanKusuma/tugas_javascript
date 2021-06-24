
/**
 * 
 * Diberikan sebuah function changeMe(arr) yang menerima satu parameter
 * berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan)
 * First Name, Last Name, Gender dan Birth Year.
 * 
 * Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age.
 * Nilai age didapatkan dari tahun sekarang dikurang tahun lahir.
 * Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'
 * 
 * Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:
 * 
 * Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
 * John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
 * 
 */


function changeMe(arr) {
    for (let i=0; i<arr.length; i++) {
        let output = {};
        for (let j=0; j<arr[i].length+1; j++) {
            if (j === 0) {
                console.log(i+1+'. '+arr[i][j]+' '+arr[i][j+1]+':');
                output.firstName = arr[i][j];
            } else if (j === 1) {
                output.lastName = arr[i][j];
            } else if (j === 2 ) {
                output.gender = arr[i][j];
            } else if (j === 3) {
                if (arr[i][j] !== undefined) {
                    output.age = 2021 - arr[i][j];
                } else {
                    output.age = 'Invalid Birth Year';
                }
            }
        }
        console.log(output);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }              // seharusnya age: 39 klo tahunnya 2021
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
