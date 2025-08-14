import { Flashcard } from '@/components/flashcard/Flashcard'
import { Layout } from '@/components/layout'
import { Button, Input, Textarea } from '@/components/ui'
import { useSticky } from '@/hooks/useSticky'
import { useHeaderStore } from '@/store/headerStore'
import { useScrollStore } from '@/store/scrollStore'
import { useEffect } from 'react'
import { FaCog, FaKeyboard, FaPlus } from 'react-icons/fa'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { IoSparkles } from 'react-icons/io5'

const CreateSet = () => {
  const isScrolled = useScrollStore((state) => state.isScrolled)
  const setHideOnScroll = useHeaderStore((state) => state.setHideOnScroll)
  const { stickyRef, isSticky } = useSticky()

  useEffect(() => {
    setHideOnScroll(isScrolled)
  }, [isScrolled, setHideOnScroll])

  const titleClass = [
    'sticky top-0 z-50 flex items-center justify-between py-4 px-4 md:px-24 transition-colors duration-300',
    isSticky && 'bg-card'
  ].join(' ')

  return (
    <Layout showSidebar={false}>
      <div ref={stickyRef}></div>
      <div className={titleClass}>
        <div>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-2 text-center drop-shadow-sm'>
            Tạo một học phần mới
          </h1>
        </div>
        <div>
          <Button className='cursor-pointer py-3 md:py-5 rounded-xl md:rounded-2xl text-sm md:text-base font-bold shadow-[0_2px_0_0_var(--border)] border-2 border-border bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all'>
            Tạo
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-4 px-4 md:px-24 py-6 bg-background min-h-full'>
        <div>
          <Input
            type='text'
            placeholder='Nhập tiêu đề, ví dụ "Từ vựng tiếng Anh"'
            className='w-full h-10 md:h-12 !text-base md:!text-lg font-semibold rounded-xl md:rounded-2xl border-2 border-border !bg-card/50 focus:ring-ring transition-all placeholder:text-base md:placeholder:text-lg placeholder:font-semibold px-5'
          />
        </div>
        <div>
          <Textarea
            placeholder='Thêm mô tả...'
            className='w-full h-10 md:h-12 !text-base md:!text-lg font-semibold rounded-xl md:rounded-2xl border-2 border-border !bg-card/50 focus:ring-ring transition-all placeholder:text-base md:placeholder:text-lg placeholder:font-semibold px-5'
          />
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between my-6 gap-4'>
          <div className='flex flex-wrap gap-2 md:gap-4'>
            <Button
              variant='default'
              className='cursor-pointer py-3 md:py-5 rounded-xl md:rounded-2xl text-sm md:text-base font-bold shadow-[0_2px_0_0_var(--border)] border-2 border-border bg-card/50 text-card-foreground hover:bg-accent/10 transition-all'
            >
              <FaPlus /> Nhập
            </Button>
            <Button
              variant='default'
              className='cursor-pointer py-3 md:py-5 rounded-xl md:rounded-2xl text-sm md:text-base font-bold shadow-[0_2px_0_0_var(--border)] border-2 border-border bg-card/50 text-card-foreground hover:bg-accent/10 transition-all'
            >
              <IoSparkles /> Tạo bằng AI
            </Button>
          </div>
          <div className='flex gap-2 md:gap-4'>
            <div className='cursor-pointer flex items-center gap-2 rounded-full bg-card/50 hover:bg-accent/10 border-2 border-border p-2'>
              <FaCog className='text-xl text-card-foreground cursor-pointer transition-colors' />
            </div>
            <div className='cursor-pointer flex items-center gap-2 rounded-full bg-card/50 hover:bg-accent/10 border-2 border-border p-2'>
              <FaArrowRightArrowLeft className='text-xl text-card-foreground cursor-pointer transition-colors' />
            </div>
            <div className='cursor-pointer flex items-center gap-2 rounded-full bg-card/50 hover:bg-accent/10 border-2 border-border p-2'>
              <FaKeyboard className='text-xl text-card-foreground cursor-pointer transition-colors' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <Flashcard number={1} />
          <Flashcard number={2} />
          <div className='relative flex items-center justify-center py-10 px-4 border-2 border-border rounded-xl bg-card/50'>
            <span className='absolute left-4 top-1/2 -translate-y-1/2 font-bold text-card-foreground/20'>3</span>
            <div className='cursor-pointer text-sm md:text-lg text-card-foreground/70 font-bold transition-colors'>
              <span className='border-b-4 border-primary hover:border-secondary hover:text-secondary'>THÊM THẺ</span>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-end'>
          <Button className='cursor-pointer w-20 h-12 py-3 md:py-5 rounded-xl md:rounded-2xl text-sm md:text-base font-bold shadow-[0_2px_0_0_var(--border)] border-2 border-border bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all'>
            Tạo
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default CreateSet
