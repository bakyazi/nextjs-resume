import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <div className="site-container text-lg">
        <h2 className="text-2xl pb-4">Hi, I am <b className='text-cyan-700'>Berkay Akyazı</b></h2>
        <p className='pb-2'>
          I live in <b className='text-cyan-700 text-xl'>Ankara, Turkey</b>. I'm a full stack developer.  I am always looking for new challenges and opportunities. I am passionate about learning new technologies and are constantly trying to improve.
        </p>
        <p className='pb-2'>
          I've been learning programming since I was a kid. When I was in elementary school, I started using <b className="text-cyan-700 text-xl">HTML, CSS,</b> and <b className="text-cyan-700 text-xl">JavaScript</b> a little. After I  started studying, I learned about the programming languages ​​<b className="text-cyan-700 text-xl">Python</b> and ​​<b className="text-cyan-700 text-xl">C / C++</b>, and my passion for programming began. After that, I  met  ​​<b className="text-cyan-700 text-xl">Java</b> in a summer internship. Since then, I've been writing Java in my professional career.
        </p>
        <p className='pb-2'>
          Besides Java, I use Python, <b className="text-cyan-700 text-xl">Golang, React</b> and <b className="text-cyan-700 text-xl">Vue.js</b> in my professional career and everyday life. I love Python for small hands-on projects and web crawls. React is usually my first choice for front-end work. I am currently studying Golang and am very passionate about it.
        </p>
      </div>
      <div className="site-3xl-container mt-20">
        <img src="/me.jpg" alt="sorry i can't find nice pic for here" />
      </div>
      <div className="site-container text-lg">
        <p className='py-6'>
          <i>
            You can access the source code of this resume website by clicking <a href="https://github.com/bakyazi/nextjs-resume" target="_blank" className="text-cyan-700 text-xl">here</a>.
          </i>
        </p>
      </div>
    </>
  )
}
