
// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Image from "next/image"
// import { LogIn, Loader2 } from "lucide-react"
// import { API_BASE_URL } from "@/lib/constants"

// interface LoginFormProps {
//   onLogin: (userData: any) => void
// }

// interface LoginResponse {
//   access_token: string
//   refresh_token: string
//   user: {
//     id: string
//     email: string
//     // Add other user properties as needed
//   }
// }

// // Meritronics logo URL from Vercel Blob
// const LOGO_URL =
//   "https://lywntqaqlut34qdw.public.blob.vercel-storage.com/meritronics/meritronicslogo-zHESzsSyaFlGrO1eTUJsvdmqYV0AnT.png"

// // API base URL - adjust this to match your backend URL

// export default function LoginForm({ onLogin }: LoginFormProps) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!email || !password) {
//       setError("Please enter both email and password")
//       return
//     }

//     setIsLoading(true)
//     setError("")

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed")
//       }

//       // Store tokens in localStorage (you might want to use a more secure method)
//       if (data.access_token) {
//         localStorage.setItem("access_token", data.access_token)
//       }
//       if (data.refresh_token) {
//         localStorage.setItem("refresh_token", data.refresh_token)
//       }

//       // Call the onLogin callback with the user data
//       onLogin(data)
//     } catch (err) {
//       console.error("Login error:", err)
//       setError(err instanceof Error ? err.message : "An error occurred during login")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 compact-layout red-theme friendly-ui">
//       <div className="w-full max-w-sm">
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 card-friendly">
//           <div className="flex justify-center mb-4">
//             <Image
//               src={LOGO_URL || "/placeholder.svg"}
//               alt="Meritronics Logo"
//               width={180}
//               height={50}
//               className="h-auto"
//               priority
//             />
//           </div>
//           <h2 className="text-lg font-bold text-center text-[hsl(var(--primary))] mb-4">Manufacturing Process</h2>

//           {error && (
//             <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-md mb-3 text-xs">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <div className="space-y-1">
//               <Label htmlFor="email" className="text-sm">
//                 Email
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="h-8 text-sm input-friendly"
//                 disabled={isLoading}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="password" className="text-sm">
//                 Password
//               </Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="h-8 text-sm input-friendly"
//                 disabled={isLoading}
//               />
//             </div>
//             <Button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white btn-friendly flex items-center justify-center gap-1.5"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                   <span>Signing In...</span>
//                 </>
//               ) : (
//                 <>
//                   <LogIn className="h-3.5 w-3.5" />
//                   <span>Sign In</span>
//                 </>
//               )}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }















// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Image from "next/image"
// import { LogIn, Loader2 } from "lucide-react"
// import { API_BASE_URL } from "@/lib/constants"

// interface LoginFormProps {
//   onLogin: (userData: any, permissions: string[]) => void
// }

// const LOGO_URL =
//   "https://lywntqaqlut34qdw.public.blob.vercel-storage.com/meritronics/meritronicslogo-zHESzsSyaFlGrO1eTUJsvdmqYV0AnT.png"

// export default function LoginForm({ onLogin }: LoginFormProps) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)



//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!email || !password) {
//     setError("Please enter both email and password");
//     return;
//   }

//   setIsLoading(true);
//   setError("");

//   try {
//     const response = await fetch(`${API_BASE_URL}/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Login failed");
//     }

//     // ✅ Store tokens
//     if (data.access_token) localStorage.setItem("access_token", data.access_token);
//     if (data.refresh_token) localStorage.setItem("refresh_token", data.refresh_token);

//     // ✅ Store designation
//     const designation = data.designation?.title;
// if (!designation) {
//   throw new Error("Designation not found in API response");
// }
// localStorage.setItem("designation", designation.toLowerCase());



//     // ✅ Extract permissions
//    const permissions = data.designation?.permissions?.map((p) => p.name.toLowerCase()) || [];
// localStorage.setItem("permissions", JSON.stringify(permissions));

//     // ✅ Trigger parent callback with user and permissions
//     onLogin(data.user, permissions);
//   } catch (err) {
//     console.error("Login error:", err);
//     setError(err instanceof Error ? err.message : "An error occurred during login");
//   } finally {
//     setIsLoading(false);
//   }
// };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
//       <div className="w-full max-w-sm">
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
//           <div className="flex justify-center mb-4">
//             <Image
//               src={LOGO_URL}
//               alt="Meritronics Logo"
//               width={180}
//               height={50}
//               className="h-auto"
//               priority
//             />
//           </div>
//           <h2 className="text-lg font-bold text-center text-[hsl(var(--primary))] mb-4">
//             Manufacturing Process
//           </h2>

