import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="">
        <h1>Flow Control</h1>
        <div className="nav">Penggunaan <strong>@if @else dan @else if</strong></div>
        <Image src="next.svg" className="circle-profile" width={100} height={100} alt="Gmbar"/>
        <Image src="vercel.svg" className="square-profile" width={100} height={100} alt="Gmbar"/>


        <div className="right"></div>

        <h3>Penggunaan <strong>@for</strong></h3>
        <ul className="gradient-lighten">
            <li>Item-1</li>
            <li>Item-2</li>
            <li>Item-3</li>
            <li>Item-4</li>
            <li>Item-5</li>
            <li>Item-6</li>
            <li>Item-7</li>
            <li>Item-8</li>
            <li>Item-9</li>
            <li>Item-10</li>
        </ul>
        <ul className="gradient-darken">
            <li>Item-1</li>
            <li>Item-2</li>
            <li>Item-3</li>
            <li>Item-4</li>
            <li>Item-5</li>
            <li>Item-6</li>
            <li>Item-7</li>
            <li>Item-8</li>
            <li>Item-9</li>
            <li>Item-10</li>
        </ul>

        <h3>Penggunaan <strong>@while</strong></h3>
        <ul className="while">
            <li>Item-1</li>
            <li>Item-2</li>
            <li>Item-3</li>
            <li>Item-4</li>
            <li>Item-5</li>
            <li>Item-6</li>
            <li>Item-7</li>
            <li>Item-8</li>
            <li>Item-9</li>
            <li>Item-10</li>
        </ul>
        
        <h3>Penggunaan <strong>@each</strong></h3>
        <ul className="socials">
            <li><a className="linkdin" href="https://www.linkedin.com/in/feri-irawansyah/">Linkdin</a></li>
            <li><a className="facebook" href="https://www.facebook.com/fery.irawansyah.58/">Facebook</a></li>
            <li><a className="github" href="https://github.com/Snakesystem">Github</a></li>
            <li><a className="instagram" href="https://www.instagram.com/fery_ir.1/">Instagram</a></li>
            <li><a className="twitch" href="https://x.com/snakewkwk">Twiter</a></li>
        </ul>
    </div>
  )
}
