import { useState } from 'react'
import { Input } from '@/components/ui/input'
import SocialButton from '@/components/auth/SocialButton'
import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useScrollAndMobile from '@/hooks/useScrollAndMobile'

const LoginPage = () => {
  const { isMobile } = useScrollAndMobile()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex items-center justify-center bg-[color:var(--background)] relative'>
      <button
        onClick={() => navigate(-1)}
        className={`absolute ${isMobile ? 'right-8' : 'left-8'} top-8 z-20 cursor-pointer text-5xl text-[color:var(--foreground)] opacity-60 hover:opacity-100 transition-all`}
      >
        &times;
      </button>
      {!isMobile && (
        <Button
          variant='outline'
          className='absolute right-8 top-8 z-20 h-12 cursor-pointer px-6 py-2 rounded-2xl border-2 border-[color:var(--border)] text-[color:var(--foreground)] font-bold shadow-[0_4px_0_0_var(--border)] bg-[color:var(--background)]/80 hover:bg-[color:var(--accent)]/30 transition-all'
        >
          ĐĂNG KÝ
        </Button>
      )}
      <div className='w-full max-w-md rounded-3xl p-8 flex flex-col items-center relative'>
        <h2 className='text-3xl font-extrabold text-[color:var(--foreground)] mb-6 text-center drop-shadow-lg'>
          Đăng nhập
        </h2>
        <form className='w-full flex flex-col gap-6'>
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
        {isMobile && (
          <div className='mt-6 w-full text-center'>
            <p className='text-gray-400 text-sm text-center font-semibold'>
              Chưa có tài khoản?{' '}
              <span className='cursor-pointer font-bold text-[color:var(--secondary)] hover:text-[color:var(--secondary)]/90'>
                ĐĂNG KÝ
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginPage
