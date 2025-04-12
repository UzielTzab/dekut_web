import { CreateUserDto } from "../dto/create_user.dto";

const URL = "https://dekut-games-api.onrender.com/dekut_games/users";

export async function CreateUser({ name_user, email_user, password_user }: CreateUserDto) {
    const newUser: CreateUserDto = {
        name_user: name_user,
        email_user: email_user,
        password_user: password_user
    }
    try {

        const response = await fetch(URL, {
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