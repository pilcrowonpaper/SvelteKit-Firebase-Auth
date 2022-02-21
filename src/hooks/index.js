import * as cookie from "cookie"
import admin from "$lib/firebase-admin"

export const getSession = async (event) => {
    const { session } = cookie.parse(event.request.headers.get("cookie") || "")
    try {
        const claims = await admin.auth().verifySessionCookie(session)
        return {
            user: {
                exists: true,
                ...claims
            }
        }
    } catch {
        return {
            user: {
                exists: false
            }
        }
    }
}