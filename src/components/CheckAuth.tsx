
// component for unprotected page

import { auth } from "@/lib/auth";
import { redirect } from  "next/navigation"

//dashboard
export async function ProtectedPage() {
    const session  = await auth()
    if (!session) {
        redirect("/login")
    }
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

//component for unprotected page
//login
//landing
export async function UnprotectedPage() {
    const session  = await auth()
    if (session) {
        redirect("/dashboard")
    }
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}
