## Krama Front-end starter kit
Stuktur folder ini adalah package folder untuk development front-end dengan menggunakan react.
Mengapa kita menggunakan folder ini padahal kita masih belum implementasi ke react? Karena untuk memudahkan ketika nanti akan memigrasi pekerjaan kita yang asalnya html, css, dan javascript biasa ke react.

Jadi di dalam package ini secara umum terdapat beberapa folder dengan struktur

public
src
  components --> folder ini untuk komponen html kita, misal button.html, navbar.html
    button.html
    navbar.html
  pages --> folder ini untuk html page kita, misal about.html, contact.html
    about.html
    contact.html
  scss --> folder ini untuk menyimpan file .scss kita, didalamnya masih terdapat beberapa folder lagi
    base --> untuk menyimpan style yang umum
    components --> untuk menyimpan style per komponen
    layout  --> untuk menyimpan style yang berkaitan dengan layout, seperti grid
    pages  --> untuk menyimpan style yang khusus ada pada halaman tertentu
    main.scss


## Petunjuk nge-push komponen masing-masing ke gitlab
1. Buat folder Krama di komputer masing-masing
2. Buka terminal, dan masuk ke folder Krama tadi
3. Clone repository online ini ke dalam folder krama tadi, caranya:
    a. bagi yang sudah setting ssh
        git clone git@gitlab.com:devs-hotel-management-system/front-end/front-end.git
    b. bagi yang belum setting ssh
        git clone https://gitlab.com/devs-hotel-management-system/front-end/front-end.git
4. Cek nama dan alamat repository kita apakah sudah benar dengan
        git remote -v
5. Cek sekarang ada di branch mana dan apakah branch develop ada dalam list branch kita
        git branch -a
    nanti akan muncul daftar branch kita, 
    yang berwarna hijau adalah branch yang sudah ter-pull ke folder lokal kita, 
    yang berwarna merah adalah branch yang ada di repository online, pastikan diantara yang merah terdapat branch develop.
6. Checkout ke branch develop untuk nge-pull folder dan file yang ada disana
        git checkout develop
    setelah kita lakukan perintah diatas, maka seluruh folder dan file di branch develop akan ada (muncul) di folder lokal kita.
7. Pastikan apakah kita sudah ada di branch develop
        git status
8. Buat branch baru sesuai dengan komponen yang kita kerjakan, misal komponen navbar, maka kita buat branch dengan nama component/navbar
        git checkout -b component/navbar develop
    maka semua folder dan file yang ada di branch develop akan ada juga di branch componen/navbar.
    hanya didalam branch componen/navbar dimana kita bisa memasukkan file navbar.html atau navbar.css.
    simpan file-file tersebut pada folder yang seharusnya. misal navbar.html disimpan di ./src/components, dll.
    
    Ingat!!!
    Selalu pastikan di branch mana kita berada. Jika ingin mengerjakan button pastikan ada di branch component/button. jika ingin mengerjakan footer, pastikan ada di branch component/footer. 
9. Jika kita sudah memasukan atau membuat perubahan di branch masing-masing, maka selanjutnya seperti biasanya,
        git add .
        git commit -m 'komen yang representatif'
        git push origin branch_kamu 
    
    perhatikan!! Jangan sampai nge-push ke branch develop apalagi master. Jangan gunakan 
        git push origin master, 
        atau
        git push origin develop,
10. Buka lagi gitlabnya, pastikan branch kita sudah muncul dan file yang kita tambahkan sudah ada juga.

Sementara sampai sini dan file kita insyaallah sudah aman di branch masing-masing.



Tugas selanjutnya adalah mengerjakan page (halaman web kita). Tugas ini nantinya akan dibagi. 
Misal yang kebagian mengerjakan homepage, maka perhatikan lagi komponen apa yang dibuthkan

--> to be continued dilanjutin lagi nanti yaa