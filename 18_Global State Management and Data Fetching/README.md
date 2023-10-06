## Summary
Setelah mempelajari Global State Management dan Data Fetching dalam konteks pengembangan aplikasi web, terdapat tiga kesimpulan penting yang dapat diambil:

1. **Pentingnya Manajemen State yang Efisien**. Global State Management menjadi penting saat aplikasi semakin kompleks dan komponen-komponennya perlu berbagi data. Menerapkan solusi seperti Redux, Mobx, atau useContext dan useReducer dari React untuk mengelola state secara global dapat membantu mempertahankan kejelasan dan struktur kode, serta menghindari masalah seperti prop drilling.

2. **Asinkron Data Fetching Adalah Bagian Kunci**. Data fetching adalah bagian penting dalam pengembangan aplikasi modern. Menggunakan teknik seperti `fetch()` API atau library seperti Axios untuk mengambil data dari server atau sumber eksternal lainnya memungkinkan aplikasi untuk menampilkan informasi yang dinamis. Pemahaman yang baik tentang asinkronitas dan manajemen status (loading, error, success) dalam proses pengambilan data sangat penting.

3. **Perhatian Terhadap Performa**. Data fetching dapat memiliki dampak besar pada performa aplikasi. Kesadaran terhadap optimisasi permintaan HTTP, caching data, dan teknik lainnya untuk menghindari pemborosan sumber daya adalah penting. Selain itu, mempertimbangkan manajemen state yang efisien juga dapat membantu mengoptimalkan kinerja aplikasi.