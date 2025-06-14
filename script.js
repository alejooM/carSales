let isAdmin = false;

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@gmail.com' && password === 'admin123') {
        isAdmin = true;
        showAdminPanel();
    } else {
        showCars();
    }
}

function logout() {
    isAdmin = false;
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('carsContainer').style.display = 'none';
    document.getElementById('adminContainer').style.display = 'none';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

function showCars() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('carsContainer').style.display = 'block';
    document.getElementById('adminContainer').style.display = 'none';

    const cars = [
        {
            name: 'Ferrari F8 Tributo',
            price: '$350,000',
            year: '2023',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Lamborghini Huracán',
            price: '$320,000',
            year: '2023',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Porsche 911 GT3',
            price: '$280,000',
            year: '2023',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'McLaren 720S',
            price: '$300,000',
            year: '2023',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Aston Martin DBS',
            price: '$340,000',
            year: '2023',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Bugatti Chiron',
            price: '$3,000,000',
            year: '2023',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ];

    const carsGrid = document.getElementById('carsGrid');
    carsGrid.innerHTML = '';

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="car-info">
                <h3>${car.name}</h3>
                <p>Precio: ${car.price}</p>
                <p>Año: ${car.year}</p>
            </div>
        `;
        carsGrid.appendChild(carCard);
    });
}

function showAdminPanel() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('carsContainer').style.display = 'none';
    document.getElementById('adminContainer').style.display = 'block';

    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '<h2>Usuarios Registrados</h2>';
    
    // Aquí normalmente obtendrías los usuarios de una base de datos
    const users = [
        { email: 'usuario1@ejemplo.com', password: 'pass123' },
        { email: 'usuario2@ejemplo.com', password: 'pass456' }
    ];

    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.innerHTML = `
            <p>Email: ${user.email}</p>
            <p>Contraseña: ${user.password}</p>
        `;
        usersList.appendChild(userItem);
    });
}
