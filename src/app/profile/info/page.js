'use client'
import FormAddressProfile from "@/components/profile/profile.form.address"
import { AppContext } from "@/context/context.app"
import { useContext } from "react"
import { updateUser } from "@/services/service.user"
export default function Page() {
    const { user } = useContext(AppContext)

    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FormAddressProfile
                initialAddress={{
                    ...user?.user?.usr_info
                }}
                onSave={async (data) => {
                    const updatedUser = await updateUser(user?.user?.usr_address, data)
                }}
            />
        </main>
    )
}
