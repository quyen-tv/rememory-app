import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SocialButton from '@/components/auth/SocialButton'
import { Button } from '@/components/ui/button'
import AuthLayout from '@/components/auth/AuthLayout'
import { FormInput } from '@/components/ui/form-field'
import { loginSchema, type LoginFormData } from '@/lib/validations/auth'
import { AUTH_MESSAGES, SOCIAL_LOGIN, LEGAL_TEXT } from '@/lib/constants'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { useLogin } from '@/hooks/useAuth'
import { Alert, AlertDescription } from '@/components/ui/alert'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login, loading, error } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  })

  const onSubmit = async (data: LoginFormData) => {
    const result = await login(data.email, data.password)
    if (result.user) {
      navigate('/dashboard')
    }
  }

  const handleRegisterClick = () => {
    navigate('/auth/register')
  }

  return (
    <AuthLayout
      title={AUTH_MESSAGES.LOGIN.TITLE}
      actionButtonText={AUTH_MESSAGES.LOGIN.REGISTER_LINK}
      onActionButtonClick={handleRegisterClick}
      mobilePromptText={AUTH_MESSAGES.LOGIN.NO_ACCOUNT}
      mobileLinkText={AUTH_MESSAGES.LOGIN.REGISTER_LINK}
      onMobileLinkClick={handleRegisterClick}
    >
      {error && (
        <div className='w-full mb-6'>
          <Alert
            variant='destructive'
            className='bg-[color:var(--destructive)]/10 border-[color:var(--destructive)]/20'
          >
            <AlertDescription className='text-sm font-medium text-[color:var(--destructive)]'>{error}</AlertDescription>
          </Alert>
        </div>
      )}
      <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='text'
          placeholder={AUTH_MESSAGES.LOGIN.EMAIL_PLACEHOLDER}
          error={errors.email}
          autoComplete='username'
          className='h-12 !text-lg font-semibold rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 focus:ring-[color:var(--ring)] transition-all placeholder:text-lg placeholder:font-semibold px-5'
          {...register('email')}
        />
        <div className='relative'>
          <FormInput
            type='password'
            placeholder={AUTH_MESSAGES.LOGIN.PASSWORD_PLACEHOLDER}
            error={errors.password}
            autoComplete='current-password'
            className='h-12 !text-lg font-semibold rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 focus:ring-[color:var(--ring)] transition-all placeholder:text-lg placeholder:font-semibold px-5'
            {...register('password')}
            endAdornment={
              <button
                type='button'
                className='cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 text-base text-gray-400 hover:text-[color:var(--primary)] font-semibold'
              >
                {AUTH_MESSAGES.LOGIN.FORGOT_PASSWORD}
              </button>
            }
          />
        </div>
        <Button
          type='submit'
          disabled={isSubmitting || loading}
          className='cursor-pointer w-full h-12 rounded-2xl text-base font-bold shadow-[0_4px_0_0_var(--border)] border-2 border-[color:var(--border)] bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] hover:bg-[color:var(--secondary)]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting || loading ? AUTH_MESSAGES.LOGIN.SUBMITTING : AUTH_MESSAGES.LOGIN.SUBMIT_BUTTON}
        </Button>
      </form>
      <div className='flex items-center w-full my-8'>
        <div className='flex-1 h-px bg-[color:var(--border)]' />
        <span className='mx-4 text-gray-400 font-semibold text-base'>{SOCIAL_LOGIN.OR_DIVIDER}</span>
        <div className='flex-1 h-px bg-[color:var(--border)]' />
      </div>
      <div className='flex gap-6 w-full'>
        <SocialButton
          icon={<FcGoogle size={24} />}
          className='cursor-pointer h-12 rounded-2xl text-base font-bold shadow-[0_4px_0_0_var(--border)] border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 hover:bg-[color:var(--accent)]/30 transition-all duration-200'
        >
          {SOCIAL_LOGIN.GOOGLE}
        </SocialButton>
        <SocialButton
          icon={<FaFacebook size={24} color='#1877F3' />}
          className='cursor-pointer h-12 rounded-2xl text-base font-bold shadow-[0_4px_0_0_var(--border)] border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 hover:bg-[color:var(--accent)]/30 transition-all duration-200'
        >
          {SOCIAL_LOGIN.FACEBOOK}
        </SocialButton>
      </div>
      <div className='mt-10 w-full text-center text-[14px] text-gray-400 font-medium space-y-2'>
        <p>
          {LEGAL_TEXT.TERMS}{' '}
          <span className='font-bold text-[color:var(--foreground)]'>{LEGAL_TEXT.TERMS_OF_SERVICE}</span>
          <br />
          và <span className='font-bold text-[color:var(--foreground)]'>{LEGAL_TEXT.PRIVACY_POLICY}</span> của chúng
          tôi.
        </p>
        <p>
          {LEGAL_TEXT.RECAPTCHA}{' '}
          <span className='font-bold text-[color:var(--foreground)]'>{LEGAL_TEXT.PRIVACY_POLICY}</span> và{' '}
          <span className='font-bold text-[color:var(--foreground)]'>{LEGAL_TEXT.GOOGLE_TERMS}</span>
        </p>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