//           {error && (
//             <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-md mb-3 text-xs">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <div className="space-y-1">
//               <Label htmlFor="email" className="text-sm">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="h-8 text-sm"
//                 disabled={isLoading}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="password" className="text-sm">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="h-8 text-sm"
//                 disabled={isLoading}
//               />
//             </div>
//             <Button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white flex items-center justify-center gap-1.5"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                   <span>Signing In...</span>
//                 </>
//               ) : (
//                 <>
//                   <LogIn className="h-3.5 w-3.5" />
//                   <span>Sign In</span>
//                 </>
//               )}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }















// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Image from "next/image"
// import { LogIn, Loader2 } from "lucide-react"
// import { API_BASE_URL } from "@/lib/constants"

// interface LoginFormProps {
//   onLogin: (userData: any, permissions: string[]) => void
// }

// const LOGO_URL =
//   "https://lywntqaqlut34qdw.public.blob.vercel-storage.com/meritronics/meritronicslogo-zHESzsSyaFlGrO1eTUJsvdmqYV0AnT.png"

// export default function LoginForm({ onLogin }: LoginFormProps) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

  


//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault()

//   if (!email || !password) {
//     setError("Please enter both email and password")
//     return
//   }

//   setIsLoading(true)
//   setError("")

//   try {
//     const response = await fetch(`${API_BASE_URL}/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })

//     const data = await response.json()

//     if (!response.ok) {
//       throw new Error(data.message || "Login failed")
//     }

//     if (data.access_token) localStorage.setItem("access_token", data.access_token)
//     if (data.refresh_token) localStorage.setItem("refresh_token", data.refresh_token)

//     const designation = data.designation?.title
//     if (!designation) {
//       throw new Error("Designation not found in API response")
//     }
//     localStorage.setItem("designation", designation.toLowerCase())

//     // ✅ Extract and store menus
//     const menus = data.designation?.permissions?.map(
//       (p: { name: string }) => p.name.toLowerCase()
//     ) || []
//     localStorage.setItem("menus", JSON.stringify(menus)) // ✅ Used in Sidebar

//     localStorage.setItem("username", data.user?.username || "")

//     onLogin(data.user, menus)
//   } catch (err) {
//     console.error("Login error:", err)
//     setError(err instanceof Error ? err.message : "An error occurred during login")
//   } finally {
//     setIsLoading(false)
//   }
// }


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
//       <div className="w-full max-w-sm">
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
//           <div className="flex justify-center mb-4">
//             <Image
//               src={LOGO_URL}
//               alt="Meritronics Logo"
//               width={180}
//               height={50}
//               className="h-auto"
//               priority
//             />
//           </div>
//           <h2 className="text-lg font-bold text-center text-[hsl(var(--primary))] mb-4">
//             Manufacturing Process
//           </h2>

//           {error && (
//             <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-md mb-3 text-xs">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <div className="space-y-1">
//               <Label htmlFor="email" className="text-sm">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="h-8 text-sm"
//                 disabled={isLoading}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="password" className="text-sm">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="h-8 text-sm"
//                 disabled={isLoading}
//               />
//             </div>
//             <Button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white flex items-center justify-center gap-1.5"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                   <span>Signing In...</span>
//                 </>
//               ) : (
//                 <>
//                   <LogIn className="h-3.5 w-3.5" />
//                   <span>Sign In</span>
//                 </>
//               )}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }















// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Image from "next/image"
// import { LogIn, Loader2 } from "lucide-react"
// import { API_BASE_URL } from "@/lib/constants"

// interface LoginFormProps {
//   onLogin: (userData: any, permissions: string[]) => void
// }

// const LOGO_URL =
//   "https://lywntqaqlut34qdw.public.blob.vercel-storage.com/meritronics/meritronicslogo-zHESzsSyaFlGrO1eTUJsvdmqYV0AnT.png"

// export default function LoginForm({ onLogin }: LoginFormProps) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!email || !password) {
//       setError("Please enter both email and password")
//       return
//     }

//     setIsLoading(true)
//     setError("")

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed")
//       }

//       // Store tokens
//       if (data.accessToken) localStorage.setItem("access_token", data.accessToken)
//       if (data.refreshToken) localStorage.setItem("refresh_token", data.refreshToken)

//       // Store designation in lowercase
//       const designation = data.designation?.title
//       if (!designation) {
//         throw new Error("Designation not found in API response")
//       }
//       localStorage.setItem("designation", designation.toLowerCase())

//       // Extract permissions from designation.permissions and store in "menus"
//       const menus =
//         data.designation?.permissions?.map(
//           (p: { name: string }) => p.name.toLowerCase()
//         ) || []
//       localStorage.setItem("menus", JSON.stringify(menus))

//       // Store username
//       localStorage.setItem("username", data.username || "")

