
import { auth, signIn } from "@/lib/auth"
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SubmitButton from "@/components/submitBottun"
export default async function LoginPage() {
    const session = await auth()

    console.log(session)
  return (
    
    <Card className=" max-w-sm min-w-xs lg:min-w-[400px]"> 
        <CardHeader>
            <CardTitle className="text-3xl font-semibold">Login</CardTitle>
            <CardDescription>Please enter your email address to login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
            <form
            className="grid gap-4"
            action={async () => {
        "use server"
        await signIn("google")
            }}
         >
                <div className="grid gap-4">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                    type="email"
                     id="email" 
                     required 
                     placeholder="hello@example.com"
                     name="email"

                    />
                </div>
               <SubmitButton title="Login" />
            </form>

        </CardContent>
    </Card>

  )
  }
