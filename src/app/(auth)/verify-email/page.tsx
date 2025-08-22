'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowBigLeft, ArrowLeft, MailIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
    const router = useRouter()
    return (
      <Card className="min-w-xs lg:"> 
      <CardHeader className="flex flex-col gap-3 items-center">
        <div className="bg-gray-200 text-black -500 p-4 rounded-full w-fit mx-auto">
           <MailIcon className="size-12" />
        </div>
        <CardTitle className="text-1xl font-semibold">Verify your Email</CardTitle>
        <CardDescription className="text-center">
            We have sent a verification link to your email address. Please check your inbox and follow the instructions to verify your email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 p-4 bg-purple-50 text-yellow-800">
            <AlertCircle className="size-5" />
            <span>Check your email for verification.</span>
        </div>
        <Button onClick={() => router.push("/auth/login")} variant="outline" className="w-full">
            <ArrowLeft className="size-5" />
            Back To LogIn 
        </Button>
      </CardContent>
      </Card>
    );
}
