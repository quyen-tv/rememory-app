import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { auth, db } from '@/lib/firebase'
import { useAuthStore } from '@/store/authStore'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'

interface FirebaseAuthError {
  code: string
  message: string
  name?: string
}

export function useAuthListener() {
  const setUser = useAuthStore((state) => state.setUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [setUser])
}

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (email: string, password: string) => {
    setLoading(true)
    setError(null)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      const userRef = doc(db, 'users', user.uid)
      const userSnap = await getDoc(userRef)

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || '',
          createdAt: serverTimestamp()
        })
      }

      return { user, error: null }
    } catch (err: unknown) {
      let message = 'Lỗi không xác định'
      if (typeof err === 'object' && err !== null && 'code' in err) {
        const firebaseError = err as FirebaseAuthError

        if (firebaseError.code === 'auth/user-not-found') {
          message = 'Email không tồn tại'
        } else if (firebaseError.code === 'auth/invalid-credential') {
          message = 'Thông tin đăng nhập không hợp lệ'
        } else if (firebaseError.code === 'auth/invalid-email') {
          message = 'Email không hợp lệ'
        } else if (firebaseError.code === 'auth/too-many-requests') {
          message = 'Vui lòng thử lại sau vài phút.'
        } else if (firebaseError.code === 'auth/network-request-failed') {
          message = 'Vui lòng kiểm tra kết nối internet của bạn.'
        } else if (firebaseError.code === 'auth/user-disabled') {
          message = 'Tài khoản này đã bị vô hiệu hóa. Vui lòng liên hệ hỗ trợ.'
        } else {
          message = 'Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại.'
        }
      } else if (err instanceof Error) {
        message = `Đã xảy ra lỗi: ${err.message}`
      } else {
        message = 'Đã xảy ra lỗi không xác định. Vui lòng thử lại sau.'
      }
      setError(message)
      return { user: null, error: message }
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error }
}

export function useLogout() {
  return () => signOut(auth)
}
