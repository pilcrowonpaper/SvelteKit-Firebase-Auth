<script context="module">
    export const load = async ({ session }) => {
        if (session.user.exists) return {};
        return {
            status: 301,
            redirect: "/login",
        };
    };
</script>

<script>
    import { session } from "$app/stores";
    import { request } from "$lib/fetch";

    const signOutUser = async () => {
        await request("/auth", "DELETE");
        window.location.replace("/login")
    };
</script>

<div>
    <h1>Welcome, {$session.user.name}!</h1>
    <p>Your email is {$session.user.email}</p>
    <button on:click={signOutUser}>Signout</button>
</div>
