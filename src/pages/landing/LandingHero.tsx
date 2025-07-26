import hippoSayHi from '@/assets/hippo/hippo_say_hi.png'
import { Button } from '@/components/ui/button'

const LandingHero = () => {
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
        <Button className='cursor-pointer w-full md:w-80 py-5 md:py-6 text-base md:text-lg font-extrabold rounded-2xl bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] shadow-[0_8px_0_0_var(--accent)] mb-4 tracking-wide border-none outline-none transition-all duration-200 hover:brightness-105 active:shadow-[0_2px_0_0_var(--accent)] animate-bounce-slow hover:bg-[color:var(--secondary/50)]'>
          BẮT ĐẦU
        </Button>
        <Button
          variant='outline'
          className='cursor-pointer w-full md:w-80 py-5 md:py-6 text-base md:text-lg font-extrabold rounded-2xl border-2 border-[color:var(--border)] shadow-[0_4px_0_0_var(--border)] tracking-wide outline-none transition-all duration-200 hover:bg-[color:var(--accent)] hover:shadow-[0_2px_0_0_var(--border)]'
        >
          TÔI ĐÃ CÓ TÀI KHOẢN
        </Button>
      </div>
    </main>
  )
}

export default LandingHero
