# Notes App API (AdonisJS v6)

Ini adalah backend API untuk aplikasi catatan (Notes App) yang dibangun menggunakan **AdonisJS v6**. Project ini menyediakan fitur manajemen user, autentikasi, kategori, tag, catatan, dan komentar.

## Fitur Utama

- **Autentikasi**: Sign Up, Login, dan Logout menggunakan Access Token.
- **Manajemen Catatan**: Skema database untuk Catatan (Notes), Kategori, Tag, dan Komentar.
- **Database**: MySQL (menggunakan Lucid ORM).

## Teknologi yang Digunakan

- [AdonisJS v6](https://adonisjs.com/) - Backend framework
- [TypeScript](https://www.typescriptlang.org/) - Bahasa Pemrograman
- [Lucid ORM](https://lucid.adonisjs.com/) - SQL ORM untuk AdonisJS
- [MySQL](https://www.mysql.com/) - Sistem database relasional
- [VineJS](https://vinejs.dev/) - Validasi data

## Cara Menjalankan Project

### 1. Prasyarat (Prerequisites)

Pastikan Anda memiliki:
- Node.js versi 20.6.0 atau lebih baru.
- MySQL Server yang sedang aktif di lokal Anda.
- Database kosong yang sudah dibuat di MySQL (contoh: `notes_app`).

### 2. Instalasi Dependensi

Instal seluruh library/dependensi yang dibutuhkan:

```bash
npm install
```

### 3. Konfigurasi Environment

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Kemudian, buat Application Key baru untuk keamanan aplikasi:

```bash
node ace generate:key
```

Setelah itu, buka file `.env` Anda dan sesuaikan konfigurasi database MySQL:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=username_mysql_anda
DB_PASSWORD=password_mysql_anda
DB_DATABASE=nama_database_anda
```

### 4. Jalankan Migrasi Database

Jalankan perintah berikut untuk membuat tabel-tabel database pada database MySQL Anda:

```bash
node ace migration:run
```

### 5. Jalankan Server Development

Jalankan perintah ini untuk memulai development server dengan Hot Module Replacement (HMR):

```bash
npm run dev
```

Server backend akan berjalan di [http://localhost:3333](http://localhost:3333).

## API Endpoints Utama

### Autentikasi
- `POST /api/v1/auth/signup` - Registrasi akun baru
- `POST /api/v1/auth/login` - Login dan mendapatkan access token
- `POST /api/v1/account/logout` - Logout dan menghapus session token (Memerlukan Token)
- `GET /api/v1/account/profile` - Mengambil detail profil user aktif (Memerlukan Token)

*(Detail route lengkap lainnya dapat dilihat atau dikonfigurasi pada file `start/routes.ts`)*

## Struktur Folder Utama

- `app/controllers/` - Controller untuk mengatur logika request & response API.
- `app/models/` - Model Lucid ORM untuk interaksi dengan database.
- `database/migrations/` - File migrasi untuk struktur tabel database.
- `start/routes.ts` - Definisi routing/endpoint API.

## Lisensi

[MIT License](LICENSE)
