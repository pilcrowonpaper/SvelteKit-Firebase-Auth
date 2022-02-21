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
    import {
        createUserWithEmailAndPassword,
        updateProfile,
        getIdToken,
    } from "firebase/auth";
    import { request } from "$lib/fetch.js"

    let username, email, password;

    const signup = async () => {
        const userRecord = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(userRecord.user, { displayName: username });
        const idToken = await getIdToken(userRecord.user, true);
        await request("/auth", "POST", { idToken });
        window.location.replace("/")
    };
</script>

<div>
    <h1>Create an account</h1>
    <p>Username</p>
    <input type="text" bind:value={username} />
    <p>Email</p>
    <input type="text" bind:value={email} />
    <p>Password</p>
    <input type="password" bind:value={password} />
    <button on:click={signup}>Continue</button>
</div>
