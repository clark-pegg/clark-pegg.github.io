import Image from 'next/image'
import { ReactElement } from 'react'

const Home: () => ReactElement = () => {
  return (
    <main className="flex h-screen px-[64px] py-[82px] overflow-hidden">
      <div className="flex-1 max-w-[400px] m-auto">
        <Image
          width={0}
          height={0}
          style={{ borderRadius: '50%', width: '100%', height: 'auto' }}
          src="https://avatars.githubusercontent.com/u/103555086?v=4" // Copy from Github
          alt="image"
        />

        <div className="flex-1 py-4 text-center">
          <div className="font-bold text-xl mb-2 text-center">
            Clark Pegg {"(clarktpegg@outlook.com)"}
          </div>
          <div className="font-medium text-xl mb-2 text-center">
            Cyber Security Analyst
          </div>
          <div className="text-xl mb-2 text-center">
            University of Guelph Computer Science {"'"}23 <br />
            Lighthouse Labs Cyber Security {"'"}24
          </div>
          See my projects on my GitHub
        </div>

        <div className="flex py-4 place-content-center">
          <a href="https://github.com/clark-pegg" >
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 28 28">
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" />
            </svg>
          </a>

          <a href="https://linkedin.com/in/clark-pegg">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 28 28">
              <g>
                <path d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Home
