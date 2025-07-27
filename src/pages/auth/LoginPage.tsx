import { useState } from 'react'
import { Input } from '@/components/ui/input'
import SocialButton from '@/components/auth/SocialButton'
import { Button } from '@/components/ui/button'
import AuthLayout from '@/components/auth/AuthLayout'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  const handleRegisterClick = () => {
    navigate('/auth/register')
  }

  return (
    <AuthLayout
      title='Đăng nhập'
      actionButtonText='ĐĂNG KÝ'
      onActionButtonClick={handleRegisterClick}
      mobilePromptText='Chưa có tài khoản?'
      mobileLinkText='ĐĂNG KÝ'
      onMobileLinkClick={handleRegisterClick}
    >
      <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Email hoặc tên đăng nhập'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='username'
          className='h-12 !text-lg font-semibold rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 focus:ring-[color:var(--ring)] transition-all placeholder:text-lg placeholder:font-semibold px-5'
        />
        <div className='relative'>
          <Input
            type='password'
            placeholder='Mật khẩu'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
            className='h-12 !text-lg font-semibold rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 focus:ring-[color:var(--ring)] transition-all placeholder:text-lg placeholder:font-semibold px-5'
          />
          <button
            type='button'
            className='cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-base text-gray-400 hover:text-[color:var(--primary)] font-semibold'
          >
            QUÊN?
          </button>
        </div>
        <Button
          type='submit'
          className='cursor-pointer w-full h-12 rounded-2xl text-base font-bold shadow-[0_4px_0_0_var(--border)] border-2 border-[color:var(--border)] bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] hover:bg-[color:var(--secondary)]/90 transition-all'
        >
          ĐĂNG NHẬP
        </Button>
      </form>
      <div className='flex items-center w-full my-8'>
        <div className='flex-1 h-px bg-[color:var(--border)]' />
        <span className='mx-4 text-gray-400 font-semibold text-base'>HOẶC</span>
        <div className='flex-1 h-px bg-[color:var(--border)]' />
      </div>
      <div className='flex gap-6 w-full'>
        <SocialButton
          icon={<FcGoogle size={24} />}
          className='cursor-pointer h-12 rounded-2xl text-base font-bold shadow-[0_4px_0_0_var(--border)] border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 hover:bg-[color:var(--accent)]/30 transition-all duration-200'
        >
          GOOGLE
        </SocialButton>
        <SocialButton
          icon={<FaFacebook size={24} color='#1877F3' />}
          className='cursor-pointer h-12 rounded-2xl text-base font-bold shadow-[0_4px_0_0_var(--border)] border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 hover:bg-[color:var(--accent)]/30 transition-all duration-200'
        >
          FACEBOOK
        </SocialButton>
      </div>
      <div className='mt-10 w-full text-center text-[14px] text-gray-400 font-medium space-y-2'>
        <p>
          Khi đăng ký trên Rememory, bạn đã đồng ý với{' '}
          <span className='font-bold text-[color:var(--foreground)]'>Các chính sách</span>
          <br />
          và <span className='font-bold text-[color:var(--foreground)]'>Chính sách bảo mật</span> của chúng tôi.
        </p>
        <p>
          Trang này được bảo vệ bởi tập đoàn reCAPTCHA và theo{' '}
          <span className='font-bold text-[color:var(--foreground)]'>Chính sách bảo mật</span> và{' '}
          <span className='font-bold text-[color:var(--foreground)]'>Điều khoản dịch vụ</span> của Google.
        </p>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
