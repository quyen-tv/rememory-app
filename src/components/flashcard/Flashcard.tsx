import { IoImageOutline } from 'react-icons/io5'
import { Input } from '../ui'
import { FaBars, FaTrashAlt } from 'react-icons/fa'

interface FlashcardProps {
  number: number
}

const Flashcard = ({ number }: FlashcardProps) => (
  <div className='flex flex-col gap-4 border-2 border-border p-4 rounded-xl bg-card/50'>
    <div className='flex justify-between items-center text-card-foreground'>
      <span className='font-bold'>{number}</span>
      <div className='flex gap-2'>
        <FaBars className='cursor-grab text-foreground/30 hover:text-foreground' />
        <FaTrashAlt className='cursor-pointer text-foreground/30 hover:text-foreground' />
      </div>
    </div>
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='flex flex-col flex-1 gap-2'>
        <Input
          type='text'
          className='w-full h-10 md:h-12 !text-base md:!text-lg font-semibold rounded-xl md:rounded-2xl border-2 border-border !bg-card/50 focus:ring-ring transition-all placeholder:text-base md:placeholder:text-lg placeholder:font-semibold px-5'
        />
        <span className='text-sm font-extrabold text-card-foreground/70'>THUẬT NGỮ</span>
      </div>
      <div className='flex flex-col flex-1 gap-2'>
        <Input
          type='text'
          className='w-full h-10 md:h-12 !text-base md:!text-lg font-semibold rounded-xl md:rounded-2xl border-2 border-border !bg-card/50 focus:ring-ring transition-all placeholder:text-base md:placeholder:text-lg placeholder:font-semibold px-5'
        />
        <span className='text-sm font-extrabold text-card-foreground/70'>ĐỊNH NGHĨA</span>
      </div>
      <div className='flex items-center justify-center w-auto md:w-32 border-2 border-dashed border-border rounded-xl cursor-pointer transition-colors'>
        <div className='flex flex-col items-center justify-center p-2 text-card-foreground hover:text-primary transition-colors'>
          <IoImageOutline className='text-3xl' />
          <span className='text-sm'>Hình ảnh</span>
        </div>
      </div>
    </div>
  </div>
)

export { Flashcard }
