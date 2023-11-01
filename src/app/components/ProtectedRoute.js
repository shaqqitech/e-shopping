'use client'
import { useRouter } from 'next/navigation'
import { UserAuth } from '@/context/AuthContext'

const ProtectedRoute = ({children}) => {
    const { user } = UserAuth();
    const router = useRouter();
  
    if (!user) {
      // If the user is not registered, redirect to the signup page
      router.push('/signup');
      return null; // Render nothing
    } else if (user) {
      // If the user is already registered, redirect to the login page
      router.push('/login');
      return null; // Render nothing
    } else {
      // If the user is authenticated, render the children
      return children;
    }

}

export default ProtectedRoute