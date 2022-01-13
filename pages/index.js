import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <div className="site-container text-lg">
        <h2 className="text-2xl pb-4">Hi, I am <b className='text-cyan-700'>Berkay Akyazı</b></h2>
        <p className='pb-2'>
          I am living in <b className='text-cyan-700 text-xl'>Ankara</b>, <b className='text-cyan-700 text-xl'>Turkey</b>. I am a full-stack developer. <br />
          I am always looking for new challenges and opportunities. I am passionate about learning new technologies and I am always trying to improve myself.
        </p>
        <p className='pb-2'>
          I have been learning programming since I was a child. I started with <b className="text-cyan-700 text-xl">HTML</b>, <b className="text-cyan-700 text-xl">CSS</b> and a little bit <b className="text-cyan-700 text-xl">JavaScript</b> when I was at elementary school.
          After I have started university, I have met with <b className="text-cyan-700 text-xl">Python</b> and <b className="text-cyan-700 text-xl">C/C++</b> programming languages, and my passion about programming has started. <br />
          Later, I have met with <b className="text-cyan-700 text-xl" >Java</b> in my summer interviews. Since then, I have been writing Java in my profesional career.
        </p>
        <p className='pb-2'>
          In addition to Java, I am using Python, <b className="text-cyan-700 text-xl">Golang</b>, <b className="text-cyan-700 text-xl">React</b>, <b className="text-cyan-700 text-xl">Vue.js</b> in my profesional career and my daily life.
          I adore Python for small practical projects, and web crawling. React is usually my first choice for frontend jobs. I am currently learning Golang and I am very passionate about it.
        </p>

      </div>
      <div className="site-3xl-container mt-20">
        <img src="/me.jpg" alt="sorry i can't find nice pic for here" />
      </div>
      <div className="site-container text-lg">
        <p className='pb-2'>
          <i>
            You can access the source code of this resume website by clicking <a href="https://github.com/bakyazi/nextjs-resume" target="_blank" className="text-cyan-700 text-xl">here</a>.
          </i>
        </p>
      </div>
    </>
  )
}
