import React from 'react'

export default function page() {
  return (
    <div className="container">
        <div className="heading-content">
            <h1>Module Function</h1>
            <p>Module adalah cara agar kita bisa memisah file scss. Kita bisa menggunakan <strong>@import & @use</strong> untuk melakukannya</p>
            <p>Nama file child nya diawali dengan (_) contoh <strong>_mixin-function</strong></p>
            <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
                <li><a href="">Link 4</a></li>
                <li><a href="">Link 5</a></li>
            </ul>
        </div>
        <div className="list-content">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <div className="row-content">
                <div className="box">Box 1</div>
                <div className="box">Box 2</div>
                <div className="box">Box 3</div>
            </div>
        </div>
        <div className="footer-content">
            <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
                <li><a href="">Link 4</a></li>
                <li><a href="">Link 5</a></li>
            </ul>
        </div>
    </div>
  )
}
