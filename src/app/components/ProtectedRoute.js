'use client'
import { useRouter } from 'next/navigation'
import { UserAuth } from '@/context/AuthContext'

const ProtectedRoute = ({children}) => {
    const { user } = UserAuth();
    const router = useRouter();

    if(!user){
        return router.push('/signup' && '/login')
    }else{
        return children
    }
}

export default ProtectedRoute