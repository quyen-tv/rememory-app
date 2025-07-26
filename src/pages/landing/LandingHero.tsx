import hippoSayHi from '@/assets/hippo/hippo_say_hi.png'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const LandingHero = () => {
  const navigate = useNavigate()

  return (
    <main className='flex-1 md:h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 max-w-screen-xl mx-auto w-full px-4 md:px-8 pt-16 md:pt-0'>
      <div className='flex items-center justify-center mb-6 md:mb-0'>
        <img
          src={hippoSayHi}
          alt='Rememory mascot'
          className='w-64 h-64 md:w-110 md:h-110 rounded-2xl object-contain drop-shadow-xl'
        />
      </div>
      <div className='flex flex-col items-center gap-4 md:gap-6 max-w-lg'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-[color:var(--foreground)] mb-2 text-center drop-shadow-sm'>
          Cách học từ vựng miễn phí, vui nhộn và hiệu quả!
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-[color:var(--foreground)] text-center mb-2 font-medium'>
          Ôn tập, ghi nhớ và làm chủ từ vựng với Rememory – ứng dụng học từ vựng hiện đại, cá nhân hóa và siêu trực
          quan.
        </p>
        <Button
          type='submit'
          className='cursor-pointer w-full md:w-80 py-5 md:py-6 rounded-2xl text-base md:text-lg font-bold shadow-[0_4px_0_0_var(--border)] border-2 border-[color:var(--border)] bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] hover:bg-[color:var(--secondary)]/90 transition-all'
        >
          BẮT ĐẦU
        </Button>
        <Button
          variant='outline'
          className='cursor-pointer w-full md:w-80 py-5 md:py-6 rounded-2xl text-base md:text-lg font-bold shadow-[0_4px_0_0_var(--border)] border-2 border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] hover:bg-[color:var(--accent)]/30 transition-all'
          onClick={() => navigate('/auth/login')}
        >
          TÔI ĐÃ CÓ TÀI KHOẢN
        </Button>
      </div>
    </main>
  )
}

export default LandingHero
