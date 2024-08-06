const dests = [
    { id: "curug-goong", 
        name: 'Curug Go\'ong', 
        desc: 'Air terjun yang menawarkan pemandangan alam yang indah dengan suasana yang tenang dan asri, cocok untuk bersantai dan menikmati keindahan alam.',
        address: 'Jl. Serang Panjang, Babakanrandu', 
        info: 'Wisata Alam', 
        imageUrl: '/Assets/IMG/curug-goong/main.jpg',
        bannerUrl: '/Assets/IMG/curug-goong/banner.png',
        advantages: [
            {
                name: 'Pemandangan dan Suasana Curug', // curug yang membuat relaks, indah, dan fotogenik
                imageUrl: '/Assets/IMG/curug-goong/adv-1.png'
            },
            {
                name: 'Fasilitas Cafe', // yang cocok untuk istirahat, berkumpul, dan fotografi
                imageUrl: '/Assets/IMG/curug-goong/adv-2.png'
            },
            {
                name: 'Aktivitas Outdoor Rafting',
                imageUrl: '/Assets/IMG/curug-goong/adv-3.png'
            },
            {
                name: 'Glamping dan Resort', // yang menawarkan pengalaman camping di alam dengan kenyamanan tambahan
                imageUrl: '/Assets/IMG/curug-goong/adv-4.png'
            },
            {
                name: 'Akses Kendaraan Bermotor',
                imageUrl: '/Assets/IMG/curug-goong/adv-5.png'
            },
            {
                name: 'Fasilitas Toilet dan Mushola',
                imageUrl: '/Assets/IMG/curug-goong/adv-6.png'
            },
        ],
        route: {
            imageUrl: '/Assets/IMG/curug-goong/route.png',
            gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/MORE+Coffee+x+Curug+Goong,+Curug+Goong,+Dayeuhkolot,+Sagalaherang,+Subang+Regency,+West+Java+41282/@-6.6683747,107.6377948,17.02z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e69195844e26df5:0x6747855a5fc81695!2m2!1d107.6369827!2d-6.6660519!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/curug-goong/galery-1.jpg',
            '/Assets/IMG/curug-goong/galery-2.png',
            '/Assets/IMG/curug-goong/galery-3.jpg',
            '/Assets/IMG/curug-goong/galery-4.png',
            '/Assets/IMG/curug-goong/galery-5.png'
        ]
    },
    { 
        id: "dukopi", 
        name: 'Dukopi', 
        desc: 'Kafe yang menyajikan berbagai jenis kopi dengan suasana yang nyaman dan modern, cocok untuk tempat berkumpul dan bersantai.',
        address: 'Kp. Sukasari, Margaluyu', 
        info: 'Food and Baverage', 
        imageUrl: '/Assets/IMG/dukopi/main.png', 
        bannerUrl: '/Assets/IMG/dukopi/banner.jpg', 
        advantages: [
            {
                name: 'Menu Minuman dan Makanan yang Beragam',
                imageUrl: '/Assets/IMG/dukopi/adv-1.png'
            },
            {
                name: 'Bersih, Nyaman, dan Modern',
                imageUrl: '/Assets/IMG/dukopi/adv-2.png'
            },
            {
                name: 'Fasilitas Wi-fi Gratis',
                imageUrl: '/Assets/IMG/dukopi/adv-3.jpg'
            },
            {
                name: 'Spot Foto yang Instagramable',
                imageUrl: '/Assets/IMG/dukopi/adv-4.jpg'
            },
            {
                name: 'Akses Kendaraan Bermotor',
                imageUrl: '/Assets/IMG/dukopi/adv-5.png'
            },
        ],
        route: {
            imageUrl: '/Assets/IMG/dukopi/route.png',
            gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/Dukopi/@-6.6777737,107.6297542,15.35z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e691f1458d40777:0x93582aa20de05049!2m2!1d107.633824!2d-6.6864156!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/dukopi/galery-1.png',
            '/Assets/IMG/dukopi/galery-2.png',
            '/Assets/IMG/dukopi/galery-3.jpg',
            '/Assets/IMG/dukopi/galery-4.jpg',
            '/Assets/IMG/dukopi/galery-5.jpg'
        ] 
    },
    { 
        id: "green-house", 
        name: 'Green House', 
        desc: 'Destinasi agrowisata yang menawarkan pengalaman berkebun dan memanen buah-buahan segar langsung dari kebunnya.',
        address: 'Jl. Raya Sagalaherang, Bojongrangkas', 
        info: 'Agrowisata', 
        imageUrl: '/Assets/IMG/green-house/main.jpg', 
        bannerUrl: '/Assets/IMG/green-house/banner.jpg', 
        advantages: [
            {
                name: 'Masih Tahap Pembangunan',
                status: 'warning',
                imageUrl: '/Assets/IMG/green-house/adv-1.jpg'
            },
        ],
        route: {
            imageUrl: '/Assets/IMG/green-house/route.png',
            gmaps: 'https://www.google.com/maps/dir/\'\'/8JMV%2B6HX+TAMAN+WISATA+ANGGUR+SP+Grape,+Dayeuhkolot,+Kec.+Sagalaherang,+Kabupaten+Subang,+Jawa+Barat+41282/@-6.6684599,107.6427111,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e6919639bb74295:0x6023ca2670259ffd!2m2!1d107.6441833!2d-6.66697!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/green-house/galery-1.jpg',
            '/Assets/IMG/green-house/galery-2.jpg',
            '/Assets/IMG/green-house/galery-3.jpg',
            '/Assets/IMG/green-house/galery-4.jpg',
            '/Assets/IMG/green-house/galery-5.jpg'
        ] 
    },
    { 
        id: "dolays-coffeshop", 
        name: 'Dolay\'s Coffeeshop', 
        address: 'Dusun Dayeuhkolot, Dayeuhkolot', 
        info: 'Food and Baverage', 
        desc: "Kafe dengan konsep sederhana yang menyajikan berbagai jenis kopi dan aneka minuman serta makanan lainnya.",
        imageUrl: '/Assets/IMG/dolays-coffeshop/main.png',
        bannerUrl: '/Assets/IMG/dolays-coffeshop/banner.png',
        advantages: [
            {
                name: 'Sensasi Kopi Olahan Langsung Dari Biji',
                imageUrl: '/Assets/IMG/dolays-coffeshop/adv-1.png'
            },
            {
                name: 'Sederhana dan Nyaman untuk Bersantai',
                imageUrl: '/Assets/IMG/dolays-coffeshop/adv-2.jpg'
            },
            {
                name: 'Berbagai Menu Minuman dan Makanan',
                imageUrl: '/Assets/IMG/dolays-coffeshop/adv-3.jpg'
            },
        ],
        route: {
            imageUrl: '/Assets/IMG/dolays-coffeshop/route.png',
            gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/8JHR%2B8G8+Dollay\'s+Coffee+Shop,+Dayeuhkolot,+Kec.+Sagalaherang,+Kabupaten+Subang,+Jawa+Barat+41282/@-6.6711688,107.6412069,18.75z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e691969c5d6c23f:0x859e7fbb508b1111!2m2!1d107.6415552!2d-6.6715355!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/dolays-coffeshop/galery-1.png',
            '/Assets/IMG/dolays-coffeshop/galery-2.png',
            '/Assets/IMG/dolays-coffeshop/galery-3.png',
            '/Assets/IMG/dolays-coffeshop/galery-4.png',
            '/Assets/IMG/dolays-coffeshop/galery-5.png'
        ]
    },
    { 
        id: "makam-kibodas", 
        name: 'Makam Kibodas', 
        desc: 'Situs bersejarah yang menjadi tempat peristirahatan Rd. Tumenggung Aria Yudanegara bin Dalem Aria Wangsa Goparana sebagai penyebar agama Islam di Desa Dayeuhkolot.',
        address: 'Margaluyu, Dayeuhkolot', 
        info: 'Wisata Religi', 
        imageUrl: '/Assets/IMG/makam-kibodas/main.png', 
        bannerUrl: '/Assets/IMG/makam-kibodas/banner.png', 
        advantages: [
            {
                name: 'Pembelajaran Sejarah',
                imageUrl: '/Assets/IMG/makam-kibodas/adv-1.jpg'
            },
            {
                name: 'Bentang Alam yang Tenang',
                imageUrl: '/Assets/IMG/makam-kibodas/adv-2.png'
            },
            {
                name: 'Tradisi dan Budaya',
                imageUrl: '/Assets/IMG/makam-kibodas/adv-3.png'
            }
        ],
        route: {
            imageUrl: '/Assets/IMG/makam-kibodas/route.png',
            gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/8JGR%2BXH5+Situs+Dayeuhkolot%2F+Situs+Kibodas,+Dayeuhkolot,+Kec.+Sagalaherang,+Kabupaten+Subang,+Jawa+Barat+41282/@-6.6717034,107.6396942,17z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e69196e2b3ec17f:0x980c1dec8ae8b576!2m2!1d107.6406607!2d-6.6733953!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/makam-kibodas/galery-1.png',
            '/Assets/IMG/makam-kibodas/galery-2.jpg',
            '/Assets/IMG/makam-kibodas/galery-3.png',
            '/Assets/IMG/makam-kibodas/galery-4.png',
            '/Assets/IMG/makam-kibodas/galery-5.png'
        ] 
    },
    // { 
    //     id: "bukit-jamali", 
    //     name: 'Bukit Jamali', 
    //     desc: 'Bukit dengan pemandangan alam yang menakjubkan, ideal untuk menikmati panorama yang luas dan indah serta fotografi alam.',
    //     address: 'Jl. Raya Ciceuri, Kp. Sukasari', 
    //     info: 'Wisata Alam', 
    //     imageUrl: '/Assets/IMG/bukit-jamali/main.png', 
    //     bannerUrl: '/Assets/IMG/bukit-jamali/banner.png',
    //     advantages: [
    //         {
    //             name: 'Pemandangan Bukit',
    //             imageUrl: '/Assets/IMG/bukit-jamali/adv-1.png'
    //         },
    //         {
    //             name: 'Lingkungan yang Asri dan Sejuk',
    //             imageUrl: '/Assets/IMG/bukit-jamali/adv-2.png'
    //         },
    //         {
    //             name: 'Taman untuk Bersantai',
    //             imageUrl: '/Assets/IMG/bukit-jamali/adv-3.png'
    //         },
    //         {
    //             name: 'Spot Foto Menarik',
    //             imageUrl: '/Assets/IMG/bukit-jamali/adv-4.png'
    //         },
    //     ],
    //     route: {
    //         imageUrl: '/Assets/IMG/bukit-jamali/route.png',
    //         gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/Bukit+Jamali+Park+Teras+Desa+Sukamandi,+Jl.+Raya+Ciceuri,+Sukamandi,+Kec.+Sagalaherang,+Kabupaten+Subang,+Jawa+Barat+41282/@-6.6783818,107.6309327,15.25z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e691f54e5af7331:0x2bdc00fea28f5197!2m2!1d107.6347957!2d-6.6876437!3e9?entry=ttu'
    //     },
    //     galeries: [
    //         '/Assets/IMG/bukit-jamali/galery-1.png',
    //         '/Assets/IMG/bukit-jamali/galery-2.png',
    //         '/Assets/IMG/bukit-jamali/galery-3.png',
    //         '/Assets/IMG/bukit-jamali/galery-4.png',
    //         '/Assets/IMG/bukit-jamali/galery-5.png'
    //     ] 
    // },
    { 
        id: "oemah-keboen", 
        name: 'Oemah Keboen', 
        desc: 'Villa dengan konsep alami yang dikelilingi oleh kebun dan taman hijau, menawarkan pengalaman menginap yang tenang dan damai.',
        address: 'Margaluyu, Dayeuhkolot', 
        info: 'Hotel / Villa', 
        imageUrl: '/Assets/IMG/oemah-keboen/main.png', 
        bannerUrl: '/Assets/IMG/oemah-keboen/banner.jpg', 
        advantages: [
            {
                name: 'Kamar Tidur yang Luas',
                imageUrl: '/Assets/IMG/oemah-keboen/adv-1.jpg'
            },
            {
                name: 'Toilet yang Bersih dan Nyaman',
                imageUrl: '/Assets/IMG/oemah-keboen/adv-2.jpg'
            },
            {
                name: 'Fasilitas Interior',
                imageUrl: '/Assets/IMG/oemah-keboen/adv-3.png'
            },
            {
                name: 'Kesejukan Suasana Eksterior',
                imageUrl: '/Assets/IMG/oemah-keboen/adv-4.png'
            },
        ],
        route: {
            imageUrl: '/Assets/IMG/oemah-keboen/route.png',
            gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/Oemah+Keboen/@-6.6737376,107.6377653,16.42z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e6918cb909a83b5:0x411a75d88171357c!2m2!1d107.6402716!2d-6.6771693!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/oemah-keboen/galery-1.png',
            '/Assets/IMG/oemah-keboen/galery-2.jpg',
            '/Assets/IMG/oemah-keboen/galery-3.png',
            '/Assets/IMG/oemah-keboen/galery-4.png',
            '/Assets/IMG/oemah-keboen/galery-5.jpg'
        ] 
    },
    { 
        id: "embung-cigorowong", 
        name: 'Embung Cigorowong', 
        desc: 'Danau buatan yang berfungsi sebagai tempat penampungan air sekaligus destinasi wisata alam yang bisa digunakan berbagai aktivitas rekreasi.',
        address: 'Kp. Cigorowong, Margaluyu', 
        info: 'Wisata Alam', 
        imageUrl: '/Assets/IMG/embung-cigorowong/main.png', 
        bannerUrl: '/Assets/IMG/embung-cigorowong/banner.jpg', 
        advantages: [
            {
                name: 'Pemandangan Kawasan Sawah dan Gunung',
                imageUrl: '/Assets/IMG/embung-cigorowong/adv-1.jpg'
            },
            {
                name: 'Area Fotografi',
                imageUrl: '/Assets/IMG/embung-cigorowong/adv-2.png'
            },
            {
                name: 'Spot Berenang di Embung',
                imageUrl: '/Assets/IMG/embung-cigorowong/adv-3.png'
            },
        ],
        route: {
            imageUrl: '/Assets/IMG/embung-cigorowong/route.png',
            gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/Cikahuripan+Cigorowong/@-6.6750597,107.6340805,16.1z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e691900675f1bc9:0xf26eee2cbd75bde6!2m2!1d107.6341966!2d-6.6795735!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/embung-cigorowong/galery-1.jpg',
            '/Assets/IMG/embung-cigorowong/galery-2.png',
            '/Assets/IMG/embung-cigorowong/galery-3.png',
            '/Assets/IMG/embung-cigorowong/galery-4.png',
            '/Assets/IMG/embung-cigorowong/galery-5.png'
        ] 
    },
    { 
        id: "saung-panjugjugan", 
        name: 'Saung Panjugjugan', 
        desc: 'Villa tradisional dengan arsitektur khas yang dikelilingi oleh pemandangan alam hijau, menawarkan pengalaman menginap yang autentik dan menenangkan.',
        address: 'Kp. Sukasari, Margaluyu', 
        info: 'Food and Baverage', 
        imageUrl: '/Assets/IMG/saung-panjugjugan/main.png', 
        bannerUrl: '/Assets/IMG/saung-panjugjugan/banner.jpg', 
        advantages: [
            {
                name: 'Bentuk Bangunan yang Unik',
                imageUrl: '/Assets/IMG/saung-panjugjugan/adv-1.png'
            },
            {
                name: 'Kamar Bertema Kayu dan Alam',
                imageUrl: '/Assets/IMG/saung-panjugjugan/adv-2.jpg'
            },
            {
                name: 'Halaman yang Hijau dan Asri',
                imageUrl: '/Assets/IMG/saung-panjugjugan/adv-3.png'
            },
            {
                name: 'Taman Bermain untuk Anak-anak',
                imageUrl: '/Assets/IMG/saung-panjugjugan/adv-4.png'
            },
            {
                name: 'Bale Sawala untuk Berkumpul',
                imageUrl: '/Assets/IMG/saung-panjugjugan/adv-5.png'
            },
            {
                name: 'Area Camping',
                imageUrl: '/Assets/IMG/saung-panjugjugan/adv-6.png'
            },
            {
                name: 'Fasilitas Kolam Renang',
                imageUrl: '/Assets/IMG/saung-panjugjugan/adv-7.png'
            }
        ],
        route: {
            imageUrl: '/Assets/IMG/saung-panjugjugan/route.png',
            gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/Saung+Pangjugjugan+Sukasari/@-6.677938,107.6297836,15.46z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e691fc99b765005:0x16cda09245c7541c!2m2!1d107.6333717!2d-6.6838117!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/saung-panjugjugan/galery-1.png',
            '/Assets/IMG/saung-panjugjugan/galery-2.png',
            '/Assets/IMG/saung-panjugjugan/galery-3.png',
            '/Assets/IMG/saung-panjugjugan/galery-4.png',
            '/Assets/IMG/saung-panjugjugan/galery-5.jpg'
        ] 
    },
    { 
        id: "cimujah-valley-ecopark", 
        name: 'Cimujah Valley Ecopark', 
        desc: 'Taman ekowisata dengan taman bunga serta pemandangan memukau yang menawarkan berbagai aktivitas alam.',
        address: 'Kp. Nunuk, Bojongrangkas',
        info: 'Wisata Alam', 
        imageUrl: '/Assets/IMG/cimujah-valley-ecopark/main.png', 
        bannerUrl: '/Assets/IMG/cimujah-valley-ecopark/banner.png', 
        advantages: [
            {
                name: 'Bentang Alam Indah',
                imageUrl: '/Assets/IMG/cimujah-valley-ecopark/adv-1.png'
            },
            {
                name: 'Saung untuk Berkumpul dan Istirahat',
                imageUrl: '/Assets/IMG/cimujah-valley-ecopark/adv-2.png'
            },
            {
                name: 'Taman yang Asri',
                imageUrl: '/Assets/IMG/cimujah-valley-ecopark/adv-3.png'
            },
            {
                name: 'Area Green House',
                imageUrl: '/Assets/IMG/cimujah-valley-ecopark/adv-4.png'
            },
            {
                name: 'Keanekaragaman Tanaman Berbunga',
                imageUrl: '/Assets/IMG/cimujah-valley-ecopark/adv-5.png'
            },
        ],
        route: {
            imageUrl: '/Assets/IMG/cimujah-valley-ecopark/route.png',
            gmaps: 'https://www.google.com/maps/dir/Kantor+Desa+Dayeuhkolot+Kab+Subang/Nunuk+Eco+Park/@-6.6696332,107.6447311,16.67z/data=!4m14!4m13!1m5!1m1!1s0x2e6918c7d8f2fb7f:0x14efc604d2ca8dbc!2m2!1d107.6430943!2d-6.6699361!1m5!1m1!1s0x2e6918b717aeb7f9:0xcdbfa12853f693e!2m2!1d107.6502304!2d-6.6665249!3e9?entry=ttu'
        },
        galeries: [
            '/Assets/IMG/cimujah-valley-ecopark/galery-1.png',
            '/Assets/IMG/cimujah-valley-ecopark/galery-2.png',
            '/Assets/IMG/cimujah-valley-ecopark/galery-3.png',
            '/Assets/IMG/cimujah-valley-ecopark/galery-4.png',
            '/Assets/IMG/cimujah-valley-ecopark/galery-5.png'
        ] 
    },
]

export default dests;