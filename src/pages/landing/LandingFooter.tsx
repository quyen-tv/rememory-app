const LandingFooter = () => {
  return (
    <footer className='w-full flex flex-col justify-center bg-[color:var(--card)] border-t border-[color:var(--border)] shadow-lg rounded-t-2xl'>
      <nav
        className='max-w-screen-xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 justify-between'
        aria-label='Footer Navigation'
      >
        <section className='flex flex-col items-stretch text-justify'>
          <h3 className='font-extrabold text-lg text-[color:var(--primary)] mb-3'>Giới thiệu</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#about' className='hover:text-[color:var(--primary)] transition-colors' title='Về Rememory'>
                Về Rememory
              </a>
            </li>
            <li>
              <a
                href='#mission'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Sứ mệnh Rememory'
              >
                Sứ mệnh
              </a>
            </li>
            <li>
              <a href='#method' className='hover:text-[color:var(--primary)] transition-colors' title='Phương pháp học'>
                Phương pháp
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Liên hệ Rememory'
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </section>
        <section className='flex flex-col items-stretch text-justify'>
          <h3 className='font-extrabold text-lg text-[color:var(--primary)] mb-3'>Sản phẩm</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='#app'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Ứng dụng di động Rememory'
              >
                Ứng dụng di động
              </a>
            </li>
            <li>
              <a
                href='#web'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Phiên bản web Rememory'
              >
                Phiên bản web
              </a>
            </li>
            <li>
              <a
                href='#premium'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Rememory Premium'
              >
                Rememory Premium
              </a>
            </li>
          </ul>
        </section>
        <section className='flex flex-col items-stretch text-justify'>
          <h3 className='font-extrabold text-lg text-[color:var(--primary)] mb-3'>Hỗ trợ</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='#faq'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Câu hỏi thường gặp Rememory'
              >
                Câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a
                href='#guide'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Hướng dẫn sử dụng Rememory'
              >
                Hướng dẫn sử dụng
              </a>
            </li>
            <li>
              <a
                href='#policy'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Chính sách & Điều khoản Rememory'
              >
                Chính sách &amp; Điều khoản
              </a>
            </li>
            <li>
              <a
                href='#support'
                className='hover:text-[color:var(--primary)] transition-colors'
                title='Liên hệ hỗ trợ Rememory'
              >
                Liên hệ hỗ trợ
              </a>
            </li>
          </ul>
        </section>
        <section className='flex flex-col items-stretch text-justify'>
          <h3 className='font-extrabold text-lg text-[color:var(--primary)] mb-3'>Mạng xã hội</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-[color:var(--primary)] transition-colors'
                title='Rememory Facebook'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-[color:var(--primary)] transition-colors'
                title='Rememory Instagram'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-[color:var(--primary)] transition-colors'
                title='Rememory GitHub'
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </nav>
      <div className='w-full border-t border-[color:var(--border)] bg-[color:var(--background)] py-4 px-8 flex flex-wrap justify-center items-center gap-3 rounded-b-2xl'>
        <div className='flex flex-wrap justify-center items-center gap-3 mx-auto'>
          <span className='font-extrabold text-lg text-[color:var(--primary)]'>Ngôn ngữ hiển thị:</span>
          <span className='cursor-pointer hover:underline text-sm pb-0'>Tiếng Việt</span>
          <span className='cursor-pointer hover:underline text-sm'>English</span>
          <span className='cursor-pointer hover:underline text-sm'>中文</span>
          <span className='cursor-pointer hover:underline text-sm'>日本語</span>
          <span className='cursor-pointer hover:underline text-sm'>한국어</span>
          <span className='cursor-pointer hover:underline text-sm'>Français</span>
          <span className='cursor-pointer hover:underline text-sm'>Español</span>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter
