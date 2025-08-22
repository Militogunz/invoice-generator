import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth"

export default function DashboardPage() {
    return (
        <div>
            Dashboard
            <Button onClick={async () => {
                "use server"
                await signOut()
            }}>
                LogOut
            </Button>
        </div>
    )
}
