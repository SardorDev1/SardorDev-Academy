import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '@/companents/context/AuthUserContext';

export default function English() {

    const { authUser, loading, signOut } = useAuth()

    const router = useRouter()

    useEffect(() => {
        if (!loading && !authUser)
            router.push("/login")

    }, [authUser, loading])

    return (
        <div>English</div>
    )
}
