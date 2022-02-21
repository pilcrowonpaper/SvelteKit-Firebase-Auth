<script context="module">
    export const load = async ({ session }) => {
        if (!session.user.exists) return {};
        return {
            status: 301,
            redirect: "/",
        };
    };
</script>

<script>
    import { auth } from "$lib/firebase";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { request } from "$lib/fetch.js"

    let email, password;

    const login = async () => {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const idToken = userCredential._tokenResponse.idToken;
        await request("/auth", "POST", { idToken });
        window.location.replace("/")
    };
</script>

<div>
    <h1>Login</h1>
    <p>Email</p>
    <input type="text" bind:value={email} />
    <p>Password</p>
    <input type="password" bind:value={password} />
    <button on:click={login}>Continue</button>
</div>
