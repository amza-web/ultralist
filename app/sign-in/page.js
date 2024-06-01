'use client'
import Image from "next/image"


const SignIn = () => {

    
    return (
        <main className="bg-main-a text-black text-center min-h-screen w-full flex justify-center items-center">
            <section className="sign-in flex flex-col">
                <div>
                    <div className="logo">
                        {/* <Image alt=""/> */}
                    </div>
                    <div className="into">
                        <h1 className="h2">Welcome to UltraList</h1>
                    </div>

                </div>
                
            </section>
        </main>
    )
}

export default SignIn
