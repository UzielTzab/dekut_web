// Interfaz para la nueva estructura de la API
interface CreateUserRequest {
    email: string;
    name: string;
    phone: string;
    password: string;
}

export async function CreateUser({ email, name, phone, password }: CreateUserRequest) {
    const newUser: CreateUserRequest = {
        email: email,
        name: name,
        phone: phone,
        password: password
    }
    try {
        // Usar el proxy de Next.js para evitar CORS
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}