//       // Trigger parent callback with user and permissions
//       onLogin(data, menus)
//     } catch (err) {
//       console.error("Login error:", err)
//       setError(err instanceof Error ? err.message : "An error occurred during login")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
//       <div className="w-full max-w-sm">
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
//           <div className="flex justify-center mb-4">
//             <Image
//               src={LOGO_URL}
//               alt="Meritronics Logo"
//               width={180}
//               height={50}
//               className="h-auto"
//               priority
//             />
//           </div>
//           <h2 className="text-lg font-bold text-center text-[hsl(var(--primary))] mb-4">
//             Manufacturing Process
//           </h2>

//           {error && (
//             <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-md mb-3 text-xs">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <div className="space-y-1">
//               <Label htmlFor="email" className="text-sm">
//                 Email
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="h-8 text-sm"
//                 disabled={isLoading}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="password" className="text-sm">
//                 Password
//               </Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="h-8 text-sm"
//                 disabled={isLoading}
//               />
//             </div>
//             <Button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white flex items-center justify-center gap-1.5"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                   <span>Signing In...</span>
//                 </>
//               ) : (
//                 <>
//                   <LogIn className="h-3.5 w-3.5" />
//                   <span>Sign In</span>
//                 </>
//               )}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }















// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Image from "next/image"
// import { LogIn, Loader2 } from "lucide-react"
// import { API_BASE_URL } from "@/lib/constants"

// interface LoginFormProps {
//   onLogin: (userData: any, permissions: string[]) => void
// }

// const LOGO_URL =
//   "/logo.svg"

// export default function LoginForm({ onLogin }: LoginFormProps) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!email || !password) {
//       setError("Please enter both email and password")
//       return
//     }

//     setIsLoading(true)
//     setError("")

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed")
//       }

//       if (data.accessToken) localStorage.setItem("access_token", data.accessToken)
//       if (data.refreshToken) localStorage.setItem("refresh_token", data.refreshToken)

//       const designation = data.designation?.title
//       if (!designation) {
//         throw new Error("Designation not found ")
//       }
//       localStorage.setItem("designation", designation.toLowerCase())

//       const menus =
//         data.designation?.permissions?.map(
//           (p: { name: string }) => p.name.toLowerCase()
//         ) || []
//       localStorage.setItem("menus", JSON.stringify(menus))

//       localStorage.setItem("username", data.username || "")

//       onLogin(data, menus)
//     } catch (err) {
//       console.error("Login error:", err)
//       setError(err instanceof Error ? err.message : "An error occurred during login")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
//       <div className="w-full max-w-sm">
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
//           <div className="flex justify-center mb-4">
//             <Image
//               src={LOGO_URL}
//               alt="Network PCB Logo"
//               width={180}
//               height={100}
//               className="h-auto"
//               priority
//             />
//           </div>
//           <h2 className="text-lg font-bold text-center text-[hsl(var(--primary))] mb-4 -mt-10">
//             Manufacturing Process
//           </h2>

//           {error && (
//             <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-md mb-3 text-xs">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <div className="space-y-1">
//               <Label htmlFor="email" className="text-sm">
//                 Email
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="h-8 text-sm"
//                 disabled={isLoading}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="password" className="text-sm">
//                 Password
//               </Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="h-8 text-sm"
//                 disabled={isLoading}
//               />
//             </div>
//             <Button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white flex items-center justify-center gap-1.5"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                   <span>Signing In...</span>
//                 </>
//               ) : (
//                 <>
//                   <LogIn className="h-3.5 w-3.5" />
//                   <span>Sign In</span>
//                 </>
//               )}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }





// components/login/LoginForm.tsx ------------------------------------------
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { LogIn, Loader2 } from "lucide-react"
import { API_BASE_URL } from "@/lib/constants"
import { saveAuth } from "@/utils/auth"

const LOGO_URL = "/logo.svg"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return setErr("Email and password required")
    setLoading(true)
    try {
      const r = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const d = await r.json()
      if (!r.ok) throw new Error(d.message || "Login failed")

      saveAuth({
        accessToken: d.accessToken,
        refreshToken: d.refreshToken,
        role: d.role,
        menus: d.menus, // backend-provided menu IDs
        username: d.username || "",
      })
      window.location.href = "/dashboard"
    } catch (e: any) {
      setErr(e.message || "Login error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm space-y-3 rounded-lg bg-white p-6 shadow"
      >
        <Image src={LOGO_URL} alt="Logo" width={160} height={80} className="mx-auto mb-4" />
        {err && <p className="text-xs text-red-600">{err}</p>}

        <div>
          <Label htmlFor="e" className="text-xs">Email</Label>
          <Input id="e" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
        </div>
        <div>
          <Label htmlFor="p" className="text-xs">Password</Label>
          <Input id="p" type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
        </div>
        <Button type="submit" disabled={loading} className="flex w-full gap-2">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />} {loading ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </div>
  )
}
